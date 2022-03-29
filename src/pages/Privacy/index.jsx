import {map} from "lodash-es";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

import ApiService from "../../services/api";
import Title from "../../components/Tilte";

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
        <div className="max-w-screen-xl mx-auto">
            <Title title={t('menu.privacy')} classnames="px-0"/>
            <div className="px-6 pb-14">
                <p>{t('privacy.desc')}</p>
                {map(items, item => (
                    <>
                        <h1
                            dangerouslySetInnerHTML={{__html: item.title}}
                            className="font-bold text-gray-800 text-xl p-3"
                        />
                        <p dangerouslySetInnerHTML={{__html: item.desc}}/>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Privacy;
