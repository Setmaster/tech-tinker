import './globals.css'

export const metadata = {
    title: 'Tech Tinker',
    description: 'Welcome to Tech Tinker!',
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
