const Content = ({title, thumbnail, description}) => {
    return (
        <div className="py-8 px-3">
            <h1 className="font-bold text-3xl py-3">{title}</h1>
            <hr className="py-3"/>
            <img className="w-1/2 object-cover" src={thumbnail} alt={title}/>
            {description && (
                <div className="text-gray-700 text-base md:columns-2 py-4 whitespace-pre-wrap"
                     dangerouslySetInnerHTML={{__html: description}}
                />
            )}
        </div>
    )
}

export default Content;