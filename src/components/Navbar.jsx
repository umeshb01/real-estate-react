import { assets } from "../assets/assets"
import { use, useEffect, useState } from "react"
export default function Navbar() {
    const[showMobileMenu,setShowMobilemenu]=useState(false);
    useEffect(()=>{
        if(showMobileMenu){
            document.body.style.overflow ='hidden'
        }
        else{
            document.body.style.overflow = 'auto'
        }
        return ()=>{
            document.body.style.overflow= 'auto'
        }
    },[showMobileMenu])
    
    return (
        <div className=" absolute w-full  left-0 top-0 z-10 "> 
        <div className=" container mx-auto flex items-center justify-between px-6 py-4 md:px-20 lg:px-32 bg-transparent" >
            <img src={assets.logo} alt="logo" className=" " />
            <ul className=" hidden md:flex gap-3 text-white">
                <a href="#Header" className=" cursor-pointer hover:gray-300"> Home </a>
                 <a href="#About" className=" cursor-pointer hover:gray-300">About</a>
                  <a href="#Projects" className=" cursor-pointer hover:gray-300">Projects</a>
                   <a href="#Testimonials" className=" cursor-pointer hover:gray-300">Testimonials</a>
                
            </ul>
            <button className=" hidden md:block  bg-white rounded-full px-8 py-2 ">Sign up</button>
            <img onClick={()=>setShowMobilemenu(true)} src={assets.menu_icon} alt="" className=" w-7 md:hidden cursor-pointer" />
        </div>
        {/* mobile menu */}
        <div className={` md:hidden ${showMobileMenu?'fixed w-full':'w-0 h-0'}  left-0 top-0 bottom-0 right-0 overflow-hidden transition-all  bg-white `}>
        <div className=" flex justify-end p-6 cursor-pointer">
            <img onClick={()=>setShowMobilemenu(false)} src={assets.cross_icon} alt=""  className=" w-6"/>
        </div>
            <ul className=" flex flex-col items-center mt-5 px-5 gap-4  text-lg font-medium ">
                <a onClick={()=>setShowMobilemenu(false)}  href="#Home" className=" px-2 py-1 inline-block rounded">Home</a>
                <a onClick={()=>setShowMobilemenu(false)} href="#About" className=" px-2 py-1 inline-block">About</a>
                <a onClick={()=>setShowMobilemenu(false)} href="#Projects" className=" px-2 py-1 inline-block">Projects</a>
                <a onClick={()=>setShowMobilemenu(false)} href="#Testimonials" className=" px-2 py-1 inline-block">Testimonials</a>
            
            </ul>
        </div>
        
        </div>
    )
}