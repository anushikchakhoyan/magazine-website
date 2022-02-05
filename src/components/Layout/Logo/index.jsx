import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";

const Logo = ({isSmallSize}) => {
    const {t} = useTranslation();

    return (
        <div className={`flex justify-center items-center ${isSmallSize ? 'flex-row' : 'flex-col'}`}>
            <h4 className="text-3xl text-red-500 secondary-font-family">{t('the')}</h4>
            <h1 className={`lowercase px-2 secondary-font-family 
                          ${isSmallSize ? 'tracking-wide text-xl' : 'tracking-loose text-2xl'}
                          `}
            >
                {t('appName')}
            </h1>
            <h4 className={`mb-20 text-sm text-gray-500 ${isSmallSize && 'hidden'}`}>{t('abbreviation')}</h4>
        </div>
    )
}

Logo.propTypes = {
    isSmallSize: PropTypes.bool
};

export default Logo;