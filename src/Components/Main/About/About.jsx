// // // import React from 'react';
// // // import img from '../../../assets/NavbarIcons/Logo.jpg'

// // // const About = () => {
// // //   return (
// // //     <div className="container mx-auto p-6 mt-20 text-gray-700">
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //         <div className="flex flex-col items-center text-gray-500">
// // //           <img
// // //             src={img}
// // //             alt="Carpenter"
// // //             className="w-40 h-40 rounded-full"
// // //           />
// // //           <h2 className="text-2xl font-semibold mt-4">John Doe</h2>
// // //           <p >Master Carpenter</p>
// // //         </div>
// // //         <div className='text-gray-500 '>
// // //           <h1 className="text-4xl font-bold mb-4">About Me</h1>
// // //           <p className="text-xl mb-4">
// // //             With over 20 years of experience in carpentry, I have honed my skills in crafting high-quality wooden structures and furniture. My dedication to detail and passion for woodworking ensures that every project I undertake is completed to the highest standards.
// // //           </p>
// // //           <p className="text-xl mb-4">
// // //             From custom furniture to home renovations, I take pride in bringing my clients' visions to life. Let's work together to create something beautiful and lasting.
// // //           </p>
// // //         </div>
// // //       </div>
// // //       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 ">
// // //         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
// // //           <h3 className="text-2xl font-semibold mb-2">Custom Furniture</h3>
// // //           <p>
// // //             I specialize in creating custom furniture pieces that are both functional and beautiful. Each piece is crafted with precision and care.
// // //           </p>
// // //         </div>
// // //         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
// // //           <h3 className="text-2xl font-semibold mb-2">Home Renovations</h3>
// // //           <p>
// // //             Transform your home with my expert carpentry services. From kitchens to basements, I can help you achieve your dream home.
// // //           </p>
// // //         </div>
// // //         <div className="bg-gray-100  p-6 rounded-lg shadow-lg">
// // //           <h3 className="text-2xl font-semibold mb-2">Woodworking Projects</h3>
// // //           <p>
// // //             Whether it's a small repair or a large-scale project, I approach every job with the same level of dedication and expertise.
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default About;



// // import React from 'react';

// // import { useTranslation } from 'react-i18next';


// // import img from '../../../assets/NavbarIcons/Logo.jpg';



// // const About = () => {

// //   const { t } = useTranslation();

// //   const { title, about, experience, services } = t("AboutPage");



// //   return (
// //     <div className="container mx-auto p-6 mt-20 text-gray-700">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <div className="flex flex-col items-center text-gray-500">
// //           <img
// //             src={img}
// //             alt="Carpenter"
// //             className="w-40 h-40 rounded-full shadow-lg"
// //           />
// //           <h2 className="text-2xl font-semibold mt-4">Bhagwan Pagare</h2>
// //           <p className="text-lg">Master Carpenter</p>
// //           <p className="text-lg">Phone : +91 8600860102</p>
// //           <h1 className='mt-20 text-center'>{about}</h1>

// //         </div>
// //         <div className="text-gray-500">
// //           <h1 className="text-4xl font-bold mb-4">{title}</h1>
// //           <p className="text-xl mb-4">

// //             {experience}
// //           </p>
// //           <p className="text-xl mb-4">
// //             {services}
// //           </p>
// //         </div>
// //       </div>
// //       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
// //         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
// //           <h3 className="text-2xl font-semibold mb-2">Custom Furniture</h3>
// //           <p>
// //             I specialize in creating custom furniture pieces that are both functional and beautiful. Each piece is crafted with precision and care.
// //           </p>
// //         </div>
// //         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
// //           <h3 className="text-2xl font-semibold mb-2">Home Renovations</h3>
// //           <p>
// //             Transform your home with my expert carpentry services. From kitchens to basements, I can help you achieve your dream home.
// //           </p>
// //         </div>
// //         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
// //           <h3 className="text-2xl font-semibold mb-2">Woodworking Projects</h3>
// //           <p>
// //             Whether it's a small repair or a large-scale project, I approach every job with the same level of dedication and expertise.
// //           </p>
// //         </div>
// //         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
// //           <h3 className="text-2xl font-semibold mb-2">Consultation</h3>
// //           <p>
// //             I offer consultation services to help you plan and execute your carpentry projects effectively, ensuring quality results.
// //           </p>
// //         </div>
// //         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
// //           <h3 className="text-2xl font-semibold mb-2">Repair Services</h3>
// //           <p>
// //             Get your wooden furniture and structures repaired by a professional. I provide reliable and efficient repair services.
// //           </p>
// //         </div>
// //         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
// //           <h3 className="text-2xl font-semibold mb-2">Maintenance</h3>
// //           <p>
// //             Regular maintenance ensures longevity and durability. I offer maintenance services for all types of wooden structures and furniture.
// //           </p>
// //         </div>
// //       </div>

// //     </div>
// //   );
// // };

// // export default About;









// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import img from '../../../assets/NavbarIcons/Logo.jpg';

// const About = () => {
//   const { t } = useTranslation();

//   // Retrieve translations for the About page

//   const {
//     name,
//     profession,
//     phone,
//     title,
//     experience,
//     services,
//     Cards: {
//       card1Title,
//       card1Description,
//       card2Title,
//       card2Description,
//       card3Title,
//       card3Description,
//       card4Title,
//       card4Description,
//       card5Title,
//       card5Description,
//       card6Title,
//       card6Description
//     }
//   } = t("aboutPage")


//   return (
//     <div className="container mx-auto p-6 mt-20 text-gray-700">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="flex flex-col items-center text-gray-500">
//           <img
//             src={img}
//             alt="Carpenter"
//             className="w-40 h-40 rounded-full shadow-lg"
//           />
//           <h2 className="text-2xl font-semibold mt-4">{name}</h2>
//           <p className="text-lg">{profession}</p>
//           <p className="text-lg">{phone}</p>
//           {/* <h1 className="mt-20 text-center">{about}</h1> */}
//         </div>
//         <div className="text-gray-500">
//           <h1 className="text-4xl font-bold mb-4">{title}</h1>
//           <p className="text-xl mb-4">
//             {experience}
//           </p>
//           <p className="text-xl mb-4">
//             {services}
//           </p>
//         </div>
//       </div>
//       <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//           <h3 className="text-2xl font-semibold mb-2">{card1Title}</h3>
//           <p>{card1Description}</p>
//         </div>
//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//           <h3 className="text-2xl font-semibold mb-2">{card2Title}</h3>
//           <p> {card2Description} </p>
//         </div>
//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//           <h3 className="text-2xl font-semibold mb-2">{card3Title}</h3>
//           <p>{card3Description}</p>
//         </div>
//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//           <h3 className="text-2xl font-semibold mb-2">{card4Title}</h3>
//           <p>{card4Description}</p>
//         </div>
//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//           <h3 className="text-2xl font-semibold mb-2">{card5Title}</h3>
//           <p>{card5Description}</p>
//         </div>
//         <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//           <h3 className="text-2xl font-semibold mb-2">{card6Title}</h3>
//           <p>{card6Description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;




import React from 'react';
import { useTranslation } from 'react-i18next';
import img from '../../../assets/NavbarIcons/Logo.jpg';

const About = () => {
  const { t } = useTranslation();

  // Retrieve translations for the About page
  const {
    name,
    profession,
    phone,
    title,
    experience,
    services,
    Cards: {
      card1Title,
      card1Discription, // Note the typo 'Discription' should be 'Description' in your translation file
      card2Title,
      card2Discription,
      card3Title,
      card3Discription,
      card4Title,
      card4Discription,
      card5Title,
      card5Discription,
      card6Title,
      card6Discription
    }
  } = t("AboutPage");

  return (
    <div className="container mx-auto p-6 mt-20 text-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center text-gray-500">
          <img
            src={img}
            alt="Carpenter"
            className="w-40 h-40 rounded-full shadow-lg"
          />
          <h2 className="text-2xl font-semibold mt-4">{name}</h2>
          <p className="text-lg">{profession}</p>
          <p className="text-lg">{phone}</p>
        </div>
        <div className="text-gray-500">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-4">{experience}</p>
          <p className="text-xl mb-4">{services}</p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">{card1Title}</h3>
          <p>{card1Discription}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">{card2Title}</h3>
          <p>{card2Discription}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">{card3Title}</h3>
          <p>{card3Discription}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">{card4Title}</h3>
          <p>{card4Discription}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">{card5Title}</h3>
          <p>{card5Discription}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">{card6Title}</h3>
          <p>{card6Discription}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
