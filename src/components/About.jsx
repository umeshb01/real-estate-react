import { assets } from "../assets/assets"
export default function About(){
    return(
        <div className=" flex flex-col items-center justify-center container mx-auto w-full overflow-hidden  px-14 md:px-20 lg:px-32 " id="About">
            <h1 className=" text-2xl sm:4xl font-bold mb-3">About <span className=" underline underline-offset-6 decoration-1  font-light">Our Brand</span></h1>
            <p className=" text-gray-500 max-w-80 text-center mb-6">Passionate About Properties,Dedicated to Your Visions</p>
            <div className=" flex flex-col md:flex-row items-center md:items-start md:gap-20">
                <img src= {assets.brand_img} alt=""  className=" w-full sm:w-1/2 max-w-lg"/>
                <div className=" flex flex-col items-center md:items-start mt-10 text-gray-600">
                    <div className=" grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                        <div>
                            <p className=" text-4xl text-gray-800 font-medium">10+</p>
                            <p>Years of Excellence</p>
                        </div>
                         <div>
                            <p className=" text-4xl text-gray-800 font-medium">12+</p>
                            <p>Project completed</p>
                        </div>
                         <div>
                            <p className=" text-4xl text-gray-800 font-medium">20+</p>
                            <p>Mn.sq.ft Delivered</p>
                        </div>
                         <div>
                            <p className=" text-4xl text-gray-800 font-medium">25+</p>
                            <p>Ongoing Projects </p>
                        </div>

                    </div>
                    <p className=" my-6 max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est illum impedit voluptatem accusantium quos veniam, ipsam unde, quam repellendus nemo dolores et amet repellat ullam expedita eveniet, quae necessitatibus!</p>
                    <button className=" bg-blue-600 text-white rounded px-8 py-2">Learn More</button>

                </div>
            </div>
        </div>
    )
}