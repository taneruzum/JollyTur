
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar'

export default function MainLayout() {
    return (
        <div className='w-full h-screen flex flex-col gap-1 px-5 !font-openSans'>
        <NavBar/>
            <div className='w-full'>
                <Outlet />
            </div>
        </div>
    )
}
