



import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {

    const { i18n } = useTranslation();
    const [language, setLanguage] = useState('Marathi');




    useEffect(() => {
        const storedLanguage = localStorage.getItem('language') || 'English';
        const languageCode = storedLanguage !== 'English' ? 'mr' : 'en';
        i18n.changeLanguage(languageCode).then(() => {
            setLanguage(storedLanguage);
        }).catch(err => {
            console.error('Failed to initialize language', err);
        });
    }, []);

    const toggleLanguage = () => {



        const newLanguage = language !== 'English' ? 'English' : 'Marathi';

        const languageCode = newLanguage !== 'English' ? 'en' : 'mr';


        i18n.changeLanguage(languageCode).then(() => {

            setLanguage(newLanguage);

        }).catch(err => {

            console.error('Failed to change language', err);

        });


    };


    return (
        <div className="relative inline-block text-left">
            <button
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-blue-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={toggleLanguage}
            >
                {language}
                <svg fill="#D1D5DB" className="w-5 h-5 ml-4 -mr-1" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 477.427 477.427" xml:space="preserve">
                    <g>
                        <polygon points="101.82,187.52 57.673,143.372 476.213,143.372 476.213,113.372 57.181,113.372 101.82,68.733 80.607,47.519 
		                  0,128.126 80.607,208.733 	"/>
                        <polygon points="396.82,268.694 375.607,289.907 420,334.301 1.213,334.301 1.213,364.301 420,364.301 375.607,408.694 
		                  396.82,429.907 477.427,349.301 	"/>
                    </g>
                </svg>
            </button>
        </div>
    );
};

export default LanguageDropdown;
