'use client';

import {Group, SimpleGrid, Textarea, TextInput, Title} from '@mantine/core';
import {useForm} from '@mantine/form';
import {shareContraption} from "@/lib/utils/contraptionsServerActions";
import classes from "@/app/contraptions/share/page.module.css";
import ImageDropzone from "@/components/images/ImageDropzone";
import {ContraptionFormProps} from "@/lib/types/contraptionTypes";
import ShareContraptionFormSubmitButton from "@/components/forms/ShareContraptionFormSubmitButton";
import {useState} from "react";

export default function ShareContraptionForm() {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            title: '',
            summary: '',
            instructions: '',
            image: null, // Initialized for a single image file
        },
        validate: {
            name: (value) => (value.trim().length < 2 ? 'Name must be at least 2 characters' : null),
            email: (value) => (!/^\S+@\S+$/.test(value) ? 'Invalid email format' : null),
            title: (value) => (value.trim().length === 0 ? 'Title is required' : null),
            summary: (value) => (value.trim().length === 0 ? 'Summary is required' : null),
            instructions: (value) => (value.trim().length === 0 ? 'Instructions are required' : null),
        },
    });

    const [submitting, setSubmitting] = useState(false);
    
    const submitHandler = async (values: ContraptionFormProps) => {
        // Create a FormData object
        const formData = new FormData();

        // Append all your form fields to the FormData object
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('title', values.title);
        formData.append('summary', values.summary);
        formData.append('instructions', values.instructions);

        if (!values.image) return;

        formData.append('image', values.image);
        
        setSubmitting(true);
        
        await shareContraption(formData);
    };

    return (
        <form onSubmit={form.onSubmit(submitHandler)}>
            <Title
                order={2}
                size="h1"
                style={{fontFamily: 'Greycliff CF, var(--mantine-font-family)'}}
                fw={900}
                ta="center"
            >
                Share your <span className={classes.highlight}>Contraption</span> with the world
            </Title>

            <SimpleGrid cols={{base: 1, sm: 2}} mt="xl">
                <TextInput
                    label="Name"
                    placeholder="Your name"
                    {...form.getInputProps('name')}
                    variant="filled"
                />
                <TextInput
                    label="Email"
                    placeholder="Your email"
                    {...form.getInputProps('email')}
                    variant="filled"
                />
            </SimpleGrid>

            <TextInput
                label="Title"
                placeholder="Title of your contraption"
                {...form.getInputProps('title')}
                variant="filled"
                mt="md"
            />
            <TextInput
                label="Short Summary"
                placeholder="A brief description"
                {...form.getInputProps('summary')}
                variant="filled"
                mt="md"
            />
            <Textarea
                label="Instructions"
                placeholder="Detailed instructions"
                {...form.getInputProps('instructions')}
                autosize
                minRows={3}
                variant="filled"
                mt="md"
            />

            <Group className={classes.actions} justify="center" mt="xl">
                <ImageDropzone form={form}/>
                <ShareContraptionFormSubmitButton pending={submitting}/>
            </Group>
        </form>
    );
}