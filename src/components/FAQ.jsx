import React from 'react';
import { FAQ_SUB_TITLE, FAQ_TITLE, SECTION_BG_IMG } from '../constants';
import { FAQDetails } from '../utils/FAQDetails'
import FAQCard from './FAQCard';

function FAQ() {
    return (
        <section className='w-full' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full flex justify-center bg-amber-600/30'>
                <div className='w-full h-full py-10 px-5 lg:px-28'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl text-black font-medium mb-2'>{FAQ_TITLE}</h1>
                        <h3 className='text-sm sm:text-base text-center font-medium text-yellow-600'>{FAQ_SUB_TITLE}</h3>
                    </div>
                    <div className='w-full flex justify-center mt-12'>
                        <div className='w-fit h-full grid grid-cols-1 place-items-start gap-8'>
                            {
                                FAQDetails.map((item, index) => (
                                    <FAQCard question={item.question} answer={item.answer} key={index} index={index} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ