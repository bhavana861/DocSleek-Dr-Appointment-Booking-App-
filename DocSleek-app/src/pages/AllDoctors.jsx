import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const AllDoctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter,setShowFilter] = useState(false)
  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.specialty.toLowerCase() === speciality.toLowerCase()));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality]); 

  return (
    <div>
      <p >Find the right specialist for your needs.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-green-300 text-white' : ''}`} onClick={()=>setShowFilter(prev=>!prev)}>Filters</button>
        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={()=>speciality==='General Physician' ? navigate('/alldoctors'):navigate('/alldoctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="General Physician"? 'bg-green-200 text-black':""}`}> Physician</p>
          <p onClick={()=>speciality==='Pediatrician' ? navigate('/alldoctors'):navigate('/alldoctors/Pediatrician')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Pediatrician"? 'bg-green-200 text-black':""}`}>Pediatrician</p>
          <p onClick={()=>speciality==='Gynecologist' ? navigate('/alldoctors'):navigate('/alldoctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality==="Gynecologist"? 'bg-green-200 text-black':""}`}>Gynecologist</p>
          <p onClick={()=>speciality==='Neurologist' ? navigate('/alldoctors'):navigate('/alldoctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality==="Neurologist"? 'bg-green-200 text-black':""}`}>Neurologist</p>
          <p onClick={()=>speciality==='Cardiologist' ? navigate('/alldoctors'):navigate('/alldoctors/Cardiologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality==="Cardiologist"? 'bg-green-200 text-black':""}`}>Cardiologist</p>
          <p onClick={()=>speciality==='Ophthalmologist' ? navigate('/alldoctors'):navigate('/alldoctors/Ophthalmologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality==="Ophthalmologist"? 'bg-green-200 text-black':""}`}>Ophthalmologist</p>
          <p onClick={()=>speciality==='Surgeon' ? navigate('/alldoctors'):navigate('/alldoctors/Surgeon')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality==="Surgeon"? 'bg-green-200 text-black':""}`}>Surgeon</p>
          <p onClick={()=>speciality==='Hematologist' ? navigate('/alldoctors'):navigate('/alldoctors/Hematologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality==="Hematologist"? 'bg-green-200 text-black':""}`}>Hematologist</p>
          <p onClick={()=>speciality==='Dermatologist' ? navigate('/alldoctors'):navigate('/alldoctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality==="Dermatologist"? 'bg-green-200 text-black':""}`}>Dermatologist</p>
          <p onClick={()=>speciality==='ENT Specialist' ? navigate('/alldoctors'):navigate('/alldoctors/ENT Specialist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality==="ENT Specialist"? 'bg-green-200 text-black':""}`}>ENT Specialist</p>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'  >
          {filterDoc.map((doctor) => (
          <div onClick={() => navigate(`/appointments/${doctor._id}`)}  key={doctor._id} className='text-center border border-gray-300 rounded-lg shadow-lg p-4 bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
            <img  src={doctor.img} alt={doctor.name} className='w-full h-40 object-cover rounded-md border border-gray-200 bg-gray-100' />
            <h2 className='font-semibold mt-3 text-lg'>{doctor.name}</h2>
            <p className='text-gray-600 text-sm'>{doctor.specialty}</p>
            <p className='text-green-600 flex items-center justify-center mt-2'>
              <span className='w-2 h-2 rounded-full bg-green-600 inline-block mr-2'></span>
              Available
            </p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default AllDoctors;
