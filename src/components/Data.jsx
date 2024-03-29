import React from 'react';
import { SECTION_BG_IMG, CHAPTERS_ICON, QUESTIONS, NOTES, CONCEPT_MAPS, DATA_CHAPTERS, DATA_QUESTIONS, DATA_NOTES, DATA_CONCEPT_MAP, TOTAL_CONCEPT_MAP, TOTAL_NOTES, TOTAL_CHAPTERS, TOTAL_QUESTIONS } from '../constants';
import DynamicCouter from './DynamicCouter';

function Data() {
    return (
        <section className='w-full h-auto' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full flex justify-center' style={{ backgroundColor: 'rgba(0, 64, 82, 0.35)' }}>
                <div className='container max-w-6xl py-16 grid gap-10 place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='flex flex-col items-center gap-3'>
                        <div className='w-20 h-20 flex justify-center items-center rounded-md bg-violet-300/50'>
                            <img src={CHAPTERS_ICON} alt="capter icon" className='w-10 h-10' />
                        </div>
                        <div className='flex flex-col items-center gap-1'>
                            <h1 className='text-xl text-gray-700 font-medium'>{DATA_CHAPTERS}</h1>
                            <span className='text-4xl font-semibold'>
                                <DynamicCouter initialValue={100} targetValue={TOTAL_CHAPTERS} />
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <div className='w-20 h-20 flex justify-center items-center rounded-md bg-violet-300/50'>
                            <img src={QUESTIONS} alt="capter icon" className='w-10 h-10' />
                        </div>
                        <div className='flex flex-col items-center gap-1'>
                            <h1 className='text-xl text-gray-700 font-medium'>{DATA_QUESTIONS}</h1>
                            <span className='text-4xl font-semibold'>
                                <DynamicCouter initialValue={10000} targetValue={TOTAL_QUESTIONS} />
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <div className='w-20 h-20 flex justify-center items-center rounded-md bg-violet-300/50'>
                            <img src={NOTES} alt="capter icon" className='w-10 h-10' />
                        </div>
                        <div className='flex flex-col items-center gap-1'>
                            <h1 className='text-xl text-gray-700 font-medium'>{DATA_NOTES}</h1>
                            <span className='text-4xl font-semibold'>
                                <DynamicCouter initialValue={1000} targetValue={TOTAL_NOTES} />
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <div className='w-20 h-20 flex justify-center items-center rounded-md bg-violet-300/50'>
                            <img src={CONCEPT_MAPS} alt="capter icon" className='w-10 h-10' />
                        </div>
                        <div className='flex flex-col items-center gap-1'>
                            <h1 className='text-xl text-gray-700 font-medium'>{DATA_CONCEPT_MAP}</h1>
                            <span className='text-4xl font-semibold'>
                                <DynamicCouter initialValue={100} targetValue={TOTAL_CONCEPT_MAP} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Data;