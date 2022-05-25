import {Link} from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs";
import {useTranslation} from "react-i18next";

const Content = ({title, thumbnail}) => {
    const {t} = useTranslation();

    return (
        <div className="py-8 px-3">
            <Link
                to="/"
                className="py-2 space-x-2 text-red-600 font-medium rounded-full flex items-center"
            >
                <BsArrowLeft/>
                <span className="text-base">{t('home')}</span>
            </Link>
            <h1 className="font-bold text-3xl py-3">{title}</h1>
            <hr className="py-3"/>
            <div className="text-gray-700 text-left text-base md:columns-2 py-4 whitespace-pre-wrap">
                <img
                    alt={title}
                    src={thumbnail}
                    style={{maxHeight: "400px"}}
                    className="w-full h-full object-cover pb-5"
                />
                {t('plainText')}
            </div>
        </div>
    )
}

export default Content;