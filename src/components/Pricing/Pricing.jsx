import React from 'react'
import { IoPerson } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { TiTick } from "react-icons/ti";
const Price = [
  {
    id: 1,
    icon: <IoPerson />,
    head: "Private",
    p: "2 License",
    p1: "Carefully crafted com",
    p2: "Amazing page examples",
    p3: "2 license code",
    price: "$49",
    btn: "Purchase"
  },
  {
    id: 2,
    icon: <IoPeople />,
    head: "Business",
    p: "5 License",
    p1: "5 analytics campaings",
    p2: "300 Keywords",
    p3: "15 social pages",
    price: "$129",
    btn: "Purchase"
  },
  {
    id: 3,
    icon: <IoIosPeople />,
    head: "Corporate",
    p: "20 License",
    p1: "100 analytics campaings",
    p2: "7500 Keywords",
    p3: "150 social accounts",
    price: "$189",
    btn: "Purchase"
  }
]

const Pricing = () => {
  return (
    <>
      <div className='container mt-20 lg:mt-[10rem]'>
        <div className='text-center'>
          <h1 className='text-secondary poppins-bold text-2xl'>Pricing Plan</h1>
          <p className='mt-3 text-lg poppins-light md:text-xl'>Stop wasting time and money designing and managing a website that doesn't get results. Happiness guaranteed!</p>
        </div>
        <div className='mt-10 sm:grid sm:grid-cols-2 gap-4 lg:grid-cols-3  xl:gap-0'>
          {Price.map(data => (
            <ul key={data.id} className='flex justify-center '>
              <li className={`bg-white mt-6 poppins-bold px-4 py-8 rounded-xl w-[18rem] ${data.id === 3 ?"sm:translate-x-1/2 lg:translate-x-0" : ""}`}>
                <div className='flex items-center gap-8 justify-center'>
                  <div>
                    <h1 className='bg-blue-100 p-4 rounded-lg text-primary'>{data.icon}</h1>
                  </div>
                  <div>
                    <h2 className='text-lg tracking-wide text-secondary'>{data.head}</h2>
                    <h3 className='tracking-wide text-secondary'>{data.p}</h3>
                  </div>
                </div>
                <p className='flex items-center mt-10 gap-2.5 poppins-regular text-secondary'><TiTick className='bg-blue-100 rounded-full text-primary'/>{data.p1}</p>
                <p className='flex items-center mt-3 gap-2.5 poppins-regular text-secondary'><TiTick className='bg-blue-100 rounded-full text-primary'/>{data.p2}</p>
                <p className='flex items-center mt-3 gap-2.5 poppins-regular text-secondary'><TiTick className='bg-blue-100 rounded-full text-primary'/>{data.p3}</p>
                <h2 className='flex justify-center mt-20 text-4xl text-secondary'>{data.price}</h2>
                <button className={`mt-5 flex mx-auto border px-12 py-2 rounded-xl text-primary hover:bg-teal-400 hover:text-white ${data.id === 2 ? "bg-primary text-white hover:bg-blue-600 sm:bg-transparent sm:text-primary sm:hover:bg-teal-400 lg:bg-primary lg:text-white lg:hover:bg-blue-600" : ""} ${data.id === 3 ? "sm:bg-primary sm:text-white  lg:bg-transparent  lg:text-primary lg:hover:bg-teal-400" : ""}`}>{data.btn}</button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  )
}

export default Pricing