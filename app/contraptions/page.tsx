import Link from 'next/link';
import classes from './page.module.css';
import ContraptionGrid from "@/components/contraptions/ContraptionGrid";

const mockdata = [
    {
        id: 1,
        title: 'Spinning pancake maker',
        image: "https://tinker-tech-user-images.s3.amazonaws.com/contraption1.png",
        creator: 'John Doe',
        slug: 'spinning-pancake-maker',
        views: 150,
        commentsAmount: 12
    },
    {
        id: 2,
        title: 'Robot with full limbs',
        image: "https://tinker-tech-user-images.s3.amazonaws.com/robot1.png",
        creator: 'Jane Doe',
        slug: 'robot-with-full-limbs',
        views: 245,
        commentsAmount: 19
    },
    {
        id: 3,
        title: 'Egg desheller',
        image: "https://tinker-tech-user-images.s3.amazonaws.com/contraption2.png",
        creator: 'Jim Beam',
        slug: 'egg-desheller',
        views: 175,
        commentsAmount: 8
    },
    {
        id: 4,
        title: 'Potato holder and slicer',
        image: "https://tinker-tech-user-images.s3.amazonaws.com/contraption3.png",
        creator: 'Jill Valentine',
        slug: 'potato-holder-and-slicer',
        views: 220,
        commentsAmount: 15
    },
    {
        id: 5,
        title: 'Wheeled robot',
        image: "https://tinker-tech-user-images.s3.amazonaws.com/robot2.png",
        creator: 'Jake Snake',
        slug: 'wheeled-robot',
        views: 198,
        commentsAmount: 22
    },
    {
        id: 6,
        title: 'Jumptron: The jumping robot',
        image: "https://tinker-tech-user-images.s3.amazonaws.com/robot3.png",
        creator: 'Jenny Block',
        slug: 'jumptron-the-jumping-robot',
        views: 300,
        commentsAmount: 30
    },
    {
        id: 7,
        title: 'Combat robot',
        image: "https://tinker-tech-user-images.s3.amazonaws.com/robot4.png",
        creator: 'Jon Snow',
        slug: 'combat-robot',
        views: 410,
        commentsAmount: 45
    },
];



export default function ContraptionsPage(){
    return(
        <>
        <header className={classes.header}>
            <h1>
                Amazing inventions, created <span className={classes.highlight}>by you</span>
            </h1>
            <p>Choose your favorite contraption and start building it today!</p>
            <div className={classes.cta}>
                <Link href="/contraptions/share">Share your own contraption</Link>
            </div>
        </header>
        <main className={classes.main}>
            <ContraptionGrid contraptions={mockdata} />
        </main>
            </>
    );
}
