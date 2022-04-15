import {useTranslation} from "react-i18next";
import Title from "../../components/Tilte";

const About = () => {
    const {t} = useTranslation();

    return (
        <div className="max-w-layout">
            <div className="pb-14">
                <Title title={t('menu.about')}  classnames="py-4" />
                <p>{t('about.desc')}</p>

                <Title title={t('about.title')} classnames="py-4" />

            </div>
        </div>
    );
}

export default About;
