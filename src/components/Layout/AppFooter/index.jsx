import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

import AppLogo from "../../../assets/logo.svg";
import SocialLinks from "../SocialLinks";
import Logo from "../Logo";

const AppFooter = () => {
    const {t} = useTranslation();
    const data = [
        {
            label: t('titles.sections'),
            items: [
                {
                    to: "/",
                    title: t('titles.general'),
                },
                {
                    to: "/business",
                    title: t('menu.business'),
                },
                {
                    to: "/sport",
                    title: t('menu.sport'),
                },
                {
                    to: "/technology",
                    title: t('menu.technology'),
                },
                {
                    to: "/fun",
                    title: t('menu.fun'),
                },
            ]
        },
        {
            label: "About",
            items: [
                {
                    to: "/faq",
                    title: t('menu.faq')
                },
                {
                    to: "/about",
                    title: t('menu.about')
                }
            ]
        },
        {
            label: t('titles.legacy'),
            items: [
                {
                    to: "/terms",
                    title: t('menu.terms')
                },
                {
                    to: "/privacy",
                    title: t('menu.privacy')
                },
            ]
        }
    ];

    return (
        <footer className="p-3 border-t border-gray-300">
            <div className="p-5 w-full mx-auto max-w-4xl flex flex-col md:flex-row">
                <div className="flex flex-col items-start space-y-4">
                    <Logo/>
                    <SocialLinks/>
                </div>
                <div className="flex justify-between md:justify-around w-full flex-col sm:flex-row">
                    {data.map((item, index) => (
                        <ul key={index} className="pt-4 md:p-0">
                            <h4 className="text-gray-800 font-bold pb-3">
                                {item.label}
                            </h4>
                            {item.items.map(((el, index) => (
                                <li key={index} className="space-y-2">
                                    <Link to={el.to}
                                          className="font-medium hover:no-underline hover:text-red-500
                                                     text-gray-600 secondary-font-family"
                                    >
                                        {el.title}
                                    </Link>
                                </li>
                            )))}
                        </ul>
                    ))}
                </div>
            </div>
            <p className="secondary-font-family text-sm text-center pt-10 pb-5">{t('footer.allRights', {date: new Date().getFullYear()})}</p>
        </footer>
    )
}

export default AppFooter;