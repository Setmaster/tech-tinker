'use client';
import {Burger, Center, Container, Group, Menu} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {IconChevronDown} from '@tabler/icons-react';
import techTinkerLogo from '@/assets/logo.png';
import classes from './MainHeader.module.css';
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import Image from "next/image";
import ColorSchemeToggle from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import classNames from "classnames";

const links = [
    {link: '/contraptions', label: 'Contraptions'},
    {link: '/contraptions/share', label: 'Share'},
    {link: '/community', label: 'Community'},
    {
        link: '/about',
        label: 'About',
        links: [
            {link: '/faq', label: 'FAQ'},
            {link: '/contact', label: 'Contact'},
        ],
    },
];

export default function MainHeader() {
    const [opened, {toggle}] = useDisclosure(false);

    const path = usePathname();
    
    const router = useRouter();
    const navigateHome = () => router.push('/');

    const isActiveLink = (currentPath:string, link:string) => {
        // Normalize paths by removing trailing slashes for consistent comparison
        const normalizePath = (path:string) => path.endsWith('/') ? path.slice(0, -1) : path;
        currentPath = normalizePath(currentPath);
        link = normalizePath(link);
        
        // Check for exact match
        return currentPath === link;
    };
    
    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}><Link href={item.link} className={classNames(classes.link, { [classes.subActive]: isActiveLink(path, item.link) })}>{item.label}</Link></Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{exitDuration: 0}} withinPortal>
                    <Menu.Target>
                        <Link
                            href={link.link}
                            className={classNames(classes.link, { [classes.active]: isActiveLink(path, link.link) })}
                        >
                            <Center>
                                <span className={classes.linkLabel}>{link.label}</span>
                                <IconChevronDown size="0.9rem" stroke={1.5}/>
                            </Center>
                        </Link>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <Link
                key={link.label}
                href={link.link}
                className={classNames(classes.link, { [classes.active]: isActiveLink(path, link.link) })}
            >
                {link.label}
            </Link>
        );
    });

    return (
        <header className={classes.header}>
            <Container size="md">
                <div className={classes.inner}>
                    <Image width={56} height={56} style={{cursor: "pointer"}} src={techTinkerLogo.src} onClick={navigateHome} alt={"a white robot with blue eyes"}/>
                    <Group gap={5} visibleFrom="sm">
                        {items}
                        <ColorSchemeToggle />
                    </Group>

                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm"/>
                </div>
            </Container>

        </header>
    );
}