import React from 'react';
import { SECTION_BG_IMG, SUBSCRIBE_BUTTON_TEXT, SUBSCRIBE_PLACEHOLDER, SUBSCRIBE_SUBTITLE, SUBSCRIBE_TITLE } from '../constants';

function Subscribe() {
    return (
        <section className='w-full h-60' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full flex justify-center flex-col px-5 md:px-10 xl:px-20 py-10 lg:py-16 bg-yellow-400/60'>
                <div className='w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-5'>
                    <div className='flex flex-col items-start gap-3'>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-black/80'>
                            {SUBSCRIBE_TITLE}
                        </h1>
                        <h3 className='text-sm md:text-base text-black/70'>
                            {SUBSCRIBE_SUBTITLE}
                        </h3>
                    </div>
                    <form className='border border-black rounded-md'>
                        <input type="email" name="email" id="email" className='pl-3 w-44 sm:w-52 md:w-60 lg:w-72 sm:pl-5 py-3 outline-none rounded-md' placeholder={SUBSCRIBE_PLACEHOLDER} />
                        <button type='submit' className='px-2 md:px-6 py-3 bg-yellow-400 rounded-md'>{SUBSCRIBE_BUTTON_TEXT}</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Subscribe