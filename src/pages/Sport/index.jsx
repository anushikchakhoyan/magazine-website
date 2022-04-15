import {map} from "lodash-es";
import {Skeleton} from "@mui/material";
import {useEffect, useMemo, useState} from "react";

import CallToAction from "../../components/CallToAction";
import Newsletter from "../../components/Newsletter";
import BlogItems from "../../components/BlogItems";
import ApiService from "../../services/api";
import Cards from "../../components/Cards";

const Sport = () => {
    const [sports, setSports] = useState([]);
    const [isLoading, setLoading] = useState(false);

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
                        setSports(data);
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
        if (isLoading && !sports) {
            return (
                <div className="pt-10">
                    <Skeleton animation="wave" width="20%" />
                    <div className="grid gap-8 my-4 justify-center"
                         style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
                    >
                        {map(sports, () => (
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

        if (sports) {
            return <Cards items={sports} />
        }

        return null;
    }, [isLoading, sports]);


    useEffect(() => {
        getSportNews();
    },[])

    return (
        <div className="pb-14 max-w-layout">
            <Newsletter />
            {content}
            <BlogItems />
            <CallToAction />
        </div>
    );
}

export default Sport;
