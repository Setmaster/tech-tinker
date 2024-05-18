import Link from 'next/link';
import classes from './page.module.css';
import ContraptionGrid from "@/components/contraptions/ContraptionGrid";
import contraption1 from '@/assets/contraption1.png';
import contraption2 from '@/assets/contraption2.png';
import contraption3 from '@/assets/contraption3.png';
import robot1 from '@/assets/robot1.png';
import robot2 from '@/assets/robot2.png';
import robot3 from '@/assets/robot3.png';
import robot4 from '@/assets/robot4.png';

const mockdata = [
    {
        id: 1,
        title: 'Spinning pancake maker',
        image: contraption1.src,
        creator: 'John Doe',
        slug: 'spinning-pancake-maker',
        views: 150,
        commentsAmount: 12
    },
    {
        id: 2,
        title: 'Robot with full limbs',
        image: robot1.src,
        creator: 'Jane Doe',
        slug: 'robot-with-full-limbs',
        views: 245,
        commentsAmount: 19
    },
    {
        id: 3,
        title: 'Egg desheller',
        image: contraption2.src,
        creator: 'Jim Beam',
        slug: 'egg-desheller',
        views: 175,
        commentsAmount: 8
    },
    {
        id: 4,
        title: 'Potato holder and slicer',
        image: contraption3.src,
        creator: 'Jill Valentine',
        slug: 'potato-holder-and-slicer',
        views: 220,
        commentsAmount: 15
    },
    {
        id: 5,
        title: 'Wheeled robot',
        image: robot2.src,
        creator: 'Jake Snake',
        slug: 'wheeled-robot',
        views: 198,
        commentsAmount: 22
    },
    {
        id: 6,
        title: 'Jumptron: The jumping robot',
        image: robot3.src,
        creator: 'Jenny Block',
        slug: 'jumptron-the-jumping-robot',
        views: 300,
        commentsAmount: 30
    },
    {
        id: 7,
        title: 'Combat robot',
        image: robot4.src,
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
