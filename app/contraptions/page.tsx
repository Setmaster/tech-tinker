import Link from 'next/link';
import classes from './page.module.css';
import ContraptionGrid from "@/components/contraptions/ContraptionGrid";
import {getAllContraptions} from "@/lib/utils/contraptionsDBActions";
import {Suspense} from "react";

async function Contraptions(){
    const contraptions = await getAllContraptions();
    return <ContraptionGrid contraptions={contraptions} />
}

export default async function ContraptionsPage(){
    
    return(
        <>
        <header className={classes.header}>
            <h1>
                Amazing inventions, created <span className={classes.highlight}>by you</span>
            </h1>
            <p>Choose your favorite contraption and start building it today!</p>
            <div className={classes.cta}>
                <Link href="/contraptions/share">Share your own contraption</Link>
            </div>
        </header>
        <main className={classes.main}>
            <Suspense fallback={
                <p className={classes.loading}>Loading contraptions...</p>
            }>
                <Contraptions />
            </Suspense>
        </main>
            </>
    );
}
