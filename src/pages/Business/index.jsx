import {useTranslation} from "react-i18next";
import Loading from "../../components/Loading";
import Title from "../../components/Tilte";

const Business = () => {
    const {t} = useTranslation();

    return (
        <div className="h-96">
            <div className="pb-14">
                <Title title={t('menu.business')} />
                <p>{t('business.desc')}</p>
            </div>
        </div>
    );
}

export default Business;
