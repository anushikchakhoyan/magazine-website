import {useTranslation} from "react-i18next";
import Title from "../../components/Tilte";

import about1 from "../../assets/images/about/about_1.jpg";
import about2 from "../../assets/images/about/about_2.avif";
import about3 from "../../assets/images/about/about_3.avif";
import "../About/styles.css";

const About = () => {
    const {t} = useTranslation();

    return (
        <>
            <div className="bg-one">
                <div className="pt-28 lg:py-12 text-center space-y-2">
                    <Title title={t('menu.whoWeAre')} classnames="p-0"/>
                    <div className="w-48 h-0.5 bg-red-600 mx-auto"/>
                </div>
                <div className="pt-10 max-w-layout">
                    <div className="bg-gray-50 flex flex-col lg:flex-row">
                        <div className="lg:max-w-xl">
                            <img src={about1} alt={t('menu.about')} className="h-full w-full"/>
                        </div>
                        <div className="p-4">
                            <div className="pt-10 space-y-4">
                                <p>{t('about.desc')}</p>
                                <p>{t('about.desc_2')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-16 bg-two">
                <div className="max-w-layout">
                    <div className="bg-gray-50 flex flex-col lg:flex-row-reverse">
                        <div>
                            <img src={about2} alt={t('menu.about')} className="h-full w-full"/>
                        </div>
                        <div className="p-4">
                            <div className="pt-10 space-y-4 lg:max-w-3xl">
                                <p>{t('about.desc')}</p>
                                <p>{t('about.desc_2')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 bg-gray-50 flex flex-col lg:flex-row ">
                        <div>
                            <img src={about3} alt={t('menu.about')} className="h-full w-full"/>
                        </div>
                        <div className="p-4">
                            <div className="pt-10 space-y-4 lg:max-w-3xl">
                                <p>{t('about.desc')}</p>
                                <p>{t('about.desc_2')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
