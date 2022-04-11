import {map} from "lodash-es";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Menu = () => {
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
            to: "/article",
            type: "learning",
            title: t('menu.article'),
        },
        {
            to: "/education",
            type: "learning",
            title: t('menu.education'),
        },
    ]

    return (
        <nav className="mx-auto max-w-screen-xl pt-3 pb-4">
            <ul className="flex">
                {map(items, ({to, title}, index) => (
                    <li className="px-3" key={index}>
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
        </nav>
    )
}

export default Menu;