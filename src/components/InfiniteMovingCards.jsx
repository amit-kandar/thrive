import React from 'react'
import FacultyCard from './FacultyCard';
import { facultyDetails } from '../utils/facultyDetails';

function InfiniteMovingCards() {
    return (
        <div className='w-full h-full flex justify-center'>
            <div className='w-full overflow-hidden flex group'>
                <div className='flex animate-slide group-hover:animate-paused'>
                    {facultyDetails.map((item, index) => (
                        <FacultyCard key={index} data={item} />
                    ))}
                </div>
                <div className='flex animate-slide group-hover:animate-paused'>
                    {facultyDetails.map((item, index) => (
                        <FacultyCard key={index} data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InfiniteMovingCards