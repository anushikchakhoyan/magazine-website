import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

import Title from "../../components/Tilte";
import Cards from "../../components/Cards";

const News = () => {
    const {t} = useTranslation();
    const [items, setItems] = useState([]);

    const getData = () => {
        fetch('newsData.json',{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setItems(data);
            });
    }

    useEffect(() => {
        getData();
    },[])

    return (
        <div className="pb-14">
            <Title title={t('titles.trending')}/>
            <Cards items={items}/>
            <div className="my-8 w-4/5 mx-auto h-px bg-gray-300" />
            <Title title={t('titles.more')} classnames="text-red-500" />
            <Cards items={items}/>
        </div>
    );
}

export default News;
