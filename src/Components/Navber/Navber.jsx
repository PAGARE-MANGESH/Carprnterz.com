

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import 'aos/dist/aos.css';
import AOS from 'aos';

const Sidebar = () => {

    const { t } = useTranslation()
    const { home, about, product, contact } = t("Navber")

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <>
            {/* For Big Screen */}

            <div className='container fixed left-0 right-0 z-10 hidden mx-auto md:block bottom-10 rounded-b-2xl'>
                <nav className='p-1 drop-shadow-md ' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(1px)' }}>
                    <ul className='flex justify-center space-x-20 text-center text-gray-900 text-1xl'>
                        <li className="my-2 " title='Home'>
                            <Link to="/" className="flex flex-col items-center mr-10">
                                <i className="bx bx-home-alt nav__icon"></i>
                                <span className="nav__name">{home}</span>
                            </Link>
                        </li>
                        <li className="my-2 " title='About'>
                            <Link to="/about" className="flex flex-col items-center md:mr-10">
                                <i className="bx bx-user nav__icon"></i>
                                <span className="nav__name">{about}</span>
                            </Link>
                        </li>
                        <li className="my-2 " title='Projects'>
                            <Link to="/Product" className="flex flex-col items-center md:mr-10">
                                <i className="bx bx-book-alt nav__icon"></i>
                                <span className="nav__name">{product}</span>
                            </Link>
                        </li>
                        <li className="my-2" title='Contact'>
                            <Link to="/contact" className="flex flex-col items-center md:mr-10">
                                <i className="bx bx-briefcase-alt nav__icon"></i>
                                <span className="nav__name">{contact}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>


            {/* For Small Screen */}

            <nav className='fixed bottom-0 left-0 right-0 flex p-2 text-teal-900 md:hidden md:static rounded-t-3xl md:left-auto md:right-auto md:top-0 md:w-16 drop-shadow-md md:min-h-screen' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(1px)' }}>
                <ul className='flex justify-around w-full mt-0 text-2xl text-center text-gray-900 md:flex-col md:w-auto md:mt-16 md:pt-10'>
                    <li className="my-2" title='Home'>
                        <Link to="/" className="">
                            <i className="bx bx-home-alt nav__icon"></i>
                            <span className="nav__name"></span>
                        </Link>
                    </li>
                    <li className="my-2" title='About'>
                        <Link to="/about" className="">
                            <i className="bx bx-user nav__icon"></i>
                            <span className="nav__name"></span>
                        </Link>
                    </li>
                    <li className="my-2" title='Projects'>
                        <Link to="/Product" className="">
                            <i className="bx bx-book-alt nav__icon"></i>
                            <span className="nav__name"></span>
                        </Link>
                    </li>
                    <li className="my-2" title='Contact'>
                        <Link to="/contact" className="">
                            <i className="bx bx-briefcase-alt nav__icon"></i>
                            <span className="nav__name"></span>
                        </Link>
                    </li>
                    
                    {/* <li className="my-2"><ToggleButton /></li> */}
                </ul>
            </nav>
            
        </>
    );
};

export default Sidebar;
