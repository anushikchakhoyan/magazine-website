import Drawer from 'react-modern-drawer'
import {useEffect, useState} from "react";
import 'react-modern-drawer/dist/index.css'
import {GiHamburgerMenu} from "react-icons/all";

import Sidebar from "./Sidebar";
import Logo from "./Logo";
import Loading from "../Loading";

const Layout = ({children}) => {
    const mediumDesktopSize = 1024;
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallSize, setIsSmallSizeView] = useState(false);

    const handleResize = (e) => {
        e.preventDefault();
        setIsSmallSizeView(window.innerWidth <= mediumDesktopSize)
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    }

    return (
        <>
            {isSmallSize ? (
               <>
                   <div className="bg-white shadow-md w-full p-3 flex justify-between items-center">
                       <Logo isSmallSize={isSmallSize}/>
                       <button
                           onClick={toggleDrawer}
                           className="text-lg lg:hidden"
                       >
                           <GiHamburgerMenu/>
                       </button>
                   </div>
                   <Drawer
                       open={isOpen}
                       direction='left'
                       onClose={toggleDrawer}
                   >
                       <Sidebar />
                   </Drawer>
               </>
            ) : (
                <div className="flex items-start">
                    <Sidebar />
                    <article className="p-3 h-screen overflow-y-auto w-full lg:w-4/5">
                        {children}
                    </article>
                </div>
            )}
        </>
    )
}

export default Layout;