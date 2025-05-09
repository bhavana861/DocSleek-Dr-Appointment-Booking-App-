import React from 'react';

const Contact = () => {
  return (
    <div className="mt-24">
      <div className="flex justify-center py-6 px-4 sm:px-8">
        <div className="max-w-xl w-full relative">
          <div className="text-center mb-6">
            <h1 className="font-bold text-3xl sm:text-4xl">Contact Us</h1>
            <p className="font-medium text-lg sm:text-xl">Any questions or remarks? Just write a message!!!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h1 className="font-medium text-base sm:text-lg mb-2">Email</h1>
              <input type="text" placeholder="Enter your email address" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300" />
            </div>
            <div>
              <h1 className="font-medium text-base sm:text-lg mb-2">Name</h1>
              <input type="text" placeholder="Enter your name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300" />
            </div>
          </div>
          <br /><br />
          <div className="text-center mt-7 sm:mt-6 absolute w-full left-0 sm:-bottom-8">
            <button className="bg-green-300 text-white font-bold text-xl py-3 px-8 rounded-lg w-full sm:w-80 hover:bg-green-400 transition duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
      <br /> <br />
      <div className="bg-gray-200 p-8 mt-32 sm:mt-12 rounded-t-lg">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-500 hover:text-white transition duration-300">
            <div className="bg-green-300 p-4 rounded-full w-14 h-14 -mt-16 sm:-mt-20">
              <i className="fa-solid fa-user-doctor text-white text-2xl"></i>
            </div>
            <p className="mt-4 font-bold text-center">About DocSleek</p>
            <p className="text-center w-48">Simplifying appointments with efficiency and ease.</p>
          </div>

          <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-500 hover:text-white transition duration-300">
            <div className="bg-green-300 p-4 rounded-full w-14 h-14 -mt-16 sm:-mt-20">
              <i className="fa-solid fa-phone text-white text-2xl"></i>
            </div>
            <p className="mt-4 font-bold text-center">Phone (Landline)</p>
            <p className="text-center">0479-23988762</p>
            <p className="text-center">0479-23549092</p>
          </div>

          <div className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-500 hover:text-white transition duration-300">
            <div className="bg-green-300 p-4 rounded-full w-14 h-14 -mt-16 sm:-mt-20">
              <i className="fa-solid fa-location-dot text-white text-2xl"></i>
            </div>
            <p className="mt-4 font-bold text-center">Our Office Location</p>
            <p className="text-center">123, ABC Road,</p>
            <p className="text-center">Kochi, Ernakulam,</p>
            <p className="text-center">Kerala - 682001,</p>
            <p className="text-center">India.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
