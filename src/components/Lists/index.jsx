import ListItem from "./Item";

const Lists = ({items}) => (
    <ul className="py-12 px-6">
        {items.map((item, index) => <ListItem {...item} key={index} />)}
    </ul>
)

export default Lists;