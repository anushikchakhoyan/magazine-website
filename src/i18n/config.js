import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
       en: {
           translation: {
               login: 'Login',
               appName: 'Admin',
               not_found: 'Not Found',
               dashboard: 'Dashboard',
           }
       }
    },
    lng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
