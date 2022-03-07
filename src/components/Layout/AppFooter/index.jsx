import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

import AppLogo from "../../../assets/logo.svg";
import SocialLinks from "../SocialLinks";

const AppFooter = () => {
    const {t} = useTranslation();
    const data = [
        {
            label: "Resources",
            items: [
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
                    to: "/article",
                    title: t('menu.article'),
                },
                {
                    to: "/education",
                    title: t('menu.education'),
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
            label: "Legacy",
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
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl m-2 rounded-md secondary-font-family">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                        <img src={AppLogo} className="w-48" alt={t('appName')} />
                        <p className="leading-relaxed mt-2 text-[15px] secondary-font-family">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label className="block pt-4 pb-2 secondary-font-family">
                            {t('footer.stayUpToDate')}
                        </label>
                        <div className="max-w-sm flex items-center border rounded-md p-1">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2.5 outline-none"
                            />
                            <button
                                className="p-2.5 rounded-md text-white bg-black outline-none shadow-md focus:shadow-none sm:px-5"
                            >
                                {t('newsletter.subscribe')}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 mt-10 space-y-6 items-start justify-between sm:flex md:space-y-0 md:mt-0">
                    {data.map((item, index) => (
                        <ul className="space-y-4" key={index}>
                            <h4 className="text-gray-800 font-medium secondary-font-family">
                                {item.label}
                            </h4>
                            {item.items.map(((el, index) => (
                                <li key={index}>
                                    <Link to={el.to}
                                       className="hover:underline hover:text-red-500 secondary-font-family">
                                        {el.title}
                                    </Link>
                                </li>
                            )))}
                        </ul>
                    ))}
                </div>
            </div>
            <div className="mt-4 sm:mt-2 py-6 border-t items-center justify-between sm:flex">
                {t('footer.allRights', {date: new Date().getFullYear()})}
                <SocialLinks/>
            </div>
        </footer>
    )
}

export default AppFooter;