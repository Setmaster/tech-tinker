'use server'

import {ContraptionProps} from "@/lib/types/contraptionTypes";
import {deleteContraption, deleteExtraContraptions, saveContraption} from "@/lib/utils/contraptionsDBActions";
import {redirect} from "next/navigation";
import { z } from 'zod';

// Define a Zod schema for the contraption data
const contraptionSchema = z.object({
    creator: z.string().trim().min(1, { message: "Creator is required" }),
    title: z.string().trim().min(1, { message: "Title is required" }),
    summary: z.string().trim().min(1, { message: "Summary is required" }),
    instructions: z.string().trim().min(1, { message: "Instructions is required" }),
});

export async function shareContraption(formData: FormData) {
    // Convert FormData to a plain object, except for the image
    const contraptionData = {
        creator: formData.get('name')?.toString().trim() || '',
        title: formData.get('title')?.toString().trim() || '',
        summary: formData.get('summary')?.toString().trim() || '',
        instructions: formData.get('instructions')?.toString().trim() || ''
    };

    // Validate the data against the schema
    const result = contraptionSchema.safeParse(contraptionData);

    if (!result.success) {
        throw result.error;
    }

    // Check if an image file has been provided separately
    const imageFile = formData.get('image');
    if (!imageFile || typeof imageFile === 'string') {
        throw new Error("Image file is required");
    }

    // If validation passes, and an image file is present, proceed with saving the data
    const validContraption = result.data;
    const processedContraptionData: ContraptionProps = <ContraptionProps>{
        ...validContraption,
        image: imageFile // Add the image file back into the data to be saved
    };
    await saveContraption(processedContraptionData);
    redirect('/contraptions');
}