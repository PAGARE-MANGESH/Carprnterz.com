

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Sidebar = () => {
    const { t } = useTranslation();
    const { home, about, product, contact } = t("Navber");

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
                <nav className='p-1 drop-shadow-md' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(1px)' }}>
                    <ul className='flex justify-center space-x-20 text-center text-1xl'>
                        <li className="my-2" title='Home'>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `flex flex-col items-center mr-10 ${isActive ? "text-blue-500 border-b-2 border-blue-500" : ""}`
                                }>
                                <i className="bx bx-home-alt nav__icon"></i>
                                <span className="nav__name">{home}</span>
                            </NavLink>
                        </li>
                        <li className="my-2" title='About'>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `flex flex-col items-center md:mr-10 ${isActive ? "text-blue-500 border-b-2 border-blue-500" : ""}`
                                }>
                                <i className="bx bx-user nav__icon"></i>
                                <span className="nav__name">{about}</span>
                            </NavLink>
                        </li>
                        <li className="my-2" title='Projects'>
                            <NavLink
                                to="/Product"
                                className={({ isActive }) =>
                                    `flex flex-col items-center md:mr-10 ${isActive ? "text-blue-500 border-b-2 border-blue-500" : ""}`
                                }>
                                <i className="bx bx-book-alt nav__icon"></i>
                                <span className="nav__name">{product}</span>
                            </NavLink>
                        </li>
                        <li className="my-2" title='Contact'>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `flex flex-col items-center md:mr-10 ${isActive ? "text-blue-500 border-b-2 border-blue-500" : ""}`
                                }>
                                <i className="bx bx-briefcase-alt nav__icon"></i>
                                <span className="nav__name">{contact}</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* For Small Screen */}
            <nav className='fixed bottom-0 left-0 right-0 flex p-2 md:hidden md:static rounded-t-3xl md:left-auto md:right-auto md:top-0 md:w-16 drop-shadow-md md:min-h-screen' style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(1px)' }}>
                <ul className='flex justify-around w-full mt-0 text-2xl text-center md:flex-col md:w-auto md:mt-16 md:pt-10'>
                    <li className="my-2" title='Home'>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${isActive ? "text-blue-500 border-b-2 border-blue-500" : ""}`
                            }>
                            <i className="bx bx-home-alt nav__icon"></i>
                        </NavLink>
                    </li>
                    <li className="my-2" title='About'>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `${isActive ? "text-blue-500 border-b-2 border-blue-500" : ""}`
                            }>
                            <i className="bx bx-user nav__icon"></i>
                        </NavLink>
                    </li>
                    <li className="my-2" title='Projects'>
                        <NavLink
                            to="/Product"
                            className={({ isActive }) =>
                                `${isActive ? "text-blue-500 border-b-2 border-blue-500" : ""}`
                            }>
                            <i className="bx bx-book-alt nav__icon"></i>
                        </NavLink>
                    </li>
                    <li className="my-2" title='Contact'>
                        <NavLink
                            to="/Contact"
                            className={({ isActive }) =>
                                `${isActive ? "text-blue-500 border-b-2 border-blue-500" : ""}`
                            }>
                            <i className="bx bx-briefcase-alt nav__icon"></i>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Sidebar;
