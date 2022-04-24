import {useEffect, useMemo, useState} from "react";

import SkeletonLoading from "../../components/SkeletonLoading";
import CallToAction from "../../components/CallToAction";
import Newsletter from "../../components/Newsletter";
import BlogItems from "../../components/Sport/BlogItems";
import ApiService from "../../services/api";
import Cards from "../../components/Cards";
import SportHero from "../../components/Sport/Header";
import Marquee from "../../components/Marquee";

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
            return <SkeletonLoading/>
        }

        if (sports) {
            return <Cards items={sports}/>
        }

        return null;
    }, [isLoading, sports]);


    useEffect(() => {
        getSportNews();
    }, [])

    return (
        <>
            <div className="py-3 max-w-layout">
                <SportHero/>
            </div>
            <Marquee/>
            <div className="max-w-layout">
                <Newsletter/>
                {content}
                <BlogItems/>
                <CallToAction/>
            </div>
        </>
    );
}

export default Sport;
