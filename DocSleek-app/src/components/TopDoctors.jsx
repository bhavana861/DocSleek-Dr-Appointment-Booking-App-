import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);


  return (
    <div className="mt-11">
      <h1 className="font-medium text-3xl text-center">Book a visit with the best doctors</h1>
      <p className="text-center mt-3 text-gray-600">Simply browse through our extensive list of trusted doctors</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8 px-4">
        {doctors.map((item, index) => (
          <div onClick={() => { navigate(`/appointments/${item._id}`); }}
            key={item.id} className="text-center border border-gray-300 rounded-lg shadow-lg p-4 bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" >
            <div className="w-full h-40">
              <img src={item.img} alt={item.name} className="w-full h-full  object-cover rounded-md border border-gray-200 bg-gray-100"
              />

            </div>
            <h2 className="font-semibold mt-3 text-lg">{item.name}</h2>
            <p className="text-gray-600 text-sm">{item.specialty}</p>
            <div className="flex items-center justify-center mt-2">
              <span className={`w-2 h-2 rounded-full inline-block mr-2 ${item.available ? 'bg-green-500' : 'bg-gray-500' }`}></span>
              <p className={item.available ? 'text-green-500' : 'text-gray-500'}>
                {item.available ? 'Available' : 'Not Available'}
              </p>
            </div>

          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button onClick={() => {
          navigate('/alldoctors');
        }} className="rounded-full bg-gray-300 text-center px-6 py-2 w-48 mt-5 font-semibold hover:bg-green-300 transition-colors" >
          View More
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
