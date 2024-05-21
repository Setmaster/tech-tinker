import { sql } from '@vercel/postgres';
import {ContraptionProps, ContraptionPropsArray} from "@/lib/types/contraptionTypes";
import slugify from "slugify";
import xss from "xss";
import {S3} from '@aws-sdk/client-s3';

const s3 = new S3({
    region: 'us-east-1'
});

export async function getAllContraptions(): Promise<ContraptionProps[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate slow network, if needed
    const contraptions = await sql`SELECT * FROM contraptions`;
    return contraptions.rows as unknown as ContraptionProps[];
}

export async function getContraptions(amount: number): Promise<ContraptionProps[]> {
    const contraptions = await sql`SELECT * FROM contraptions LIMIT ${amount}`;
    return contraptions.rows as unknown as ContraptionProps[];
}

export async function getContraption(slug: string): Promise<ContraptionProps> {
    const contraption = await sql`SELECT * FROM contraptions WHERE slug = ${slug}`;
    const contraptionData = contraption.rows[0]; 
    // console.log("Sending details for contraption: ", contraptionData);
    return contraptionData as unknown as ContraptionProps;
}

export async function saveContraption(contraption: ContraptionProps) {
    if (!contraption.image || typeof contraption.image === "string") return;

    let slug = slugify(contraption.title, { lower: true });
    let uniqueSlug = slug;
    let counter = 1;

    // Check if the slug already exists in the database and find a unique slug
    while (await slugExists(uniqueSlug)) {
        uniqueSlug = `${slug}-${counter}`;
        counter++;
    }

    contraption.slug = uniqueSlug;
    contraption.instructions = xss(contraption.instructions);

    const extension = contraption.image.name.split('.').pop();
    const fileName = `${contraption.slug}.${extension}`;

    const bufferedImage = await contraption.image.arrayBuffer();

    await s3.putObject({
        Bucket: 'tinker-tech-user-images',
        Key: fileName,
        Body: Buffer.from(bufferedImage),
        ContentType: contraption.image.type,
    });

    contraption.image = fileName;

    await sql`
        INSERT INTO contraptions (title, image, summary, instructions, creator, slug, commentsAmount, views)
        VALUES (${contraption.title}, ${fileName}, ${contraption.summary}, ${contraption.instructions}, 
                ${contraption.creator}, ${uniqueSlug}, ${contraption.commentsAmount}, ${contraption.views})
    `;
}

async function slugExists(slug: string): Promise<boolean> {
    const result = await sql`SELECT COUNT(*) FROM contraptions WHERE slug = ${slug}` as unknown as number;
    return result > 0;
}

async function deleteContraption(slug: string) {
    const result = await sql`SELECT * FROM contraptions WHERE slug = ${slug}` as unknown as ContraptionProps[];
    const contraption = result[0];

    if (contraption && typeof contraption.image === "string") {
        await s3.deleteObject({
            Bucket: 'tinker-tech-user-images',
            Key: contraption.image,
        })
    }

    await sql`DELETE FROM contraptions WHERE slug = ${slug}`;
}

export async function deleteNonDummyContraptions() {
    const contraptionsToDelete = await sql`
        SELECT slug FROM contraptions ORDER BY id ASC OFFSET 7
    ` as unknown as { slug: string }[];

    for (const { slug } of contraptionsToDelete) {
        try {
            await deleteContraption(slug);
        } catch (error) {
            console.error(`Failed to delete contraption for slug: ${slug}`, error);
        }
    }
}