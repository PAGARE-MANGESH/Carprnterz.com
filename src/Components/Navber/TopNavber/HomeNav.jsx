import React from 'react';
import logo from '../../../assets/NavbarIcons/Logo.jpg';
// import Sidebar from '../Navber';
import ToggleButton from './Toggel';
// import './Home.css';

import XchangeLang from './XchangeLang';

// import LanguageSelector from '../../../MultipleLang/Lang/Language-selector';


function Home() {


    return (
        <>

            <div className="flex fixed top-0 left-0 right-0  p-2 header   h-14" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(1px)' }}>
                <img src={logo} alt="Logo" className="logo ml-2 rounded-full" />



                <div className='flex'>


                    <span className='md:block ml-auto mr-2'>
                        <XchangeLang />
                        <langu />
                        {/* <Dropdown /> */}
                    </span>

                    <span className='md:block ml-auto mr-2 mt-1'>

                        <ToggleButton />
                    </span>


                </div>

            </div>

            {/* <LanguageSelector /> */}


        </>
    );
}

export default Home;
