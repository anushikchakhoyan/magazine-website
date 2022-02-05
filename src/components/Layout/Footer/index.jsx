import {useTranslation} from "react-i18next";
import SocialLinks from "./SocialLinks";

const Footer = () => {
    const {t} = useTranslation();

    return (
        <footer className="py-3 flex flex-col items-center">
           <p className="text-xs font-normal text-gray-400">{t('footer.allRights')}</p>
           <p className="text-xs font-normal text-gray-400">{t('footer.copyright', { date: new Date().getFullYear() })}</p>
            <div className="py-3">
                <SocialLinks />
            </div>
        </footer>
    )
}

export default Footer;