import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
               menu: {
                   news: "News",
                   sport: "Sport",
                   about: "About Us",
                   terms: "Terms",
                   faq: "FAQ",
                   privacy: "Privacy Policy",
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
                   trending: "Trending",
                   sport: "Sport News",
                   more: "You may also be interested in:"
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
