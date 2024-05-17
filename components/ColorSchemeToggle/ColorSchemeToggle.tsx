'use client';

import cx from 'clsx';
import {ActionIcon, useMantineColorScheme, useComputedColorScheme, Group} from '@mantine/core';
import {IconSun, IconMoon} from '@tabler/icons-react';
import classes from './ColorSchemeToggle.module.css';
import {useEffect, useState} from "react";

export default function ColorSchemeToggle() {
    const {setColorScheme} = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', {getInitialValueInEffect: true});
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);
    
    const getIcon = () => {
        if (computedColorScheme === 'light') {
            return <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5}/>;
        }
        return <IconSun className={cx(classes.icon, classes.light)} stroke={1.5}/>;
    };
    
    return (
        <Group justify="center">
            <ActionIcon
                onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
                variant="default"
                size="xl"
                aria-label="Toggle color scheme"
            >
                {isClient && getIcon()}
            </ActionIcon>
        </Group>
    );
}