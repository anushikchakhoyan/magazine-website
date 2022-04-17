import {map} from "lodash-es";
import {useEffect, useMemo, useState} from "react";
import {useTranslation} from "react-i18next";

import ApiService from "../../services/api";
import Title from "../../components/Tilte";
import {Skeleton} from "@mui/material";

const Terms = () => {
    const {t} = useTranslation();
    const [isLoading, setLoading] = useState(false);
    const [privacy, setPrivacy] = useState([]);

    const getTermsData = () => {
        let isMounted = true;
        if (isMounted) {
            setLoading(true);
            ApiService.getTerms()
                .then(res => {
                    if (isMounted) {
                        setPrivacy(res.data);
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

        if (privacy) {
            return (
                <div className="py-8 px-4">
                    {map(privacy, item => (
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
    }, [isLoading, privacy]);

    useEffect(() => {
        getTermsData();
    }, [])

    return (
        <div className="pb-14 max-w-layout leading-relaxed">
            <div className="space-y-3 text-center">
                <Title
                    title={t('menu.terms')}
                    classnames="text-red-600"
                    note={t('privacy.note')}
                />
            </div>
            {content}
        </div>
    );
}

export default Terms;
