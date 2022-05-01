import {useTranslation} from "react-i18next";

import Title from "../../components/Tilte";

const Terms = () => {
    const {t} = useTranslation();

    return (
        <>
            <div className="privacy-bg-black">
                <div className="py-12 text-center space-y-2">
                    <Title title={t('menu.terms')} classnames="p-0"/>
                    <p className="text-sm md:text-base">{t('privacy.note')}</p>
                    <div className="w-48 h-0.5 bg-red-600 mx-auto"/>
                </div>
                <div className="max-w-layout">
                    <p className="text-base md:text-lg">{t('privacy.items.desc_1')}</p>
                    <h1 className="font-semibold text-red-600 text-lg md:text-xl py-5">
                        {t('privacy.items.title_1')}
                    </h1>
                    <p className="text-base md:text-lg">{t('privacy.items.desc_2')}</p>
                    <h1 className="font-semibold text-red-600 text-lg md:text-xl py-5">
                        {t('privacy.items.title_6')}
                    </h1>
                    <p className="text-base md:text-lg">{t('privacy.items.desc_7')}</p>
                </div>
            </div>
            <div className="privacy-bg-white pb-28">
                <div className="max-w-layout">
                    <h1 className="font-semibold text-red-600 text-lg md:text-xl py-5">
                        {t('privacy.items.title_2')}
                    </h1>
                    <p className="text-base md:text-lg">{t('privacy.items.desc_3')}</p>
                    <h1 className="font-semibold text-red-600 text-lg md:text-xl py-5">
                        {t('privacy.items.title_3')}
                    </h1>
                    <p className="text-base md:text-lg">{t('privacy.items.desc_4')}</p>
                    <h1 className="font-semibold text-red-600 text-lg md:text-xl py-5">
                        {t('privacy.items.title_4')}
                    </h1>
                    <p className="text-base md:text-lg">{t('privacy.items.desc_5')}</p>
                    <h1 className="font-semibold text-red-600 text-lg md:text-xl py-5">
                        {t('privacy.items.title_5')}
                    </h1>
                    <p className="text-base md:text-lg">{t('privacy.items.desc_6')}</p>
                </div>
            </div>
        </>
    );
}

export default Terms;
