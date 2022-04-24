import React from "react";
import {map} from "lodash-es";
import Slider from "react-slick";
import {useTranslation} from "react-i18next";

import nvidia from "../../assets/images/newsSlider/nvidia.jpg";
import corona from "../../assets/images/newsSlider/corona.webp";
import bitcoin from "../../assets/images/newsSlider/bitcoin.jpg";
import community from "../../assets/images/newsSlider/community.jpeg";

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

const TodaysNews = () => {
    const {t} = useTranslation();
    const sliderItems = [
        {
            date: "21/03/22",
            background: community,
            title: t('sliderNews.text1'),
            tag: t('sliderNews.tags.community'),
            link: "https://b24.am/finance/315997.html"
        },
        {
            date: "22/03/22",
            background: bitcoin,
            title: t('sliderNews.text2'),
            tag: t('sliderNews.tags.financial'),
            link: "https://b24.am/finance/315997.html"
        },
        {
            date: "23/03/22",
            background: nvidia,
            title: t('sliderNews.text3'),
            tag: t('sliderNews.tags.technology'),
            link: "https://b24.am/finance/315997.html"
        },
        {
            date: "24/03/22",
            background: corona,
            tag: t('sliderNews.tags.corona'),
            title: t('sliderNews.text4'),
            link: "https://168.am/2022/04/23/1688738.html"
        },
    ]

    return (
        <Slider {...settings}>
            {map(sliderItems, ({tag, title, link, date, background}, index) => (
                <React.Fragment key={index}>
                    <div
                        className="h-96 p-8 z-10 flex flex-col items-start bg-cover relative
                               before:left-0 before:-z-10 before:top-0 before:w-full
                               before:h-full before:absolute before:bg-black/50 overflow-x-hidden"
                        style={{backgroundImage: `url(${background})`, height: "550px"}}
                    >
                    <span className="secondary-font-family text-base text-white bg-red-600 py-1 px-5">
                        {tag}
                    </span>
                        <a href={link} target="_blank" rel="noreferrer" className="text-white hover:underline">
                            <h2 className="pt-4 text-2xl font-medium">{title}</h2>
                        </a>
                        <span className="text-lg text-white">{date}</span>
                    </div>
                </React.Fragment>
            ))}
        </Slider>
    )
}

export default TodaysNews;