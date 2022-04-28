import {Link} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs";
import {useTranslation} from "react-i18next";

const CallToAction = () => {
    const {t} = useTranslation();

    return (
        <section className="my-8 py-4 px-4 sm:px-8 bg-gray-100 max-w-screen-xl mx-auto">
            <div className="max-w-xl">
                <div className="py-4">
                    <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
                        {t('callToAction.title')} <span className="text-red-600">{t('callToAction.latestNews')}</span>
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3">
                        {t('callToAction.desc')}
                    </p>
                </div>
                <Link
                    to="/sign-in"
                    className="px-4 py-2 space-x-2 text-red-600 font-medium bg-black-50 rounded-full inline-flex items-center"
                >
                    <span>{t('callToAction.tryItOut')}</span>
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    )
}

export default CallToAction;