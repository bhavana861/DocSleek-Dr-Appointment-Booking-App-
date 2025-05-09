import React from "react";
import { Link } from "react-router-dom";

const Steps = () => {
  return (
    <div
      className="mt-16 md:mt-32 text-center rounded flex flex-col items-center justify-center text-white bg-green-300 px-4 py-12"
      style={{ minHeight: "500px" }}>
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12">
        Easy Steps To Get Your Solutions
      </h1>
      <div className="relative w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center mb-12 md:mb-16 font-bold">
          <div className="flex flex-col items-center relative">
            <i className="fa-solid fa-plus text-3xl md:text-4xl"></i>
            <span className="bg-yellow-500 h-4 w-4 rounded-full absolute top-10 md:top-12"></span>
            <p className="mt-8 md:mt-12 text-xl md:text-2xl">Create Account</p>
            <p className="mt-2 text-sm md:text-base max-w-xs">
              First, you need to create an account to book your appointment.
            </p>
          </div>

          <div className="flex flex-col items-center relative">
            <i className="fa-solid fa-magnifying-glass text-3xl md:text-4xl"></i>
            <span className="bg-yellow-500 h-4 w-4 rounded-full absolute top-10 md:top-12"></span>
            <p className="mt-8 md:mt-12 text-xl md:text-2xl">Search Doctor</p>
            <p className="mt-2 text-sm md:text-base max-w-xs">
              Select a doctor that meets your needs and preferences from the
              available options.
            </p>
          </div>

          <div className="flex flex-col items-center relative">
            <i className="fa-solid fa-calendar-days text-3xl md:text-4xl"></i>
            <span className="bg-yellow-500 h-4 w-4 rounded-full absolute top-10 md:top-12"></span>
            <p className="mt-8 md:mt-12 text-xl md:text-2xl">Book a Slot</p>
            <p className="mt-2 text-sm md:text-base max-w-xs">
              Pick a convenient time to schedule an appointment with your chosen
              doctor.
            </p>
          </div>

          <div className="flex flex-col items-center relative">
            <i className="fa-solid fa-gift text-3xl md:text-4xl"></i>
            <span className="bg-yellow-500 h-4 w-4 rounded-full absolute top-10 md:top-12"></span>
            <p className="mt-8 md:mt-12 text-xl md:text-2xl">Get Your Solution</p>
            <p className="mt-2 text-sm md:text-base max-w-xs">
              Receive expert medical advice and solutions tailored to your
              health needs.
            </p>
          </div>
        </div>

        <hr className="absolute top-16 md:top-20 w-3/4 mx-auto left-0 right-0 border-t-2 border-white" />
      </div>

      <Link to="/auth" className="bg-white text-green-500 w-64 sm:w-72 font-bold text-lg md:text-xl rounded h-12 flex items-center justify-center mt-6 md:mt-12 transition-all hover:bg-gray-100">
        Create Account
      </Link>
    </div>
  );
};

export default Steps;
