import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();

    return (
        <footer className="py-3 flex flex-col items-center">
           <p className="text-xs font-medium text-gray-400">{t('footer.allRights')}</p>
           <p className="text-xs font-medium text-gray-400">{t('footer.copyright')}</p>
        </footer>
    )
}

export default Footer;