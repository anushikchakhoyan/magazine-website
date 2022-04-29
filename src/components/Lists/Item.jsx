import {BsBookmarksFill} from "react-icons/bs";
import {Tooltip} from "@mui/material";
import {Trans, useTranslation} from "react-i18next";

const ListItem = ({href, title, duration, desc, date, basedOn}) => {
    const {t} = useTranslation();

    return (
        <li className="p-5 my-8">
            <a href={href}>
                <div className="flex-1">
                    <div className="flex justify-between items-center space-x-4">
                        <div className="flex items-center space-x-4">
                            <img className="w-10 h-10 rounded-full"
                                 src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                 alt="" />
                            <div className="space-y-1 font-medium">
                                <div>Jese Leos</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    {t('technologies.joinedIn')}
                                </div>
                            </div>
                        </div>
                        <div className="flex-center text-gray-500 space-x-2">
                            <p>
                                {date}
                            </p>
                            <Tooltip title={t('tooltips.savePost')}>
                               <span><BsBookmarksFill className="text-gray-700 hover:text-red-700"/></span>
                            </Tooltip>
                        </div>
                    </div>
                    <h3 className="py-2 text-xl font-bold">
                        {title}
                    </h3>
                    <p>
                        {desc}
                    </p>
                </div>
                <div className="items-center pt-6 space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                <span className="text-gray-500">
                   {duration} - {basedOn}
                </span>
                </div>
            </a>
        </li>
    )
}

export default ListItem;