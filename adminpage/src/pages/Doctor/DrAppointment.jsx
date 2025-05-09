import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'


const DrAppointment = () => {

  const { dToken, appointments, getAppointments, completeAppointment, cancelAppointment } = useContext(DoctorContext)
  const { calculateAge, slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getAppointments()
    }
  }, [dToken])
  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium'>All Appointments</p>
      <div className='bg-green-100 border rounded text-sm max-h-[80vh] min-h-[50vh] '>
        <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-3 py-3 border-b border-gray-600 font-medium'>
          <p>#</p>
          <p>Patient</p>
          <p>Payment</p>
          <p>Patient age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        {
  appointments && appointments.slice().reverse().map((item, index) => (
    <div 
      className='flex flex-wrap justify-between max:sm-gap max:sm-text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 items-center hover:bg-gray-300 hover:text-white py-3 px-6 border-b font-medium' 
      key={index}
    >
      <p className='max-sm:hidden'>{index + 1}</p>
      <div className='flex items-center gap-2'>
        <img className='w-8 h-8 rounded-full' src={item.userData.img} alt="" />
        <p>{item.userData.name}</p>
      </div>
      <div>
        <p className='text-sm inline-block border font-semibold border-green-500 px-2 rounded-full'>
          {item.payment ? 'Online' : 'Cash'}
        </p>
      </div>
      <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
      <p>{slotDateFormat(item.slotDate)},{item.slotTime}</p>
      <p>₹{item.amount}</p>
      {
        item.cancelled ?
          <p className='text-red-400'>Cancelled</p> :
          item.isCompleted ?
            <p className='text-green-700'>Completed</p> :
            <div className='flex justify-evenly'>
              <i onClick={() => cancelAppointment(item._id)} className="fa-solid fa-xmark text-red-600 text-xl"></i>
              <i onClick={() => completeAppointment(item._id)} className="fa-solid fa-check text-green-600 text-xl"></i>
            </div>
      }
    </div>
  ))
}

      </div>


    </div>
  )
}

export default DrAppointment
