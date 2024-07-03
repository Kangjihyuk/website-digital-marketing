import React from 'react'
import ContentMarketing from "../../images/content-marketing.png"
import Gmail from "../../images/gmail.png"
import SocialMedia from "../../images/social-media.png"

const Menu = [
  {
    id : 1,
    img: SocialMedia,
    heading: "Social Media",
    paraf: "Build brand awareness on the top social media networks.",
    alt:"social-Media"
  },
  {
    id : 2,
    img: Gmail,
    heading: "Email Marketing",
    paraf: "Nuture valuable leads into customers,and turn one-time.",
    alt:"gmail"
  },
  {
    id : 3,
    img: ContentMarketing,
    heading: "Content Marketing",
    paraf: "Get professionally-written content that attracts qualified.",
    alt:"contentMarketing"
  }
]
const Others = () => {
  return (
    <>
      <div className="container mt-[4.5rem]  poppins-light sm:mt-[6rem] md:mt-[15rem] lg:mt-[6.5rem]">
        <div className="text-center">
          <h2 className="text-secondary poppins-medium md:text-2xl">
            Our Servises
          </h2>
          <h1 className="mt-2 poppins-bold text-lg text-secondary md:text-3xl">
            We're digital marketing pro
          </h1>
          <p className="poppins-light mt-2 lg:text-xl">
            No matter what you're looking for,we can create a custom solution
            for your business
          </p>
        </div>
        <div className="mt-5">
          <ul className="flex justify-center items-center flex-wrap gap-5 flex-col md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-2">
            {Menu.map((data) => (
              <li
                key={data.id}
                className={`md:w-full w-[90%] rounded-md bg-white p-5 ${
                  data.id === 3 ? "md:translate-x-1/2 lg:translate-x-0" : ""
                }`}
              >
                <img
                  src={data.img}
                  alt={data.alt}
                  className={`h-12 ${data.id === 1 ? "bg-primary" : ""} ${
                    data.id === 2 ? "bg-red-500" : ""
                  } ${data.id === 3 ? "bg-yellow-400" : ""} ${
                    data.id === 3 ? "bg-yellow-400" : ""
                  } p-3 rounded-md`}
                />
                <h1 className="mt-4 poppins-bold text-secondary">
                  {data.heading}
                </h1>
                <p className="mt-1 poppins-regular">{data.paraf}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Others