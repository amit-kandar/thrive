import React from 'react';
import { SECTION_BG_IMG, FEATURE_SUB_HEADING, FEATURE_TITLE, FEATURE_DETAILS } from '../constants';
import FeatureCard from '../components/FeatureCard';

function Features() {
    return (
        <section className='w-full' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full px-5 py-24' style={{ backgroundColor: 'rgba(145, 197, 255, 0.3)' }}>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-600">{FEATURE_TITLE}</h1>
                    <span className="text-base text-center md:text-lg text-gray-500">{FEATURE_SUB_HEADING}</span>
                </div>
                <div className='w-full flex justify-center mt-14'>
                    <div className='w-full max-w-7xl grid place-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            FEATURE_DETAILS.map((item, index) => <FeatureCard title={item.title} description={item.description} key={index} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
