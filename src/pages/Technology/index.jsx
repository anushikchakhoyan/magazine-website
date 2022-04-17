import {Skeleton} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useEffect, useMemo, useState} from "react";

import Newsletter from "../../components/Newsletter";
import ListItem from "../../components/Lists/Item";
import Title from "../../components/Tilte";
import ApiService from "../../services/api";

const Technology = () => {
    const {t} = useTranslation();
    const [isLoading, setLoading] = useState(false);
    const [technologies, setTechnologies] = useState([]);

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
                        setTechnologies(data);
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
            Array.from({length: 4}, (_, i) => (
                <div key={i} className="m-8">
                    <Skeleton
                        height={118}
                        animation="wave"
                        variant="rectangular"
                        className="w-full rounded"
                    />
                </div>
            ))
        }


        if (technologies) {
            return (
                <ul>
                    {technologies.map((item, index) => <ListItem {...item} key={index}/>)}
                </ul>
            )
        }

        return null;
    }, [isLoading, technologies]);

    useEffect(() => {
        getTechnologies();
    }, [])

    return (
        <>
            <div className="max-w-layout pt-8">
                <Title title={t('titles.recommended')}/>
                {content}
            </div>
            <Newsletter/>
        </>
    )
}

export default Technology;
