import PropTypes from "prop-types";

import Header from "../Header";
import Footer from "../Footer";

const Sidebar = ({isSmallSize}) => (
    <aside className={`px-3 h-full pt-10 min-h-screen bg-white flex flex-col justify-between
                      ${isSmallSize ? 'w-72' : 'w-96'}`}>
        <Header/>
        <Footer/>
    </aside>
)

Sidebar.propTypes = {
    isSmallSize: PropTypes.bool
};

export default Sidebar;