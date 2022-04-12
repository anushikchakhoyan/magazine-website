import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

import Newsletter from "../../components/Newsletter";
import Title from "../../components/Tilte";
import Lists from "../../components/Lists";
import ApiService from "../../services/api";

const Technology = () => {
    const {t} = useTranslation();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const getTechnologies = () => {
        let isMounted = true;
        if (isMounted) {
            setLoading(true);
            ApiService.getTechnologies()
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
        getTechnologies();
    },[])

    return (
        <>
            <div className="pb-14 max-w-layout">
                <Title title={t('titles.trending')}/>
                <Lists items={items}/>
            </div>
            <Newsletter/>
        </>
    )
}

export default Technology;
