import {useTranslation} from "react-i18next";
import Title from "../../components/Tilte";

import SportHero from "../../components/Sport/Header";
import SportBg from "../../assets/images/gallery/sport-cover-bg.avif";

const Business = () => {
    const {t} = useTranslation();

    return (
        <>
            <div className="py-12 text-center space-y-2">
                <Title title={t('menu.business')} classnames="text-red-700"/>
                <p>{t('business.desc')}</p>
            </div>
            <div className="py-14 lg:py-3 max-w-layout">
                <SportHero/>

                <div className="grid gap-8 my-4 justify-center"
                     style={{gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))'}}
                >
                    <div className="flex-grow relative group cursor-pointer">
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
                    <div className="flex-grow relative group cursor-pointer">
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
                    <div className="flex-grow relative group cursor-pointer">
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
                </div>
            </div>
        </>
    );
}

export default Business;
