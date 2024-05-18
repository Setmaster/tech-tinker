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
import ContraptionCard from "@/components/contraptions/ContraptionCard";

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
    const cards = mockdata.map((article, index) => (
            <ContraptionCard
                key={index}
                title={article.title}
                image={article.image.src}
                creator="John Doe"
                slug={"slug"}
                views={Math.floor(Math.random() * 100)}
                comments={Math.floor(Math.random() * 20)}
            />
    ));

    return (
            <SimpleGrid cols={{ base: 1, sm: 2, md:3, xl:4 }}>
                {cards}
                
            </SimpleGrid>
    );
    }