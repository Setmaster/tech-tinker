import { SimpleGrid, Card, Text, Container, AspectRatio } from '@mantine/core';
import Image from 'next/image';
import classes from './ContraptionGrid.module.css';
import contraption1 from '@/assets/contraption1.png';
import contraption2 from '@/assets/contraption2.png';
import contraption3 from '@/assets/contraption3.png';
import robot1 from '@/assets/robot1.png';
import robot2 from '@/assets/robot2.png';
import robot3 from '@/assets/robot3.png';
import robot4 from '@/assets/robot4.png';

const mockdata = [
    {
        title: 'Spinning pancake maker',
        image: contraption1
    },
    {
        title: 'Robot with full limbs',
        image: robot1
    },
    {
        title: 'Egg desheller',
        image: contraption2
    },
    {
        title: 'Potato holder and slicer',
        image: contraption3
    },
    {
        title: 'Wheeled robot',
        image: robot2
    },
    {
        title: 'Jumptron: The jumping robot',
        image: robot3
    },
    {
        title: 'Combat robot',
        image: robot4
    },
];

export default function ContraptionGrid() {
    const cards = mockdata.map((article) => (
        <Card withBorder={true} key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
            <AspectRatio ratio={800 / 800}>
                <Image width={400} height={400} src={article.image.src} alt={article.title}/>
            </AspectRatio>
            <Text className={classes.title} mt={5}>
                {article.title}
            </Text>
        </Card>
    ));

    return (
            <SimpleGrid cols={{ base: 1, sm: 2, md:3, xl:4 }}>{cards}</SimpleGrid>
    );
    }