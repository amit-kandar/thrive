import React from 'react'
import { COURSE_TITLE, COURSE_SUB_HEADING } from '../constants'
import { COURSES_DETAILS } from '../utils/courseDetails'
import CourseCard from '../components/CourseCard'

function Courses() {
    return (
        <section className='w-full bg-gray-200 px-5 py-20'>
            <div className='flex flex-col items-start px-3'>
                <h1 className='text-3xl lg:text-5xl font-medium text-gray-700'>{COURSE_TITLE}</h1>
                <span className='text-base text-gray-500 lg:text-lg'>{COURSE_SUB_HEADING}</span>
                <div className='w-full lg:flex justify-center mt-10'>
                    <div className='grid place-items-center gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {
                            COURSES_DETAILS.map((item, index) => {
                                return (
                                    <CourseCard class_details={item.class_details} course_name={item.course_name} redirect_path={item.redirect_path} course_image={item.COURSE_IMG} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses