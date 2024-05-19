'use client';

import { Text, Group, Button, rem, useMantineTheme } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { IconCloudUpload, IconX, IconDownload } from '@tabler/icons-react';
import {useRef} from "react";
import classes from './ImageDropzone.module.css';

export default function ImageDropzone() {
    const theme = useMantineTheme();
    const imageRef = useRef<() => void>(null);

    return (
        <div className={classes.wrapper}>
            <Dropzone
                openRef={imageRef}
                onDrop={() => {
                    console.log('Image dropped');
                }}
                className={classes.dropzone}
                radius="md"
                accept={[MIME_TYPES.jpeg, MIME_TYPES.png ]}
                maxSize={1 * 1024 ** 2}
            >
                <div style={{ pointerEvents: 'none' }}>
                    <Group justify="center">
                        <Dropzone.Accept>
                            <IconDownload
                                style={{ width: rem(50), height: rem(50) }}
                                color={theme.colors.blue[6]}
                                stroke={1.5}
                            />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX
                                style={{ width: rem(50), height: rem(50) }}
                                color={theme.colors.red[6]}
                                stroke={1.5}
                            />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <IconCloudUpload style={{ width: rem(50), height: rem(50) }} stroke={1.5} />
                        </Dropzone.Idle>
                    </Group>

                    <Text ta="center" fw={700} fz="lg" mt="xl">
                        <Dropzone.Accept>Drop files here</Dropzone.Accept>
                        <Dropzone.Reject>Image file less than 1mb</Dropzone.Reject>
                        <Dropzone.Idle>Upload image</Dropzone.Idle>
                    </Text>
                    <Text ta="center" fz="sm" mt="xs" c="dimmed">
                        Drag&apos;n&apos;drop your contraption image here to upload.
                    </Text>
                </div>
            </Dropzone>

            <Button className={classes.control} size="md" radius="xl" onClick={() => imageRef.current?.()}>
                Select files
            </Button>
        </div>
    );
}