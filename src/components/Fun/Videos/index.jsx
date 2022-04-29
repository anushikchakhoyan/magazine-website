import Item from "./item";
import News1 from "../../../assets/images/gallery/news-1.avif";
import Sport1 from "../../../assets/images/gallery/sport-1.avif";
import gallery1 from "../../../assets/images/gallery/gallery-1.avif";
import News2 from "../../../assets/images/gallery/news-2.avif";
import gallery5 from "../../../assets/images/gallery/gallery-5.avif";
import Business1 from "../../../assets/images/gallery/business-1.avif";
import Photo3 from "../../../assets/images/gallery/photo-3.avif";
import gallery4 from "../../../assets/images/gallery/gallery-4.avif";
import gallery7 from "../../../assets/images/gallery/gallery-7.avif";
import gallery6 from "../../../assets/images/gallery/gallery-6.avif";
import Sport4 from "../../../assets/images/gallery/sport-4.avif";
import Business2 from "../../../assets/images/gallery/business-2.avif";
import Photo1 from "../../../assets/images/gallery/photo-1.avif";
import News3 from "../../../assets/images/gallery/news-3.avif";
import Photo5 from "../../../assets/images/gallery/photo-5.avif";
import Sport2 from "../../../assets/images/gallery/sport-2.avif";
import gallery8 from "../../../assets/images/gallery/gallery-8.avif";
import Business3 from "../../../assets/images/gallery/business-3.avif";
import Sport3 from "../../../assets/images/gallery/sport-3.avif";
import Photo2 from "../../../assets/images/gallery/photo-2.avif";
import Photo4 from "../../../assets/images/gallery/photo-4.avif";

const Videos = () => {
    return (
        <>
            <div className="grid gap-10 py-12"
                 style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
                <Item image={gallery7}/>
                <Item image={Sport3}/>
                <Item image={gallery6}/>
                <Item image={Business1}/>
                <Item image={Photo2}/>
                <Item image={Sport4}/>
                <Item image={Photo5}/>
                <Item image={News2}/>
                <Item image={Business2}/>
                <Item image={gallery1}/>
                <Item image={Photo3}/>
                <Item image={News3}/>
                <Item image={Sport1}/>
                <Item image={Photo4}/>
                <Item image={Photo1}/>
                <Item image={gallery4}/>
                <Item image={gallery8}/>
                <Item image={News1}/>
                <Item image={gallery5}/>
                <Item image={Business3}/>
                <Item image={Sport2}/>
            </div>
        </>
    )
}

export default Videos;