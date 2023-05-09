import { Header } from "./Header"
import { TabBar } from "./TabBar"
import { Outlet } from "react-router-dom"
import { Menu } from "./Menu"

export const Layout = () => {
    return (
        <div className='flex flex-col w-full'>
            <Header />
            <Menu />
            <Outlet />
            <TabBar />
        </div>
        
    )
}