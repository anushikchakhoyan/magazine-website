import {BsBookmarksFill} from "react-icons/bs";
import {useTranslation} from "react-i18next";
import {Tooltip} from "@mui/material";

const ListItem = ({href, imageSrc, title, duration, desc, date, basedOn}, fromBusiness = false) => {
    const {t} = useTranslation();

    return (
        <li className={`group ${!fromBusiness ? 'p-5 py-8' : 'py-6'}`}>
            <a href={href} target="_blank" rel="noreferrer">
                <div className="flex-1">
                    {!fromBusiness && (
                        <div className="flex justify-between items-center space-x-4">
                            <div className="flex items-center space-x-4">
                                <img
                                    alt=""
                                    className="w-10 h-10 rounded-full"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                />
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
                    )}
                    {!!imageSrc && (
                        <div className="h-72 max-w-xl">
                            <img src={imageSrc} alt="Sport" className="object-cover w-full h-full"/>
                        </div>
                    )}
                    <h3 className={`${fromBusiness ? 'text-lg max-w-xl' : 'text-xl' } py-2 font-bold group-hover:text-red-600`}>
                        {title}
                    </h3>
                    <p className={`${fromBusiness ? 'text-sm max-w-xl' : 'text-base'}`}>
                        {desc}
                    </p>
                </div>
                {duration && basedOn && (
                    <div className="items-center text-gray-500 pt-3 space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                        {duration} - {basedOn}
                    </div>
                )}
            </a>
        </li>
    )
}

export default ListItem;