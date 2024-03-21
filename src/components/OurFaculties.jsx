import React from 'react'
import InfiniteMovingCards from './InfiniteMovingCards'

function OurFaculties() {
    return (
        <section className='w-full py-20 px-5'>
            <div className='w-full flex flex-col gap-3 items-center'>
                <h1 className='text-2xl text-center md:text-4xl font-medium text-black'>Faculty Excellence</h1>
                <h3 className='text-sm text-center md:text-base text-yellow-400/80'>Meet Our Distinguished Educators and Researchers</h3>
            </div>
            <div className='w-full mt-10 lg:mt-20'>
                <InfiniteMovingCards />
            </div>
        </section>
    )
}

export default OurFaculties