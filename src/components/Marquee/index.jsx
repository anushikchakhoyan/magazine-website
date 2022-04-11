import Slider from "react-slick";
import {map} from "lodash-es";
import ApiService from "../../services/api";
import {useEffect, useState} from "react";

const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Marquee = () => {
    const [items, setItems] = useState([]);

    const getPrivacyData = () => {
        let isMounted = true;
        if (isMounted) {
            ApiService.getMarquee()
                .then(res => {
                    if (isMounted) {
                        setItems(res.data);
                    }
                })
                .catch(error => console.log(error));
        }
        return () => {
            isMounted = false;
        };
    }

    useEffect(() => {
        getPrivacyData();
    }, [])

    return (
        <Slider {...settings}>
            {map(items, ({text, time}, index) => (
                <div key={index} className={`py-1 px-3 ${index % 2 === 0 ? "bg-zinc-800" : "bg-zinc-900"}`}>
                    <span className="text-red-500">{time}</span>
                    <p className="text-white">{text}</p>
                </div>
            ))}
        </Slider>
    )
}

export default Marquee;