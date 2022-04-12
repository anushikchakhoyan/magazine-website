import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

import Newsletter from "../../components/Newsletter";
import Cards from "../../components/Cards";
import ApiService from "../../services/api";

const Sport = () => {
    const {t} = useTranslation();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const getSportNews = () => {
        let isMounted = true;
        if (isMounted) {
            setLoading(true);
            ApiService.getSportNews()
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
        getSportNews();
    },[])

    return (
        <div className="pb-14 max-w-layout">
            <Newsletter />
            <Cards items={items}/>
        </div>
    );
}

export default Sport;
