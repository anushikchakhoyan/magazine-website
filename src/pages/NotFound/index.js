import {useTranslation} from "react-i18next";

const NotFound = () => {
    const {t} = useTranslation();

    return (
        <p>{t('not_found')}</p>
    )
}

export default NotFound;