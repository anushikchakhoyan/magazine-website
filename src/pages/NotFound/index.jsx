import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const NotFound = () => {
    const {t} = useTranslation();

    return (
        <div className="flex items-center flex-col pt-20 min-h-screen">
            <p className="text-9xl text-red-500">404</p>
            <p className="text-center text-2xl">
                {t('notFound.title')}
            </p>
            <p className="text-center text-2xl">
                {t('notFound.desc')}
            </p>
            <Link to="/" className="mt-8 d-block">
                <button className="text-xl underline tracking-wider">{t('goBack')}</button>
            </Link>
        </div>
    )
}

export default NotFound;