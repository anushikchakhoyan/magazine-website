import {map} from "lodash-es";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

import {HiNewspaper} from "react-icons/hi";
import {FaFootballBall} from "react-icons/fa";
import {BsFillBriefcaseFill, BsFillFileTextFill, BsLightbulbFill} from "react-icons/bs";

const MenuItem = ({to, title, Icon, isExtended}) => (
    <li className="py-2 px-0 w-full">
        <NavLink
            to={to}
            exact
            activeClassName="active"
            className={`
                        secondary-font-family uppercase flex items-center tracking-wider transform text-gray-800
                        transition-all ease-linear duration-700 hover:scale-110 hover:text-red-500 
                      `}
        >
            <div className="w-14 block">
                <Icon className="text-2xl"/>
            </div>
            <span className={`secondary-font-family transition-opacity duration-700 
                              ${isExtended ? 'opacity-100 w-auto' : 'opacity-0 w-0'}
                             `}
            >
                {title}
            </span>
        </NavLink>
    </li>
)

const Menu = ({isExtended}) => {
    const {t} = useTranslation();
    const items = [
        {
            to: "/",
            type: "media",
            Icon: BsFillFileTextFill,
            title: t('menu.news')
        },
        {
            type: "media",
            to: "/business",
            Icon: BsFillBriefcaseFill,
            title: t('menu.business'),
        },
        {
            to: "/sport",
            type: "media",
            Icon: FaFootballBall,
            title: t('menu.sport'),
        },
        {
            to: "/technology",
            type: "media",
            Icon: BsLightbulbFill,
            title: t('menu.technology'),
        },
        {
            to: "/article",
            type: "learning",
            Icon: HiNewspaper,
            title: t('menu.article'),
        },
        {
            to: "/education",
            type: "learning",
            Icon: HiNewspaper,
            title: t('menu.education'),
        },
    ]

    return (
        <nav>
            <ul className="flex flex-col items-start">
                {map(items, item => (
                    <MenuItem {...item} key={item.title} isExtended={isExtended} />
                ))}
            </ul>
        </nav>
    )
}

export default Menu;