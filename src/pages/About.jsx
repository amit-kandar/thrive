import React from 'react';
import { ABOUT_SUB_HEADING, ABOUT_TITLE, SECTION_BG_IMG, ABOUT_IMG, aboutUsPoints } from '../constants';

function About() {
    return (
        <section className='w-full' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full flex justify-center' style={{ backgroundColor: 'rgba(247, 252, 197, 0.3)' }}>
                <div className='w-full h-full flex flex-col md:flex-row justify-between items-center pt-10 md:pt-0 px-5 sm:px-8 lg:px-16'>
                    <div className="max-w-5xl lg:w-full h-full flex flex-col justify-start items-start py-10 xl:py-0">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-600">{ABOUT_TITLE}</h1>
                        <span className="text-lg text-start text-gray-500 mt-2">{ABOUT_SUB_HEADING}</span>
                        <div className='mt-5'>
                            {
                                aboutUsPoints.map((item, index) => {
                                    return (
                                        <div className='flex items-center gap-3' key={index}>
                                            <i className='bx bx-check-square text-2xl'></i>
                                            <span className='text-gray-500 text-base'>{item}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='mt-10 px-6 py-3 md:px-8 md:py-4 bg-yellow-500 rounded-lg cursor-pointer hover:bg-yellow-400'>
                            <button type='button' className='text-base md:text-lg md:font-medium'>Get Started</button>
                        </div>
                    </div>
                    <div className='w-full min-[]:h-full md:max-w-[500px] lg:min-w-[600px] xl:min-w-[800px] flex items-end'>
                        <img src={ABOUT_IMG} alt="About" className='w-full h-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About