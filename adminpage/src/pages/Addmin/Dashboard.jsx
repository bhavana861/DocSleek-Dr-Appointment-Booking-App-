import React, { useContext, useEffect } from 'react'
import dricon from '../../assets/dricon.png'
import picon from '../../assets/picon.png'
import aicon from '../../assets/aicon.png'
import { AppContext } from '../../context/AppContext'
import { AdminContext } from '../../context/AdminContext'

const Dashboard = () => {
  const { adminToken, dashData, getDashData, cancelAppointment } = useContext(AdminContext)

  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (adminToken) {
      getDashData()
    }
  }, [adminToken])

  return (
    <div className='m-5'>
      <div className='flex flex-wrap gap-3 '>
        <div className='flex items-center h-24 gap-2 bg-green-100 p-4 min-w-72  border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={dricon} alt="" />
          <div>
            <p className='text-lg font-semibold'>{dashData?.doctors || 0}</p>
            <p>Doctors</p>
          </div>
        </div>
        <div className='flex items-center gap-2 h-24  bg-green-100 p-4 min-w-72 border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={aicon} alt="" />
          <div>
            <p className='text-lg font-semibold'>{dashData?.appointments || 0}</p>
            <p>Appointments</p>
          </div>
        </div>
        <div className='flex items-center gap-2 h-24 bg-green-100 p-4 min-w-72 border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
          <img className='w-14' src={picon} alt="" />
          <div>
            <p className='text-lg font-semibold'>{dashData?.patients || 0}</p>
            <p>Patients</p>
          </div>
        </div>
      </div>

      <div>
        <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t  border'>
          <i className="fa-solid fa-check-to-slot text-green-700 text-2xl"></i>
          <p className='text-xl font-semibold'>Latest Bookings</p>
        </div>
        <div className='pt-4 border border-t-0 bg-green-100 '>
          {
            dashData?.latestAppointments?.length > 0 ? (
              dashData.latestAppointments.map((item, index) => (
                <div key={index} className="flex items-center gap-4 px-6 py-3 border-b border-black justify-between">
                  <div className="flex items-center gap-4">
                    <img src={item.docData.img} alt="" className="w-12 h-12 rounded-full bg-blue-300" />
                    <div>
                      <p className="font-semibold">{item.docData.name}</p>
                      <p className=" text-sm">{slotDateFormat(item.slotDate)}</p>
                    </div>
                  </div>
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
            ) : (
              <p className="text-red-700 text-center py-4">No appointments found.</p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard
