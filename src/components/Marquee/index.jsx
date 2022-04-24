import Slider from "react-slick";
import {map} from "lodash-es";
import {useTranslation} from "react-i18next";

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
    const {t} = useTranslation();
    const items = [
        {
            time: "09:20",
            text: t('marquee.desc_1'),
            link: "https://armenpress.am/arm/news/1081349.html"
        },
        {
            time: "10:00",
            text: t('marquee.desc_2'),
            link: "https://armenpress.am/arm/news/1081338.html"
        },
        {
            time: "10:15",
            link: "https://168.am/2022/04/23/1688235.html",
            text: t('marquee.desc_3')
        },
        {
            time: "10:40",
            text: t('marquee.desc_4'),
            link: "https://168.am/2022/04/23/1688471.html"
        },
        {
            time: "11:30",
            text: t('marquee.desc_5'),
            link: "https://168.am/2022/04/22/1688527.html"
        }
    ]

    return (
        <Slider {...settings}>
            {map(items, ({text, time, link}, index) => (
                <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className={`py-1 px-3 marquee-item bg-zinc-900 ${index % 2 === 0 && "!bg-zinc-800"}`}
                >
                    <span className="text-red-500">{time}</span>
                    <p className="text-white">{text}</p>
                </a>
            ))}
        </Slider>
    )
}

export default Marquee;