import PropTypes from "prop-types";

const Title = ({title, classnames}) => (
    <h1 className={`font-bold text-gray-700 text-3xl px-3 py-6 secondary-font-family ${classnames}`}>
        {title}
    </h1>
)

Title.propTypes = {
    classnames: PropTypes.string,
    title: PropTypes.string.isRequired,
};

export default Title;