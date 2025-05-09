import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import prof from '../assets/default.png'
import axios from 'axios'
import { toast } from 'react-toastify'

const Profile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext)
  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(false)

  const updateUserProfileData = async () => {
  try{
    const formData = new FormData()
    formData.append('name',userData.name)
    formData.append('phone',userData.phone)
    formData.append('address',JSON.stringify(userData.address))
    formData.append('gender',userData.gender)
    formData.append('dob',userData.dob)

    image && formData.append('img',image)

    const {data} = await axios.post(backendUrl + '/api/user/update-profile',formData,{headers:{token}})
    if(data.success){
      toast.success(data.message)
      await loadUserProfileData()
      setIsEdit(false)
      setImage(false)
    }else{
      toast.error(data.message)
    }

  }catch(err){
    console.log(err);
    toast.error(err.message) 
  }
   
  }

  return userData && (
    <div className="max-w-4xl mx-auto p-6 bg-green-50 shadow-lg rounded-lg text-xl">
      {
        isEdit ?
          <label htmlFor='image'>
            <div className='inline-block relative cursor-pointer'>
              <img className="w-24 h-24 rounded-full border-4 border-green-300 object-cover opacity-75" src={image ? URL.createObjectURL(image) : userData.img} alt="" />
              <img className="w-10  absolute rounded-full bottom-12 right-7 border-4" src={image ? '' : prof} alt="" />
            </div>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden />

          </label>
          :
          <img src={userData.img} alt="Profile" className="w-24 h-24 rounded-full border-4 border-green-300 object-cover" />
      }
      <div className="flex items-center gap-4 mb-8">
        <div>
          {
            isEdit ?
              (
                <input type="text" className="border border-gray-300 p-2 rounded-md w-full" onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))} value={userData.name} />
              )
              :
              (
                <h1 className="text-2xl font-bold text-gray-800">{userData.name}</h1>
              )}
        </div>
      </div>

      <hr className="my-4" />

      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex justify-start gap-3">
            <p className="font-bold">Email:</p>
            {
              isEdit ?
                (
                  <input type="text" className="border border-gray-300 p-2 rounded-md w-2/3" onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))} value={userData.email} />
                )
                :
                (
                  <p>{userData.email}</p>
                )}
          </div>

          <div className="flex justify-start gap-5">
            <p className="font-bold">Phone:</p>
            {
              isEdit ?
                (
                  <input type="text" className="border border-gray-300 p-2 rounded-md w-2/3" onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))} value={userData.phone} />
                )
                :
                (
                  <p>{userData.phone}</p>
                )}
          </div>

          <div className="flex justify-start gap-5">
            <p className="font-bold">Address:</p>
            {
              isEdit ?
                (
                  <div>
                    <input type="text" className="border border-gray-300 p-2 rounded-md w-full mb-2" onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} />
                    <input type="text" className="border border-gray-300 p-2 rounded-md w-full" onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} />
                  </div>
                )
                :
                (
                  <p>
                    {userData.address.line1}
                    <br />
                    {userData.address.line2}
                  </p>
                )}
          </div>
        </div>
      </div>

      <div className="mb-6 text-xl">
        <h2 className=" font-bold text-gray-700 mb-4">Basic Information</h2>
        <div className="space-y-4">

          <div className="flex justify-start gap-5">
            <p className="font-bold">Gender:</p>
            {
              isEdit ?
                (
                  <select className="border border-gray-300 p-2 rounded-md w-2/3" onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))} value={userData.gender} >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                )
                :
                (
                  <p>{userData.gender}</p>
                )}
          </div>

          <div className="flex justify-start gap-5">
            <p className="font-bold">Date of Birth:</p>
            {isEdit ? (
              <input type="date" className="border border-gray-300 p-2 rounded-md w-2/3" onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))} value={userData.dob} />)
              :
              (
                <p>{userData.dob}</p>
              )}
          </div>
        </div>
      </div>

      <div className="text-center">
        {
          isEdit ?
            (
              <button className="bg-green-300 font-bold text-white px-4 py-2 rounded-md hover:bg-green-600 transition outline-none"
                onClick={updateUserProfileData} >
                Save Information
              </button>
            )
            :
            (
              <button className="bg-blue-400 font-bold text-white px-4 py-2 rounded-md hover:bg-blue-600 transition outline-none" onClick={() => setIsEdit(true)} >
                Edit Information
              </button>
            )}
      </div>
    </div>
  )
}

export default Profile
