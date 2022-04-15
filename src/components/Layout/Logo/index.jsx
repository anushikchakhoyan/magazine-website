import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

import AppLogo from "../../../assets/logo.svg";

const Logo = ({classnames = '', isSmallSize}) => {
    const {t} = useTranslation();

    return (
        <Link to="/" className={`flex-center ${classnames}`}>
            <img src={AppLogo} alt={t('appName')}/>
        </Link>
    )
}

Logo.propTypes = {
    classnames: PropTypes.string,
    isExtended: PropTypes.bool,
};

export default Logo;