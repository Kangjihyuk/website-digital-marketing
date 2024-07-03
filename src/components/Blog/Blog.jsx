import React from 'react'
import Seo1 from "../../images/seo1.jpg"
import Seo2 from "../../images/seo2.jpg"
import Seo3 from '../../images/seo3.jpg'

const Seo = [
    {
        id: 1,
        img: Seo1,
        heading: "How to Merge Instagram Accounts",
        paragraph: "So, you need to merge Instagram accounts but you'are not sure what to do? No worries. I'll walk you through."
    },
    {
        id: 2,
        img: Seo2,
        heading: "Advanced SEO Tactics for Become an SEO Expert",
        paragraph: "Even with a high number of searches being performed, the large majority of users don't ever scroll past the."
    },
    {
        id: 3,
        img: Seo3,
        heading: "How to Optimize Your Digital Marketing Strategy",
        paragraph: "When it comes to your digital marketing strategy, it's not enough to have an eye-catching."
    }
]
const Blog = () => {
  return (
    <>
        <div className='container mt-16 lg:mt-[10rem]'>
            <div className='text-center'>
                  <h1 className='poppins-bold text-2xl tracking-wide'>From our Blog</h1>
                  <h2 className='mt-2'>93% of traffic begins with a search query. Even with a high number of searches being performed</h2>
              </div>
              <div className='mt-7 grid place-content-center sm:grid-cols-2 gap-5 lg:grid-cols-3'>
                  {Seo.map(data => (
                      <ul key={data.id} className='w-[20rem] sm:w-[17rem] md:w-[20rem] flex flex-col-reverse'>
                          <li className={`mt-7 text-justify ml-3 ${data.id === 3 ? "sm:translate-x-1/2 lg:translate-x-0" : ""}`}>
                              <img src={data.img} alt={data.id} loading='lazy' className='px-3 pt-3 bg-slate-300 rounded-t-lg' />
                              <h1 className='px-3  poppins-extrabold mt-1 text-lg tracking-wide'>{data.heading}</h1>
                              <p className='px-3 text-sm text-slate-700 mt-1'>{data.paragraph}</p>
                          </li>
                      </ul>
                  ))}
              </div>
              <div className='flex justify-center mt-7'>
              <button type='button' className='mt-7 bg-primary px-6 py-2.5 text-white rounded-md poppins-medium hover:bg-secondary transition-all duration-300 hover:scale-105 xl:mt-4 lg:px-9'>Learn More</button>
              </div>
        </div>
    </>
  )
}

export default Blog