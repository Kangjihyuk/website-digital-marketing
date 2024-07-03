import React from 'react'
import Logo from "../../PICTURE/logo.png"
import { RiFacebookFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const FooterLinks = [
    {
        id: 1,
        head: "Solutions",
        p1: "SEO Services",
        p2: "Social Media",
        p3: "Pay-per-click",
        p4: "Web analytics",
        p5: "Web Development",
        link : "/#",
    },
    {
        id: 2,
        head: "Industries",
        p1: "Virtual Marketing",
        p2: "Email Marketing",
        p3: "Keyword Analytics",
        p4: "Career",
        p5: "Blog Mana",
        link : "/#",
    },
    {
        id: 3,
        head: "Company",
        p1: "Consumer",
        p2: "Leadership",
        p3: "Content Management",
        p4: "Login",
        link : "/#",
    },
]
const Footer = () => {
  return (
    <>
        <div className='mt-10  xl:flex bg-slate-700 w-full p-6 lg:mt-[10rem]'>
            <div className=''>
                    <img src={Logo} alt="logo" loading='lazy' className='w-[10rem]'/>
                    <h1 className='poppins-medium sm:text-lg xl:w-[80%]'>We start with a discovery call to understand your company. The problems you are facing</h1>
                    <h2 className='poppins-bold tracking-wide clear-start mt-7 text-lg sm:text-xl'>Follow us</h2>
                  <div className='flex gap-2 mt-7'>
                      <p className='p-2 bg-slate-600 rounded-full text-white text-lg cursor-pointer hover:bg-primary transition-all duration-300'><RiFacebookFill /></p>
                      <p className='p-2 bg-slate-600 rounded-full text-white text-lg cursor-pointer hover:bg-primary transition-all duration-300'><RiInstagramLine /></p>
                      <p className='p-2 bg-slate-600 rounded-full text-white text-lg cursor-pointer hover:bg-primary transition-all duration-300'><FaTwitter /></p>
                      <p className='p-2 bg-slate-600 rounded-full text-white text-lg cursor-pointer hover:bg-primary transition-all duration-300'><FaLinkedinIn /></p>
                  </div>
              </div>
              <div className='mt-5 grid grid-cols-2 md:grid-cols-3 xl:gap-5'>
                  {FooterLinks.map(link => (
                      <ul key={link.id} className=''>
                          <li className='flex flex-col mt-5 poppins-medium text-slate-500'>
                              <a href={link.link} className='mt-2 poppins-bold tracking-wide text-black hover:text-primary transition-all duration-300 text-lg'>{link.head}</a>
                              <a href={link.link} className='mt-3 tracking-wide hover:text-primary transition-all duration-300 text-lg'>{link.p1}</a>
                              <a href={link.link} className='mt-2 tracking-wide hover:text-primary transition-all duration-300 text-lg'>{link.p2}</a>
                              <a href={link.link} className='mt-2 tracking-wide hover:text-primary transition-all duration-300 text-lg'>{link.p3}</a>
                              <a href={link.link} className='mt-2 tracking-wide hover:text-primary transition-all duration-300 text-lg'>{link.p4}</a>
                              <a href={link.link} className='mt-2 tracking-wide hover:text-primary transition-all duration-300 text-lg'>{link.p5}</a>
                          </li>
                      </ul>
                  ))}
              </div>
        </div>
        <div className='text-center md:text-start md:flex md:justify-between bg-primary py-3 px-5 '>
            <h1 className='poppins-medium text-white'>All right reserved by &copy; Besnik creative 2021</h1>
            <h2 className='hidden md:block poppins-medium text-white'>Privacy & Policy  |  Terms & Conditional</h2>
        </div>
    </>
  )
}

export default Footer