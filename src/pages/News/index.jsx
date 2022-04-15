import {map} from "lodash-es";
import {Skeleton} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useEffect, useMemo, useState} from "react";

import TodaysNews from "../../components/TodaysNews";
import Newsletter from "../../components/Newsletter";
import ApiService from '../../services/api';
import Title from "../../components/Tilte";
import Cards from "../../components/Cards";
import Marquee from "../../components/Marquee";

const News = () => {
    const {t} = useTranslation();
    const [news, setNews] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const getNews = () => {
        let isMounted = true;
        if (isMounted) {
            setLoading(true);
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
        if (isLoading && !news) {
            return (
                <div className="pt-10">
                    <Skeleton animation="wave" width="20%" />
                    <div className="grid gap-8 my-4 justify-center"
                         style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
                    >
                        {map(news, () => (
                            <div className="w-full">
                                <Skeleton animation="wave" variant="rectangular" className="w-full" height={118} />
                                <Skeleton animation="wave" width="60%" />
                                <Skeleton animation="wave" />
                                <Skeleton animation="wave" />
                            </div>
                        ))}
                    </div>
                </div>
            )
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
