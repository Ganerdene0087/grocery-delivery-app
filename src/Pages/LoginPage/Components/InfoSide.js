import React from 'react';
import { FaWarehouse, FaIndustry, FaTruck } from 'react-icons/fa';

const InfoSide = () => {
  
  return (
    <div className="flex flex-row bg-indigo-950 h-full items-center text-white justify-around p-8">
      <div className="text-center flex items-center flex-col">
        <FaIndustry className="text-8xl" />
        <p>620 хүнсний үйлдвэр</p>
      </div>
      <div className="text-center flex items-center flex-col">
        <FaWarehouse className="text-8xl mb-2" />
        <p>4 агуулах</p>
      </div>
      <div className="text-center flex items-center flex-col">
        <FaTruck className="text-8xl mb-2" />
        <p>Цөөн хүргэлт</p>
      </div>
    </div>
  );
};

export default InfoSide;