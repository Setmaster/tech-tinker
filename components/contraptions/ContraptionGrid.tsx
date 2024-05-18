import {SimpleGrid} from '@mantine/core';

import ContraptionCard from "@/components/contraptions/ContraptionCard";
import { ContraptionPropsArray} from "@/lib/types/contraptionTypes";

export default function ContraptionGrid({contraptions}: ContraptionPropsArray) {
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