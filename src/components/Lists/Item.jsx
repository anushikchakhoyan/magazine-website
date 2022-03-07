import {HiBriefcase} from "react-icons/hi";
import {MdLocationOn} from "react-icons/md";
import {BsFillCalendarFill} from "react-icons/bs";

const ListItem = ({href, title, type, desc, date, location}) => (
    <li className="p-5 mb-2 bg-white rounded-md shadow-sm">
        <a href={href}>
            <div className="justify-between sm:flex space-y-2">
                <div className="flex-1">
                    <h3 className="text-xl font-medium text-cyan-600">
                        {title}
                    </h3>
                    <p className="text-gray-500 mt-2 pr-2">
                        {desc}
                    </p>
                </div>
                <div className="mt-5 space-y-4 text-sm sm:mt-0 sm:space-y-2">
                      <span className="flex items-center text-gray-500">
                          <BsFillCalendarFill className="h-5 w-5 mr-2"/>
                          {date}
                      </span>
                </div>
            </div>
            <div className="items-center space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                                        <span className="flex items-center text-gray-500">
         <HiBriefcase className="h-5 w-5 mr-2"/>
                                            {type}
                                        </span>
                <span className="flex items-center text-gray-500">
                    <MdLocationOn className="h-5 w-5 mr-2"/>
                    {location}
                                        </span>
            </div>
        </a>
    </li>
)

export default ListItem;