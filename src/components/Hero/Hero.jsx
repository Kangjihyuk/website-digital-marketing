import React from 'react'
import PostHero from '../../images/hero.png'
import { FaPlay } from "react-icons/fa6"; 
import HeroSection from "../../images/asia-businesswoman-social-distancing-new-normal-virus-prevention-looking-camera-presentation-colleague-about-plan-video-call-while-work-office-night_7861-3198-removebg-preview.png"
const Hero = () => {
  return (
    <>
      <div className="h-[100vh] container poppins-medium mt-4 md:mt-10 lg:flex lg:items-center lg:justify-center lg:gap-40 lg:mt-0 xl:translate-x-20">
        <div className="lg:w-1/2">
          <h1 className="text-4xl poppins-bold sm:text-4xl md:text-4xl lg:text-4xl lg:w-[31rem] text-secondary md:text-justify ">
            Professional marketing copy for anyone
          </h1>
          <div className="flex gap-7 text-justify mt-8 poppins-light md:flex md:flex-wrap lg:mt-10">
            <img
              src={PostHero}
              alt="icon"
              className="w-[6rem] md:w-[8rem] bg-yellow-400 rounded-full"
            />
            <p className="sm:text-xl lg:text-lg lg:mt-10">
              we blend insights and strategy to create digital products for
              forward-thinking organisations
            </p>
          </div>
          <div className="flex items-center gap-10 mt-10">
            <a
              href="#"
              className="bg-primary px-4 py-2 text-white rounded-md hover:scale-105 transition-all duration-300 hover:bg-teal-300 hover:text-black md:text-nowrap"
            >
              Learn More
            </a>
            <div className="border-8 border-purple-40 rounded-full border-t-transparent border-r-transparent rotate-[45deg] flex items-center justify-center border-red-600">
              <div className="bg-white border border-red-700 rotate-[314deg] p-4 rounded-full">
                <FaPlay className="animate-pulse" />
              </div>
            </div>
            <p>Hot & Works</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center sm:justify-start sm:mt-14 md:w-1/2">
          <img
            src={HeroSection} 
            alt="HeroSection"
            className="w-[17rem] object-cover h-[17rem] rounded-full bg-yellow-400 border-[1.5rem] lg:w-[21rem] lg:h-[21rem] border-orange-100"
          />
        </div>
      </div>
    </>
  );
}

export default Hero