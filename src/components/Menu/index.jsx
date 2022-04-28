import {map} from "lodash-es";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import TranslationButton from "./TranslationButton";

const Menu = ({mobileView = false}) => {
    const {t} = useTranslation();

    const items = [
        {
            to: "/",
            type: "media",
            title: t('menu.news')
        },
        {
            type: "media",
            to: "/business",
            title: t('menu.business'),
        },
        {
            to: "/sport",
            type: "media",
            title: t('menu.sport'),
        },
        {
            to: "/technology",
            type: "media",
            title: t('menu.technology'),
        },
        {
            to: "/fun",
            type: "learning",
            title: t('menu.fun'),
        },
    ]

    return (
        <nav className={`bg-white z-10 ${mobileView ? 'pt-20' : 'flex items-center'}`}>
            <ul className={!mobileView ? "flex max-w-layout" : ''}>
                {map(items, ({to, title}, index) => (
                    <li className={`px-3 ${mobileView ? 'py-4' : ''}`} key={index}>
                        <NavLink
                            to={to}
                            exact
                            activeClassName="active"
                            className="secondary-font-family font-medium uppercase tracking-wide transform text-gray-900
                                       hover:scale-110 hover:text-red-500 hover:underline underline-offset-2"
                        >
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>
            {!mobileView && <TranslationButton />}
        </nav>
    )
}

Menu.propTypes = {
    mobileView: PropTypes.bool
};

export default Menu;