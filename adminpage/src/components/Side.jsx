import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { DoctorContext } from "../context/DoctorContext";
import { NavLink } from 'react-router-dom'

const Side = () => {

    const {adminToken} = useContext(AdminContext)
    const {dToken} = useContext(DoctorContext)
  return (
    <div className='min-h-screen  border-r'>
      {
        adminToken && <ul className='mt-5'>

            <NavLink to={'/admin-dashboard'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md-min-w-72 cursor-pointer ${isActive ? 'border-r-4 border-green-400 bg-green-100':''}`}>
            <i className="fa-solid fa-house"></i>
            <p className='hidden md:block'>Dashboard</p>
            </NavLink>

            <NavLink to={'/all-appointments'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md-min-w-72 cursor-pointer ${isActive ? 'border-r-4 border-green-400 bg-green-100':''}`}>
            <i className="fa-solid fa-calendar-check"></i>
            <p className='hidden md:block'>Appointments</p>
            </NavLink>

            <NavLink to={'/add-doctor'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md-min-w-72 cursor-pointer ${isActive ? 'border-r-4 border-green-400 bg-green-100':''}`}>
            <i className="fa-solid fa-user-doctor"></i>
            <p className='hidden md:block'>Add Doctor</p>
            </NavLink>

            <NavLink to={'/doctor-list'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md-min-w-72 cursor-pointer ${isActive ? 'border-r-4 border-green-400 bg-green-100':''}`}>
            <i className="fa-solid fa-users"></i>
            <p className='hidden md:block'>Doctors List</p>
            </NavLink>
        </ul>
      }

       {
        dToken && <ul className='mt-5'>

            <NavLink to={'/doctor-dashboard'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md-min-w-72 cursor-pointer ${isActive ? 'border-r-4 border-green-400 bg-green-100':''}`}>
            <i className="fa-solid fa-house"></i>
            <p className='hidden md:block'>Dashboard</p>
            </NavLink>

            <NavLink to={'/doctor-appointment'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md-min-w-72 cursor-pointer ${isActive ? 'border-r-4 border-green-400 bg-green-100':''}`}>
            <i className="fa-solid fa-calendar-check"></i>
            <p className='hidden md:block'>Appointments</p>
            </NavLink>

            <NavLink to={'/doctor-profile'} className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md-min-w-72 cursor-pointer ${isActive ? 'border-r-4 border-green-400 bg-green-100':''}`}>
            <i className="fa-solid fa-user"></i>
            <p className='hidden md:block'>Profile</p>
            </NavLink>
        </ul>
      }
    </div>
  )
}

export default Side
