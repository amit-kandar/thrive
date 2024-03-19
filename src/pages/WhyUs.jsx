import React from 'react';
import { SECTION_BG_IMG, WHY_US_SUB_TITLE, WHY_US_TITLE, WHY_CHOOSE_US_POINT1, WHY_CHOOSE_US_POINT2, WHY_CHOOSE_US_POINT3 } from '../constants';

function WhyUs() {
    return (
        <section className='w-full min-h-screen flex justify-center px-5 py-10' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='container w-full flex flex-col items-center mt-10 md:mt-28'>
                <div className='w-full flex flex-col items-center gap-3'>
                    <h1 className='text-3xl font-semibold md:text-5xl md:font-bold'>{WHY_US_TITLE}</h1>
                    <span className='text-center text-base text-gray-600'>{WHY_US_SUB_TITLE}</span>
                </div>
                <div className='w-full xl:max-w-6xl grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    <div className='w-full max-w-80 h-40 py-1 flex flex-col items-center border-2 border-gray-500 rounded-md'>
                        <span>
                            <i className='bx bx-user-check text-5xl'></i>
                        </span>
                        <div className='w-full flex flex-col items-center gap-1'>
                            <h2 className='text-xl font-medium'>{WHY_CHOOSE_US_POINT1.title}</h2>
                            <p className='text-center text-base text-gray-600'>{WHY_CHOOSE_US_POINT1.description}</p>
                        </div>
                    </div>
                    <div className='w-full max-w-80 h-40 py-1 flex flex-col items-center border-2 border-gray-500 rounded-md'>
                        <span>
                            <i className="uil uil-shield-check text-5xl"></i>
                        </span>
                        <div className='w-full flex flex-col items-center gap-1'>
                            <h2 className='text-xl font-medium'>{WHY_CHOOSE_US_POINT2.title}</h2>
                            <p className='text-center text-base text-gray-600'>{WHY_CHOOSE_US_POINT2.description}</p>
                        </div>
                    </div>
                    <div className='w-full max-w-80 h-40 py-1 flex flex-col items-center border-2 border-gray-500 rounded-md'>
                        <span>
                            <i className='bx bx-calendar text-5xl' ></i>
                        </span>
                        <div className='w-full flex flex-col items-center gap-1'>
                            <h2 className='text-xl font-medium'>{WHY_CHOOSE_US_POINT3.title}</h2>
                            <p className='text-center text-base text-gray-600'>{WHY_CHOOSE_US_POINT3.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs