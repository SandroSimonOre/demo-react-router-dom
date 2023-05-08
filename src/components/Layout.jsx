//import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className='flex w-full'>
            <Sidebar />
            <Outlet />
        </div>
        
    )
}