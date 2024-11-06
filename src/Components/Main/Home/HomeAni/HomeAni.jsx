// "use client";
// import React from "react";
// // import { SparklesCore } from "./HomeAniConf";
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';


// export default function SparklesPreview() {

//     const { t } = useTranslation();

//     return (
//         (<div
//             className="h-[40rem] w-full  md:pt-28 md:-mb-40 flex flex-col items-center justify-center overflow-hidden rounded-md">
//             <p className="text-gray-500 md:text-2xl"> {t("HomePage.greeting")}👷‍♂️ </p>
//             <h1
//                 className="relative z-20 text-2xl font-bold text-center text-gray-500 duration-300 hover:text-blue-400 md:text-4xl lg:text-9xl">
//                 {t("HomePage.title")} 👷‍♂️
//             </h1>

//             <Link to="/about">
//                 <button className="p-4 my-10 text-blue-500 underline transition-colors duration-300 border-blue-500 underline-offset-8 hover:border rounded-xl hover:text-blue-500">
//                     Explore Our Cart 😇
//                 </button>
//             </Link>

//         </div>)
//     );
// }











// "use client";
// import React from "react";
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// export default function SparklesPreview() {
//     const { t } = useTranslation();

//     return (
//         <div className="flex flex-col items-center justify-center w-full h-auto overflow-hidden rounded-md md:pt-28 md:-mb-40 md:flex-row">


//             <div className="flex flex-col items-center text-center md:items-start md:ml-10 md:text-left">
//                 <p className="text-gray-500 md:text-2xl">
//                     {t("HomePage.greeting")} 👷‍♂️
//                 </p>

//                 <h1 className="relative z-20 text-2xl font-bold text-gray-500 duration-300 hover:text-blue-400 md:text-4xl lg:text-9xl">
//                     {t("HomePage.title")} 👷‍♂️
//                 </h1>

//                 <Link to="/about">
//                     <button className="p-4 my-10 text-blue-500 underline transition-colors duration-300 border-blue-500 underline-offset-8 hover:border rounded-xl hover:text-blue-500">
//                         Explore Our Cart 😇
//                     </button>
//                 </Link>
//             </div>
//         </div>
//     );
// }




"use client";
import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import img from '../../../../assets/Home.jpg'

export default function SparklesPreview() {
    const { t } = useTranslation();

    return (

        // <div className="flex flex-col items-center justify-center w-full px-6 overflow-hidden rounded-md mb-28 hauto md:pt-28 md:flex-row lg:px-12">

        //     <div className="flex flex-col items-center mt-40 text-center md:mt-20 md:items-start md:ml-10 md:text-left">

        //         <p className="text-lg text-gray-500 md:text-xl lg:text-2xl">
        //             {t("HomePage.greeting")}
        //         </p>

        //         <h1 className="relative z-20 text-2xl font-bold text-gray-500 duration-300 hover:text-blue-400 sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl">
        //             {t("HomePage.title")} 👷‍♂️
        //         </h1>

        //         <Link to="/Product">
        //             <button className="p-3 my-6 text-blue-500 underline transition-colors border border-blue-500 md:text-xl underline-offset-4 rounded-xl hover:text-blue-500 md:p-4 md:my-10">
        //                 {t("HomePage.BTN")} 😇
        //             </button>
        //         </Link>

        //     </div>
        // </div>



        <div
            className="flex flex-col items-center justify-center w-full h-auto px-6 overflow-hidden bg-center bg-cover rounded-md bg-white/30 backdrop-blur-sm md:mb-28 md:pt-28 md:flex-row lg:px-12"
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <div className="flex flex-col items-center w-full px-2 py-2 mt-40 text-center rounded-md md:px-20 md:py-10 md:mt-20 md:items-center md:ml-10 md:text-left bg-black/80 backdrop-blur-sm">
                <p className="pt-4 text-lg text-gray-500 md:text-xl lg:text-2xl">
                    {t("HomePage.greeting")}
                </p>

                <h1 className="relative z-20 text-2xl font-bold text-gray-500 duration-300 hover:text-blue-400 sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl">
                    {t("HomePage.title")} 👷‍♂️
                </h1>

                <Link to="/Product">
                    <button className="p-3 my-6 text-blue-500 underline transition-colors border border-blue-500 md:text-xl underline-offset-4 rounded-xl hover:text-blue-500 md:p-4 md:my-10">
                        {t("HomePage.BTN")} 😇
                    </button>
                </Link>
            </div>

        </div>


    );
}
