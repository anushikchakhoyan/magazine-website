import {useEffect, useMemo, useState} from "react";
import {useTranslation} from "react-i18next";

import SkeletonLoading from "../../components/SkeletonLoading";
import CallToAction from "../../components/CallToAction";
import BlogItems from "../../components/Sport/BlogItems";
import SportHero from "../../components/Sport/Header";
import Newsletter from "../../components/Newsletter";
import Marquee from "../../components/Marquee";
import Cards from "../../components/Cards";
import Title from "../../components/Tilte";

const Sport = () => {
    const {t} = useTranslation();
    const [isLoading, setLoading] = useState(false);
    const sports = [
        {
            "id": 6,
            "link": "/news",
            "type": t('news.item_6.type'),
            "date": t('news.item_6.date'),
            "title": t('news.item_6.title'),
            "thumbnail": "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/BA65/production/_123071774_index.png",
            "caption": t('news.item_6.caption'),
            "hashtags": [
                t('news.item_6.hashtags.tag_1'),
            ],
            "description": t('news.item_6.desc'),
        },
    ];

    const content = useMemo(() => {
        if (isLoading) {
            return <SkeletonLoading/>
        }

        if (sports) {
            return (
                <>
                    <Title
                        title={t('blog.title')}
                        classnames="text-red-600"
                    />
                    <p className="px-4">{t('blog.subTitle')}</p>
                    <Cards items={sports}/>
                </>
            )
        }

        return null;
    }, [isLoading, sports]);

    return (
        <>
            <div className="py-3 max-w-layout">
                <SportHero/>
            </div>
            <Marquee/>
            <div className="max-w-layout">
                <Newsletter/>
                  {content}
                <CallToAction/>
            </div>
        </>
    );
}

export default Sport;
