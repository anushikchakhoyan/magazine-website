import * as React from 'react';
import {useTranslation} from "react-i18next";

import enFlag from '../../../assets/flags/en.png';
import armFlag from '../../../assets/flags/arm.png';

const TranslationButton = () => {
    const [t, i18n] = useTranslation();

    return (
        <>
            <button
                className={`flex-center hover:text-gray-600 space-x-2 
                            ${i18n.language === 'arm' ? 'text-red-600' : 'text-gray-900'}
                `}
                onClick={() => i18n.changeLanguage('arm')}
            >
                <img src={armFlag} alt={t('tooltips.changeArm')} className="w-4 h-4"/>
                <span>{t('tooltips.changeArm')}</span>
            </button>
            <button
                className={`flex-center hover:text-gray-600 space-x-2 
                            ${i18n.language === 'en' ? 'text-red-600' : 'text-gray-900'}
                `}
                onClick={() => i18n.changeLanguage('en')}
            >
                <img src={enFlag} alt={t('tooltips.changeEn')} className="w-4 h-4"/>
                <span>{t('tooltips.changeEn')}</span>
            </button>
        </>
    );
}

export default TranslationButton;