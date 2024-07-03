import React from 'react'
import Client1 from "../../assets/client1.jpg"
import Client2 from "../../assets/client2.jpg"
import Client3 from "../../assets/client3.jpg"
import { IoLogoTwitter } from "react-icons/io";
const MenuClient = [
    {
        id: 1,
        clientName: "Dany Monson",
        alt: "client",
        imgClients: Client1,
        jobs: "CEO & Founder",
        comment : "it is very to communicate with Besnik and i love the way they adapt to my pace of work. We start with discovery call to understand"
    },
    {
        id: 2,
        clientName: "Abby Hollis",
        alt: "client",
        imgClients: Client2,
        jobs: "Lead at Uniting vic.",
        comment : "i'll played around with several tools in the generative marketing copy space,and Besnik is by far the best i've seen."
    },
    {
        id: 3,
        clientName: "Omar Farook",
        imgClients: Client3,
        alt: "client",
        jobs: "VP of Product Design",
        comment : "Bensik helps produce templates for writing headlines, transactional email copy, Facebook ads and so much here"
    }
]
const Client = () => {
  return (
    <>
        <div className='container mt-14 lg:mt-[10rem]'>
            <div className='text-center poppins-extrabold text-2xl'>
                <h1>Happy clients about us</h1>
              </div>
              <div className='grid place-content-center place-items-center mt-7 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-20 xl:gap-0'>
                  {MenuClient.map(data => (
                      <ul key={data.id} className="flex justify-center">
                          <li className={`bg-white mt-10 w-[20rem] h-[13rem] relative px-5 py-7 rounded-xl shadow-lg ${data.id === 3 ? "md:translate-x-1/2 lg:translate-x-0" : ""}`}>
                              <div className='flex items-center gap-5'>
                                <img src={data.imgClients} alt={data.alt} className='w-10 h-10 object-cover rounded-full' />
                                <div>
                                    <h1 className='poppins-bold tracking-wide'>{data.clientName}</h1>
                                    <h2 className='text-slate-500'>{data.jobs}</h2>
                                </div>                         
                              </div>
                              <div className='absolute top-[2rem] right-5'>
                                <IoLogoTwitter className='text-blue-600'/>
                              </div>
                              <p  className='text-justify mt-4 text-slate-500'>{data.comment}</p>
                          </li>
                      </ul>
                  ))}
              </div>
        </div>
    </>
  )
}

export default Client