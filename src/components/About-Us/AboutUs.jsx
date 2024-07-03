import React from 'react'
import Meeting from "../../images/meeting.png"
import { GiMeshBall } from "react-icons/gi";
import { GoArrowUpRight } from "react-icons/go";
const AboutUs = () => {
  return (
    <>
        <div className='mt-8 container poppins-regular sm:mt-10 md:mt-12 lg:mt-[10rem] lg:flex lg:flex-row-reverse lg:gap-10 lg:items-center'>
            <div className='w-full lg:w-1/2'>
                <h2 className='poppins-bold text-secondary uppercase flex  justify-center sm:justify-start sm:text-xl xl:text-2xl'>about us</h2>
                <h1 className='poppins-extrabold text-lg text-secondary mt-4 flex justify-start sm:text-2xl md:text-4xl md:w-[80%] lg:text-lg lg:w-full lg:mt-2 xl:text-3xl xl:w-[70%]'>We start with discovery call to understand</h1>
                <p className='poppins-light mt-2 tracking-wider text-justify sm:text-lg sm:mt-5 lg:mt-2 xl:mt-4'>We present you a proposal and discuss nitty-gritty like workflows, communication protocols apart from. engagement models,pricing,billing and invoicing.</p>
                <p className='mt-3 poppins-light tracking-wider text-justify sm:text-lg sm:mt-5 lg:mt-2 xl:mt-4'>Backed by an experience of nearly two decades in digital marketing.</p>
                <button type='button' className='mt-3 bg-primary px-6 py-2.5 text-white rounded-md poppins-medium hover:bg-secondary transition-all duration-300 sm:mt-5 lg:mt-2 hover:scale-105 xl:mt-4 lg:px-9'>Learn More</button>
            </div>
            <div className='mt-10 relative lg:w-1/2'>
                <img src={Meeting} alt="meeting" className='w-[90%] rounded-lg' loading='lazy' />
                <div className='absolute -bottom-10 right-1 bg-white px-8 py-5 rounded-md shadow-xl sm:px-10 sm:py-7 md:px-12 md:py-9
                lg:px-14 lg:py-11
                xl:px-16 xl:py-12'>
                    <GiMeshBall className='text-primary mx-auto'/>
                    <h1 className='flex items-center justify-center'>23.8K</h1>
                    <h2 className='mx-auto flex items-center justify-center'>Reach</h2>
                    <p className='flex items-center justify-center'><GoArrowUpRight />11.5%</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUs