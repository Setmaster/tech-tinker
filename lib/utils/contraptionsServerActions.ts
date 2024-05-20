'use server'

import {ContraptionProps} from "@/lib/types/contraptionTypes";
import {deleteContraption, deleteExtraContraptions, saveContraption} from "@/lib/utils/contraptionsDBActions";
import {redirect} from "next/navigation";

export async function shareContraption(formData: FormData) {

    const contraption={
        creator:  formData.get('name'),
        // email: formData.get('email'), unused for now
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image')
    }
    
    await saveContraption(<ContraptionProps>contraption);
    redirect('/contraptions');
}