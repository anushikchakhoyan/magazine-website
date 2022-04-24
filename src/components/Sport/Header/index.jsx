import {useTranslation} from "react-i18next";

import SportBg from "../../../assets/images/gallery/sport-cover-bg.avif";
import Title from "../../Tilte";

const SportHero = () => {
    const {t} = useTranslation();

    const sportItems = [
        {
            time: '22:01',
            text: 'adhwlfcahblhcfalehfcaliehvrlai'
        },
        {
            time: '22:01',
            text: 'adhwlfcahblhcfalehfcaliehvrlai'
        },
        {
            time: '22:01',
            text: 'adhwlfcahblhcfalehfcaliehvrlai'
        },
        {
            time: '22:01',
            text: 'adhwlfcahblhcfalehfcaliehvrlai'
        }
    ]

    return (
        <div className="max-w-layout flex">
            <div className="flex-grow max-w-3xl relative group cursor-pointer">
                <img src={SportBg} alt="Sport"/>
                <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-white absolute bottom-0 pb-5 group-hover:underline underline-offset-4"
                    href="https://www.panarmenian.net/arm/news/299435/"
                >
                    <Title title={t('sport.desc')} classnames="p-3 text-white"/>
                </a>
            </div>
            <div className="flex-1">
                <Title title={t('menu.a')} classnames="text-white text-sm bg-red-600 px-6 py-2"/>

                <div className="overflow-y-auto p-5 space-y-3"
                 style={{ maxHeight: '550px' }}>
                    {sportItems.map(({time, text}) => (
                        <div className="item flex items-center space-x-2">
                            <span className="text-red-700 text-sm font-medium">{time}</span>
                            <p>{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SportHero;