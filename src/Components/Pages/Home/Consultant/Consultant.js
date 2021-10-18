import React from 'react';
import './Consultant.css'

const Consultant = ({ consultant }) => {
    const { drName, drCat, imgDr } = consultant;
    return (
        <div className="service">
           
            <div><img className="w-auto" src={imgDr} alt="" /></div>
            <div className="flex items-center ">
                <div className="py-5">
                    <h2 className="text-2xl font-medium p-2">{drName}</h2>
                    <p className="text-base font-medium p-2">{drCat}</p>
                    <button className="p-3 text-xl text-white rounded-md">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Consultant;