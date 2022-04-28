import {useTranslation} from "react-i18next";
import {useEffect, useMemo, useState} from "react";

import SkeletonLoading from "../../components/SkeletonLoading";
import TodaysNews from "../../components/TodaysNews";
import Newsletter from "../../components/Newsletter";
import Marquee from "../../components/Marquee";
import Title from "../../components/Tilte";
import Cards from "../../components/Cards";

const News = () => {
    const {t} = useTranslation();
    const [isLoading, setLoading] = useState(false);

    const news = [
        {
            "id": 1,
            "link": "/news",
            "type": t('news.item_1.type'),
            "date":  t('news.item_1.date'),
            "title":  t('news.item_1.title'),
            "thumbnail": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/05/0/0/Mark-Zuckerberg-Getty.jpg?ve=1&tl=1",
            "caption":  t('news.item_1.caption'),
            "hashtags": [
                t('news.item_1.hashtags.tag_1'),
                t('news.item_1.hashtags.tag_2'),
                t('news.item_1.hashtags.tag_3'),
                t('news.item_1.hashtags.tag_4'),
            ],
            "description":  t('news.item_1.description'),
        },
        {
            "id": 2,
            "link": "/news",
            "type": t('news.item_2.type'),
            "date":  t('news.item_2.date'),
            "title":  t('news.item_2.title'),
            "thumbnail": "https://ichef.bbci.co.uk/news/976/cpsprodpb/70E7/production/_123030982_gettyimages-1232576319.jpg",
            "caption":  t('news.item_2.caption'),
            "hashtags": [
                t('news.item_2.hashtags.tag_1'),
                t('news.item_2.hashtags.tag_2'),
                t('news.item_2.hashtags.tag_3'),
            ],
            "description":  t('news.item_1.description'),
        },
        {
            "id": 3,
            "link": "/news",
            "type": t('news.item_3.type'),
            "date":  t('news.item_3.date'),
            "title":  t('news.item_3.title'),
            "thumbnail": "https://ichef.bbci.co.uk/news/976/cpsprodpb/16033/production/_123136109_metaverse2.png",
            "caption":  t('news.item_3.caption'),
            "hashtags": [
                t('news.item_3.hashtags.tag_1'),
                t('news.item_3.hashtags.tag_2'),
                t('news.item_3.hashtags.tag_3'),
            ],
            "description":  t('news.item_1.description'),
        },
        {
            "id": 4,
            "link": "/news",
            "type": t('news.item_4.type'),
            "date":  t('news.item_4.date'),
            "title":  t('news.item_4.title'),
            "thumbnail": "https://ichef.bbci.co.uk/news/976/cpsprodpb/14834/production/_123102048_mediaitem123102047.jpg",
            "caption":  t('news.item_4.caption'),
            "hashtags": [
                t('news.item_4.hashtags.tag_1'),
                t('news.item_4.hashtags.tag_2'),
            ],
            "description":  t('news.item_1.description'),
        },
        {
            "id": 5,
            "link": "/news",
            "type": t('news.item_5.type'),
            "date":  t('news.item_5.date'),
            "title":  t('news.item_5.title'),
            "thumbnail": "https://ichef.bbci.co.uk/news/976/cpsprodpb/A9E2/production/_122909434_gettyimages-1271332416.jpg",
            "caption":  t('news.item_5.caption'),
            "hashtags": [
                t('news.item_5.hashtags.tag_1'),
                t('news.item_5.hashtags.tag_2'),
                t('news.item_5.hashtags.tag_3'),
            ],
            "description":  t('news.item_1.description'),
        },
        {
            "id": 6,
            "link": "/news",
            "type": t('news.item_6.type'),
            "date":  t('news.item_6.date'),
            "title":  t('news.item_6.title'),
            "thumbnail": "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/BA65/production/_123071774_index.png",
            "caption":  t('news.item_6.caption'),
            "hashtags": [
                t('news.item_6.hashtags.tag_1'),
            ],
            "description":  t('news.item_1.description'),
        },
    ];

    const content = useMemo(() => {
        if (isLoading) {
            return <SkeletonLoading />
        }

        if (news) {
            return (
                <div className="pt-10">
                    <Title title={t('titles.trending')}/>
                    <Cards items={news} classnames="bg-neutral-100"/>
                    <Newsletter/>
                    <div className="my-8 w-4/5 mx-auto h-px bg-gray-300"/>
                    <Title title={t('titles.more')}/>
                    <Cards items={news}/>
                </div>
            )
        }

        return null;
    }, [isLoading, news]);

    return (
        <div className="pb-14 mx-auto overflow-hidden">
            <TodaysNews/>
            <Marquee/>
            <div className="max-w-layout">{content}</div>
        </div>
    );
}

export default News;
