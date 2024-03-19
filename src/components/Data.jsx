import React from 'react';
import { SECTION_BG_IMG, CHAPTERS_ICON, QUESTIONS, NOTES, CONCEPT_MAPS } from '../constants';
import DynamicCouter from './DynamicCouter';

function Data() {
    return (
        <section className='w-full h-auto' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full flex justify-center' style={{ backgroundColor: 'rgba(0, 64, 82, 0.35)' }}>
                <div className='container max-w-6xl py-10 grid gap-10 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='flex flex-col items-center gap-3'>
                        <div className='w-20 h-20 flex justify-center items-center rounded-md bg-violet-300/50'>
                            <img src={CHAPTERS_ICON} alt="capter icon" className='w-10 h-10' />
                        </div>
                        <div className='flex flex-col items-center gap-1'>
                            <h1 className='text-xl text-gray-700 font-medium'>Chapters</h1>
                            <span className='text-4xl font-semibold'>
                                <DynamicCouter initialValue={100} targetValue={521} />
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <div className='w-20 h-20 flex justify-center items-center rounded-md bg-violet-300/50'>
                            <img src={QUESTIONS} alt="capter icon" className='w-10 h-10' />
                        </div>
                        <div className='flex flex-col items-center gap-1'>
                            <h1 className='text-xl text-gray-700 font-medium'>Questions</h1>
                            <span className='text-4xl font-semibold'>
                                <DynamicCouter initialValue={10000} targetValue={49647} />
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <div className='w-20 h-20 flex justify-center items-center rounded-md bg-violet-300/50'>
                            <img src={NOTES} alt="capter icon" className='w-10 h-10' />
                        </div>
                        <div className='flex flex-col items-center gap-1'>
                            <h1 className='text-xl text-gray-700 font-medium'>Notes</h1>
                            <span className='text-4xl font-semibold'>
                                <DynamicCouter initialValue={1000} targetValue={4963} />
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <div className='w-20 h-20 flex justify-center items-center rounded-md bg-violet-300/50'>
                            <img src={CONCEPT_MAPS} alt="capter icon" className='w-10 h-10' />
                        </div>
                        <div className='flex flex-col items-center gap-1'>
                            <h1 className='text-xl text-gray-700 font-medium'>Concept Map</h1>
                            <span className='text-4xl font-semibold'>
                                <DynamicCouter initialValue={100} targetValue={827} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Data;