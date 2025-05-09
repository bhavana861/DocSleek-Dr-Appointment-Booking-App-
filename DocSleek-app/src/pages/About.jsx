import React from 'react';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';

const About = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center p-6 gap-6 bg-gray-50">
        <div className="w-full sm:w-1/2 -mt-11">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg sm:text-xl text-justify">
            DocSleek simplifies appointment scheduling by connecting patients with doctors, offering detailed profiles, available slots, and seamless navigation.
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <img src={about1} alt="About DocSleek" className="w-full rounded-lg object-cover" />
        </div>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-center p-6 gap-9 mt-20'>
        <div className="w-full sm:w-1/2">
          <img className="w-full rounded-lg object-cover" src={about2} alt="Our Mission" />
        </div>
        <div className='w-full sm:w-1/2 mt-6 sm:mt-0'>
          <h1 className='text-center text-3xl sm:text-4xl font-bold'>Our Mission</h1>
          <p className='text-justify mt-5 sm:text-lg'>
            Our mission at DocSleek is to simplify healthcare access by connecting patients with doctors for seamless appointment scheduling and detailed profiles. We aim to enhance convenience by offering features like video consultations, ensuring quality care anytime, anywhere.
          </p>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-center p-6 gap-9 mt-20'>
        <div className="w-full sm:w-1/2 -mt-11">
          <h1 className="text-center text-3xl sm:text-4xl font-bold mb-4">Our Story</h1>
          <p className='text-justify sm:text-lg'>
            DocSleek was born from the vision of simplifying healthcare access for everyone. We recognized the challenges of scheduling appointments and finding trusted doctors, inspiring us to create a platform that connects patients and doctors effortlessly.
          </p>
          <p className='text-justify sm:text-lg'>
            With a focus on innovation and convenience, we introduced features like detailed doctor profiles, available slots, and video consultations. Our journey continues as we strive to make healthcare more accessible, personalized, and seamless for all.
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <img src={about3} className="w-full rounded-lg object-cover" alt="Our Story" />
        </div>
      </div>

      <div className='mt-20'>
        <h1 className='text-3xl sm:text-4xl font-bold text-center'>WHY CHOOSE US</h1>
      </div>

      <div className='flex flex-col sm:flex-row justify-between mt-14 gap-6 px-4 sm:px-8'>
        <div className='border px-6 sm:px-10 py-8 flex flex-col gap-5 text-[15px] sm:text-base hover:bg-green-300 hover:text-white transition-all duration-300 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifecycle.</p>
        </div>
        <div className='border px-6 sm:px-10 py-8 flex flex-col gap-5 text-[15px] sm:text-base hover:bg-green-300 hover:text-white transition-all duration-300 cursor-pointer'>
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-6 sm:px-10 py-8 flex flex-col gap-5 text-[15px] sm:text-base hover:bg-green-300 hover:text-white transition-all duration-300 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
