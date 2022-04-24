const ListItem = ({href, title, type, desc, date, location}) => (
    <li className="p-5 my-8">
        <a href={href}>
            <div className="flex-1">
                 <span className="flex items-center text-gray-500">
                    {date}
                </span>
                <h3 className="py-2 text-xl font-bold">
                    {title}
                </h3>
                <p>
                    {desc}
                </p>
            </div>
            <div className="items-center pt-6 space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                <span className="text-gray-500">
                    5 min read
                </span>
                <span className="text-gray-500">
                    Based on your reading history
                </span>
            </div>
        </a>
    </li>
)

export default ListItem;