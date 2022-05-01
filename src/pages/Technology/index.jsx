import {useTranslation} from "react-i18next";
import {Button, Skeleton} from "@mui/material";
import {useMemo, useState} from "react";

import Newsletter from "../../components/Newsletter";
import ListItem from "../../components/Lists/Item";
import FollowUs from "../../components/FollowUs";
import LiveNews from "../../components/LiveNews";
import Title from "../../components/Tilte";

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
                    <div className="flex-grow max-w-3xl border-r-2 border-gray-200">
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
            <div className="max-w-layout">
                <FollowUs/>
                {content}
            </div>
            <Newsletter/>
        </>
    )
}

export default Technology;
