import classes from './page.module.css';
import Image from "next/image";
import {getContraption} from "@/lib/utils/contraptionsDBActions";
import {IMAGE_BASE_URL} from "@/lib/constants";
import {notFound} from "next/navigation";
import {ContraptionProps} from "@/lib/types/contraptionTypes";

type ContraptionDetailsPageProps = {
    params: {
        contraptionSlug: string;
    };
};

export async function generateMetadata({params}: ContraptionDetailsPageProps) {
    const contraption = await getContraption(params.contraptionSlug) as unknown as ContraptionProps;
    
    if(!contraption) {
    notFound();
    }
    
    return {
        title: contraption.title,
        description: contraption.summary,
    };
}

export default async function ContraptionDetailsPage({params}: ContraptionDetailsPageProps) {
    const contraption = await getContraption(params.contraptionSlug);

    console.log("Received contraption detals: ", contraption);
    
    if(!contraption) {
    notFound();
    }
    
    contraption.instructions = contraption.instructions.replace(/\n/g, '<br /><br />');
    
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image 
                        src={`${IMAGE_BASE_URL}${contraption.image}`}
                        alt={contraption.summary}
                        style={{objectFit:"cover"}} // This ensures the image covers the area of the div
                        fill/>
                </div>
                <div className={classes.headerText}>
                    <h1>{contraption.title}</h1>
                    <p className={classes.creator}>
                        by {contraption.creator}
                    </p>
                    <p className={classes.summary}>
                        {contraption.summary}
                    </p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                    __html: contraption.instructions,
                }}>
                </p>
            </main>
        </>
    );
}
