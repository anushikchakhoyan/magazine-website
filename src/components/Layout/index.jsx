import PropTypes from "prop-types";
import 'react-modern-drawer/dist/index.css'

import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const Layout = ({children}) => (
    <>
        <AppHeader/>
        {children}
        <AppFooter/>
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;