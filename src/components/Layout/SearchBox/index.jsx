import * as React from 'react';
import {InputBase} from '@mui/material';
import {BiSearch} from "react-icons/bi";
import {styled, alpha} from '@mui/material/styles';
import {useTranslation} from "react-i18next";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.10),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '0ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },

    "& input::placeholder": {
        fontSize: "14px",
        opacity: .65,
    }
}));

const SearchBox = () => {
    const {t} = useTranslation();
    return (
        <Search>
            <SearchIconWrapper>
                <BiSearch />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder={t('menu.search')}
                inputProps={{'aria-label': 'search'}}
            />
        </Search>
    );
}

export default SearchBox;
