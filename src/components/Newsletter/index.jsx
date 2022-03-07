import {useTranslation} from "react-i18next";

const Newsletter = () => {
    const {t} = useTranslation();
    return (
        <section className="py-12 mx-auto">
            <div className="mx-4 p-8 rounded-lg bg-gradient-to-tr from-[#3c4452] to-[#97979b] sm:mx-8">
                <div className="max-w-2xl mx-auto">
                    <div className="space-y-4 text-center">
                        <h1 className="text-3xl text-white font-semibold">
                            {t('newsletter.title')}
                        </h1>
                        <p className="text-gray-300 leading-relaxed">
                            {t('newsletter.desc')}
                        </p>
                    </div>
                    <div className="mt-5">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="max-w-xl mx-auto flex items-center justify-center bg-white rounded-md p-1">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="text-gray-500 w-full p-2.5 outline-none"
                            />
                            <button
                                className="p-2.5 rounded-md text-white bg-black outline-none shadow-md focus:shadow-none sm:px-5"
                            >
                                {t('newsletter.subscribe')}
                            </button>
                        </form>
                        <p className="mt-3 mx-auto text-center max-w-lg text-[15px] text-gray-300">
                            {t('newsletter.notSpam')}
                            <a className="underline" href="javascript:void(0)"> {t('menu.privacy')} </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;
