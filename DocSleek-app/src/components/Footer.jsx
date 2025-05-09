import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="mt-5 w-full bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 space-y-6 md:space-y-0">
        {/* Intro Section */}
        <div className="md:w-1/3">
          <h5 className="text-xl font-bold">
            <i className="fa-solid fa-user-doctor text-2xl text-green-300 me-2"></i>DocSleek
          </h5>
          <p className="text-sm mt-2">
            Designed and built with all the love in the world with the help of our contributors.
          </p>
          <p className="text-sm mt-1">Code licensed DocSleek, docs CC BY 3.0.</p>
          <p className="text-sm mt-1">Currently v5.3.2</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col space-y-2 md:w-1/4">
          <h5 className="text-xl font-bold">Links</h5>
          <Link to="/" className="text-sm hover:text-green-500">Home Page</Link>
          <Link to="/about" className="text-sm hover:text-green-500">About Us</Link>
          <Link to="/alldoctors" className="text-sm hover:text-green-500">All Doctors</Link>
          <Link to="/review" className="text-sm hover:text-green-500">Reviews</Link>
        </div>

        {/* Help Section */}
        <div className="flex flex-col space-y-2 md:w-1/4">
          <h5 className="text-xl font-bold">Get Help</h5>
          <p className="text-sm hover:text-green-500 cursor-pointer">Help Center</p>
          <p className="text-sm hover:text-green-500 cursor-pointer">Authors</p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col md:w-1/3">
          <h5 className="text-xl font-bold">Contact Us</h5>
          <div className="flex mt-2">
            <input  placeholder="Enter your email here!!!" type="text" className="flex-1 rounded p-2 border border-gray-300 focus:outline-none focus:ring focus:ring-green-300"/>
            <button className="btn btn-info ml-2 p-2 bg-green-500 text-white rounded hover:bg-green-600">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="icons flex justify-between mt-3 space-x-4">
            <a href="#" className="text-gray-500 hover:text-green-500">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-green-500">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-green-500">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-green-500">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-green-500">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-green-500">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <p className="text-center mt-3 text-sm text-gray-600">
        Copyright &copy; DocSleek. Built with React and Tailwind.
      </p>
    </div>
  );
};

export default Footer;
