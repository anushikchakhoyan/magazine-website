import {useTranslation} from "react-i18next";

import Header from "../Header";
import Footer from "../Footer";

const Sidebar = () => {
    const {t} = useTranslation();

    return (
        <aside className="py-10 w-1/5 bg-white flex flex-col justify-between">
            <Header />
            <Footer />
        </aside>
    )
}

export default Sidebar;