import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

import AppLogo from "../../../assets/logo.svg";
import AppSmallLogo from "../../../assets/small-logo.png";

const Logo = ({classnames, isExtended, isSmallSize}) => {
    const {t} = useTranslation();

    return (
        <a href="/" className={`flex justify-center items-center ${classnames}`}>
            <img src={isExtended || isSmallSize ? AppLogo : AppSmallLogo} alt={t('appName')}/>
        </a>
    )
}

Logo.propTypes = {
    classnames: PropTypes.string,
    isExtended: PropTypes.bool,
};

export default Logo;