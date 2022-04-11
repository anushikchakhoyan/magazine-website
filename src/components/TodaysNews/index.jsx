import React from "react";
import {map} from "lodash-es";
import Slider from "react-slick";

import Image2 from "../../assets/images/newsSlider/2.webp";
import Image3 from "../../assets/images/newsSlider/3.jpg";
import Image4 from "../../assets/images/newsSlider/4.jpeg";
import Image5 from "../../assets/images/newsSlider/5.jpeg";

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
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
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 780,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const sliderItems = [
    {
        title: "The world is getting warmer",
        date: "March 29, 2022",
        tag: "climate",
        background: Image3,
    },
    {
        title: "The latest news",
        date: "April 1, 2022",
        tag: "live",
        background: Image2,
    },
    {
        title: "Joy for airport bosses as passengers return",
        date: "April 22, 2022",
        tag: "coronavirus",
        background: Image4,
    },
    {
        title: "Financial advices",
        date: "March 29, 2022",
        tag: "politics",
        background: Image5,
    },
]

const TodaysNews = () => (
    <Slider {...settings}>
        {map(sliderItems, ({tag, title, date, background}, index) => (
            <React.Fragment key={index}>
                <div
                    className="h-96 p-8 z-10 flex flex-col items-start bg-cover relative
                               before:left-0 before:-z-10 before:top-0 before:w-full
                               before:h-full before:absolute before:bg-black/50 overflow-x-hidden"
                     style={{backgroundImage: `url(${background})`, height: "500px"}}
                >
                    <span className="secondary-font-family text-base text-white bg-red-600 py-1 px-5">
                        {tag}
                    </span>
                    <h2 className="pt-4 text-2xl text-white font-medium">{title}</h2>
                    <span className="text-lg text-white">{date}</span>
                </div>
            </React.Fragment>
        ))}
    </Slider>
)

export default TodaysNews;