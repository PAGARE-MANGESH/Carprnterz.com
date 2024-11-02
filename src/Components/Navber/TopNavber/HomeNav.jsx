// import React from 'react';
// import logo from '../../../assets/NavbarIcons/Logo.jpg';
// // import Sidebar from '../Navber';
// import ToggleButton from './Toggel';
// // import './Home.css';

// import XchangeLang from './XchangeLang';

// // import LanguageSelector from '../../../MultipleLang/Lang/Language-selector';


// function Home() {


//     return (
//         <>



//             <div className="fixed top-0 left-0 right-0 flex p-2 bg-black bg-opacity-50 header h-14">
//                 <img src={logo} alt="Logo" className="ml-2 rounded-full logo" />




//                 <div className='flex'>


//                     <span className='ml-auto mr-2 md:block'>
//                         <XchangeLang />
//                         <langu />
//                         {/* <Dropdown /> */}
//                     </span>

//                     <span className='mt-1 ml-auto mr-2 md:block'>
//                         <ToggleButton />
//                     </span>
//                 </div>

//             </div>






//             {/* <LanguageSelector /> */}


//         </>
//     );
// }

// export default Home;






import React from 'react';
import logo from '../../../assets/NavbarIcons/Logo.jpg';
import ToggleButton from './Toggel';
import XchangeLang from './XchangeLang';

function Home() {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 flex items-center p-2 bg-black border rounded-lg shadow-lg bg-opacity-30 backdrop-blur-md border-gray-200/30 header h-14">
                {/* Logo */}
                <img src={logo} alt="Logo" className="object-contain w-10 h-10 ml-2 rounded-full logo" />

                <div className="flex items-center ml-auto mr-4 space-x-4">
                    {/* Language Selector */}
                    <span className="md:block">
                        <XchangeLang />
                    </span>

                    {/* Toggle Button */}
                    <span className="mt-1">
                        <ToggleButton />
                    </span>
                </div>
            </div>
        </>
    );
}

export default Home;
