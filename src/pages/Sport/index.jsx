import {useMemo, useState} from "react";
import {useTranslation} from "react-i18next";

import SportBg from "../../assets/images/gallery/sport-cover-bg.avif";
import SkeletonLoading from "../../components/SkeletonLoading";
import CallToAction from "../../components/CallToAction";
import Newsletter from "../../components/Newsletter";
import Marquee from "../../components/Marquee";
import Cards from "../../components/Cards";
import Title from "../../components/Tilte";
import Hero from "../../components/Hero";

const Sport = () => {
    const {t} = useTranslation();
    const [isLoading, setLoading] = useState(false);
    const sports = [
        {
            id: 6,
            link: "/news",
            type: t('news.item_6.type'),
            date: t('news.item_6.date'),
            title: t('news.item_6.title'),
            thumbnail: "https://images.unsplash.com/photo-1610969524113-bae462bb3892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            caption: t('news.item_6.caption'),
            hashtags: [
                t('news.item_6.hashtags.tag_1'),
            ],
            description: t('news.item_6.desc'),
        },
        {
            id: 6,
            link: "/news",
            type: t('news.item_6.type'),
            date: t('news.item_6.date'),
            title: t('news.item_6.title'),
            thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            caption: t('news.item_6.caption'),
            hashtags: [
                t('news.item_6.hashtags.tag_1'),
            ],
            description: t('news.item_6.desc'),
        },
        {
            id: 6,
            link: "/news",
            type: t('news.item_6.type'),
            date: t('news.item_6.date'),
            title: t('news.item_6.title'),
            thumbnail: "https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            caption: t('news.item_6.caption'),
            hashtags: [
                t('news.item_6.hashtags.tag_1'),
            ],
            description: t('news.item_6.desc'),
        },
    ];

    const content = useMemo(() => {
        if (isLoading) {
            return <SkeletonLoading/>
        }

        if (sports) {
            return (
                <>
                    <Title
                        title={t('blog.title')}
                        classnames="text-red-600 pt-16"
                    />
                    <p className="px-4">{t('blog.subTitle')}</p>
                    <Cards items={sports}/>
                </>
            )
        }

        return null;
    }, [isLoading, sports]);

    return (
        <>
            <div className="py-14 lg:py-3 lg:pt-12 max-w-layout">
                <Hero bg={SportBg} desc={t('sport.desc')} link="https://www.panarmenian.net/arm/news/299435/" />
            </div>
            <Marquee/>
            <div className="max-w-layout">
                <Newsletter/>
                {content}
                <CallToAction/>
            </div>
        </>
    );
}

export default Sport;
