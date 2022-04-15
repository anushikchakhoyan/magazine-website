import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Newsletter = () => {
    const {t} = useTranslation();
    return (
        <section className="pb-12 pt-20 mx-auto px-4 md:px-0">
            <div className="max-w-2xl mx-auto">
                <div className="space-y-4 text-center">
                    <h1 className="text-3xl text-red-500 font-semibold">
                        {t('newsletter.title')}
                    </h1>
                    <p className="text-gray-800 leading-relaxed">
                        {t('newsletter.desc')}
                    </p>
                </div>
                <div className="mt-5">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="max-w-xl mx-auto flex items-center justify-center rounded-md
                                       border border-gray-200 p-0.5">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="text-gray-500 w-full p-2.5 outline-none"
                        />
                        <button
                            className="p-2.5 rounded-md text-white bg-red-500 outline-none shadow-md focus:shadow-none sm:px-5"
                        >
                            {t('newsletter.subscribe')}
                        </button>
                    </form>
                    <p className="mt-3 mx-auto text-center max-w-lg text-sm text-gray-800">
                        {t('newsletter.notSpam')}
                        <Link to="/privacy" className="underline">
                            {t('menu.privacy')}
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;
