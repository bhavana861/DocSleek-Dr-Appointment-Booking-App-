import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllDoctors from './pages/AllDoctors'
import About from './pages/About'
import Contact from './pages/Contact'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import MyAppointments from './pages/MyAppointments'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/alldoctors' element={<AllDoctors />} />
        <Route path='/alldoctors/:speciality' element={<AllDoctors />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/myapointments' element={<MyAppointments />} />
        <Route path="/appointments/:docId" element={<Appointments />} />
        </Routes>
      <Footer/>
    </div>
  )
}

export default App