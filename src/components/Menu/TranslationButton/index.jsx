import i18n from "i18next";
import {useState} from "react";
import {FormControl, MenuItem, Select, Tooltip} from "@mui/material";

import enFlag from '../../../assets/flags/en.png';
import armFlag from '../../../assets/flags/arm.png';
import {useTranslation} from "react-i18next";

const TranslationButton = () => {
    const [t, i18n] = useTranslation();

    return (
        i18n.language === 'en' ? (
            <Tooltip title={t('tooltips.changeArm')}>
                <button onClick={() => i18n.changeLanguage('arm')}>
                    <img src={armFlag} alt="Armenian" className="w-5 h-5"/>
                </button>
            </Tooltip>
        ) : (
            <Tooltip title={t('tooltips.changeEn')}>
                <button onClick={() => i18n.changeLanguage('en')}>
                    <img src={enFlag} alt="English" className="w-5 h-5"/>
                </button>
            </Tooltip>
        )
    );
}

export default TranslationButton;