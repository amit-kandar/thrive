import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, LOGO_IMG_2, NAV_LINKS, OUR_COMPANY_TEXT, OUR_COURSES_TEXT, SECTION_BG_IMG } from '../constants';
import { COURSES_DETAILS } from '../utils/courseDetails';

function Footer() {
    return (
        <footer className="hidden lg:block w-full h-80" style={{ backgroundImage: `url(${SECTION_BG_IMG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='w-full h-full flex justify-around px-5 py-10 md:px-10 xl:px-20 bg-yellow-600/30'>
                <div className='w-fit max-w-60 flex flex-col gap-3 items-start'>
                    <div className='flex gap-2 items-center'>
                        <img src={LOGO_IMG_2} alt={COMPANY_NAME} className='w-10 h-10 rounded-full' />
                        <h1 className='text-3xl font-semibold uppercase'>{COMPANY_NAME}</h1>
                    </div>
                    <p className='text-sm'>
                        Stay in the loop with our latest updates! Subscribe to our newsletter for exclusive content and offers.
                    </p>
                    <p className='text-base font-medium'>
                        123 Main Street, Cityville, Country XYZ.
                    </p>
                    <div className='flex items-center gap-3'>
                        <Link to="https://www.instagram.com/" className='w-10 h-10 flex justify-center items-center rounded-full bg-yellow-400'>
                            <i className='bx bxl-instagram text-xl' ></i>
                        </Link>
                        <Link to="https://www.linkedin.com/feed/" className='w-10 h-10 flex justify-center items-center rounded-full bg-yellow-400'>
                            <i className='bx bxl-linkedin-square text-xl' ></i>
                        </Link>
                        <Link to="https://www.facebook.com/" className='w-10 h-10 flex justify-center items-center rounded-full bg-yellow-400'>
                            <i className='bx bxl-facebook-square text-xl' ></i>
                        </Link>
                    </div>
                </div>
                <div className='w-fit max-w-60 flex flex-col items-start'>
                    <h1 className='text-2xl font-semibold'>{OUR_COMPANY_TEXT}</h1>
                    {
                        NAV_LINKS.map((item, index) => (
                            <Link to={item.path} key={index} className='flex items-center hover:scale-125 transition duration-200'>
                                <i className='bx bx-chevron-right text-2xl' ></i>
                                <h3 className='text-sm'>{item.text}</h3>
                            </Link>
                        ))
                    }
                </div>
                <div className='w-fit max-w-60 flex flex-col items-start'>
                    <h1 className='text-2xl font-semibold'>{OUR_COURSES_TEXT}</h1>
                    {
                        COURSES_DETAILS.slice(0, 4).map((item, index) => (
                            <Link to={item.redirect_path} key={index} className='flex items-center hover:scale-125 transition duration-200'>
                                <i className='bx bx-chevron-right text-2xl' ></i>
                                <h3 className='text-sm'>{item.course_name}</h3>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className='w-full h-10 flex justify-between items-center px-10 border bg-yellow-300'>
                <div>
                    <h3>Designed & Developed By <Link to="https://metawebtx.com/" className='text-indigo-600'>@Metawebtx.</Link> All Rights Reserved.</h3>
                </div>
                <div>
                    <Link to="/ ">Terms & Condition</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer