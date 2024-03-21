import React, { useState } from 'react'

function FAQCard({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='w-full max-w-md h-auto border-b border-black pb-3'>
            <div className='w-full flex justify-between gap-5'>
                <h2 className='text-lg sm:text-xl font-medium'>{question}</h2>
                <div onClick={() => { setIsOpen(!isOpen) }}>
                    {
                        isOpen
                            ? <i className='bx bx-chevron-up text-3xl' ></i>
                            : <i className='bx bx-chevron-down text-3xl' ></i>
                    }
                </div>
            </div>
            <div className={`w-full mt-3 ${isOpen ? 'block' : 'hidden'}`}>
                <p className='text-sm md:text-base text-yellow-600'>{answer}</p>
            </div>
        </div>
    )
}

export default FAQCard