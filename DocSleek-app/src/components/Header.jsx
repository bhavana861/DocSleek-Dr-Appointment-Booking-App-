import React from 'react';
import dr from '../assets/Doctors.jpg';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center p-4 md:mt-24">
      <div className="text-center md:text-left md:w-1/2">
        <p className="font-medium text-3xl md:text-4xl mt-6 md:mt-10">
          <span className="font-bold text-green-300">Welcome to DocSleek,</span> <br />
          your trusted healthcare partner. <br />
        </p>
        <p className="mt-6 md:mt-10 font-semibold">
          Select a preferred doctor and time slot to book your appointment.
        </p>
        <div className="mt-6 md:mt-10">
          <a  className="font-bold text-center pt-2 text-white rounded-full bg-green-300 sm:w-32 md:w-36 lg:w-44 sm:h-10 md:h-12 block mx-auto md:mx-0 transition-all hover:bg-green-400 hover:scale-105"   href="#speciality" >
            Book Your Slot
          </a>
        </div>
      </div>

      <div className="mt-6 md:mt-0 md:w-1/2">
        <img src={dr} alt="Doctors" className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto" />
      </div>
    </div>
  );
};

export default Header;
