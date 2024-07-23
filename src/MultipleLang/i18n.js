

import i18next from 'i18next';

import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';

import LanguageDetector from 'i18next-browser-languagedetector';

// import enTranslation from '../../public/locales/en/translation.json';
// import hiTranslation from '../../public/locales/hi/translation.json';


i18next

    .use(LanguageDetector)
    .use(initReactI18next)
    .use(Backend)
    .init({

        // lng: "en",
        fallbackLng: "en",
        debug: true,
        returnObjects: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },


        // resources: {
        //     en: {
        //         translation: enTranslation,
        //     },
        //     hi: {
        //         translation: hiTranslation,
        //     },
        // },

        // resources: {
        //     en: {
        //         translation: {
        //             greeting: "Hellos , Well Come ",
        //             Contecnt: 'This is the  xpensive Product',
        //             discription: {
        //                 line1: 'Hello males <1>{{Channel}}</1>',
        //                 line2: 'Hello females',
        //             }
        //         },

        //     },

        //     hi: {
        //         translation: {
        //             greeting: 'नमस्ते, स्वागत है आपका   ',
        //             Contecnt: 'यह बहुत किमती है',
        //             discription: {
        //                 line1: 'नमस्ते पुरुषो <1>{{Channel}}</1>',
        //                 line2: 'नमस्ते महिलाऊ',
        //             }
        //         },

        //     }
        // }


    })


export default i18next