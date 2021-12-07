import {useTranslation} from "react-i18next";
import Menu from "../../Menu";

const Header = () => {
    const {t} = useTranslation();

    return (
        <header>
            <h1 className="text-2xl text-center tracking-loose">{t('appName')}</h1>
            <h4 className="mb-20 text-center text-xs text-gray-500">{t('abbreviation')}</h4>
            <Menu />
        </header>
    )
}

export default Header;