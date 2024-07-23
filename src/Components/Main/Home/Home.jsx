

import React from 'react'

// import AboutLogo from '../../../assets/Home.jpg'

import Carousel from './Carousel';

import Animation from './Animations/Animation';

// import Cube from './Animations/Cube';

import { useTranslation } from 'react-i18next';

// import About from '../About/About';



const CarpenterHome = () => {

  const { t } = useTranslation();

  return (

    <div>

      <Carousel />



      <div className="container mt-20 ">
        <div className="flex flex-col md:flex-row md:items-start">
          {/* <img
            src={AboutLogo}
            className="md:w-1/3 mb-3  mr-20 md:mb-0 md:ml-3 w-full h-96  object-cover"
            alt="Carpenter at work"
          /> */}
          <div className='md:mr-24 md:mt-24 mb-24 '>

            <Animation />
            {/* <Cube /> */}
          </div>

          <div className="flex-1 ml-20 text-2xl mr-10 ">
            <strong> {t('HomePage.title')} </strong>
            <p className='mt-2 tracking-widest '>
            {t('HomePage.ourInfo')}
            </p>
            {/* <p className="mb-4 mt-4">
              Carpenters are skilled craftsmen who work with wood to create various structures, furniture, and other objects. They play a crucial role in construction, ensuring that buildings and other projects are built to last with precision and quality.
            </p>
            <p className="mb-4">
              They measure, cut, and shape wood, plastic, and other materials. Carpenters also install items like doors, windows, and molding. Their work requires a good eye for detail, manual dexterity, and the ability to read blueprints and technical drawings.
            </p>
            <p className="mb-4">
              Carpenters can specialize in areas such as framing, joinery, or cabinet making. Their skills are essential for both new construction and renovation projects, making them highly valuable in the building industry.
            </p> */}
          </div>
        </div>
      </div>
      {/* <About /> */}
    </div>
  );
};

export default CarpenterHome;
