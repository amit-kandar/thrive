import React from 'react';
import { BOOK_DEMO_BG, BOOK_DEMO_BUTTON_TEXT, BOOK_DEMO_DESCRIPTION, BOOK_DEMO_IMG, BOOK_DEMO_TITLE, SECTION_BG_IMG } from '../constants';

function App() {
    return (
        <section className="relative w-full h-[700px] md:h-96 flex justify-between" style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="absolute w-full h-1/2 bg-yellow-500"></div>
            <div className='w-full h-full flex justify-center' style={{ backgroundColor: 'rgba(247, 252, 197, 0.3)' }}></div>
            <div className="absolute w-full max-w-96 md:max-w-7xl md:w-11/12 h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-lg" style={{ backgroundImage: `url(${BOOK_DEMO_BG})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className='w-full h-full flex flex-col items-center md:flex-row md:gap-5 rounded-lg p-4' style={{ backgroundColor: "rgba(0, 121, 226, 0.8)" }}>
                    <div className='w-full max-w-96 h-56'>
                        <img src={BOOK_DEMO_IMG} alt="Book demo" className='w-full h-full rounded-md' />
                    </div>
                    <div className='h-full max-w-xl flex flex-col items-center md:items-start gap-3 mt-6 md:mt-0'>
                        <h1 className='text-3xl font-semibold text-white'>{BOOK_DEMO_TITLE}</h1>

                        <p className='text-base text-start text-gray-300'>{BOOK_DEMO_DESCRIPTION}</p>
                        <button type="button" className='w-36 h-12 rounded-xl px-5 bg-yellow-500'>{BOOK_DEMO_BUTTON_TEXT}</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;
