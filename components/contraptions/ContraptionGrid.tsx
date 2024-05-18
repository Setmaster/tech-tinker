import { SimpleGrid, Card, Text, Container, AspectRatio } from '@mantine/core';
import Image from 'next/image';
import classes from './ContraptionGrid.module.css';

import ContraptionCard from "@/components/contraptions/ContraptionCard";



type ContraptionProps = {
    id : number;
    title: string;
    image: string;
    creator: string;
    slug: string;
    views: number;
    commentsAmount: number;
};

type ContraptionGridProps = {
    contraptions: ContraptionProps[];
};
export default function ContraptionGrid({contraptions}: ContraptionGridProps) {
    const cards = contraptions.map((data, index) => (
            <ContraptionCard
                key={data.id}
                title={data.title}
                image={data.image}
                creator={data.creator}
                slug={data.slug}
                views={data.views}
                comments={data.commentsAmount}
            />
    ));

    return (
            <SimpleGrid cols={{ base: 1, sm: 2, md:3, xl:4 }}>
                {cards}
            </SimpleGrid>
    );
    }