import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import { BG_IMG_1, BG_IMG_2, BG_IMG_3, BG_IMG_4, BG_IMG_5, BG_IMG_6, HERO_TYPING_TITLE, HERO_SUB_HEADING, NAVLINK_GET_STARTED } from '../constants';
import Typewriter from 'typewriter-effect';
import About from './About';
import Contact from './Contact';
import Courses from './Courses';
import Features from './Features';
import WhyUs from './WhyUs';
import Data from '../components/Data';
import BookDemo from '../components/BookDemo';
import OurFaculties from '../components/OurFaculties';
import FAQ from '../components/FAQ';
import SuccessStories from '../components/SuccessStories';
import Subscribe from '../components/Subscribe';



function Home() {
    const bgImages = [
        BG_IMG_1,
        BG_IMG_2,
        BG_IMG_3,
        BG_IMG_4,
        BG_IMG_5,
        BG_IMG_6
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
                <div className='max-w-5xl h-full z-10 flex flex-col justify-center items-start px-3 sm:px-5 mt-32 md:mt-36'>
                    <div className='text-3xl md:text-5xl xl:text-6xl text-white font-bold mt-10'>
                        <Typewriter
                            options={{
                                strings: HERO_TYPING_TITLE,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <div className='mt-5 max-w-2xl'>
                        <p className='text-sm text-gray-200/40'>
                            {HERO_SUB_HEADING}
                        </p>
                    </div>
                    <div className='mt-10 lg:mt-16'>
                        <button type='button' className='px-8 py-3 bg-yellow-500 rounded-xl text-xl font-medium'>
                            <Link to={NAVLINK_GET_STARTED.path}>{NAVLINK_GET_STARTED.text}</Link>
                        </button>
                    </div>
                </div>
            </section>
            <Courses />
            <Features />
            <WhyUs />
            <Data />
            <BookDemo />
            <About />
            <OurFaculties />
            <FAQ />
            <SuccessStories />
            <Subscribe />
            <Contact />
        </main>
    );
}

export default Home;
