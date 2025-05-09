import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import {useNavigate} from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Navbar = () => {
    const {adminToken,setAdminToken} = useContext(AdminContext)
    const { dToken, setDToken} = useContext(DoctorContext)
    const navigate = useNavigate()


    const logout = ()=>{
        navigate('/')
        adminToken && setAdminToken('')
        dToken && setDToken('')
        adminToken && localStorage.removeItem('adminToken')
        dToken && localStorage.removeItem('dToken')
    }

    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b '>
        <div className='flex items-center gap-2 text-sm'>
                <div className="flex items-center gap-2 cursor-pointer">
                    <i className="fa-solid fa-user-doctor text-2xl text-green-300"></i>
                    <h2 className='font-bold text-2xl text-green-300'>DocSleek</h2>
                </div>
                <p className='border px-2.5 py-0.5 rounded-full border-gray-500'>{adminToken?'Admin':'Doctor'}</p>
        </div>
        <button onClick={logout} className='bg-green-300 text-white text-sm px-10 py-2 rounded-full font-bold'>LogOut</button>
          

        </div>
    )
}

export default Navbar
