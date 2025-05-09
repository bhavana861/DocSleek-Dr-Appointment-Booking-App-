import React, { useContext, useEffect, useState } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData,backendUrl } = useContext(DoctorContext);

  const [isEdit, setIsEdit] = useState(false)

  const updateProfile = async ()=>{
    try{
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        available: profileData.available
      }

      const {data} = await axios.post(backendUrl + '/api/doctor/update-profile',updateData,{headers:{dToken}})

      if(data.success){
            toast.success(data.message)
            setIsEdit(false)
            getProfileData()
      }else{
        toast.error(data.message)
      }


    }catch(err){
      toast.error(err.message)
      console.log(err);
    }
  }

  useEffect(() => {
    if (dToken) {
      getProfileData();
    }
  }, [dToken]);

  return (
    profileData && (
      <div className="bg-green-100  ml-64 flex h-screen justify-center items-center mt-20 rounded">
        <div className="p-6 max-w-3xl w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Profile Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-300">
              <img src={profileData.img} alt="Doctor" className="w-full h-full object-cover" />
            </div>
            {/* Profile Details */}
            <div className="mt-4 md:mt-0 md:ml-6 flex-1">
              <h1 className="text-3xl font-bold text-green-800">
                {profileData.name}
              </h1>
              <p className="text-lg  mt-1">
                {profileData.degree} - {profileData.specialty}
              </p>
              <div className="mt-5">
                <span className="bg-green-200 text-green-800 px-3  font-bold py-1 rounded-full text-sm">
                  {profileData.experience} of Experience
                </span>
              </div>
              {/* About Section */}
              <div className="mt-7">
                <h2 className="text-xl font-semibold ">About:</h2>
                <p className="mt-1 text-lg">{profileData.about}</p>
              </div>
              {/* Fee and Address */}
              <div className="mt-7">
                <p className="text-gray-800 font-medium">
                  Appointment fee: <span className="text-green-700 font-bold">₹{isEdit ? <input type="number" onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} value={profileData.fees} /> : profileData.fees}</span>
                </p>
                <div className="mt-7">
                  <p className='text-lg'><span className="text-xl font-semibold">Address:</span> {isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={profileData.address.line1} /> : profileData.address.line1}</p>
                  <p className='text-lg ml-20 mt-2'>{isEdit ? <input type="text" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={profileData.address.line2} /> : profileData.address.line2}</p>
                </div>
              </div>
              {/* Availability */}
              <div className="mt-4 flex items-center">
                <input onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))} checked={profileData.available} type="checkbox" id="availability" className="w-5 h-5 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                <label htmlFor="availability" className="ml-2 font-semibold text-lg text-green-700">
                  Available
                </label>
              </div>
              {
                isEdit ?
                  <button onClick={updateProfile} className="mt-6 bg-green-400 hover:bg-green-600 w-72 text-xl  text-white font-medium py-2 px-4 rounded-md shadow-md">
                    Save Details
                  </button>
                  :
                  <button onClick={() => setIsEdit(true)} className="mt-6 bg-green-400 w-72 hover:bg-green-600 text-xl text-white font-medium py-2 px-4 rounded-md shadow-md">
                    Edit Details
                  </button>

              }


            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorProfile;
