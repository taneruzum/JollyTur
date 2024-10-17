
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Footer from '@/Components/Footer'

export default function MainLayout() {
    return (
        <div className='w-full h-screen flex flex-col gap-1 !font-openSans'>
            <NavBar />
            <div className='w-full px-6 xl:px-[54px]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
