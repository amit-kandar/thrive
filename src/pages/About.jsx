import React from 'react';
import { BG_IMG_3 } from '../constants';

import ABOUT_SVG from '../assets/undraw_educator_re_ju47.svg';


function About() {
    return (
        <section className='min-h-screen flex p-5 md:p-10'>
            <div className="w-full h-full">
                <img src={BG_IMG_3} alt="About background" className='w-full h-screen bg-cover bg-center object-cover bg-no-repeat' />
                <div className="inset-0 bg-gray-800 opacity-70"></div>
            </div>
            <div className='max-w-5xl h-full z-10 flex flex-col justify-center items-start px-3 sm:px-5 mt-32 md:mt-36'>
                <img src={ABOUT_SVG} alt="About" className='w-96 rounded-3xl' />
                <div></div>
            </div>
        </section>
    )
}

export default About