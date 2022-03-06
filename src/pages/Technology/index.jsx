import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

import Newsletter from "../../components/Newsletter";
import Title from "../../components/Tilte";
import Lists from "../../components/Lists";

const Technology = () => {
    const {t} = useTranslation();
    const [items, setItems] = useState([]);

    const getData = () => {
        fetch('technology.json',{
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
        <>
            <div className="pb-14">
                <Title title={t('titles.trending')}/>
                <Lists items={items}/>
            </div>
            <Newsletter/>
        </>
    )
}

export default Technology;
