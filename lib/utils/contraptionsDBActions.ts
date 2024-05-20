import sql from 'better-sqlite3'
import {ContraptionProps, ContraptionPropsArray} from "@/lib/types/contraptionTypes";
import slugify from "slugify";
import xss from "xss";
import {S3} from '@aws-sdk/client-s3';

const s3 = new S3({
    region: 'us-east-1'
});

const db = sql('contraptions.db');

export async function getAllContraptions(): Promise<ContraptionProps[]> {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate slow network
    // throw new Error('Server error');
    return db.prepare('SELECT * FROM contraptions').all() as ContraptionProps[];
}

export function getContraptions(amount: number) {
    return db.prepare(`SELECT *
                       FROM contraptions LIMIT ${amount}`).all() as ContraptionProps[];
}

export function getContraption(slug: string) {
    return db.prepare('SELECT * FROM contraptions WHERE slug = ?').get(slug) as ContraptionProps;
}

export async function saveContraption(contraption: ContraptionProps) {
    if (typeof contraption.image === "string") return;

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

    //dummy values for views and comments
    contraption.views = Math.floor(Math.random() * 101); // Random number between 0 and 100
    contraption.commentsAmount = Math.floor(Math.random() * 101); // Random number between 0 and 100
    console.log("Contraption to save: ", contraption);

    db.prepare('INSERT INTO contraptions (title, image, summary, instructions, creator, slug, commentsAmount, views) VALUES (@title, @image, @summary, @instructions, @creator, @slug, @commentsAmount, @views)').run(contraption);
}

async function slugExists(slug: string): Promise<boolean> {
    const result = db.prepare('SELECT COUNT(*) AS count FROM contraptions WHERE slug = ?').get(slug) as { count: number };
    return result.count > 0;
}

export async function deleteContraption(slug: string) {
    console.log("Deleting contraption with slug: ", slug)
    const contraption = getContraption(slug);
    console.log("Contraption to delete: ", contraption)
    if (typeof contraption.image !== "string") return;
    s3.deleteObject({
        Bucket: 'tinker-tech-user-images',
        Key: contraption.image,
    });
    db.prepare('DELETE FROM contraptions WHERE slug = ?').run(slug);
}

// Function to delete all but the first 7 dummy data entries
export async function deleteExtraContraptions() {
    // Fetch all contraption slugs, but skip the first 7
    const contraptionsToDelete  = db.prepare('SELECT slug FROM contraptions ORDER BY id ASC LIMIT -1 OFFSET 7').all()  as ContraptionProps[];

    // Iterate over each contraption and use the deleteContraption function
    for (const { slug } of contraptionsToDelete) {
        try {
            deleteContraption(slug);
            console.log(`Deleted contraption and image for slug: ${slug}`);
        } catch (error) {
            console.error(`Failed to delete contraption for slug: ${slug}`, error);
        }
    }
}