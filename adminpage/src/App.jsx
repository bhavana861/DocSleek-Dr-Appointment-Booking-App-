import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Side from './components/Side';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Addmin/Dashboard';
import AllAppointments from './pages/Addmin/AllAppointments';
import AddDoctor from './pages/Addmin/AddDoctor';
import DoctorList from './pages/Addmin/DoctorList';
import { DoctorContext } from './context/DoctorContext';
import DrDashBoard from './pages/Doctor/DrDashBoard';
import DrAppointment from './pages/Doctor/DrAppointment';
import DoctorProfile from './pages/Doctor/DoctorProfile';

const App = () => {
  const {adminToken} = useContext(AdminContext)
  const {dToken} = useContext(DoctorContext)


  return adminToken || dToken? (

    <div >
      <ToastContainer/>   
      <Navbar/>
      <div className='flex items-start'>
        <Side/>
        <Routes>
          {/* Admin  Route */}
        <Route path='/' element={<></>}/>
        <Route path='/admin-dashboard' element={<Dashboard/>}/>
        <Route path='/all-appointments' element={<AllAppointments/>}/>
        <Route path='/add-doctor' element={<AddDoctor/>}/>
        <Route path='/doctor-list' element={<DoctorList/>}/>

        {/* Doctor Route */}
        <Route path='/doctor-dashboard' element={<DrDashBoard/>}/>
        <Route path='/doctor-appointment' element={<DrAppointment/>}/>
        <Route path='/doctor-profile' element={<DoctorProfile/>}/>
    
    
    
          
        </Routes>
      </div>
    </div>
  )
  :
  (
    <>
     <Login/>
     <ToastContainer/>
    </>
  )
}

export default App
