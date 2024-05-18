import Image from 'next/image';

import inventionIcon from '@/assets/icons/invention.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

export default function CommunityPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    One shared passion: <span className={classes.highlight}>Innovation</span>
                </h1>
                <p>Join our community and share your groundbreaking contraptions!</p>
            </header>
            <main className={classes.main}>
                <h2>Community Perks</h2>

                <ul className={classes.perks}>
                    <li>
                        <Image className={classes.community} src={communityIcon} alt="A symbol of community" />
                        <p>Share & discover innovative contraptions</p>
                    </li>
                    <li>
                        <Image src={inventionIcon} alt="A symbol of innovation" />
                        <p>Connect with fellow inventors</p>
                    </li>
                    <li>
                        <Image src={eventsIcon} alt="A symbol of networking" />
                        <p>Participate in exclusive inventor meetups and workshops</p>
                    </li>
                </ul>
            </main>
        </>
    );
}
