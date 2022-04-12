import PropTypes from "prop-types";

const Title = ({title, note, classnames}) => (
    <div className="px-3 space-y-2">
        <h1 className={`font-medium text-gray-800 text-3xl secondary-font-family ${classnames}`}>
            {title}
        </h1>
        {note && (
            <p className="text-gray-600 max-w-lg mx-auto text-lg">
                {note}
            </p>
        )}
    </div>
)

Title.propTypes = {
    note: PropTypes.string,
    classnames: PropTypes.string,
    title: PropTypes.string.isRequired,
};

export default Title;