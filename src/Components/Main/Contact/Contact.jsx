
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import AOS from 'aos';
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// import Swal from 'sweetalert2';

const ContactForm = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    let { t } = useTranslation()


    const handleSubmit = (e) => {
        e.preventDefault();
        // const { t } = useTranslation()
        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
        setMessage('')
        setTimeout(() => {
            alert(`${t('ContactPage.submitbtn')}\n${t('ContactPage.submitMessage')}`);
        }, 2000);
    };



    return (
        <fieldset className="p-6 mt-8 transition-all duration-300 ease-in-out transform border-2 border-blue-500 rounded-lg hover:border-blue-700">
            <legend className="px-6 mx-auto mb-8 font-semibold font-bold text-center text-blue-500 md:text-2xl">
                {t("ContactPage.title")}  👩‍💻
            </legend>
            <motion.form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-8 md:grid-cols-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div className="relative flex-1" whileHover={{ scale: 1.03 }}>
                    <label htmlFor="username" className='my-2 text-blue-500'>
                        {t("ContactPage.name")}
                    </label>

                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        placeholder={t("ContactPage.name")}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 text-blue-500 bg-transparent border border-blue-500 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />

                </motion.div>

                <motion.div className="relative flex-1" whileHover={{ scale: 1.03 }}>
                    <label htmlFor="phone" className='my-2 text-blue-500'>
                        {t("ContactPage.phone")}
                    </label>

                    <input
                        type="tel"
                        id="phone"
                        required
                        name="phone"
                        placeholder={t("ContactPage.phone")}
                        maxLength={12}
                        value={phone}
                        onChange={(e) => {
                            const onlyNums = e.target.value.replace(/[^0-9]/g, '');
                            setPhone(onlyNums);
                        }}
                        className="w-full p-2 text-blue-500 bg-transparent border border-blue-500 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />

                </motion.div>

                <motion.div className="relative flex-1 mt-4" whileHover={{ scale: 1.03 }}>
                    <label htmlFor="email" className='my-2 text-blue-500'>
                        {t("ContactPage.email")}
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder={t("ContactPage.email")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 text-blue-500 bg-transparent border border-blue-500 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />

                </motion.div>

                <motion.div className="relative flex-1 mt-4" whileHover={{ scale: 1.03 }}>

                    <label htmlFor="address" className='my-2 text-blue-500'>
                        {t("ContactPage.address")}
                    </label>

                    <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        placeholder={t("ContactPage.address")}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-2 text-blue-500 bg-transparent border border-blue-500 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />

                </motion.div>

                <motion.div className="relative col-span-1 mt-6 md:col-span-2" whileHover={{ scale: 1.03 }}>
                    <label htmlFor="message" className='my-2 text-blue-500'>
                        {t("ContactPage.message")}
                    </label>

                    <textarea
                        required
                        className="w-full p-2 text-blue-500 bg-transparent border border-blue-500 rounded-md peer focus:outline-none focus:ring-2 focus:ring-blue-300"
                        rows="4"
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        maxLength={400}
                        name="message"
                        placeholder={t("ContactPage.message")}
                    />
                </motion.div>


                <div className="flex justify-center col-span-1 mt-6 md:col-span-2">
                    <motion.button
                        type="submit"
                        className="px-6 py-3 text-blue-500 border border-blue-500 rounded-lg hover:text-white hover:bg-blue-500"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    // onClick={handleSubmit}
                    >
                        {t("ContactPage.sendMsg")}
                    </motion.button>
                </div>

            </motion.form>
        </fieldset>
    );
};


const GoogleMap = () => (

    <div className="w-full gap-6 p-2 mt-6 border border-blue-500 rounded-lg ">


        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50482.83394857099!2d75.31261088478634!3d19.87550342981866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815a369bc63%3A0x712d538b29a2a73e!2sChhatrapati%20Sambhajinagar%20(Aurangabad)%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1725380343536!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="transition-opacity duration-300 rounded-lg opacity-60 hover:opacity-80"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />


    </div>

);

const ScrollToTopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex justify-center m-10">
            <button
                onClick={scrollToTop}
                className="flex items-center justify-center p-2 text-white transition bg-blue-500 rounded-full hover:bg-blue-600"
            >
                <FaArrowUp className="text-xl animate-bounce" />
            </button>
        </div>
    );
};

const ContactPage = () => {


    const [loading, setLoading] = useState(true);

    useEffect(() => {

        AOS.init({ duration: 1000 });

        setTimeout(() => {
            setLoading(false);
        }, 1000);

    }, []);

    return (

        <div className="flex flex-col items-center justify-center w-full h-full px-1 mt-20 ">

            <motion.div
                className="grid w-full max-w-6xl grid-cols-1 gap-6 rounded-lg shadow-lg md:p-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >

                <div className="flex flex-col items-center justify-center gap-6 p-2 mt-6 rounded-lg text-start md:flex-row md:text-2xl ">

                    <div className="w-full md:w-1/1">
                        {loading ? (
                            <Skeleton
                                className="w-full h-96"
                                baseColor="#333333" // Light black base color
                                highlightColor="#4a4a4a" // Slightly lighter shade of light black
                            />
                        ) : (
                            <GoogleMap />
                        )}

                    </div>
                </div>

                <ContactForm />

            </motion.div>

            <ScrollToTopButton />
        </div>
    );
};

export default ContactPage;
