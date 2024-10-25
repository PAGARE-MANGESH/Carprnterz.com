import React from 'react'
import { useTranslation } from 'react-i18next';
import ContactImg from '../../../assets/Email.svg'

const Contact = () => {

    const { t } = useTranslation()
    
    const { title, name, email, message, sendMsg } = t("ContactPage")

    return (
        <div className="p-2 mt-16 mb-8 text-center">
            
            <h2 className="mb-4 text-2xl font-bold text-gray-600 "> {title} </h2>

            <div className="p-1 mt-5 mb-5 border border-orange-200 sm:mt-0" data-aos="fade-right" data-aos-delay="800">

                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142801.02799908794!2d75.16877348345594!3d19.859945636526735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9815a369bc63%3A0x712d538b29a2a73e!2sAurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1713765646738!5m2!1sen!2sin"
                    
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                    className='p-2 shadow-xl rounded-xl'
                ></iframe> */}

                <img src={ContactImg} alt=""
                className='justify-center h-80 w-100'
                
                />

            </div>

            <form className="max-w-md mx-auto text-gray-800 drop-shadow-md">
                <div className="mb-4">

                    <input
                        type="text"
                        placeholder={name}
                        className="w-full p-2 text-center border rounded-lg"
                        required
                    />

                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder={email}
                        className="w-full p-2 text-center border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        placeholder={message}
                        className="w-full p-2 text-center border rounded-lg"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full p-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 "
                >
                    {sendMsg}
                </button>
            </form>

        </div>
    )
}

export default Contact
