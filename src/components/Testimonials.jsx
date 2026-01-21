import React from 'react'
import { testimonialsData } from '../assets/assets'
import { StarIcon } from 'lucide-react'

const Testimonials = () => {
  return (
    <div className=' container mx-auto w-full overflow-hidden py-10 lg:px-32 ' id='Testimonials'>
        <h1 className=' text-2xl text-center sm:text-4xl font-bold mb-2  '>Customer <span className=' underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className=' mx-auto text-gray-500  text-center max-w-80 '>Real Stories of Those Who Found house with us </p>
         <div className=' flex flex-wrap gap-8 justify-center'>
           {testimonialsData.map((testimonial,index)=>(
            <div key={index} className=' w-[300px]  shadow-xl rounded px-8 py-12 text-center ' >
                <img src={testimonial.image} alt={testimonial.alt} className=' w-20 h-20 rounded-full mx-auto mb-4'/>
                <h2 className=' text-xl font-medium text-gray-700'>{testimonial.name}</h2>
                <p className=' text-sm text-gray-500 mb-3'>{testimonial.title}</p>
                <div className=' text-amber-300 flex gap-1 justify-center'>
                    <StarIcon className='w-5 h-5'/>
                     <StarIcon className='w-5 h-5' />
                      <StarIcon className='w-5 h-5' />
                       <StarIcon className='w-5 h-5' />
                    
                </div>
                <p className=' text-gray-400 '>{testimonial.text}</p>
            </div>
           ))}
         </div>
    </div>
  )
}

export default Testimonials