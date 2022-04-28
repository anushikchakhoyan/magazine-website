import {useLocation} from "react-router";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

import Title from "../../components/Tilte";
import Cards from "../../components/Cards";
import FollowUs from "../../components/FollowUs";
import Content from "./Content";

const SingleNews = () => {
    const {t} = useTranslation();
    const location = useLocation();
    const [item, setItem] = useState({});

    const news = [
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


    useEffect(() => {
        setItem(location.state);
        console.log(location.state)
    },[]);

    return (
        <div className="max-w-layout">
            <Content {...item}/>
            <FollowUs/>
            <Title title={t('titles.more')}/>
            <Cards items={news}/>
        </div>
    );
}

export default SingleNews;
