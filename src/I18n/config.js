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
                    desc:
                        "We have prepared this privacy notice (“Privacy Notice,” “Notice,” “Privacy Policy,” or “Policy”) to explain to you how we collect, use, and share information and Personal Data (as defined under applicable law) we obtain through your use of the Internet sites, applications and online services (“Services”) that are operated by, controlled by or affiliated with Vox Media, LLC, and any of its subsidiaries, affiliates, brands and entities that it controls, including Curbed, Eater, Grub Street, New York Magazine, Polygon, Recode, SB Nation, Select All, The Cut, The Daily Intelligencer, The Strategist, The Verge, Vox, Vulture, and other affiliated sites and applications (collectively “we,” “us,” or “our”). This Privacy Notice only covers information collected through the Services and via direct communications between you and Vox Media, LLC, and does not cover any information collected at any other website, application or otherwise by us (unless specifically stated), including when you call us, write to us, or communicate with us in any manner other than through the Services. By using the Services, you consent to such collection, use and sharing of your information and Personal Data and agree to the terms of this Privacy Notice.\n\nWe will only process your Personal Data in accordance with applicable data protection and privacy laws. For the purposes of UK and EU data protection legislation, the data controller is Vox Media, Inc. of Vox Media Inc., 1201 Connecticut Ave. NW, 11th Floor, Washington, DC 20036."
                },
                menu: {
                    news: "News",
                    sport: "Sport",
                    about: "About Us",
                    terms: "Terms",
                    faq: "FAQ",
                    privacy: "Privacy Notice",
                    article: "Article",
                    business: "Business",
                    education: "Education",
                    outOfArmenia: "Armenia",
                    technology: "Technology",
                },
                footer: {
                    allRights: "© {{date}} All rights reserved",
                    stayUpToDate: "Stay up to date"
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
