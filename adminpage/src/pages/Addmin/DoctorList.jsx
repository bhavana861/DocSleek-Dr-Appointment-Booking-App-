import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

const DoctorList = () => {
  const { doctors, adminToken, getAllDoctors,changeAvailability } = useContext(AdminContext);

  useEffect(() => {
    if (adminToken) {
      getAllDoctors();
    }
  }, [adminToken]);

  return (
    <div className="m-5 max-h-[90vh]">
      <h1 className="text-lg font-semibold">ALL DOCTORS</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
        {doctors.map((item, index) => (
          <div  key={index} className="border border-gray-200 rounded-xl max-w-56 overflow-hidden cursor-pointer" >
            <img className="w-56 h-56 object-cover bg-green-100 hover:bg-green-300 transition-all duration-500" src={item.img}
              alt=""  />
            <div className="p-4">
              <p className="text-lg font-medium">{item.name}</p>
              <p className="text-sm font-medium">{item.specialty}</p>
              <div className="mt-2 flex items-center gap-1 text-sm">
                <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} readOnly />
                <p>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
