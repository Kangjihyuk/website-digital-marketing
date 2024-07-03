import React, { useState } from "react";
import Person from "../../images/person1.png";
import { FaGoogle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const MenuClient = [
  {
    id: 1,
    rate: "96%",
    head: "Client retetion",
    blog: "By Dalibor and Marino in Hong Kong"
  },
  {
    id: 2,
    rate: "10+",
    head: "Year of service",
    blog: "By Dalibor and Marino in Hong Kong"
  },
  {
    id: 3,
    rate: "70+",
    head: "Professionals",
    blog: "By Dalibor and Marino in Hong Kong"
  },
  {
    id: 4,
    rate: "96%",
    head: "In funding",
    blog: "By Dalibor and Marino in Hong Kong"
  },
  
]
const OurSolutions = () => {
  const [learn, setLearn] = useState(false);

  const handleClick = () => {
    setLearn(!learn);
  };

  return (
    <>
      <div className="mt-[4.5rem] container lg:flex lg:items-center lg:justify-center gap-20 lg:mt-[10rem] ">
      <div className="poppins-semibold lg:w-1/2">
        <h1 className="flex justify-center text-secondary hover:tracking-wide duration-200 transition-all text-2xl lg:justify-start">Our Solutions</h1>
        <h2 className="mt-3 text-lg text-secondary md:text-3xl md:mt-5 lg:mt-3 xl:text-4xl">
          Launch and scale your marketing campaigns
        </h2>
        <p className="mt-3 poppins-regular text-justify md:mt-6 text-lg">
          We start with a kick-off call with respective project owners, onboard
          the teams on the project management platforms and, take off!
        </p>
        <button
          type="button"
          className={`mt-3 px-6 py-2.5 text-white rounded-md poppins-medium transition-all duration-300 sm:mt-5 lg:mt-5 hover:scale-105 xl:mt-4 lg:px-9 sm:px-8 md:mt-6  ${
            learn ? "bg-yellow-400" : "bg-primary hover:bg-secondary"
          }`}
          onClick={handleClick}
        >
          {learn ? "You've clicked" : "Learn More"}
        </button>
      </div>
      <div className="mt-[8rem] flex items-center justify-center mx-auto relative w-[70%] md:w-[60%] bg-primary h-[15rem] rounded-tr-2xl rounded-bl-2xl lg:w-[35%]">
        <img
          src={Person}
          alt="Person"
          loading="lazy"
          className="flex items-center justify-center absolute bottom-0 h-[150%] object-cover brightness-110"
        />
        <div className="absolute -top-16 -left-16 bg-white pr-14 pl-4 py-5 rounded-xl shadow-lg lg:pl-5">
          <p className="text-primary text-2xl">
            <FaGoogle />
          </p>
          <h1 className="mt-2 poppins-bold">Google</h1>
          <h1 className="-mt-1.5 poppins-bold">ads</h1>
          <p className="flex items-center gap-1 mt-1.5 poppins-medium"><FaStar className="text-yellow-400 " /> 4.9</p>
          <p className=" poppins-light text-transparent/55 text-sm">247 reviews</p>
        </div>
      </div>
    </div>
    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 ">
      {MenuClient.map((data) => (
        <ul key={data.id} className="flex justify-center items-center">
          <li className={`mt-5 py-8 px-3 w-1/2 text-center text-white poppins-bold rounded-xl shadow-xl ${data.id === 1 ? "bg-primary" : ""} ${data.id === 2 ? "bg-red-500" : ""} ${data.id === 3 ? "bg-yellow-400" : ""} ${data.id === 4 ? "bg-slate-400" : ""} sm:w-[80%] md:p`}>
            <h1 className="text-3xl">{data.rate}</h1>
            <p className="text-sm poppins-medium mt-3">{data.head}</p>
            <p className="text-sm poppins-regular mt-1 mx-auto">{data.blog}</p>
          </li>
        </ul>
      ))}
    </div>
    </>
  );
};

export default OurSolutions;
