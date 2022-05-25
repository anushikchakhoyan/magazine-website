import {useTranslation} from "react-i18next";
import {useMemo, useState} from "react";

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
            "thumbnail": "https://images.unsplash.com/photo-1606344728451-926a98d7252b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
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
            "thumbnail": "https://images.unsplash.com/photo-1576723658639-513237fdd520?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
            "thumbnail": "https://images.unsplash.com/photo-1584707824245-f67bad2c62d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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

    const currentEvents = [
        {
            "id": 1,
            "link": "/news",
            "type": t('news.item_1.type'),
            "date":  t('news.item_1.date'),
            "title":  t('news.item_1.title'),
            "thumbnail": "https://images.unsplash.com/photo-1649621033496-ac6c412c0720?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80\n",
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
            "thumbnail": "https://images.unsplash.com/photo-1650274790136-61f755869064?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
            "thumbnail": "https://images.unsplash.com/photo-1649703712651-d228728f5fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            "caption":  t('news.item_3.caption'),
            "hashtags": [
                t('news.item_3.hashtags.tag_1'),
                t('news.item_3.hashtags.tag_2'),
                t('news.item_3.hashtags.tag_3'),
            ],
            "description":  t('news.item_1.description'),
        }
    ]

    const content = useMemo(() => {
        if (isLoading) {
            return <SkeletonLoading />
        }

        if (news) {
            return (
                <>
                    <div className="max-w-layout pt-10">
                        <Title title={t('titles.trending')}/>
                        <Cards items={news} classnames="bg-neutral-100"/>
                    </div>
                    <Newsletter/>
                    <div className="max-w-layout">
                        <div className="my-8 w-4/5 mx-auto h-px bg-gray-300"/>
                        <Title title={t('titles.more')}/>
                        <Cards items={currentEvents}/>
                    </div>
                </>
            )
        }

        return null;
    }, [isLoading, news]);

    return (
        <div className="pb-14 mx-auto overflow-hidden">
            <TodaysNews/>
            <Marquee/>
            {content}
        </div>
    );
}

export default News;
