import {useTranslation} from "react-i18next";

import Title from "../../components/Tilte";

const Privacy = () => {
    const {t} = useTranslation();

    return (
        <>
            <div className="py-12 text-center space-y-2">
                <Title title={t('menu.privacy')} classnames="p-0"/>
                <p className="text-sm md:text-base">{t('privacy.note')}</p>
                <div className="w-48 h-0.5 bg-red-600 mx-auto"/>
            </div>

            <div className="pb-28 max-w-layout">
                <p className="text-base md:text-lg">{t('privacy.items.desc_3')}</p>
                <h1 className="font-semibold text-black text-lg md:text-xl py-5">
                    {t('privacy.items.title_3')}
                </h1>
                <p className="text-base md:text-lg">{t('privacy.items.desc_4')}</p>
                <h1 className="font-semibold text-black text-lg md:text-xl py-5">
                    {t('privacy.items.title_4')}
                </h1>
                <p className="text-base md:text-lg">{t('privacy.items.desc_5')}</p>
                <h1 className="font-semibold text-black text-lg md:text-xl py-5">
                    {t('privacy.items.title_5')}
                </h1>
                <p className="text-base md:text-lg">{t('privacy.items.desc_6')}</p>
            </div>
        </>
    );
}

export default Privacy;
