'use client';

import {Button, Container, Group, Title, Text} from "@mantine/core";
import classes from './error.module.css';
import Link from "next/link";

export default function Error() {
    return (
        <main className="error">
            <div className={classes.root}>
                <Container>
                    <div className={classes.label}>ERROR</div>
                    <Title className={classes.title}>Something bad just happened...</Title>
                    <Text size="lg" ta="center" className={classes.description}>
                        We couldn't get the contraptions you were looking for. Please try again later.
                    </Text>
                    <Group justify="center">
                        <div className={classes.button}>
                            <Link href="/">Take me home</Link>
                        </div>
                    </Group>
                </Container>
            </div>
        </main>
    );
}