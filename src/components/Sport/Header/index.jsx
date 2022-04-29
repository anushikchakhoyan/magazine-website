import {useTranslation} from "react-i18next";

import SportBg from "../../../assets/images/gallery/sport-cover-bg.avif";
import Title from "../../Tilte";
import LiveNews from "../../LiveNews";

const SportHero = () => {
    const {t} = useTranslation();

    return (
        <div className="max-w-layout flex flex-col space-y-8 lg:space-y-0 lg:flex-row">
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
           <LiveNews />
        </div>
    )
}

export default SportHero;