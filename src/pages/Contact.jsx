import React from 'react';
import { COMPANY_EMAIL, COMPANY_PHONE_NUMBER, CONTACT_US_FORM_TITLE, CONTACT_US_SUBTITLE, CONTACT_US_TITLE, SECTION_BG_IMG } from '../constants'
import { Link } from 'react-router-dom';

function Contact() {
    const handleSubmit = e => {
        e.preventDefault();
        console.log();
    }
    return (
        <section className='w-full' style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full flex justify-center bg-gradient-to-br from-yellow-500/50 to-stone-900/40 py-24 px-5 lg:px-10'>
                <div className='container h-full flex flex-col items-center justify-around md:flex-row gap-10'>
                    <div className='w-full h-full md:pt-28 max-w-xs'>
                        <div className='w-full flex flex-col items-start justify-center'>
                            <h1 className='text-3xl text-start md:text-4xl lg:text-4xl font-semibold'>{CONTACT_US_TITLE}</h1>
                            <h3 className='text-sm md:text-base mt-2'>{CONTACT_US_SUBTITLE}</h3>
                            <div className='flex flex-col gap-3 mt-10'>
                                <div className='flex items-center gap-3 cursor-pointer hover:scale-110 duration-300' onClick={() => { window.location = `mailto:${COMPANY_EMAIL}` }}>
                                    <i className='bx bx-envelope text-xl text-yellow-400' ></i>
                                    <span className='text-sm'>{COMPANY_EMAIL}</span>
                                </div>
                                <Link to={`tel:${COMPANY_PHONE_NUMBER}`} className='flex items-center gap-3 hover:scale-110 duration-300'>
                                    <i className='bx bx-phone text-xl text-yellow-400' ></i>
                                    <span className='text-sm'>{COMPANY_PHONE_NUMBER}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:min-w-[550px] xl:max-w-[700px] h-full px-5 md:px-10 py-5 max-w-md bg-gradient-to-br from-yellow-400 to-stone-800 rounded-md'>
                        <h1 className='text-2xl font-medium'>{CONTACT_US_FORM_TITLE}</h1>
                        <form className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 md:mt-10'>
                            <div className='w-full flex flex-col'>
                                <label htmlFor="first_name" className='text-base'>First Name</label>
                                <input type="text" name="first_name" id="first_name" placeholder='John' className='py-2 rounded-md outline-none pl-3' />
                            </div>
                            <div className='w-full flex flex-col'>
                                <label htmlFor="last_name" className='text-base'>Last Name</label>
                                <input type="text" name="last_name" id="last_name" placeholder='Doe' className='py-2 rounded-md outline-none pl-3' />
                            </div>
                            <div className='w-full flex flex-col'>
                                <label htmlFor="email" className='text-base'>Email</label>
                                <input type="email" name="email" id="email" placeholder='info@example.com' className='py-2 rounded-md pl-3 outline-none' />
                            </div>
                            <div className='w-full flex flex-col'>
                                <label htmlFor="phone_number" className='text-base'>Phone Number</label>
                                <input type="tel" name="phone_number" id="phone_number" placeholder='(+21) 123 456  586' className='py-2 rounded-md outline-none pl-3' />
                            </div>
                            <div className='w-full flex flex-col lg:col-span-2'>
                                <label htmlFor="subject">Subject</label>
                                <input type="text" name="subject" id="subject" placeholder='e.g., Inquiry about English courses' className='py-2 rounded-md pl-3 outline-none' />
                            </div>
                            <div className='w-full flex flex-col lg:col-span-2'>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" placeholder='message' cols="20" rows="10" className='resize-none rounded-md p-3 outline-none'></textarea>
                            </div>
                            <div className='w-full flex justify-start'>
                                <button type='submit' className='py-2 px-6 bg-yellow-600 rounded-md font-medium'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Contact