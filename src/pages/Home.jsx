import React from 'react';
import Carousel from 'nuka-carousel';
import { BG_IMG_1, BG_IMG_2, BG_IMG_3, BG_IMG_4, BG_IMG_5 } from '../constants';

function Home() {
    const bgImages = [
        BG_IMG_1,
        BG_IMG_2,
        BG_IMG_3,
        BG_IMG_4,
        BG_IMG_5
    ];

    return (
        <Carousel
            autoplay
            autoplayInterval={5000}
            withoutControls
            dragging={false}
            swiping={false}
            heightMode="first"
            slideIndex={0}
            wrapAround={true}
            defaultControlsConfig={{
                prevButtonClassName: 'hidden',
                nextButtonClassName: 'hidden'
            }}
            animation='fade'
        >
            {bgImages.map((image, index) => (
                <div key={index} className="relative">
                    {/* Image */}
                    <img
                        src={image}
                        alt={`Background ${index}`}
                        className="w-full h-screen object-cover"
                        style={{ zIndex: 1 }} // Ensure image is on top
                    />
                    {/* Overlay color */}
                    <div
                        className="absolute inset-0 bg-black opacity-50"
                        style={{ zIndex: 2 }} // Ensure overlay color is on top of image
                    />
                </div>
            ))}
        </Carousel>
    );
}

export default Home;
