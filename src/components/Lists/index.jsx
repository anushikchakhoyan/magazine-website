import ListItem from "./Item";

const Lists = ({items}) => (
    <ul>
        {items.map((item, index) => <ListItem {...item} key={index} />)}
    </ul>
)

export default Lists;