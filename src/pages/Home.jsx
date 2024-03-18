import React from 'react';
import Carousel from 'nuka-carousel';
import { BG_IMG_1, BG_IMG_2, BG_IMG_3, BG_IMG_4, BG_IMG_5, HERO_TYPING_TITLE } from '../constants';
import About from './About';
import Typewriter from 'typewriter-effect';



function Home() {
    const bgImages = [
        BG_IMG_1,
        BG_IMG_2,
        BG_IMG_3,
        BG_IMG_4,
        BG_IMG_5
    ];

    return (
        <main>
            <section className='relative min-h-screen flex p-5 md:p-10'>
                <div className="absolute inset-0 w-full h-full">
                    <Carousel autoplay autoplayInterval={3000} slidesToScroll={1} wrapAround={true} withoutControls animation='fade'>
                        {
                            bgImages.map((item, index) => {
                                return (
                                    <img src={item} key={index} alt="hero background" className='w-full h-screen bg-cover bg-center object-cover bg-no-repeat' />
                                )
                            })
                        }
                    </Carousel>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className='max-w-7xl h-full z-10 flex flex-col justify-center items-center px-3 sm:px-5 mt-32 md:mt-36'>
                    <div className='text-3xl md:text-5xl xl:text-6xl text-white font-bold mt-10'>
                        <Typewriter
                            options={{
                                strings: HERO_TYPING_TITLE,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
            </section>
            <About />
        </main>
    );
}

export default Home;
