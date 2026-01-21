import { useState,useEffect } from "react"
import { assets,projectsData } from "../assets/assets"
import { ChevronRight } from "lucide-react"
export default function Projects() {
    const[currentIndex,setCurrentIndex]= useState(0);
    const[cardToShow,setCardToShow]= useState(1 )
    useEffect(()=>{
        const updateCardsToShow =()=>{

             if(window.innerWidth>=1024){
            setCardToShow(projectsData.length);
        }
        else{
            setCardToShow(1)
        }
        }
        updateCardsToShow();
        window.addEventListener ('resize',updateCardsToShow)
        return ()=> window.removeEventListener ('resize',updateCardsToShow)
       


    },[])
    const nextProject =()=>{
        setCurrentIndex((prevIndex)=>(prevIndex+1)%projectsData.length)
    }
     const prevProject =()=>{
        setCurrentIndex((prevIndex)=>prevIndex===0? projectsData.length-1: prevIndex-1)
    }
    return (
        <div className=" container mx-auto  px-6 py-4 pt-20 my-20 md:px-20 lg:px-32 w-full overflow-hidden" id="Projects">
            <h1 className=" text-2xl sm:text-4xl font-bold mb-2 text-center">Projects <span className=" underline underline-offset-4 font-light under decoration-1">Completed</span></h1>
            <p className=" text-center text-gray-500 mb-4 mx-auto max-w-80">Crafting Spaces,Building Legacies Explore Our Portfolio</p>
            {/* slider buttons */}
            <div className=" flex items-center justify-end mb-8">
                <button onClick={prevProject} 
                 className=" p-3 bg-gray-300 rounded mr-2">
                    <img src={assets.left_arrow} alt="previous" />
                </button>
                <button onClick={nextProject} className="p-2 bg-gray-300 rounded ">
                    {/* <img src={assets.left_arrow} alt="previous" /> */}
                    <ChevronRight  className=" size-5 text-blue-600"/>


                </button>

            </div>
           
           {/* Slider container */}
<div className="overflow-hidden">
  <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{
  transform: `translateX(-${currentIndex * (100 / cardToShow)}%)`
}}

>
    {projectsData.map((project, index) => (
      <div
        key={index}
        className="relative w-[320px] shrink-0"
      >
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-55 object-cover mb-8"
        />

        {/* Overlay */}
        <div className="absolute left-0 right-0 bottom-4 flex justify-center">
          <div className="bg-white px-4 py-2 shadow-md w-[85%]">
            <h2 className="text-base font-semibold text-gray-800">
              {project.title}
            </h2>
            <p className="text-sm text-gray-500">
              {project.price} <span className="px-1">|</span> {project.location}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
    )
}