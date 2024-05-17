import './globals.css'
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import MainHeader from "@/components/main-header";

export const metadata = {
    title: 'Tech Tinker',
    description: 'Welcome to Tech Tinker!',
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({
                                       children,
                                   }: RootLayoutProps) {
    return (
        <html lang="en">
        <head>
            <ColorSchemeScript />
        </head>
        <body>
        <MantineProvider>
            <MainHeader/>
            {children}
        </MantineProvider>
        </body>
        </html>
    );
}
