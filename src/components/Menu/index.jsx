import {map} from "lodash-es";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const MenuItem = ({to, title}) => (
    <li className="py-1 px-4">
        <NavLink
            to={to}
            exact
            activeClassName="border-black"
            className="uppercase tracking-wider transition-all ease-out duration-700"
        >
            {title}
        </NavLink>
    </li>
)

const Menu = () => {
    const {t} = useTranslation();
    const items = [
        {
            to: "/",
            type: "media",
            title: t('menu.news'),
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
            type: "media",
            to: "/outOfArmenia",
            title: t('menu.outOfArmenia'),
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
        <nav>
            <ul className="flex flex-col items-end mx-3">
                {map(items, item => (
                    <MenuItem {...item} />
                ))}
            </ul>
        </nav>
    )
}

export default Menu;