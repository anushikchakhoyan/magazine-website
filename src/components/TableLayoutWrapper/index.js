import PropTypes from "prop-types";

const TableLayoutWrapper = ({title, button, children}) => (
    <div className="w-full bg-white rounded-lg">
        <div className="py-3 px-5 flex justify-between items-center">
            <p className="text-xl font-bold">{title}</p>
            {button}
        </div>
        <div className="px-4">
            {children}
        </div>
    </div>
);

TableLayoutWrapper.propTypes = {
    button: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default TableLayoutWrapper;