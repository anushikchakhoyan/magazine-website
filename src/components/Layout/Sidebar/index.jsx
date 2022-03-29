import PropTypes from "prop-types";

import Menu from "../../Menu";
import Logo from "../Logo";

const Sidebar = ({isSmallSize, isExtended}) => (
    <aside className={`
              px-3 h-full py-6 flex flex-col justify-between min-h-screen layout-width shadow-xl
              ${isExtended ? 'w-60' : 'w-24'} ${isSmallSize && '!w-full'}`
           }
    >
        <Logo isExtended={isExtended} isSmallSize={isSmallSize}/>
        <Menu isExtended={isExtended} />
        <p>User info</p>
    </aside>
)

Sidebar.propTypes = {
    isSmallSize: PropTypes.bool,
    isExtended: PropTypes.bool
};

export default Sidebar;