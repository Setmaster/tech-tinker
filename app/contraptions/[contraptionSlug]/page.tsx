import classes from './page.module.css';
import Image from "next/image";
import {getContraption} from "@/lib/utils/contraptionsDBActions";
import {IMAGE_BASE_URL} from "@/lib/constants";
import {notFound} from "next/navigation";

type ContraptionDetailsPageProps = {
    params: {
        contraptionSlug: string;
    };
};

export default function ContraptionDetailsPage({params}: ContraptionDetailsPageProps) {
    const contraption = getContraption(params.contraptionSlug);
    
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
