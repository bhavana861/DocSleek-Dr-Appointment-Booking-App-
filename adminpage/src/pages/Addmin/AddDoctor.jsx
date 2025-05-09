import React, { useContext, useState } from 'react';
import de from '../../assets/default.png';
import { AdminContext } from '../../context/AdminContext';
import {toast} from 'react-toastify'
import axios from 'axios'

const AddDoctor = () => {

  const [docImg,setDocImg] = useState(false)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [experience,setExperience] = useState('1')
  const [fees,setFees] = useState('')
  const [about,setAbout] = useState('')
  const [specialty,setSpeciality] = useState('Physician')
  const [degree,setDegree] = useState('')
  const [address1,setAddress1] = useState('')
  const [address2,setAddress2] = useState('')

  const {backendUrl,adminToken} = useContext(AdminContext)


  const onSubmitHandler = async (event) =>{
    event.preventDefault()
    try{
      if(!docImg){
        return toast.error('Please Upload Image')
      }

      const formData = new FormData()
      formData.append('img',docImg)
      formData.append('name',name)
      formData.append('email',email)
      formData.append('password',password)
      formData.append('fees',Number(fees))
      formData.append('about',about)
      formData.append('specialty',specialty)
      formData.append('degree',degree)
      formData.append('experience',experience)
      formData.append('address',JSON.stringify({line1:address1,line2:address2}))

      // console log formData
      formData.forEach((value,key)=>{
        console.log(`${key}:${value}`);
      })

      const {data} = await axios.post(backendUrl + '/api/admin/add-doctor',formData,{headers:{adminToken}})
      if(data.success){
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setPassword('')
        setEmail('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setAbout('')
        setFees('')
      }
      else{
        toast.error(data.message)
      }
    }catch(err){
      toast.error(err.message)
      console.log(err);
      

    }
  }



  return (
    <form onSubmit={onSubmitHandler} className="bg-green-50 p-6 rounded-md shadow-md max-w-4xl mx-auto mt-9">
      <p className="text-2xl font-semibold text-gray-800 mb-4">Add Doctor</p>
      <div className="flex flex-wrap -mx-4">
        {/* Left Section */}
        <div className="w-full md:w-1/2 px-4">
          <div className="mb-6">
            <label htmlFor="doc-img" className="cursor-pointer block mb-2">
              <img onChange={(e)=>setDocImg(e.target.files[0])} src={docImg ? URL.createObjectURL(docImg):de} 
                alt="" 
                className="w-24 h-24 object-cover rounded-full mx-auto border border-gray-300 hover:shadow-md"
              />
            </label>
            <input type="file" id="doc-img" hidden onChange={(e)=>setDocImg(e.target.files[0])} />
            <p className="text-sm text-center text-gray-600 mt-2">Upload Doctor Image</p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Doctor Name</p>
            <input onChange={(e)=>setName(e.target.value)} value={name}
              type="text" 
              placeholder="Enter Doctor Name" 
              required 
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Doctor Email</p>
            <input onChange={(e)=>setEmail(e.target.value)} value={email}
              type="email" 
              placeholder="Enter Doctor Email" 
              required 
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Doctor Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} value={password}
              type="password" 
              placeholder="Enter Doctor Password" 
              required 
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Experience</p>
            <select onChange={(e)=>setExperience(e.target.value)} value={experience}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[...Array(10).keys()].map(year => (
                <option key={year} value={`${year + 1} Year`}>
                  {year + 1} Year
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Fees</p>
            <input onChange={(e)=>setFees(e.target.value)} value={fees}
              type="number" 
              placeholder="Fees" 
              required 
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 px-4">
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Speciality</p>
            <select onChange={(e)=>setSpeciality(e.target.value)} value={specialty}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {["Physician", "Pediatrician", "Gynecologist", "Neurologist", "Cardiologist", "Ophthalmologist", "Surgeon", "Hematologist", "Dermatologist", "ENT Specialist"].map(speciality => (
                <option key={speciality} value={speciality}>
                  {speciality}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Education</p>
            <input onChange={(e)=>setDegree(e.target.value)} value={degree}
              type="text" 
              placeholder="Education" 
              required 
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-medium">Address</p>
            <input onChange={(e)=>setAddress1(e.target.value)} value={address1}
              type="text" 
              placeholder="Address Line 1" 
              required 
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input onChange={(e)=>setAddress2(e.target.value)} value={address2}
              type="text" 
              placeholder="Address Line 2" 
              required 
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
            <p className="text-gray-700 font-medium">About Doctor</p>
            <textarea onChange={(e)=>setAbout(e.target.value)} value={about}
              placeholder="Write about doctor" 
              rows={5} 
              required 
              className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
     
      <div className="text-center mt-6">
        <button 
          type="submit" 
          className="px-6 py-2 bg-green-300 text-white font-bold rounded-md hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
