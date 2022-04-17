import {map} from "lodash-es";
import {Skeleton} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useEffect, useMemo, useState} from "react";

import ApiService from "../../services/api";
import Title from "../../components/Tilte";

const Privacy = () => {
    const {t} = useTranslation();
    const [terms, setTerms] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const getPrivacyData = () => {
        let isMounted = true;
        if (isMounted) {
            setLoading(true);
            ApiService.getPrivacy()
                .then(res => {
                    if (isMounted) {
                        setTerms(res.data);
                    }
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false));
        }
        return () => {
            isMounted = false;
        };
    }

    const content = useMemo(() => {
        if (isLoading) {
            return (
                <div className="pt-10">
                    <Skeleton animation="wave"/>
                    <Skeleton animation="wave"/>
                    <Skeleton animation="wave"/>
                    <Skeleton animation="wave"/>
                    <Skeleton animation="wave"/>
                </div>
            )
        }

        if (terms) {
            return (
                <div className="py-8 px-4">
                    {map(terms, item => (
                        <>
                            <h1
                                dangerouslySetInnerHTML={{__html: item.title}}
                                className="font-bold text-gray-800 text-xl py-3"
                            />
                            <p dangerouslySetInnerHTML={{__html: item.desc}}/>
                        </>
                    ))}
                </div>
            )
        }

        return null;
    }, [isLoading, terms]);

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
            {content}
        </div>
    );
}

export default Privacy;
