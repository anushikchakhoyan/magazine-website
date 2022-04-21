import {useTranslation} from "react-i18next";
import Title from "../../components/Tilte";

import "./index.css";

import Image1 from "../../assets/images/gallery/gallery-1.avif";
import Image2 from "../../assets/images/gallery/gallery-2.avif";
import Image3 from "../../assets/images/gallery/gallery-3.avif";
import Image4 from "../../assets/images/gallery/gallery-4.avif";
import Image5 from "../../assets/images/gallery/gallery-5.avif";
import Image6 from "../../assets/images/gallery/gallery-6.avif";
import Image7 from "../../assets/images/gallery/gallery-7.avif";
import Image8 from "../../assets/images/gallery/gallery-8.avif";

import Other1 from "../../assets/images/gallery/sport-1.avif";
import Other2 from "../../assets/images/gallery/sport-2.avif";
import Other3 from "../../assets/images/gallery/sport-3.avif";
import Other4 from "../../assets/images/gallery/sport-4.avif";

import News1 from "../../assets/images/gallery/news-1.avif";
import News2 from "../../assets/images/gallery/news-2.avif";
import News3 from "../../assets/images/gallery/news-3.avif";

import Sport1 from "../../assets/images/gallery/sport-1.avif";
import Sport2 from "../../assets/images/gallery/sport-2.avif";
import Sport3 from "../../assets/images/gallery/sport-3.avif";
import Sport4 from "../../assets/images/gallery/sport-4.avif";

import Business1 from "../../assets/images/gallery/business-1.avif";
import Business2 from "../../assets/images/gallery/business-2.avif";
import Business3 from "../../assets/images/gallery/business-3.avif";

const Videos = () => {
    const {t} = useTranslation();

    return (
        <div className="max-w-layout">
            <Title title={t('menu.fun')}/>
            <div className="grid-wrapper py-12">
                <div className="grid-column col-item-1">
                    <img src={News1} alt=""/>
                    <img src={Image1} alt=""/>
                    <img src={News2} alt=""/>
                    <img src={Business1} alt=""/>
                    <img src={Image3} alt=""/>
                    <img src={Sport1} alt=""/>
                </div>
                <div className="grid-column col-item-2">
                    <img src={Image4} alt=""/>
                    <img src={Image7} alt=""/>
                    <img src={Image5} alt=""/>
                    <img src={Sport4} alt=""/>
                    <img src={Image6} alt=""/>
                    <img src={Business2} alt=""/>
                </div>
                <div className="grid-column col-item-3">
                    <img src={Image2} alt=""/>
                    <img src={Sport2} alt=""/>
                    <img src={Image8} alt=""/>
                    <img src={Business3} alt=""/>
                    <img src={Sport3} alt=""/>
                    <img src={News3} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Videos;
