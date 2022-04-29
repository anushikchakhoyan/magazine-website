import {useTranslation} from "react-i18next";

import Title from "../../components/Tilte";

const Privacy = () => {
    const {t} = useTranslation();

    return (
        <div className="pt-28 lg:py-12 pb-14 max-w-layout leading-relaxed">
            <div className="space-y-3 text-center">
                <Title
                    title={t('menu.privacy')}
                    classnames="text-red-600"
                    note={t('privacy.note')}
                />
            </div>
            <div className="py-8 px-4">
                <p>{t('privacy.items.desc_1')}</p>
                <h1 className="font-semibold text-gray-800 text-xl py-3">
                    {t('privacy.items.title_1')}
                </h1>
                <p>{t('privacy.items.desc_2')}</p>
                <h1 className="font-semibold text-gray-800 text-xl py-3">
                    {t('privacy.items.title_2')}
                </h1>
                <p>{t('privacy.items.desc_3')}</p>
                <h1 className="font-semibold text-gray-800 text-xl py-3">
                    {t('privacy.items.title_3')}
                </h1>
                <p>{t('privacy.items.desc_4')}</p>
                <h1 className="font-semibold text-gray-800 text-xl py-3">
                    {t('privacy.items.title_4')}
                </h1>
                <p>{t('privacy.items.desc_5')}</p>
                <h1 className="font-semibold text-gray-800 text-xl py-3">
                    {t('privacy.items.title_5')}
                </h1>
                <p>{t('privacy.items.desc_6')}</p>
                <h1 className="font-semibold text-gray-800 text-xl py-3">
                    {t('privacy.items.title_6')}
                </h1>
                <p>{t('privacy.items.desc_7')}</p>
            </div>
        </div>
    );
}

export default Privacy;
