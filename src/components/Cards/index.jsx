import {map} from "lodash-es";
import PropTypes from "prop-types";

import CardItem from "./item";

const Cards = ({items, classnames}) => (
    <div className="grid gap-8 py-6 px-4 justify-items-center"
         style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
    >
        {map(items, item => <CardItem item={item} key={item.id} classnames={classnames} />)}
    </div>
);

Cards.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            link: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            thumbnail: PropTypes.string.isRequired,
            caption: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            hashtags: PropTypes.array
        })
    )
};


export default Cards;
