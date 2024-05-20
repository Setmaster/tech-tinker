'use client';

import classes from './page.module.css';
import ShareContraptionForm from "@/components/forms/ShareContraptionForm"; // Ensure this path is correct

export default function ShareContraptionPage() {
    
    return (
        <main className={classes.main}>
            <ShareContraptionForm />
           
        </main>
    );
}
