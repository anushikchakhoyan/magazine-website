import React from 'react';

import Sidebar from "./Sidebar";

const Layout = ({children}) => {
    return (
        <>
            <Sidebar />
            <article className="p-3 w-4/5 h-screen overflow-y-auto">
                {children}
            </article>
        </>
    )
}

export default Layout;