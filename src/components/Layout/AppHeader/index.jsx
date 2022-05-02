import {FiMenu} from "react-icons/fi";
import Drawer from 'react-modern-drawer';
import {useEffect, useState} from "react";

import Menu from "../../Menu";
import Logo from "../Logo";
import TranslationButton from "../../Menu/TranslationButton";
import SocialLinks from "../SocialLinks";
import SearchBox from "../SearchBox";

const AppHeader = () => {
    const mediumDesktopSize = 992;
    const [isOpen, setIsOpen] = useState(false);
    const [mobileView, setMobileView] = useState(null);

    const handleResize = () => {
        setMobileView(window.innerWidth <= mediumDesktopSize);
        if (mobileView) {
            setIsOpen(false);
        }
    };

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return (
        <div className="border-b border-gray-300">
            <div className="px-4 md:px-12 py-3 bg-red-800 border-b-2 border-white w-full flex items-center justify-end space-x-6">
                <TranslationButton/>
            </div>
            <div className={`${mobileView ? 'sticky z-50 shadow-md' : 'py-8'}
                            max-w-layout flex p-3 justify-between items-center w-full
                           `}
            >
                <Logo/>
                {mobileView ? (
                    <button className="text-3xl text-black" onClick={toggleDrawer}>
                        <FiMenu/>
                    </button>
                ) : (
                    <Menu mobileView={mobileView}/>
                )}
            </div>
            {mobileView && (
                <Drawer
                    open={isOpen}
                    direction='left'
                    onClose={toggleDrawer}
                    className="py-6 px-3"
                >
                    <Logo/>
                    <Menu mobileView={mobileView}/>
                </Drawer>
            )}
        </div>
    )
}

export default AppHeader;