import PropTypes from "prop-types";
import 'react-modern-drawer/dist/index.css'

import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const Layout = ({children}) => {
    return (
        <div style={{
            '--fontFamily': `'${localStorage.getItem('i18nextLng') === 'en' ? 'Montserrat' :'Noto Sans Armenian'}', sans-serif`,
        }}
        >
            <AppHeader/>
            {children}
            <AppFooter/>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;