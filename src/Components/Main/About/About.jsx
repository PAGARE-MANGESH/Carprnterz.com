
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
    <div className="container p-6 mx-auto mt-20 ">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center text-gray-500">
          <img
            src={img}
            alt="Carpenter"
            className="w-40 h-40 rounded-full shadow-lg"
          />
          <h2 className="mt-4 text-2xl font-semibold text-blue-500">{name}</h2>
          <p className="text-lg">{profession}</p>
          <p className="text-lg">{phone}</p>
        </div>
        <div className="text-gray-500">
          <h1 className="mb-4 text-4xl font-bold text-blue-400">{title}</h1>
          <p className="mb-4 text-xl">{experience}</p>
          <p className="mb-4 text-xl">{services}</p>
        </div>
      </div>


      <div className="grid grid-cols-1 gap-6 mt-8 text-gray-500 sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 border rounded-lg shadow-lg border-zinc-50">
          <h3 className="mb-2 text-2xl font-semibold text-blue-500">{card1Title}</h3>
          <p>{card1Discription}</p>
        </div>
        <div className="p-6 border rounded-lg shadow-lg border-zinc-50">
          <h3 className="mb-2 text-2xl font-semibold text-blue-500">{card2Title}</h3>
          <p>{card2Discription}</p>
        </div>
        <div className="p-6 border rounded-lg shadow-lg border-zinc-50">
          <h3 className="mb-2 text-2xl font-semibold text-blue-500">{card3Title}</h3>
          <p>{card3Discription}</p>
        </div>
        <div className="p-6 border rounded-lg shadow-lg border-zinc-50">
          <h3 className="mb-2 text-2xl font-semibold text-blue-500">{card4Title}</h3>
          <p>{card4Discription}</p>
        </div>
        <div className="p-6 border rounded-lg shadow-lg border-zinc-50">
          <h3 className="mb-2 text-2xl font-semibold text-blue-500">{card5Title}</h3>
          <p>{card5Discription}</p>
        </div>
        <div className="p-6 border rounded-lg shadow-lg border-zinc-50">
          <h3 className="mb-2 text-2xl font-semibold text-blue-500">{card6Title}</h3>
          <p>{card6Discription}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
