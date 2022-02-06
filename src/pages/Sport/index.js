import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

import Title from "../../components/Tilte";
import Cards from "../../components/Cards";

const Sport = () => {
    const {t} = useTranslation();
    const [items, setItems] = useState([]);

    const getData = () => {
        fetch('sport.json'
            ,{
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
            <Title title={t('titles.sport')}/>
            <Cards items={items}/>
        </div>
    );
}

export default Sport;
