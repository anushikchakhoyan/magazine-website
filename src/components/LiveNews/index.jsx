import Title from "../Tilte";
import {useTranslation} from "react-i18next";

const LiveNews = ({maxHeight = '510px'}) => {
    const {t} = useTranslation();

    const sportItems = [
        {
            time: '13:20',
            link: 'https://168.am/2022/04/26/1690904.html',
            text: t('sport.items.text_1')
        },
        {
            time: '13:00',
            link: 'https://168.am/2022/04/26/1689581.html',
            text: t('sport.items.text_2')
        },
        {
            time: '12:45',
            text: t('sport.items.text_3'),
            link: "https://168.am/2022/04/27/1691433.html"
        },
        {
            time: '12:30',
            text: t('sport.items.text_4'),
            link: 'https://168.am/2022/04/18/1685843.html',
        },
        {
            time: '12:15',
            text: t('sport.items.text_5'),
            link: "https://168.am/2022/04/16/1685235.html"
        },
        {
            time: '12:00',
            text: t('sport.items.text_6'),
            link: "https://168.am/2022/04/25/1689416.html"
        },
        {
            time: '10:35',
            link: 'https://168.am/2022/04/26/1690904.html',
            text: t('sport.items.text_1')
        },
        {
            time: '10:25',
            link: 'https://168.am/2022/04/26/1689581.html',
            text: t('sport.items.text_2')
        },
        {
            time: '10:15',
            text: t('sport.items.text_3'),
            link: "https://168.am/2022/04/27/1691433.html"
        },
        {
            time: '10:00',
            text: t('sport.items.text_4'),
            link: 'https://168.am/2022/04/18/1685843.html',
        },
        {
            time: '09:45',
            text: t('sport.items.text_5'),
            link: "https://168.am/2022/04/16/1685235.html"
        },
        {
            time: '09:30',
            text: t('sport.items.text_6'),
            link: "https://168.am/2022/04/25/1689416.html"
        },
        {
            time: '09:25',
            text: t('sport.items.text_7'),
            link: "https://168.am/2022/04/06/1680070.html"
        },
        {
            time: '09:20',
            text: t('sport.items.text_8'),
            link: "https://168.am/2022/03/12/1666013.html"
        },
        {
            time: '09:10',
            text: t('sport.items.text_9'),
            link: "https://168.am/2022/02/17/1653648.html"
        },
        {
            time: '09:00',
            text: t('sport.items.text_10'),
            link: "https://168.am/2022/03/10/1664785.html"
        },
        {
            time: '14:20',
            link: 'https://168.am/2022/01/28/1644031.html',
            text: t('sport.items.text_13')
        },
        {
            time: '14:00',
            link: 'https://168.am/2022/01/29/1644155.html',
            text: t('sport.items.text_12')
        },
        {
            time: '13:45',
            text: t('sport.items.text_11'),
            link: "https://168.am/2022/04/17/1685399.html"
        }
    ];

    return (
        <div className="flex-1">
            <Title
                title={t('menu.live')}
                classnames="text-white tracking-wide text-lg bg-red-600 px-6 py-2"
            />

            <div className="overflow-y-auto p-4 space-y-3" style={{maxHeight: maxHeight}}>
                {sportItems.map(({time, text}) => (
                    <div className="group item flex items-start cursor-pointer
                                        space-x-2 px-3 py-1 hover:bg-red-50">
                        <p className="pt-1 text-sm font-bold text-red-600">{time}</p>
                        <p className="text-gray-900">{text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LiveNews;