import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);

  const [appointments, setAppointments] = useState([])
  const months = [" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
  const navigate = useNavigate()
        
  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })

      if (data.success) {
        setAppointments(data.appointments.reverse())
        console.log(data.appointments);
      }

    } catch (err) {
      console.log(err);
      toast.error(err.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      } else {
        toast.error(data.message)
      }


    } catch (err) {
      console.log(err);
      toast.error(err.message)
    }
  }

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Appointment Payment',
      description: 'Appointment Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
        try {
          const { data } = await axios.post(backendUrl + '/api/user/verifyRazorpay', response, { headers: { token } })
          if (data.success) {
            getUserAppointments()
            navigate('/myapointments')
          }
        } catch (err) {
          console.log(err);
          toast.error(err.message)

        }
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()

  }

  const appointmentRazorpay = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } })
      if (data.success) {
        initPay(data.order)

      }
    } catch (err) {
      console.log(err);
      toast.error(err.message)
    }
  }

  useEffect(() => {
    if (token) {
      getUserAppointments()
    }
  }, [token])

  return (
    <div className="px-4 py-6">
      <p className="pb-3 mt-12 font-bold border-b text-3xl">My Appointments</p>
      <div>
        {
          appointments.slice(0, 4).map((item, index) => (
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_2fr_1fr] gap-4 sm:gap-6 py-4 border-b"
              key={index}>
              <div className="flex justify-center">
                <img className="w-32 h-32 sm:w-44 sm:h-36 bg-green-50 rounded-lg object-cover" src={item.docData.img} alt="" />
              </div>
              <div className="flex-1 text-lg sm:text-base">
                <p className="font-medium">{item.docData.name}</p>
                <p>{item.docData.specialty}</p>
                <p className='font-medium'>Address: </p>
                <p>{item.docData.address.line1}</p>
                <p>{item.docData.address.line2}</p>
                <p>
                  <span className="font-medium">Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}
                </p>
              </div>

              <div className="flex flex-col gap-2 justify-end sm:justify-between">
                {!item.cancelled && item.payment && !item.isCompleted && <button className='text-lg sm:min-w-48 py-2 bg-green-200'>Paid</button>}
                {!item.cancelled && !item.payment && !item.isCompleted &&  <button onClick={() => appointmentRazorpay(item._id)} className="text-lg sm:min-w-48  border hover:bg-green-300 hover:text-white transition-all duration-300 w-full sm:w-auto">
                  Pay Online
                </button>}
                {!item.cancelled && !item.isCompleted && <button onClick={() => cancelAppointment(item._id)} className="text-lg sm:min-w-48  border hover:bg-red-500 hover:text-white transition-all duration-300 w-full sm:w-auto">
                  Cancel Appointment
                </button>}
                {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment Cancelled</button>}
                {item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-300 rounded text-green-500'>Appointment Completed</button>}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyAppointments;
