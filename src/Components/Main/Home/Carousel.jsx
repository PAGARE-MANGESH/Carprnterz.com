// import React, { useState, useEffect } from 'react';


// import { useTranslation } from 'react-i18next';

// // import i18n from '../../../MultipleLang/i18n';


// import Img1 from '../../../assets/H.svg'
// import Img2 from '../../../assets/Home.jpg'
// import Img3 from '../../../assets/react.svg'

// const Carousel = () => {

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const { t } = useTranslation();

//     const { first, second, third } = t('carouselCaption');


//     const slides = [
//         { id: 1, image: Img2, alt: 'Slide 1', caption: first },
//         { id: 2, image: Img2, alt: 'Slide 2', caption: second },
//         { id: 3, image: Img2, alt: 'Slide 3', caption: third },
//     ];


//     const nextSlide = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     };


//     const prevSlide = () => {

//         setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);

//     };


//     useEffect(() => {
//         const interval = setInterval(nextSlide, 5000);
//         return () => clearInterval(interval);
//     }, []);



//     return (
//         <div className="relative w-full h-96 p-2 mt-20">
//             <div className="relative w-full h-full overflow-hidden">
//                 {slides.map((slide, index) => (
//                     <div
//                         key={slide.id}
//                         className={`absolute w-full h-full transition-opacity duration-800 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
//                     >
//                         <img src={slide.image} alt={slide.alt} className="blur-sm w-full h-96 object-cover" />
//                         {currentIndex === index && (
//                             <div className="absolute bottom-1/4 left-1/2 text-4xl font-bold  transform -translate-x-1/2 bg-black bg-opacity-50 text-gray-300 px-4 py-4 rounded">
//                                 {slide.caption}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//             <button
//                 className="absolute top-1/2 left-10 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 rounded-full"
//                 onClick={prevSlide}
//             >
//                 <span className="text-white">&lt;</span>
//             </button>
//             <button
//                 className="absolute top-1/2 right-10 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 rounded-full"
//                 onClick={nextSlide}
//             >
//                 <span className="text-white"> &gt; </span>
//             </button>
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         className={`w-10 h-1 mr-1  ${currentIndex === index ? 'bg-gray-900' : 'bg-gray-400'}`}
//                         onClick={() => setCurrentIndex(index)}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Carousel;



import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Img1 from '../../../assets/H.svg';
import Img2 from '../../../assets/Home.jpg';
import Img3 from '../../../assets/react.svg';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const { t } = useTranslation();

    // Assuming the `t` function returns an object for 'carouselCaption'
    const { first, second, third } = t('HomePage.carouselCaption', { returnObjects: true });

    const slides = [
        { id: 1, image: Img2, alt: 'Slide 1', caption: first },
        { id: 2, image: Img2, alt: 'Slide 2', caption: second },
        { id: 3, image: Img2, alt: 'Slide 3', caption: third },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-96 p-2 mt-20">
            <div className="relative w-full h-full overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute w-full h-full transition-opacity duration-800 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img src={slide.image} alt={slide.alt} className="blur-sm w-full h-96 object-cover" />
                        {currentIndex === index && (
                            <div className="absolute bottom-1/4 left-1/2 text-4xl font-bold transform -translate-x-1/2 bg-black bg-opacity-50 text-gray-300 px-4 py-4 rounded">
                                {slide.caption}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-10 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 rounded-full"
                onClick={prevSlide}
            >
                <span className="text-white">&lt;</span>
            </button>
            <button
                className="absolute top-1/2 right-10 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 rounded-full"
                onClick={nextSlide}
            >
                <span className="text-white">&gt;</span>
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-10 h-1 mr-1 ${currentIndex === index ? 'bg-gray-900' : 'bg-gray-400'}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;





