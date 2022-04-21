import {useTranslation} from "react-i18next";
import Title from "../../components/Tilte";

import WhoWeAre from "../../assets/who-we-are.jpg";

const About = () => {
    const {t} = useTranslation();

    return (
        <div className="pt-10 pb-14 max-w-layout">
            <div className="bg-gray-50 flex">
                <div className="hidden lg:block max-w-xl">
                    <img src={WhoWeAre} alt={t('menu.about')} className="h-full w-full"/>
                </div>
                <div className="p-4">
                    <Title title={t('menu.whoWeAre')} classnames="p-0"/>
                    <div className="w-32 h-1 bg-red-600"/>
                    <div className="pt-10 space-y-4">
                        <p>{t('about.desc')}</p>
                        <p>{t('about.desc_2')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
