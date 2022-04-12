import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

import AppLogo from "../../../assets/logo.svg";

const Logo = ({classnames = '', isSmallSize}) => {
    const {t} = useTranslation();

    return (
        <a href="/" className={`flex-center ${classnames}`}>
            <img src={AppLogo} alt={t('appName')}/>
        </a>
    )
}

Logo.propTypes = {
    classnames: PropTypes.string,
    isExtended: PropTypes.bool,
};

export default Logo;