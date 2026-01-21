import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className= 'bg-gray-900 pt-10  px-6 md:px-20 lg:px-32 w-full overflow-hidden' id='Footer'>
        <div className=' container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className=' w-full mb-8 md:mb-0 md:w-1/3'>
                <img src={assets.logo_dark} alt="" />
                <p className=' text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magni sunt officia soluta iure quos molestiae ducimus atque? Beatae, voluptates?</p>
            </div>
            <div className=' w-full md:w-1/5 mb-5 md:mb-0'>
                <h1 className=' text-white text-xl font-bold mb-4'>Company</h1>
                <ul className=' flex flex-col gap-2  text-gray-600'>
                    <a href="#Header">Home</a>
                    <a href="#About">About Us</a>
                    <a href="#Contact">Contact Us</a>
                    <a href="#Header">Privacy Policy</a>
                </ul>
            </div>
            <div className=' w-full md:w-1/3 '>
             <h3 className=' text-white text-xl font-bold mb-4'>Subscribe to our Newsletter</h3>
             <p className=' text-gray-500 mb-4 max-w-80'>The latest, news, articles, and resources sent to your inbox weekly</p>
             <div className=' flex gap-2'>
                <input type="text" placeholder=' Enter your Email' className=' p-2 rounded border border-gray-600 bg-gray-800 text-gray-400 w-full md:w-auto  focus:outline-none' />
                <button className=' px-4 py-2 bg-blue-500 rounded text-white'>Subscribe</button>
             </div>
                
            </div>
        </div>
        <div className=' border-t border-gray-700 py-4 mt-10 text-gray-500 text-center'>
            © 2026 Designed & Developed by Umesh Bhandari.

        </div>
    </div>
  )
}

export default Footer