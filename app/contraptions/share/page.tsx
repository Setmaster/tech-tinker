'use client';

import { useForm } from '@mantine/form';
import { SimpleGrid, TextInput, Textarea, Group, Title, Button } from '@mantine/core';
import classes from './page.module.css';
import ImageDropzone from "@/components/images/ImageDropzone";
import {shareContraption} from "@/lib/utils/contraptionsServerActions";
import ShareContraptionForm from "@/components/forms/ShareContraptionForm"; // Ensure this path is correct

export default function ShareContraptionPage() {
    
    return (
        <main className={classes.main}>
            <ShareContraptionForm />
           
        </main>
    );
}
