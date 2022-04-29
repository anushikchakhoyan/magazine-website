import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const FollowUs = () => {
    const {t} = useTranslation();

    return (
        <div className="my-8 bg-red-50 p-8 w-auto mx-auto flex-center">
            <p className="space-x-1">
                <span>{t('titles.discover')}</span>
                <span>{t('titles.load')}</span>
                <Link to="/about" className="underline text-red-600">{t('titles.about')}</Link>
                <span>{t('titles.or')}</span>
                <Link to="/join" className="underline text-red-600">{t('titles.joinUs')}</Link>
            </p>
        </div>
    )
}

export default FollowUs;