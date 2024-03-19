import React from 'react'

function FeatureCard({ title, description }) {
    return (
        <div className='w-full max-w-80 h-full min-h-96 p-5 flex flex-col justify-start items-center gap-3 rounded-3xl border border-gray-500 shadow-xl'>
            <div className='w-24 h-24 bg-lime-700 rounded-full grid place-items-center'>img</div>
            <div>
                <h1 className='text-3xl text-center font-semibold text-gray-500'>{title}</h1>
            </div>
            <div>
                <p className='text-base text-center text-gray-500'>{description}</p>
            </div>
        </div>
    )
}

export default FeatureCard