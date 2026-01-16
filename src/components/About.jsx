import { assets } from "../assets/assets"
export default function About(){
    return(
        <div className=" flex flex-col items-center justify-center container mx-auto w-full overflow-hidden  px-14 md:px-20 lg:px-32 " id="About">
            <h1 className=" text-2xl sm:4xl font-bold mb-3">About <span className=" underline underline-offset-6 decoration-1  font-light">Our Brand</span></h1>
            <p className=" text-gray-500 max-w-80 text-center mb-6">Passionate About Properties,Dedicated to Your Visions</p>
            <div className=" flex flex-col md:flex-row items-center md:items-start md:gap-20">
                <img src= {assets.brand_img} alt=""  className=" w-full sm:w-1/2 max-w-lg"/>
            </div>
        </div>
    )
}