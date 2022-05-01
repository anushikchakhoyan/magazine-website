import Item from "./item";

const Videos = () => {
    return (
        <>
            <p>The most amazing videos from the BBC</p>

            <div className="grid gap-10 py-12"
                 style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>

            </div>
        </>
    )
}

export default Videos;