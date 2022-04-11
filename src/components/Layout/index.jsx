import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import 'react-modern-drawer/dist/index.css'

import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const Layout = ({children}) => {
    const mediumDesktopSize = 1024;
    const [isOpen, setIsOpen] = useState(null);
    const [isSmallSize, setIsSmallSizeView] = useState(null);


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

    return (
        <>
            {/*    <div className="flex flex-col w-full">*/}
            {/*    <div className="fixed top-0 bg-white shadow-md w-full p-3 flex justify-between items-center">*/}
            {/*        <Logo />*/}
            {/*        <button*/}
            {/*            onClick={toggleDrawer}*/}
            {/*            className="text-lg lg:hidden"*/}
            {/*        >*/}
            {/*            <GiHamburgerMenu/>*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*    <Content className="mt-16"/>*/}
            {/*    <Drawer*/}
            {/*        open={isOpen}*/}
            {/*        direction='left'*/}
            {/*        onClose={toggleDrawer}*/}
            {/*    >*/}
            {/*        <Sidebar isSmallSize={isSmallSize}/>*/}
            {/*    </Drawer>*/}
            {/*</div>*/}
            <AppHeader isSmallSize={isSmallSize}/>
            {children}
            <AppFooter/>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;