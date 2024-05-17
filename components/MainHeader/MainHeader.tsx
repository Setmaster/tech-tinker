'use client';
import {Burger, Center, Container, Group, Menu} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {IconChevronDown} from '@tabler/icons-react';
import techTinkerLogo from '@/assets/logo.png';
import classes from './MainHeader.module.css';
import Link from "next/link";
import {useRouter} from "next/navigation";
import Image from "next/image";
import ColorSchemeToggle from "@/components/ColorSchemeToggle/ColorSchemeToggle";

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

    const router = useRouter();
    const navigateHome = () => router.push('/');
    
    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}><Link href={item.link} className={classes.link}>{item.label}</Link></Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu key={link.label} trigger="hover" transitionProps={{exitDuration: 0}} withinPortal>
                    <Menu.Target>
                        <Link
                            href={link.link}
                            className={classes.link}
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
                className={classes.link}
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
                    </Group>
                    <ColorSchemeToggle />
                    <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm"/>
                </div>
            </Container>

        </header>
    );
}