import {useTranslation} from "react-i18next";
import Title from "../../components/Tilte";

import "../About/styles.css";

const Business = () => {
    const {t} = useTranslation();

    return (
        <>
            <div className="py-12 gradient-bg one text-center space-y-2">
                <Title title={t('menu.business')} classnames="text-red-700" />
                <p>{t('business.desc')}</p>
            </div>
            <div className="gradient-bg three">

            </div>
        </>
    );
}

export default Business;
