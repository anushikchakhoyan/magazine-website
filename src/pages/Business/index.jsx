import {Pagination} from "@mui/lab";
import {useTranslation} from "react-i18next";

import BusinessBg from "../../assets/images/gallery/business-bg.avif";
import ListItem from "../../components/Lists/Item";
import Title from "../../components/Tilte";
import Hero from "../../components/Hero";

const Business = () => {
    const {t} = useTranslation();
    const businesses = [
        {
            date: "25/04/2022",
            desc: t('business.item_1.desc'),
            title: t('business.item_1.title'),
            href: "https://www.azatutyun.am/a/31820058.html",
            imageSrc: "https://gdb.rferl.org/F0A792D2-08EC-4054-8588-6C93BA5B39B1_w1023_r1_s.jpg"
        },
        {
            date: "02/03/2022",
            desc: t('business.item_4.desc'),
            title: t('business.item_4.title'),
            href: "https://www.azatutyun.am/a/31779996.html",
            imageSrc: "https://gdb.rferl.org/02ab0000-0aff-0242-e0db-08da13353e43_w1023_r1_s.jpg"
        },
        {
            date: "09/04/2022",
            desc: t('business.item_3.desc'),
            title: t('business.item_3.title'),
            href: "https://www.azatutyun.am/a/31794902.html",
            imageSrc: "https://gdb.rferl.org/051e0000-0aff-0242-68eb-08da1a3305c7_w1023_r1_s.jpg"
        },
        {
            date: "04/01/2022",
            desc: t('business.item_2.desc'),
            title: t('business.item_2.title'),
            href: "https://www.azatutyun.am/a/31813013.html",
            imageSrc: "https://paperclip.pk/wp-content/uploads/2021/04/70GSM-A4.jpg"
        },
    ]

    const leftSideItems = [
        {
            imageSrc: 'https://thetravelshots.com/wp-content/uploads/2021/11/Wine-tours-in-Armenia.jpg',
            text: t('business.item_6.text'),
            link: 'https://www.azatutyun.am/a/31765336.html'
        },
        {
            imageSrc: 'https://gdb.rferl.org/C037A766-2C40-4285-B0F8-4E1E16689F7A_w1023_r1_s.jpg',
            text: t('business.item_7.text'),
            link: 'https://www.panarmenian.net/arm/news/299435/'
        },
        {
            imageSrc: 'https://gdb.rferl.org/caab0000-0aff-0242-4866-08d9b58d3d54_w1023_r1_s.jpg',
            text: t('business.item_8.text'),
            link: 'https://www.azatutyun.am/a/31633373.html'
        },
        {
            imageSrc: 'https://gdb.rferl.org/027a0000-0aff-0242-0f6e-08da0c249a78_w1023_r1_s.jpg',
            text: t('business.item_6.text'),
            link: 'https://www.azatutyun.am/a/31765336.html'
        },
        {
            imageSrc: 'https://gdb.rferl.org/C037A766-2C40-4285-B0F8-4E1E16689F7A_w1023_r1_s.jpg',
            text: t('business.item_7.text'),
            link: 'https://www.panarmenian.net/arm/news/299435/'
        },
        {
            imageSrc: 'https://gdb.rferl.org/caab0000-0aff-0242-4866-08d9b58d3d54_w1023_r1_s.jpg',
            text: t('business.item_8.text'),
            link: 'https://www.azatutyun.am/a/31633373.html'
        }
    ]

    return (
        <>
            <div className="py-14 lg:pt-12 lg:pb-6 max-w-layout">
                <Hero
                    fromBusiness
                    bg={BusinessBg}
                    desc={t('business.cover')}
                    link="https://economictimes.indiatimes.com/markets/stocks/news/stocks-in-focus-biocon-iifl-finance-chennai-petro-and-more/videoshow/91167473.cms"
                />
                <div className="pt-12 pb-4 space-y-2">
                    <Title title={t('titles.business')} classnames="text-red-600"/>
                    <p className="px-3">{t('business.desc')}</p>
                </div>
                <div className="max-w-layout py-4 flex flex-col md:space-x-8 space-y-8 lg:space-y-0 lg:flex-row">
                    <div className="flex-1 max-w-3xl">
                        <ul>
                            {businesses.map((item, i) =>
                                <ListItem {...item} index={i} key={i} fromBusiness/>
                            )}
                        </ul>
                    </div>
                    <div className="w-full space-y-4 md:max-w-md">
                        {leftSideItems.map((item, i) =>
                            <div className="my-8 h-60 group relative cursor-pointer">
                                <img src={item.imageSrc} alt="Sport" className="object-cover w-full h-full"/>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white bg-black/40 absolute bottom-0 pb-5 group-hover:underline underline-offset-4"
                                >
                                    <Title title={item.text} classnames="p-3 text-sm text-white"/>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                <Pagination count={6} color="primary" className="mx-auto py-8 w-full"/>
            </div>
        </>
    );
}

export default Business;
