import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

import Newsletter from "../../components/Newsletter";
import ApiService from '../../services/api';
import Title from "../../components/Tilte";
import Cards from "../../components/Cards";

const News = () => {
    const {t} = useTranslation();
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

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
                        setItems(data);
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
        getNews();
    },[])

    return (
        <div className="pb-14">
            <Title title={t('titles.trending')} />
            <Cards items={items} />
            <Newsletter />
            <div className="my-8 w-4/5 mx-auto h-px bg-gray-300" />
            <Title title={t('titles.more')} />
            <Cards items={items} />
        </div>
    );
}

export default News;
