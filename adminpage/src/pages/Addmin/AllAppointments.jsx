import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AllAppointments = () => {
  const { adminToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext)
  const { calculateAge, slotDateFormat } = useContext(AppContext)


  useEffect(() => {
    if (adminToken) {
      getAllAppointments()
    }
  }, [adminToken])
  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium'>All Appointments</p>
      <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] '>
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] font-bold grid-flow-col py-3 px-6 border-b'>
          <p>#</p>
          <p>Patient Name</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor Name</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        {
          appointments.map((item, index) => (
            <div className='flex flex-wrap justify-between bg-green-100 bg- max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center py-3 px-6 border-b hover:bg-green-300 hover:text-white' key={index}>
              <p className='max-sm:hidden'>{index + 1}</p>
              <div className='flex items-center gap-2'>
                <img className='w-8 h-8 rounded-full' src={item.userData.img} alt="" /> <p>{item.userData.name}</p>
              </div>
              <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
              <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
              <div className='flex items-center gap-2'>
                <img className='w-8 h-8 rounded-full bg-blue-200' src={item.docData.img} alt="" /> <p>{item.docData.name}</p>
              </div>
              <p>₹{item.amount}</p>
              {
                item.cancelled
                  ?
                  <p className='text-red-400 text-xs font-medium '>Cancelled</p>
                  : item.isCompleted ?
                    <p className='text-green-500 text-xs font-medium '> Completed</p>
                    :
                    <i onClick={() => cancelAppointment(item._id)} className="fa-solid fa-xmark text-red-600 ml-3"></i>
              }

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AllAppointments
