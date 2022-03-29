import PropTypes from "prop-types";
import Drawer from 'react-modern-drawer'
import {useEffect, useState} from "react";
import 'react-modern-drawer/dist/index.css'
import {GiHamburgerMenu} from "react-icons/gi";

import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import Sidebar from "./Sidebar";
import Logo from "./Logo";

const Layout = ({children}) => {
    const mediumDesktopSize = 1024;
    const [isOpen, setIsOpen] = useState(null);
    const [isExtended, setIsExtended] = useState(false);
    const [isSmallSize, setIsSmallSizeView] = useState(null);

    const Content = ({className}) => (
        <article className={`lg:h-screen overflow-y-auto w-full ${className}`}>
            <AppHeader toggleSidebar={toggleSidebar} isSmallSize={isSmallSize}/>
            {children}
            <AppFooter />
        </article>
    );

    const handleResize = () => {
        setIsSmallSizeView(window.innerWidth <= mediumDesktopSize);
        if (isSmallSize) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    }

    const toggleSidebar = () => {
        setIsExtended(!isExtended);
    }

    return (
        <>
            {isSmallSize ? (
                <div className="flex flex-col w-full">
                    <div className="fixed top-0 bg-white shadow-md w-full p-3 flex justify-between items-center">
                        <Logo />
                        <button
                            onClick={toggleDrawer}
                            className="text-lg lg:hidden"
                        >
                            <GiHamburgerMenu/>
                        </button>
                    </div>
                    <Content className="mt-16"/>
                    <Drawer
                        open={isOpen}
                        direction='left'
                        onClose={toggleDrawer}
                    >
                        <Sidebar isSmallSize={isSmallSize}/>
                    </Drawer>
                </div>
              ) : (
                  <div className="flex items-start w-full">
                      <Sidebar isExtended={isExtended} />
                      <Content />
                  </div>
              )}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;