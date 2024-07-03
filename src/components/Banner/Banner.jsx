import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaBell } from "react-icons/fa6";
const Banner = () => {
  return (
    <>
      <div className='mt-[5rem] container w-[95%] bg-blue-100 lg:mt-[10rem] mb-5 rounded-xl'>
        <div className='flex flex-wrap justify-center py-5'>
          <h1 className='text-center poppins-bold text-md mt-4 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Sign up for new Bensik content,updates,survey & offers.</h1>
          <div className='relative mt-10 xl:mt-14'>
            <CgMail className='absolute text-2xl translate-y-1/2 left-3.5'/>
            <input type="text" name="email" id="email" placeholder='Enter your email here' className='px-14 py-2.5 rounded-md active:ring-primary sm:px-16 md:pr-24 md:pl-11 lg:pl-16 lg:pr-36 xl:pl-20 xl:pr-40' />
            <FaBell className='absolute right-3 top-4  text-primary md:hidden' />
            <a href="#" className='hidden md:block absolute right-0.5 py-2 bg-blue-500 rounded-md px-5 poppins-bold top-[4.5%] text-white'>Subcribe</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner