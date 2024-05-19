'use client';

import { TextInput, Textarea, SimpleGrid, Group, Title, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './page.module.css';
import ImageDropzone from "@/components/images/ImageDropzone";

export default function ShareContraptionPage(){
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            title: '',
            summary: '',
            instructions: '',
        },
        validate: {
            name: (value) => value.trim().length < 2,
            email: (value) => !/^\S+@\S+$/.test(value),
            title: (value) => value.trim().length === 0,
            summary: (value) => value.trim().length === 0,
            instructions: (value) => value.trim().length === 0,
        },
    });

    return (
        <main className={classes.main}>
            <form onSubmit={form.onSubmit(() => {})}>
                <Title
                    order={2}
                    size="h1"
                    style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                    fw={900}
                    ta="center"
                >
                    Share your <span className={classes.highlight}>Contraption</span> with the world
                </Title>

                <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                    <TextInput
                        label="Name"
                        placeholder="Your name"
                        name="name"
                        variant="filled"
                        {...form.getInputProps('name')}
                    />
                    <TextInput
                        label="Email"
                        placeholder="Your email"
                        name="email"
                        variant="filled"
                        {...form.getInputProps('email')}
                    />
                </SimpleGrid>

                <TextInput
                    label="Title"
                    placeholder="Title"
                    mt="md"
                    name="title"
                    variant="filled"
                    {...form.getInputProps('title')}
                />
                <TextInput
                    label="Short Summary"
                    placeholder="Summary"
                    mt="md"
                    name="summary"
                    variant="filled"
                    {...form.getInputProps('summary')}
                />
                <Textarea
                    mt="md"
                    label="Instructions"
                    placeholder="Instructions"
                    maxRows={10}
                    minRows={5}
                    autosize
                    name="instructions"
                    variant="filled"
                    {...form.getInputProps('instructions')}
                />

                <Group className={classes.actions} justify="center" mt="xl">
                    <ImageDropzone/>
                    <Button className={classes.submit} type="submit" size="md">
                        Share Contraption
                    </Button>
                </Group>
            </form>
        </main>
    );
}
