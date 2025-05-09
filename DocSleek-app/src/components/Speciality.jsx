import React from 'react';
import { Link } from 'react-router-dom';
import { specialities } from '../assets/asset';

const Speciality = () => {
  return (
    <div id="speciality" className="mt-16 px-4 md:mt-28">
      <h1 className="text-center text-2xl md:text-3xl font-medium mb-4">
        Find doctors by specialty quickly.
      </h1>
      <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
        Browse the perfect doctor based on your specialty needs. Fast, easy, and tailored to you.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
        {
        specialities.map((item, index) => (
          <Link onClick={() => scrollTo(0, 0)} to={`/alldoctors/${item.speciality}`} key={index} className="flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-all" >
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full mb-2 bg-green-200">
              <img src={item.img} alt={item.label} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            </div>
            <span className="text-black font-medium text-sm md:text-base">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
