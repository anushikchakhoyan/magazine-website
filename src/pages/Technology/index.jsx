import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Button, Skeleton} from "@mui/material";
import {useEffect, useMemo, useState} from "react";

import Newsletter from "../../components/Newsletter";
import ListItem from "../../components/Lists/Item";
import ApiService from "../../services/api";

const Technology = () => {
    const {t} = useTranslation();
    const [isLoading, setLoading] = useState(false);
    const [technologies, setTechnologies] = useState([]);

    const getTechnologies = () => {
        let isMounted = true;
        setLoading(true);
        if (isMounted) {
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
                <ul className="max-w-3xl">
                    {technologies.map((item, index) => <ListItem {...item} key={index}/>)}
                    <Button variant="outlined" color="secondary" className="flex-center !mx-auto">{t('loadMore')}</Button>
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
            <div className="max-w-layout">
                <div className="my-8 bg-gray-50 p-8 w-auto mx-auto flex-center">
                    <p>
                        Discover Magazine writers you already follow on.
                        Learn more
                        <Link to="/about" className="underline px-1">about us</Link>
                        or
                        <Link to="/join" className="underline px-1">join us</Link>
                    </p>
                </div>
                {content}
            </div>
            <Newsletter/>
        </>
    )
}

export default Technology;
