import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                the: "The",
                appName: "Magazine",
                loading: 'Loading...',
                goBack: 'Go Back home',
                abbreviation: 'International news',
                notFound: {
                    title: 'OOPS! Page Not Found',
                    desc: 'We are sorry, but the page you requested was not found',
                },
                privacy: {
                    note: "Updated and Effective as of May 3, 2022",
                },
                menu: {
                    news: "News",
                    sport: "Sport",
                    about: "About Us",
                    terms: "Terms",
                    faq: "FAQ",
                    privacy: "Privacy Notice",
                    music: "Music",
                    business: "Business",
                    travel: "Travel",
                    outOfArmenia: "Armenia",
                    technology: "Technology",
                },
                footer: {
                    allRights: "© {{date}} All rights reserved",
                },
                faq: {
                    title: "Frequently Asked Questions",
                    desc: "Answered all frequently asked questions, Still confused? feel free to contact us."
                },
                newsletter: {
                    subscribe: "Subscribe",
                    title: "Subscribe to our newsletter",
                    desc: " Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.\n",
                    notSpam: "No spam ever, we are care about the protection of your data. \n Read our "
                },
                titles: {
                    todaysNews: "Todays News",
                    trending: "Trending",
                    sport: "Sport News",
                    more: "You may also be interested in:"
                },
                technology: {
                    desc: "How new technology is transforming cities and societies, from the latest apps to advances in renewable energy, computing, transportation, and more."
                },
                business: {
                    desc: "The Magazine's coverage of business and finance: the stock market, the economy, companies behaving badly, and more."
                }
            }
        }
    },
    lng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
