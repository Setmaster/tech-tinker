import classes from './page.module.css';
import Link from "next/link";
import ImagesSlideshow from "@/components/images/ImagesSlideshow";

export default function Home() {

    return (
        <>

        <header className={classes.header}>
            <div className={classes.slideshow}>
                <ImagesSlideshow />
            </div>
<div className={classes.headerTextContent}>
    <div className={classes.hero}>
        <h1>Innovate and Elevate with Every Creation</h1>
        <p>Discover, build, and share cutting-edge contraptions with inventors worldwide.</p>
    </div>
    <div className={classes.cta}>
        <Link href={'/community'}>Join the Community</Link>
        <Link href={'/contraptions'}>Explore Contraptions</Link>
    </div>
</div>
             </header>
            <main>
                <section className={classes.section}>
                    <h2>How It Works</h2>
                    <p>
                        The <span className={classes.techTinker}>Tech Tinker</span> platform is a haven for innovators looking to showcase their latest contraptions to the world. It's where creativity meets functionality, providing a space to discover groundbreaking inventions and to connect with fellow inventors.
                    </p>
                    <p>
                        It's more than just a showcase; it's a community where you can draw inspiration, refine your inventions, and collaborate with others who share your passion for innovation.
                    </p>
                </section>

                <section className={classes.section}>
                    <h2>Why Join Us?</h2>
                    <p>
                        Our community is dedicated to pushing the boundaries of what's possible, turning imaginative ideas into tangible realities. Here, every contraption tells a story of innovation, perseverance, and the relentless pursuit of improvement.
                    </p>
                    <p>
                        By joining us, you’re not just sharing your inventions; you’re becoming a part of a movement that celebrates the spirit of invention, offers constructive feedback, and fosters collaborative opportunities to make every creation better than the last.
                    </p>
                </section>
            </main>
        </>
    );
}
 