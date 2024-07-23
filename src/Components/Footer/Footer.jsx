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

        <footer className="bg-gray-800 text-white py-20 px-6 mt-24">

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-24 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-bold mb-6">{about}</h3>
                    <p className="text-md">{aboutDisc}</p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-bold mb-6">{contact}</h3>
                    <p> {contactDisc} </p>
                    {/* <p className="text-md">Email: <a href="mailto:contact@carpenters.com" className="underline hover:text-gray-400">contact@carpenters.com</a></p>
                    <p className="text-md">Phone: <a href="tel:+1234567890" className="underline hover:text-gray-400">(123) 456-7890</a></p> */}
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-bold mb-6">{services}</h3>
                    {/* <p className="text-md">Custom Furniture</p>
                    <p className="text-md">Home Renovations</p>
                    <p className="text-md">Deck Building</p> */}
                    <p> {servicesDisc} </p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-bold mb-6">{newsletter}</h3>
                    <p className="text-md mb-4">{newsletterDesc}</p>
                    <form className="w-full max-w-sm">
                        <input
                            type="email"
                            placeholder={placeHolder}
                            className="w-full px-4 py-2 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />
                        <button
                            type="submit"
                            className="w-full mt-2 bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600 transition duration-300"
                        >
                            {btn}
                        </button>
                    </form>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-bold mb-6">{follow}</h3>
                    <div className="flex space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                            <FontAwesomeIcon icon={faFacebook} className="w-7 h-7" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                            <FontAwesomeIcon icon={faTwitter} className="w-7 h-7" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                            <FontAwesomeIcon icon={faInstagram} className="w-7 h-7" />
                        </a>
                    </div>
                </div>
            </div>


            <div className="mt-8 text-center text-lg text-gray-400">
                &copy; {new Date().getFullYear()} {followDesc} </div>

        </footer>

    );
}

export default Footer;
