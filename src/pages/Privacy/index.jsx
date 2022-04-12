import {map} from "lodash-es";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

import ApiService from "../../services/api";
import Title from "../../components/Tilte";
import Cards from "../../components/Cards";

const Privacy = () => {
    const {t} = useTranslation();
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    const getPrivacyData = () => {
        let isMounted = true;
        if (isMounted) {
            setLoading(true);
            ApiService.getPrivacy()
                .then(res => {
                    console.log(res.data);

                    if (isMounted) {
                        setItems(res.data);
                    }
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false));
        }
        return () => {
            isMounted = false;
        };
    }

    useEffect(() => {
        getPrivacyData();
    }, [])

    return (
        <div className="pb-14 max-w-layout leading-relaxed">
            <div className="space-y-3 text-center">
                <Title
                    title={t('menu.privacy')}
                    classnames="text-red-600"
                    note={t('privacy.note')}
                />
            </div>
            <div className="py-8 px-4">
                {map(items, item => (
                    <>
                        <h1
                            dangerouslySetInnerHTML={{__html: item.title}}
                            className="font-bold text-gray-800 text-xl py-3"
                        />
                        <p dangerouslySetInnerHTML={{__html: item.desc}}/>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Privacy;
