import { assets } from "../assets/assets"
export default function Navbar() {
    
    return (
        <div className=" absolute w-full  left-0 top-0 z-10 "> 
        <div className=" container mx-auto flex items-center justify-between px-6 py-4 md:px-20 lg:px-32 bg-transparent" >
            <img src={assets.logo} alt="logo" className=" " />
            <ul className=" hidden md:flex gap-3 text-white">
                <a href="#Header" className=" cursor-pointer hover:gray-300"> Home </a>
                 <a href="#Header" className=" cursor-pointer hover:gray-300">About</a>
                  <a href="#Header" className=" cursor-pointer hover:gray-300">Projects</a>
                   <a href="#Header" className=" cursor-pointer hover:gray-300">Testemonials</a>
                
            </ul>
            <button className=" hidden md:block  bg-white rounded-full px-8 py-2 ">Sign up</button>
        </div>
        
        </div>
    )
}