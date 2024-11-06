import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const { t } = useTranslation()
    const { titles, footerDiscription, input } = t("FooterPage");
    const { about, contact, services, newsletter, follow } = titles;
    const { aboutDisc, contactDisc, servicesDisc, newsletter: newsletterDesc, follow: followDesc } = footerDiscription;
    const { placeHolder, btn } = input;


    return (

        <footer className="px-6 py-20 pb-40 mt-24 text-gray-500 bg-gray-900 dark:bg-gray-800">

            <div className="container grid grid-cols-1 gap-10 mx-auto text-center md:gap-10 md:grid-cols-3 lg:grid-cols-5 md:text-left">
                <div className="flex flex-col items-center md:items-center">
                    <h3 className="mb-6 text-2xl font-bold text-blue-500">{about}</h3>
                    <p className="text-md">{aboutDisc}</p>
                </div>
                <div className="flex flex-col items-center md:items-center">
                    <h3 className="mb-6 text-2xl font-bold text-blue-500 ">{contact}</h3>
                    <p> {contactDisc} </p>
                </div>
                <div className="flex flex-col items-center md:items-center">
                    <h3 className="mb-6 text-2xl font-bold text-blue-500">{services}</h3>
                    <p> {servicesDisc} </p>
                </div>
                <div className="flex flex-col items-center md:items-center">
                    <h3 className="mb-6 text-2xl font-bold text-blue-500">{newsletter}</h3>
                    <p className="mb-4 text-md">{newsletterDesc}</p>
                    <form className="w-full max-w-sm">
                        <input
                            type="email"
                            placeholder={placeHolder}
                            className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <button
                            type="submit"
                            className="w-full py-2 mt-2 text-white transition duration-300 bg-gray-700 rounded-md hover:bg-gray-600"
                        >
                            {btn}
                        </button>
                    </form>
                </div>

                <div className="flex flex-col items-center md:items-center">
                    <h3 className="mb-6 text-2xl font-bold text-blue-500">{follow}</h3>
                    <div className="flex space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-gray-400">
                            <FontAwesomeIcon icon={faFacebook} className="w-7 h-7" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-gray-400">
                            <FontAwesomeIcon icon={faTwitter} className="w-7 h-7" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-gray-400">
                            <FontAwesomeIcon icon={faInstagram} className="w-7 h-7" />
                        </a>
                    </div>

                </div>

            </div>


            <div className="mt-8 text-lg text-center text-gray-400 ">
                &copy; {new Date().getFullYear()} {followDesc} </div>

        </footer>

    );
}

export default Footer;
