import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import profiles from '../assets/profile-pic.jpg'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const {token,setToken,userData} = useContext(AppContext)

    const navigate = useNavigate();

    const logOut = ()=>{
        setToken(false)
        localStorage.removeItem('token')
    }

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <div onClick={() => navigate('/')} className="flex items-center gap-2">
                <i className="fa-solid fa-user-doctor text-2xl text-green-300"></i>
                <h2 className='font-bold text-2xl text-green-300'>DocSleek</h2>
            </div>
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to='/'>
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 bg-green-500 w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>ABOUT US</li>
                    <hr className='border-none outline-none h-0.5 bg-green-500 w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/alldoctors'>
                    <li className='py-1'>ALL DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 bg-green-500 w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 bg-green-500 w-3/5 m-auto hidden' />
                </NavLink>
               
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token && userData ?
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img className='w-10 h-10 rounded-full' src={userData.img} alt="" />
                            <i className="fa-solid fa-circle-chevron-down text-2xl"></i>
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={() => navigate('/profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => navigate('/myapointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p onClick={logOut} className='hover:text-black cursor-pointer'>Log Out</p>
                                </div>
                            </div>
                        </div>
                        :
                        <button onClick={() => navigate('/auth')} className='bg-green-500 text-white px-8 py-3 rounded-full font-medium font-light hidden md:block'> Create Account</button>
                }
                <i onClick={() => setShowMenu(true)} className="fa-solid fa-bars w-9 md:hidden"></i>
                <div className={` ${showMenu?'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <div onClick={() => navigate('/')} className="flex items-center gap-2">
                            <i className="fa-solid fa-user-doctor text-2xl text-green-300"></i>
                            <h2 className='font-bold text-2xl text-green-300'>DocSleek</h2>
                        </div>
                        <i onClick={()=>setShowMenu(false)} class="fa-solid fa-xmark w-9"></i>

                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink to='/'  onClick={()=>setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
                        <NavLink to='/about'  onClick={()=>setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>ABOUT US</p></NavLink>
                        <NavLink to='/alldoctors'  onClick={()=>setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
                        <NavLink to='/contact'  onClick={()=>setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
                        <NavLink to='/review'  onClick={()=>setShowMenu(false)}><p className='px-4 py-2 rounded inline-block'>REVIEW</p></NavLink>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar
