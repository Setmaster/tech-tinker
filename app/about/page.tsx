'use client';

import { Container, Text, Button, Group } from '@mantine/core';
import classes from './page.module.css';
import Link from "next/link";
import { GithubIcon } from '@mantinex/dev-icons';

export default function AboutPage(){
    return (
        <div className={classes.wrapper}>
            <Container size={700} className={classes.inner}>
                <h1 className={classes.title}>
                    Welcome to where{' '}
                    <Text component="span" variant="gradient" gradient={{ from: 'rgba(4, 0, 255, 1)', to: 'rgba(117, 241, 255, 1)' }} inherit>
                        possibilities
                    </Text>{' '}
                    begin
                </h1>

                <Text className={classes.description} color="dimmed">
                    Dive into a world of invention with our platform, where users share and discover guides on assembling unique contraptions. Connect, create, and learn in a community fueled by imagination</Text>

                <Group className={classes.controls}>
                    <Link className={classes.a} href={'/community'}>Join the Community</Link>

                    <a className={classes.a} href={'https://github.com/Setmaster/tech-tinker'}><GithubIcon size={20} />Visit our GitHub</a>

                </Group>
            </Container>
        </div>
    );
}