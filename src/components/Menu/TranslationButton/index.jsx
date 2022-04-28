import * as React from 'react';
import Menu from '@mui/material/Menu';
import {FaLanguage} from "react-icons/fa";
import Button from '@mui/material/Button';
import {useTranslation} from "react-i18next";
import MenuItem from '@mui/material/MenuItem';

import enFlag from '../../../assets/flags/en.png';
import armFlag from '../../../assets/flags/arm.png';

const TranslationButton = () => {
    const [t, i18n] = useTranslation();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Button
                id="basic-button"
                aria-haspopup="true"
                onClick={handleClick}
                className="!p-0"
                aria-expanded={open ? 'true' : undefined}
                aria-controls={open ? 'basic-menu' : undefined}
            >
                <FaLanguage className="text-3xl" />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose} selected={i18n.language === 'arm'}>
                    <button
                        className="flex-center space-x-2"
                        onClick={() => i18n.changeLanguage('arm')}
                    >
                        <img src={armFlag} alt={t('tooltips.changeArm')} className="w-4 h-4"/>
                        <span>{t('tooltips.changeArm')}</span>
                    </button>
                </MenuItem>
                <MenuItem onClick={handleClose} selected={i18n.language === 'en'}>
                    <button
                        className="flex-center space-x-2"
                        onClick={() => i18n.changeLanguage('en')}
                    >
                        <img src={enFlag} alt={t('tooltips.changeEn')} className="w-4 h-4"/>
                        <span>{t('tooltips.changeEn')}</span>
                    </button>
                </MenuItem>
            </Menu>
        </>
    );
}

export default TranslationButton;