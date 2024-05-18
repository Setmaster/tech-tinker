'use client';

import {Carousel} from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import {useRef} from 'react';
import Image from "next/image";
import classes from "./ImagesSlideshow.module.css"
import {IMAGE_BASE_URL} from "@/lib/constants";
import {ContraptionPropsArray} from "@/lib/types/contraptionTypes";

export default function ImagesSlideshow({contraptions} : ContraptionPropsArray) {
    const autoplay = useRef(Autoplay({ delay: 4000 }));

    const slides = contraptions.map((contraption, index) => (
        <Carousel.Slide key={index}>
            <Image className={classes.slideImage} width={556} height={556} src={`${IMAGE_BASE_URL}${contraption.image}`} alt={contraption.description}/>
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