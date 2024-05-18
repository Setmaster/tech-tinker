'use client';

import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import Image from "next/image";
import classes from "./ImagesSlideshow.module.css"

const images = [
    { image: "https://tinker-tech-user-images.s3.amazonaws.com/contraption1.png", alt: 'A makeshift pancake maker' },
    { image: "https://tinker-tech-user-images.s3.amazonaws.com/robot1.png", alt: 'A robot with connected wires' },
    { image: "https://tinker-tech-user-images.s3.amazonaws.com/contraption2.png", alt: 'An egg desheller' },
    { image: "https://tinker-tech-user-images.s3.amazonaws.com/contraption3.png", alt: 'A potato holder' },
    { image: "https://tinker-tech-user-images.s3.amazonaws.com/robot2.png", alt: 'A robot with four wheels' },
    { image: "https://tinker-tech-user-images.s3.amazonaws.com/robot3.png", alt: 'An orange robot with big feet' },
    { image: "https://tinker-tech-user-images.s3.amazonaws.com/robot4.png", alt: 'A robot with spooky teeth' },
];

export default function ImagesSlideshow() {
    const autoplay = useRef(Autoplay({ delay: 4000 }));

    const slides = images.map((img, index) => (
        <Carousel.Slide key={index}>
            <Image className={classes.slideImage} width={556} height={556} src={img.image} alt={img.alt}/>
        </Carousel.Slide>
    ));
    
    return (
        <Carousel
            height={"100%"}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            // slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
            slideGap={{ base: 0, sm: 'md' }}
            align={"center"}
            loop
            withControls={false}
        >
            {slides}
        </Carousel>
    );

}