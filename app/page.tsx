import Link from "next/link";

export default function Home() {
    return (
        <main>
            <img id={"index-logo"} src="/logo.png" alt="a robot tinkering"/>
            <h1>Welcome to Tech Tinker!</h1>
            <p><Link href={"/about"}>About</Link></p>
        </main>
    );
}
