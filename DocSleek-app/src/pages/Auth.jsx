import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Auth = () => {

  const {backendUrl,token,setToken} = useContext(AppContext)

  const navigate = useNavigate()

  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try{
      console.log("Backend URL:", backendUrl);
      if(state=== 'Sign Up'){
        const {data} = await axios.post(backendUrl + '/api/user/register',{name,password,email})
        
        if(data.success){
          localStorage.setItem('token',data.token)
          setToken(data.token)
        }
        else{
             toast.error(data.message)
        }

      }
      else{

        const {data} = await axios.post(backendUrl + '/api/user/login',{password,email})
        if(data.success){
          localStorage.setItem('token',data.token)
          setToken(data.token)
        }
        else{
             toast.error(data.message)
        }

      }

    }
    catch(err){
      toast.error(err.message)
    }
  }

  useEffect(()=>{
    if(token){
       navigate('/')  
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center rounded-xl shadow-lg " style={{backgroundImage:'url("https://st4.depositphotos.com/9999814/21366/i/450/depositphotos_213662058-stock-photo-male-doctor-using-mobile-phone.jpg")',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} >
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96  rounded-xl text-sm me-44 '>
        <p className='text-center font-bold text-4xl'>Welcome to <span className='text-green-300'>DocSleek</span></p>
        <p className='font-semibold text-2xl mt-3'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
        <p className='font-medium text-xl '>Please {state === 'Sign Up' ? "sign up" : "log in"} to book an appointment</p>
        {
          state==="Sign Up" &&   <div className='w-full'>
          <p className='font-medium'>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter your Full Name' required />
        </div>
        }
      
        <div className='w-full'>
          <p className='font-medium'>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter your Email' required />
        </div>
        <div className='w-full'>
          <p className='font-medium'>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter your Password' required />
        </div>
        <button type='submit' className='bg-green-300 text-white w-full py-2 mt-3 text-xl rounded-md text-base font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
        {
          state==="Sign Up"?
          <p>Already have an account? <span onClick={()=>setState('Login')} className='text-blue-500 underline font-semibold cursor-pointer'>Login here</span></p>
          :
          <p>Create an new account? <span onClick={()=>setState('Sign Up')} className='text-blue-500 underline font-semibold cursor-pointer' >Click here</span></p>
        }
      </div>

    </form>
  )
}

export default Auth
