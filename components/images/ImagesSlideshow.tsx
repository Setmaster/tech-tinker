'use client';

import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import contraption1 from '@/assets/contraption1.png';
import contraption2 from '@/assets/contraption2.png';
import contraption3 from '@/assets/contraption3.png';
import robot1 from '@/assets/robot1.png';
import robot2 from '@/assets/robot2.png';
import robot3 from '@/assets/robot3.png';
import robot4 from '@/assets/robot4.png';
import Image from "next/image";

const images = [
    { image: contraption1, alt: 'A makeshift pancake maker' },
    { image: robot1, alt: 'A robot with connected wires' },
    { image: contraption2, alt: 'An egg desheller' },
    { image: contraption3, alt: 'A potato holder' },
    { image: robot2, alt: 'A robot with four wheels' },
    { image: robot3, alt: 'An orange robot with big feet' },
    { image: robot4, alt: 'A robot with spooky teeth' },
];

export default function ImagesSlideshow() {
    const autoplay = useRef(Autoplay({ delay: 4000 }));

    const slides = images.map((img, index) => (
        <Carousel.Slide key={index}>
            <Image width={556} height={556} src={img.image} alt={img.alt}/>
        </Carousel.Slide>
    ));
    
    return (
        <Carousel
            height={"100%"}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
            slideGap={{ base: 0, sm: 'md' }}
            align={"center"}
            loop
            withControls={false}
        >
            {slides}
        </Carousel>
    );

}