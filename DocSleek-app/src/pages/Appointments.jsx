import React, { useContext, useEffect, useState } from 'react';
import { data, useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import verified from '../assets/verified.png';
import about from '../assets/about.png';
import RelatedDoctors from '../components/RelatedDoctors';
import { toast } from 'react-toastify';
import axios from 'axios';

const Appointments = () => {
  const navigate = useNavigate()
  const { docId } = useParams();
  console.log("Doc ID from URL:", docId);

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const { doctors, backendUrl, token, getDoctorsData } = useContext(AppContext);
  const [docDetails, setDocDetails] = useState(null);
  const [docSlot, setDocSlot] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  const accessDocDetails = async () => {
    const docDetails = doctors.find(doc => doc._id === docId);
    setDocDetails(docDetails);
    console.log(docDetails);

  };



  const getAvailableSlots = async () => {
   
    setDocSlot([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        let endTime = new Date();
        endTime.setDate(today.getDate() + i);
        endTime.setHours(21, 0, 0, 0);

        if (today.getDate() === currentDate.getDate()) {
            currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
            currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
        } else {
            currentDate.setHours(10);
            currentDate.setMinutes(0);
        }

        let timeSlots = [];
        while (currentDate < endTime) {
            let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

          
           
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                });
            

            currentDate.setMinutes(currentDate.getMinutes() + 30);
        }
        setDocSlot(prev => [...prev, timeSlots]);
    }
};


  const bookAppointment = async () => {
    if (!token) {
      toast.warn('Login to book slot')
      return navigate('/auth')
    }
    try {
      const date = docSlot[slotIndex][0].datetime
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()

      const slotDate = day + "_" + month + "_" + year

      const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getDoctorsData()
        navigate('/myapointments')
      } else {
        toast.error(data.message)
      }


    } catch (err) {
      console.log(err);
      toast.error(err.message)


    }
  }

  useEffect(() => {
    accessDocDetails();
    console.log("Doctor details:", docDetails);
}, [doctors, docId]);


  useEffect(() => {
    getAvailableSlots()
  }, [docDetails]);

  useEffect(() => {
    console.log(docSlot);
  }, [docSlot])

  return docDetails && ((
    <div>
      <div className="flex flex-col sm:flex-row gap-8 p-4">
        <div className="flex-shrink-0 w-full sm:w-1/3 bg-green-200 rounded-lg p-4 flex justify-center items-center">
          <div className="w-full h-64 sm:h-80">
            <img src={docDetails.img} alt={docDetails.name} className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
        <div className="flex-grow space-y-4 border border-gray-300 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">{docDetails.name}</h1>
            <img width="20px" src={verified} alt="Verified" />
          </div>
          <div>
            <p className="text-black font-medium text-lg">
              {docDetails.degree} - {docDetails.specialty}
            </p>
          </div>

          <div>
            <p className=" text-lg">
              {docDetails.experience} of overall experience
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold flex items-center">
              About
              <img className="ml-2" width="20px" src={about} alt="About Icon" />
            </p>
            <p >{docDetails.about}</p>
          </div>

          <div>
            <p><span className='font-medium text-lg'>Appointment Fee</span> - ₹ {docDetails.fees}</p>
          </div>
          <div>
            <p><span className='font-medium text-lg'>Address</span> - {docDetails.address ? docDetails.address.line1 : 'Address not available'}</p>
            <p className='ml-20'>{docDetails.address && docDetails.address.line2 ? docDetails.address.line2 : 'Additional address information not available'}</p>
          </div>

        </div>


      </div>
      {/* Booking slots */}
      <div className='sm:ml-3.5 mt-10 sm:pl-4 mt-8 font-medium text-gray-700'>
        <p className='text-xl font-semibold'>Book Your Slots</p>
        <div className='flex gap-3 items-center w-full  mt-4'>
          {
            docSlot.length && docSlot.map((item, index) => (
              <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-green-200 text-white' : 'border border-gray-200'}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll  mt-4'>
          {docSlot.length && docSlot[slotIndex].map((item, index) => (
            <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-green-200 text-white' : 'text-gray-500 border  border-gray-500'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <div className='flex justify-start gap-20 mt-11'>
          <button onClick={bookAppointment} className='bg-green-300 w-64 h-10 text-xl text-white rounded-full'><i class="fa-solid fa-house-chimney-medical me-2"></i>Book Clinic Visit</button>
          <button className='border border-green-500 w-64 h-10 rounded-full'><i class="fa-solid fa-video me-2"></i>Book Video Consultation</button>
        </div>
      </div>
      {/* Related Doctors */}
      <RelatedDoctors docId={docId} specialty={docDetails.specialty} />
    </div>
  )
  );
};

export default Appointments; 