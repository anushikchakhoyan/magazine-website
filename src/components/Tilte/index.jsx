import PropTypes from "prop-types";

const Title = ({title}) => (
    <h1 className="font-bold text-3xl m-2">
        {title}
    </h1>
)

Title.propTypes = {
    title: PropTypes.string.isRequired
};

export default Title;