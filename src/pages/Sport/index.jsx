import {useEffect, useMemo, useState} from "react";

import SkeletonLoading from "../../components/SkeletonLoading";
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
        if (isLoading) {
            return <SkeletonLoading />
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
