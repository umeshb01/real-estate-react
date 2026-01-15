import Navbar from "./Navbar"
export default function Header() {
    return (
        <div className=" min-h-screen mb-4  bg-cover bg-center flex items-center w-full overflow-hidden" style={{ backgroundImage: "url('/header_img.png')" }} id="Header">
            <Navbar />
            <div className=" container mx-auto text-center  py-4 px-6 md:px-20 lg:px-32 text-white">
                <h1 className=" text-5xl sm:text-6xl md:text-[82px] max-w-3xl inline-block pt-20">Explore homes that fits your dreams</h1>
                <div>
                    <a href="">projects</a>
                    <a href="">Contact Us</a>
                </div>
            </div>

        </div>
    )
}