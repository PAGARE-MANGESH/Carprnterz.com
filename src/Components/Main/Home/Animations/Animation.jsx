// Cube.js
import React from 'react';
// import './Cube.css';

// import img from '../../../../assets/react.svg'

const Cube = () => {
    return (
        <div className="cube-container w-32 h-32 md:ml-10 md:w-48 md:h-48 lg:w-64 lg:h-64">
            <div className="cube">
                <div className="face front">
                    {/* <img src={img} alt=" Front" className="w-full h-full object-cover" /> */}
                    <p>  </p>
                </div>
                <div className="face back">
                    {/* <img src={img} alt="Back" className="w-full h-full object-cover" /> */}
                    <p>  </p>

                </div>
                <div className="face right">
                    {/* <img src={img} alt=" Right" className="w-full h-full object-cover" /> */}
                    <p>  </p>

                </div>
                <div className="face left">
                    {/* <img src={img} alt="Left" className="w-full h-full object-cover" /> */}
                    <p>  </p>

                </div>
                <div className="face top">
                    {/* <img src={img} alt="Top" className="w-full h-full object-cover" /> */}
                    <p>  </p>

                </div>
                <div className="face bottom">
                    {/* <img src={img} alt="Bottom" className="w-full h-full object-cover" /> */}
                    <p>  </p>

                </div>
            </div>
        </div>
    );
};

export default Cube;
