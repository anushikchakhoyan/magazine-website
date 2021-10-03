import React from 'react';

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <section className="flex">
               <Sidebar />
                <div className="p-3">
                    {children}
                </div>
            </section>
        </>
    )
}

export default Layout;