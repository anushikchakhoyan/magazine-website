

       import i18n from 'i18next';
       import {initReactI18next} from 'react-i18next';
       import LanguageDetector from 'i18next-browser-languagedetector';
       import armTranslation from "./arm/arm.json";
       import enTranslation from "./en/en.json";

       const resources = {
           en: {translation: enTranslation},
           arm: {translation: armTranslation}
       };

       const DETECTION_OPTIONS = {
           order: ['localStorage', 'navigator'],
           caches: ['localStorage']
       };

       i18n
           .use(LanguageDetector)
           .use(initReactI18next)
           .init({
               fallbackLng: 'en',
               interpolation: {
                   escapeValue: false,
               },
               resources,
               detection: DETECTION_OPTIONS,
           });

       export default i18n;


       