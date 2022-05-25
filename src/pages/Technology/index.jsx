import {useMemo, useState} from "react";
import {useTranslation} from "react-i18next";
import {BsBookmarksFill} from "react-icons/bs";
import {Button, Skeleton, Tooltip} from "@mui/material";

import FollowUs from "../../components/FollowUs";
import LiveNews from "../../components/LiveNews";
import Title from "../../components/Tilte";

const ListItem = (
    {
        href,
        desc,
        date,
        title,
        basedOn,
        duration,
        imageSrc
    },
    fromBusiness = false) => {
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
                                <p>{date}</p>
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
                    <h3 className={`${fromBusiness ? 'text-lg max-w-xl' : 'text-xl'} py-2 font-bold group-hover:text-red-600`}>
                        {title}
                    </h3>
                    <p className={`${fromBusiness ? 'text-sm max-w-xl' : 'text-base'}`}>
                        {desc}
                    </p>
                </div>
                {duration && basedOn && (
                    <div
                        className="items-center text-gray-500 pt-3 space-y-4 text-sm sm:flex sm:space-x-4 sm:space-y-0">
                        {duration} - {basedOn}
                    </div>
                )}
            </a>
        </li>
    )
}

const Technology = () => {
    const {t} = useTranslation();
    const [isLoading] = useState(false);

    const technologies = [
        {
            "title": t('technologies.item_1.title'),
            "desc": t('technologies.item_1.desc'),
            "date": "25/04/2022",
            "duration": t('technologies.item_1.duration'),
            "basedOn": t('technologies.item_1.basedOn'),
            "href": "https://medium.com/@jimtdev/its-time-to-move-away-from-gmail-989bd859a81c"
        },
        {
            "title": t('technologies.item_2.title'),
            "desc": t('technologies.item_2.desc'),
            "date": "04/01/2022",
            "duration": t('technologies.item_2.duration'),
            "basedOn": t('technologies.item_2.basedOn'),
            "href": "https://medium.com/bitlogix/node-js-18-released-afc14f676aba"
        },
        {
            "title": t('technologies.item_3.title'),
            "desc": t('technologies.item_3.desc'),
            "date": "02/03/2022",
            "duration": t('technologies.item_3.duration'),
            "basedOn": t('technologies.item_3.basedOn'),
            "href": "https://miro.medium.com/max/1400/1*O2HhVU0M-2JwS9VTkPWzeA.gif"
        },
        {
            "title": t('technologies.item_4.title'),
            "desc": t('technologies.item_4.desc'),
            "date": "13/01/2022",
            "duration": t('technologies.item_4.duration'),
            "basedOn": t('technologies.item_4.basedOn'),
            "href": "https://medium.com/dare-to-be-better/6-algorithms-every-developer-should-know-f78b609c7e7c"
        },
        {
            "title": t('technologies.item_5.title'),
            "desc": t('technologies.item_5.desc'),
            "date": "22/02/2022",
            "duration": t('technologies.item_5.duration'),
            "basedOn": t('technologies.item_5.basedOn'),
            "href": "javascript:void(0)"
        },
        {
            "title": t('technologies.item_1.title'),
            "desc": t('technologies.item_1.desc'),
            "date": "25/04/2022",
            "duration": t('technologies.item_1.duration'),
            "basedOn": t('technologies.item_1.basedOn'),
            "href": "https://medium.com/@jimtdev/its-time-to-move-away-from-gmail-989bd859a81c"
        },
        {
            "title": t('technologies.item_2.title'),
            "desc": t('technologies.item_2.desc'),
            "date": "04/01/2022",
            "duration": t('technologies.item_2.duration'),
            "basedOn": t('technologies.item_2.basedOn'),
            "href": "https://medium.com/bitlogix/node-js-18-released-afc14f676aba"
        },
    ];

    const content = useMemo(() => {
        if (isLoading) {
            Array.from({length: 4}, (_, i) => (
                <div key={i} className="m-8">
                    <Skeleton
                        height={118}
                        animation="wave"
                        variant="rectangular"
                        className="w-full rounded"
                    />
                </div>
            ))
        }

        if (technologies) {
            return (
                <div className="max-w-layout flex flex-col space-y-8 lg:space-y-0 lg:flex-row">
                    <div className="flex-grow max-w-3xl lg:border-r-2 border-gray-200">
                        <Title
                            title={t('titles.whatRead')}
                            classnames="text-red-600"
                        />
                        <p className="px-3 leading-relaxed font-bold text-gray-800 text-lg">
                            {t('titles.whatReadNote')}
                        </p>
                        <ul>
                            {technologies.map((item, i) => <ListItem {...item} index={i} key={i}/>)}
                        </ul>
                        <Button
                            variant="outlined"
                            color="secondary"
                            className="flex-center !mx-auto"
                        >
                            {t('loadMore')}
                        </Button>
                    </div>
                    <LiveNews maxHeight='unset'/>
                </div>
            )
        }

        return null;
    }, [isLoading, technologies]);

    return (
        <>
            <div className="py-14 lg:pt-12 lg:pb-6 max-w-layout">
                {content}
            </div>
            <FollowUs/>
        </>
    )
}

export default Technology;
