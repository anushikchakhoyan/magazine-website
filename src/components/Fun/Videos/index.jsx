import {useTranslation} from "react-i18next";
import {Pagination} from "@mui/lab";

import Item from "./item";

const Videos = () => {
    const {t} = useTranslation();

    const videos = [
        {
            imageSrc: 'https://i.ytimg.com/vi/AtveZ8K0JT0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAAyW4sALiZQj1_pheSdaCs6b6pw',
            link: 'https://www.youtube.com/watch?v=MKMEG7ZpTo0&ab_channel=OTV',
            text: t('videos.text_1'),
            desc: t('videos.desc_1'),
        },
        {
            imageSrc: 'https://i.ytimg.com/an_webp/Rv6LzZoLlm0/mqdefault_6s.webp?du=3000&sqp=CI6YvpMG&rs=AOn4CLDnEpjeZE_6OEf30uGpMASRepEPNA',
            link: 'https://www.youtube.com/watch?v=Rv6LzZoLlm0&ab_channel=NBCNews',
            text: t('videos.text_2'),
            desc: t('videos.desc_2'),
        },
        {
            imageSrc: 'https://i.ytimg.com/vi/9Auq9mYxFEE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZ-4qQTPRKtFapLxRfp9f3sY_3cQ',
            link: 'https://www.youtube.com/watch?v=9Auq9mYxFEE&ab_channel=SkyNews',
            text: t('videos.text_4'),
            desc: t('videos.desc_4'),
        },
        {
            imageSrc: 'https://i.ytimg.com/an_webp/AJzYk3mf5Us/mqdefault_6s.webp?du=3000&sqp=CJaQvpMG&rs=AOn4CLCWodWMtwR5y4-gdy6IsWtbNUGWWw',
            link: 'https://www.youtube.com/watch?v=AJzYk3mf5Us&ab_channel=FutureTech',
            text: t('videos.text_3'),
            desc: t('videos.desc_3'),
        },
        {
            imageSrc: 'https://i.ytimg.com/vi/dMUlq_bgbdU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD27ikz3kHhvaASIdmiLb1eN-t9oA',
            link: 'https://www.youtube.com/watch?v=dMUlq_bgbdU&ab_channel=ABCNews',
            text: t('videos.text_5'),
            desc: t('videos.desc_5'),
        },
        {
            imageSrc: 'https://i.ytimg.com/an_webp/7vQznLKEfBs/mqdefault_6s.webp?du=3000&sqp=CNe0vpMG&rs=AOn4CLBZJQv7SXh8hUKzsQ_hr1I-9XA5Ww',
            link: 'https://www.youtube.com/watch?v=7vQznLKEfBs&ab_channel=Alux.com',
            text: t('videos.text_5'),
            desc: t('videos.desc_5'),
        },
    ]
    return (
        <div className="pb-12">
            <p className="py-10">The most amazing videos from the BBC</p>
            <div className="grid gap-10 pb-8"
                 style={{gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))'}}>
                {videos.map((item, i) => (
                    <Item {...item} key={i}/>
                ))}
            </div>
            <Pagination count={4} color="primary" className="mx-auto py-8 w-full"/>
        </div>
    )
}

export default Videos;