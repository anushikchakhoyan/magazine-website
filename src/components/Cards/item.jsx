import {map} from "lodash-es";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const CardItem = ({item}) => {
    const {id, title, link, type, date, thumbnail, caption, hashtags} = item;

    return (
        <div className="rounded overflow-hidden">
            <Link to={{ pathname: `${link}/${id}`, state: item }}>
                <img className="w-full object-cover" src={thumbnail} alt={title}/>
            </Link>

            <div className="p-3">
                <p className="py-2 text-xs">
                    {type} - {date}
                </p>
                <Link to={{ pathname: `${link}/${id}`, state: item }}>
                    <p className="font-bold text-base mb-1">{title}</p>
                </Link>
                <p className="text-gray-700 text-sm">
                    {caption}
                </p>
            </div>
            <div className="px-4 pt-2">
                {map(hashtags, (hashtag, index) => (
                    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1
                               text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                   #{hashtag}
                </span>
                ))}
            </div>
        </div>
    )
}

CardItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        link: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        caption: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
        hashtags: PropTypes.array
    })
};

export default CardItem;