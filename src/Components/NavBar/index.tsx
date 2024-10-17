
import { FaArrowLeft, FaBars } from "react-icons/fa";
import logo from '/jolly_logo.png'

export default function NavBar() {
    return (
        <nav className='w-full h-auto flex items-center justify-between py-2'>
            <FaArrowLeft className='size-5 text-customBlue' />
            <img src={logo} alt="Jolly Logo" className='max-w-[75px] aspect-[75/42]' />
            <FaBars className='size-5 text-customBlue' />
        </nav>
    )
}
