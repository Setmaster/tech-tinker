'use client';

import { IconEye, IconMessageCircle } from '@tabler/icons-react';
import { Card, Text, Group, Center, rem, useMantineTheme } from '@mantine/core';
import classes from './ContraptionCard.module.css';
import Image from "next/image";
import Link from "next/link";

type ContraptionCardProps = {
    title: string;
    slug: string;
    image: string;
    creator: string;
    views: number;
    comments: number;
};

export default function ContraptionCard({title, slug, image, creator, views, comments}:ContraptionCardProps) {
    const theme = useMantineTheme();

    return (
        <Card
            p="lg"
            shadow="lg"
            className={classes.card}
            radius="md"
            component={Link}
            href={`/contraptions/${slug}`}
            target="_self"
        >
            <div>
                <Image
                    src={image}
                    alt=""
                    layout="fill"
                    className={classes.image}
                    style={{objectFit:"cover"}} // This ensures the image covers the area of the div
                    fill
                />
            </div>
            <div className={classes.overlay} />

            <div className={classes.content}>
                <div>
                    <Text size="lg" className={classes.title} fw={500}>
                        {title}
                    </Text>

                    <Group justify="space-between" gap="xs">
                        <Text size="sm" className={classes.author}>
                            {creator}
                        </Text>

                        <Group gap="lg">
                            <Center>
                                <IconEye
                                    style={{ width: rem(16), height: rem(16) }}
                                    stroke={1.5}
                                    color={theme.colors.dark[2]}
                                />
                                <Text size="sm" className={classes.bodyText}>
                                    {views}
                                </Text>
                            </Center>
                            <Center>
                                <IconMessageCircle
                                    style={{ width: rem(16), height: rem(16) }}
                                    stroke={1.5}
                                    color={theme.colors.dark[2]}
                                />
                                <Text size="sm" className={classes.bodyText}>
                                    {comments}
                                </Text>
                            </Center>
                        </Group>
                    </Group>
                </div>
            </div>
        </Card>
    );
}