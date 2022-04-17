import {useTranslation} from "react-i18next";
import {useEffect, useMemo, useState} from "react";

import SkeletonLoading from "../../components/SkeletonLoading";
import TodaysNews from "../../components/TodaysNews";
import Newsletter from "../../components/Newsletter";
import Marquee from "../../components/Marquee";
import ApiService from '../../services/api';
import Title from "../../components/Tilte";
import Cards from "../../components/Cards";

const News = () => {
    const {t} = useTranslation();
    const [news, setNews] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const getNews = () => {
        let isMounted = true;
        setLoading(true);
        if (isMounted) {
            ApiService.getNews()
                .then(res => {
                    const data = res.data.map(item => ({
                        ...item,
                        key: item.id
                    }));
                    if (isMounted) {
                        setNews(data);
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
            return <SkeletonLoading />
        }

        if (news) {
            return (
                <div className="pt-10">
                    <Title title={t('titles.trending')}/>
                    <Cards items={news}/>
                    <Newsletter/>
                    <div className="my-8 w-4/5 mx-auto h-px bg-gray-300"/>
                    <Title title={t('titles.more')}/>
                    <Cards items={news}/>
                </div>
            )
        }

        return null;
    }, [isLoading, news]);

    useEffect(() => {
        getNews();
    }, [])

    return (
        <div className="pb-14 mx-auto overflow-hidden">
            <TodaysNews/>
            <Marquee/>
            <div className="max-w-layout">{content}</div>
        </div>
    );
}

export default News;
