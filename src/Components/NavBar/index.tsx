
import { FaArrowLeft, FaBars } from "react-icons/fa";
import logo from '/jolly_logo.png'
import { NavLinks } from "@/Constants/navLinks";
import navBar from '/NavBar/desktopNavBar.png'
import { IoLocationOutline } from "react-icons/io5";
import { PiBellSimpleRingingBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

export default function NavBar() {
    return (
        <nav className='w-full h-auto flex py-2 px-6 xl:px-[54px]'>
            <section className="w-full xl:hidden flex flex-col ">
                <div className="xl:hidden w-full flex items-center justify-between ">
                    <FaArrowLeft className=' size-5 text-customBlue' />
                    <img src={logo} alt="Jolly Logo" className='max-w-[75px] aspect-[75/42]' />
                    <FaBars className=' size-5 text-customBlue' />
                </div>
                <div className="hidden xl:flex w-full">
                    <img src={navBar} alt="NavBar" />
                </div>
            </section>
            <section className="hidden w-full xl:flex flex-col">
                <div className="w-full flex justify-between items-center border-t border-[#d9202a] py-2">
                    <img src={logo} alt="Jolly Logo" className='max-w-[105px] aspect-[75/42]' />
                    <div className="w-full flex justify-end items-center gap-3">
                        <div className="flex items-center gap-2 *:font-semibold *:px-2 *:py-1 *:text-customDark">
                            <a href="#">444 0 644</a>
                            <a href="#">Yardım</a>
                            <a href="#" className="flex items-center">
                                <IoLocationOutline className="size-6" />
                                <span>Satış Ofisleri</span>
                            </a>
                            <a href="#">Blog</a>
                            <a href="#" className="relative w-fit h-fit">
                                <PiBellSimpleRingingBold className="size-7" />
                                <div className="absolute top-1 right-2.5 size-4 rounded-full bg-[#d9202a] flex items-center justify-center">
                                    <span className="text-white text-[11px]">2</span>
                                </div>
                            </a>
                        </div>
                        <div className="!p-0 w-px h-6 bg-customDark/20" />
                        <button className="flex items-center gap-6 px-2 *:text-customDark">
                            <section className="flex flex-col items-start gap-1">
                                <span className="text-xs uppercase">HOŞGELDİNİZ</span>
                                <span className="font-semibold text-base">Buse Arseven</span>
                            </section>
                            <IoIosArrowDown className="size-5" />
                        </button>
                    </div>
                </div>
                <div className="flex gap-1 py-1 border-y border-customDark/10">
                    {NavLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            className="p-2 font-bold text-customDark3"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            </section>
        </nav>
    )
}
