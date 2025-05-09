import React, { useContext, useState } from 'react';
import { AdminContext } from '../context/AdminContext';
import axios from 'axios'
import { toast } from 'react-toastify';
import { DoctorContext } from '../context/DoctorContext';

const Login = () => {
    const [state, setState] = useState('Admin');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setAdminToken, backendUrl } = useContext(AdminContext)
    const {setDToken} = useContext(DoctorContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            if (state === 'Admin') {
                const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
                if (data.success) {
                    localStorage.setItem('adminToken', data.token)
                    setAdminToken(data.token);

                }
                else {
                    toast.error(data.message)
                }
            } else {
                const {data} = await axios.post(backendUrl + '/api/doctor/login',{email,password})
                if (data.success) {
                    localStorage.setItem('dToken', data.token)
                    setDToken(data.token);
                    console.log(data.token);
                }
                else {
                    toast.error(data.message)
                }
            }
        } catch (err) {

        }
    }


    return (
        <form onSubmit={onSubmitHandler} className="min-h-[70vh] flex items-center rounded-2xl mt-32" style={{ backgroundImage: 'url("https://st4.depositphotos.com/9999814/21366/i/450/depositphotos_213662058-stock-photo-male-doctor-using-mobile-phone.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center' }}>
            <div className="flex flex-col gap-3 ms-auto mr-80 items-start p-8 min-w-[340px] sm:min-w-96 rounded-xl text-sm me-20 bg-white/80">
                <p className="text-center font-bold text-4xl">
                    <span className="text-green-400">{state}</span> Login
                </p>
                <div className="w-full">
                    <p className="font-medium">Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className="border border-zinc-300 rounded w-full p-2 mt-1"
                        type="email" required placeholder="Enter your Email" />
                </div>
                <div className="w-full">
                    <p className="font-medium">Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className="border border-zinc-300 rounded w-full p-2 mt-1" type="password" required placeholder="Enter your Password" />
                </div>
                <button className="bg-green-400 text-white w-full py-2 mt-3 text-xl rounded-md text-base font-semibold">
                    Login
                </button>
                {
                    state === 'Admin' ?
                        <p>Doctor Login?<span className='text-blue-500 font-semibold' onClick={() => setState('Doctor')}>Click here</span></p>
                        :
                        <p>Admin Login ?<span className='text-blue-500 font-semibold' onClick={() => setState('Admin')}>Click here</span></p>
                }
            </div>
        </form>
    );
};

export default Login;
