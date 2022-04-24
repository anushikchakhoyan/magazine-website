import {FiMenu} from "react-icons/fi";
import Drawer from 'react-modern-drawer';
import {useEffect, useState} from "react";

import Menu from "../../Menu";
import Logo from "../Logo";
import TranslationButton from "../../Menu/TranslationButton";

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
        <>
            <div className={`${mobileView ? 'sticky top-0 z-50' : 'py-8'}
                            max-w-layout flex p-3 bg-white justify-between items-center w-full
                           `}
            >
                <Logo/>
                {mobileView ? (
                    <div className="flex items-center space-x-4">
                        <TranslationButton/>
                        <button className="text-3xl text-black" onClick={toggleDrawer}>
                            <FiMenu/>
                        </button>
                    </div>
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
        </>
    )
}

export default AppHeader;