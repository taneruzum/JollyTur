
import { FaArrowLeft, FaBars } from "react-icons/fa";
import logo from '/jolly_logo.png'
//import { NavLinks } from "@/Constants/navLinks";
import navBar from '/NavBar/desktopNavBar.png'

export default function NavBar() {
    return (
        <nav className='w-full h-auto flex flex-col py-2 px-6 xl:px-0'>
            <div className="xl:hidden w-full flex items-center justify-between ">
                <FaArrowLeft className=' size-5 text-customBlue' />
                <img src={logo} alt="Jolly Logo" className='max-w-[75px] aspect-[75/42]' />
                <FaBars className=' size-5 text-customBlue' />
            </div>
            <div className="hidden xl:flex w-full">
                <img src={navBar} alt="NavBar" />
            </div>
        </nav>
    )
}
