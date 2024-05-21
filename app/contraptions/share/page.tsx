

import classes from './page.module.css';
import ShareContraptionForm from "@/components/forms/ShareContraptionForm"; // Ensure this path is correct

export const metadata = {
    title: 'Tech Tinker - Share Contraption',
    description: 'Share your contraptions with the world!',
};

export default function ShareContraptionPage() {
    
    return (
        <main className={classes.main}>
            <ShareContraptionForm />
           
        </main>
    );
}
