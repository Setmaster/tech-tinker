'use server'

import {ContraptionFormSerializableProps} from "@/lib/types/contraptionTypes";

export async function shareContraption(serializableValues: ContraptionFormSerializableProps) {
    console.log(serializableValues);

    const contraption={
        creator: serializableValues['name'],
        // email: serializableValues['email'], unused for now
        title: serializableValues['title'],
        summary: serializableValues['summary'],
        instructions: serializableValues['instructions'],
    }

    console.log(contraption);
}