import React from 'react';
import { FAQ_SUB_TITLE, FAQ_TITLE, SECTION_BG_IMG } from '../constants';
import { FAQDetails } from '../utils/FAQDetails'
import FAQCard from './FAQCard';

function FAQ() {
    return (
        <section className='w-full' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full flex justify-center bg-amber-600/30'>
                <div className='w-full h-full py-10 px-10 lg:px-32'>
                    <div className='flex flex-col items-start'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl text-black font-medium mb-2'>{FAQ_TITLE}</h1>
                        <h3 className='text-sm sm:text-base md:text-lg font-medium text-yellow-600'>{FAQ_SUB_TITLE}</h3>
                    </div>
                    <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center gap-12 mt-5'>
                        {
                            FAQDetails.map((item, index) => (
                                <FAQCard question={item.question} answer={item.answer} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ