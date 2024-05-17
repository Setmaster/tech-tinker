import Link from "next/link";
import Header from "@/components/header";

export default function Home() {

    return (
        <main>
            <Header/>
            <p><Link href={"/contraptions"}>Contraptions</Link></p>
            <p><Link href={"/contraptions/share"}>Share Contraption</Link></p>
            <p><Link href={"/community"}>Community</Link></p>
            <p><Link href={"/about"}>About</Link></p>
        </main>
    );
}
