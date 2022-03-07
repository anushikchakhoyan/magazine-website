import {useLocation} from "react-router";
import {useEffect, useState} from "react";

const SingleNews = () => {
    const location = useLocation();
    const [item, setItem] = useState({});

    useEffect(() => {
        setItem(location.state);
    },[]);

    return (
        <div className="max-w-6xl mx-auto py-8">
            <h1 className="font-bold text-3xl py-3">{item.title}</h1>
            <hr className="py-3" />
            <img className="w-1/2 object-cover" src={item.thumbnail} alt={item.title}/>
            {item.description && (
                <div className="text-gray-700 text-base max-w-lg py-4 whitespace-pre-wrap"
                     dangerouslySetInnerHTML={{__html: item.description}} />
            )}
        </div>
    );
}

export default SingleNews;
