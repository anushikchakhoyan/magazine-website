import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
       en: {
           translation: {
               login: 'Log in',
               logout: 'Log Out',
               appName: 'Welcome',
               layout: 'Layout',
               goBack: 'Go Back home',
               notFound: {
                   title: 'OOPS! Page Not Found',
                   desc: 'We are sorry, but the page you requested was not found',
               },
               auth: {
                   wait: "Wait...",
                   submit: "Submit",
                   username: "Username",
                   password: "Password"
               },
               users: "Users",
               posts: "Posts",
           }
       }
    },
    lng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
