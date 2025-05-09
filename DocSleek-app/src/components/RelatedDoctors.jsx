import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ specialty, docId }) => {
  const { doctors } = useContext(AppContext)
  const [relDoc, setRelDocs] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (doctors.length > 0 && specialty) {
      const doctorsData = doctors.filter((doc) => doc.specialty === specialty && doc._id !== docId)
      setRelDocs(doctorsData)
    }

  }, [doctors, specialty, docId])
  return (
    <div className='mt-11'>
      <h1 className='font-medium text-3xl text-center'>Related Doctors</h1>
      <p className='text-center mt-3 text-gray-600'>Simply browse through our extensive list of trusted doctors</p>
      <div className='grid grid-cols-5 gap-6 mt-8 px-4'>
        {relDoc.map((doctor) => (
          <div onClick={() => { navigate(`/appointments/${doctor._id}`); scrollTo(0, 0) }} key={doctor._id} className='text-center border border-gray-300 rounded-lg shadow-lg p-4 bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
            <img src={doctor.img} alt={doctor.name} className='w-full h-40 object-cover rounded-md border border-gray-200 bg-gray-100' />
            <h2 className='font-semibold mt-3 text-lg'>{doctor.name}</h2>
            <p className='text-gray-600 text-sm'>{doctor.specialty}</p>
            <div className="flex items-center justify-center mt-2">
              <span className={`w-2 h-2 rounded-full inline-block mr-2 ${doctor.available ? 'bg-green-500' : 'bg-gray-500'}`}></span>
              <p className={doctor.available ? 'text-green-500' : 'text-gray-500'}>
                {doctor.available ? 'Available' : 'Not Available'}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-8'>
        <button onClick={() => { navigate('/alldoctors') }} className='rounded-full bg-gray-300 text-center px-6 py-2 w-48 mt-5 font-semibold hover:bg-green-300 transition-colors'>
          View More
        </button>
      </div>
    </div>
  )
}

export default RelatedDoctors
