import React from 'react';

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <section className="flex flex-col items-start lg:flex-row">
               <Sidebar />
                <div className="p-3 w-full">
                    {children}
                </div>
            </section>
        </>
    )
}

export default Layout;