// Cube.js
import React from 'react';
// import './Cube.css';

import img from '../../../../assets/react.svg'


const Cube = () => {
    return (
        <div className="py-5 flex justify-center drop-shadow-md  items-center">
            <div className="obj w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64">
                <div className="objchild">
                    <span className="inn6">
                        {/* <img src={img} alt="Inner Cube" className="w-full h-full object-cover" /> */}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Cube;
