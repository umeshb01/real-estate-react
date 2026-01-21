import React from 'react'

const Contact = () => {
    return (
        <div className=' text-center p-6 py-20 lg:px-32 w-full overflow-hidden ' id='Contact'>
            <h1 className=' text-2xl text-center sm:text-4xl font-bold mb-2  '>Contact <span className=' underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
            <p className=' mx-auto text-gray-500  text-center max-w-80 '>Ready to make a Move? Lets make future Together</p>


            <form className=' max-w-2xl mx-auto text-gray-600 pt-8' action="">
                <div className=' flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>Your Name
                        <input className=' w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your name' required />
                    </div>
                     <div className='w-full md:w-1/2 text-left'>Your Email
                        <input className=' w-full border border-gray-300 rounded py-3 px-4 mt-2' type="Email" name='Emaail' placeholder='Your Email' required />
                    </div>
                </div >
                <div className=' my-10 text-left'>
                    Message 
                    <textarea className=' w-full border border-gray-500 rounded py-3 px-4 mt-2 resize-none h-48' name="Message"  placeholder='Message' id=""></textarea>
                </div>
                <button className='bg-blue-600 text-white px-12 py-2 rounded mb-10'>Send Message</button>
            </form>

        </div>
    )
}

export default Contact