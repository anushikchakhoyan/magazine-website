import Item from "./item";

const Videos = () => {
    return (
        <div className="grid-wrapper py-12">
            <div className="grid-column col-item-1">
                <Item image={News1}/>

            </div>
            <div className="grid-column col-item-2">
                <Item image={Image4}/>

            </div>
            <div className="grid-column col-item-3">
                <Item image={Image2}/>
            </div>
        </div>
    )
}

export default Videos;