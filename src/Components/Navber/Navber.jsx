

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import 'aos/dist/aos.css';
import AOS from 'aos';

const Sidebar = () => {

    const { t } = useTranslation()
    const {home , about , product , contact} = t("Navber")

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <>
            {/* For Big Screen */}

            <div className=' hidden  md:block container mx-auto fixed bottom-10 left-0 right-0 z-10 rounded-b-2xl'>
                <nav className='drop-shadow-md p-1 ' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(1px)' }}>
                    <ul className='flex justify-center space-x-20 text-center text-1xl text-gray-900'>
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

            <nav className='md:hidden flex fixed bottom-0 left-0 right-0 md:static  rounded-t-3xl md:left-auto md:right-auto md:top-0 md:w-16  drop-shadow-md p-2 md:min-h-screen text-teal-900' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(1px)' }}>

                <ul className='flex md:flex-col justify-around w-full md:w-auto mt-0 md:mt-16 text-center md:pt-10 text-2xl text-gray-900'>
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
