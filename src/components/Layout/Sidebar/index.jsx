import PropTypes from "prop-types";

import Menu from "../../Menu";
import Logo from "../Logo";

const Sidebar = ({isSmallSize}) => (
    <aside className={`px-3 h-full py-10 flex flex-col justify-between min-h-screen bg-white ${isSmallSize ? 'w-72' : 'w-96'}`}>
        <header>
            <Logo classnames="pb-20" />
            <Menu/>
        </header>
        <div className="h-2"/>
    </aside>
)

Sidebar.propTypes = {
    isSmallSize: PropTypes.bool
};

export default Sidebar;