import {useLocation} from "react-router";
import {useEffect, useState} from "react";

import FollowUs from "../../components/FollowUs";
import Content from "./Content";

const SingleNews = () => {
    const location = useLocation();
    const [item, setItem] = useState({});

    useEffect(() => {
        setItem(location.state);
    },[]);

    return (
        <div className="max-w-layout">
            <Content {...item}/>
            <FollowUs/>
        </div>
    );
}

export default SingleNews;
