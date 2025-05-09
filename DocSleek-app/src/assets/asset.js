// Importing doctor images
import drrr1 from '../assets/drrr1.png';
import drr2 from '../assets/drr2.png';
import drr3 from '../assets/drr3.png';
import drr4 from '../assets/drr4.png';
import drr5 from '../assets/drr5.png';
import drr6 from '../assets/drr6.png';
import drr7 from '../assets/drr7.png';
import drr8 from '../assets/drr8.png';
import drr9 from '../assets/drr9.png';
import drr10 from '../assets/drr10.png';
import drr11 from '../assets/drr11.png';
import drr12 from '../assets/drr12.png';
import drr13 from '../assets/drr13.png';
import drr14 from '../assets/drr14.png';
import drr15 from '../assets/drr15.png';

import prof from '../assets/profile-pic.jpg'

// Importing specialty icons
import ph from '../assets/ph.png';
import maternity from '../assets/maternity.png';
import neuro from '../assets/neuro.png';
import heart from '../assets/heart.png';
import eye from '../assets/eye.png';
import pediatrician from '../assets/pediatrician.png';
import hema from '../assets/hematologist.png';
import skin from '../assets/skin.png';
import surgeon from '../assets/surgeon.png';
import ent from '../assets/ent.png';

// Doctors data
export const doctors = [
  {
    _id: 'doc1',
    img: drrr1,
    name: 'Dr. Alice Johnson',
    specialty: 'Cardiologist',
    degree: 'MD, FACC',
    experience: '3 Years',
    about: 'Dr. Alice Johnson has over 15 years of experience specializing in cardiovascular diseases. She is dedicated to providing personalized care to her patients.',
    fees: 250,
    address: {
      line1: '123 Heartbeat Avenue',
      line2: 'Mumbai, Maharashtra',
    },
  },
  {
    _id: 'doc2',
    img: drr2,
    name: 'Dr. Bob Smith',
    specialty: 'Dermatologist',
    degree: 'MD, FAAD',
    experience: '10 Years',
    about: 'Dr. Bob Smith is an expert in treating skin, hair, and nail disorders with a focus on cosmetic dermatology.',
    fees: 200,
    address: {
      line1: '456 Skin Care Blvd',
      line2: 'Bengaluru, Karnataka',
    },
  },
  {
    _id: 'doc3',
    img: drr3,
    name: 'Dr. David Wilson',
    specialty: 'Neurologist',
    degree: 'MD, PhD',
    experience: '9 Years',
    about: 'Dr. David Wilson specializes in neurological disorders, including epilepsy, migraines, and Parkinson’s disease.',
    fees: 300,
    address: {
      line1: '789 Neuro Lane',
      line2: 'Delhi',
    },
  },
  {
    _id: 'doc4',
    img: drr4,
    name: 'Dr. Clara Brown',
    specialty: 'Pediatrician',
    degree: 'MD, FAAP',
    experience: '4 Years',
    about: 'Dr. Clara Brown has extensive experience in pediatric care, ensuring the health and well-being of children.',
    fees: 180,
    address: {
      line1: '101 Kidz Street',
      line2: 'Kolkata, West Bengal',
    },
  },
  {
    _id: 'doc5',
    img: drr5,
    name: 'Dr. Jack Lee',
    specialty: 'General Physician',
    degree: 'MBBS, MD',
    experience: '5 Years',
    about: 'Dr. Jack Lee is a compassionate physician providing primary care services and managing chronic conditions.',
    fees: 150,
    address: {
      line1: '202 Health Ave',
      line2: 'Chennai, Tamil Nadu',
    },
  },
  {
    _id: 'doc6',
    img: drr6,
    name: 'Dr. Ann White',
    specialty: 'Ophthalmologist',
    degree: 'MD, FAAOS',
    experience: '3 Years',
    about: 'Dr. Ann White specializes in orthopedic surgery and sports medicine, helping patients recover mobility.',
    fees: 350,
    address: {
      line1: '303 Ortho Road',
      line2: 'Hyderabad, Telangana',
    },
  },
  {
    _id: 'doc7',
    img: drr7,
    name: 'Dr. Grace Green',
    specialty: 'ENT Specialist',
    degree: 'MD, DABPN',
    experience: '4 Years',
    about: 'Dr. Grace Green focuses on mental health care, offering therapy and treatment for anxiety, depression, and more.',
    fees: 220,
    address: {
      line1: '404 Mind Way',
      line2: 'Pune, Maharashtra',
    },
  },
  {
    _id: 'doc8',
    img: drr8,
    name: 'Dr. Ancy Adams',
    specialty: 'Surgeon',
    degree: 'MD, FASCO',
    experience: '2 Years',
    about: 'Dr. Ancy Adams is a leading oncologist providing advanced cancer treatments and compassionate care.',
    fees: 400,
    address: {
      line1: '505 Hope Street',
      line2: 'Ahmedabad, Gujarat',
    },
  },
  {
    _id: 'doc9',
    img: drr9,
    name: 'Dr. John Clarke',
    specialty: 'Gynecologist',
    degree: 'MD, FACOG',
    experience: '7 Years',
    about: 'Dr. John Clarke offers comprehensive gynecological services, focusing on women’s health and well-being.',
    fees: 200,
    address: {
      line1: '606 Women’s Health Blvd',
      line2: 'Jaipur, Rajasthan',
    },
  },
  {
    _id: 'doc10',
    img: drr10,
    name: 'Dr. Emily Davis',
    specialty: 'Hematologist',
    degree: 'MD Hematology',
    experience: '10 Years',
    about: 'Dr. Emily Davis is a dedicated hematologist specializing in the diagnosis and treatment of blood disorders.',
    fees: 180,
    address: {
      line1: '707 Smile Avenue',
      line2: 'Lucknow, Uttar Pradesh',
    },
  },
  {
    _id: 'doc11',
    img: drr11,
    name: 'Dr. Issac Emmanuel',
    specialty: 'Pediatrician',
    degree: 'MD Pediatrics',
    experience: '1 Years',
    about: 'Dr. Issac Emmanuel is a skilled pediatrician offering compassionate care for children of all ages.',
    fees: 290,
    address: {
      line1: '202 Healthy Kids Street',
      line2: 'Surat, Gujarat',
    },
  },
  {
    _id: 'doc12',
    img: drr12,
    name: 'Dr. Evan John',
    specialty: 'Pediatrician',
    degree: 'MD Pediatrics',
    experience: '5 Years',
    about: 'Dr. Evan John is dedicated to providing expert pediatric care in a warm and welcoming environment.',
    fees: 180,
    address: {
      line1: '202 Healthy Kids Street',
      line2: 'Kochi, Kerala',
    },
  },
  {
    _id: 'doc13',
    img: drr13,
    name: 'Dr. Mary Anna',
    specialty: 'General Physician',
    degree: 'MBBS, MD',
    experience: '2 Years',
    about: 'Dr. Mary Anna is a compassionate physician providing primary care services and managing chronic conditions.',
    fees: 150,
    address: {
      line1: '301 KidCare Lane',
      line2: 'Indore, Madhya Pradesh',
    },
  },
  {
    _id: 'doc14',
    img: drr14,
    name: 'Dr. Sara Joseph',
    specialty: 'Gynecologist',
    degree: 'MD, FACOG',
    experience: '8 Years',
    about: 'Dr. Sara Joseph specializes in women’s health, offering expert care in obstetrics and gynecology.',
    fees: 250,
    address: {
      line1: '123 Blossom Avenue',
      line2: 'Bhopal, Madhya Pradesh',
    },
  },
  {
    _id: 'doc15',
    img: drr15,
    name: 'Dr. Manuel Issac',
    specialty: 'General Physician',
    degree: 'MD',
    experience: '4 Years',
    about: 'Dr. Manuel Issac is a trusted general physician offering comprehensive healthcare services.',
    fees: 250,
    address: {
      line1: '456 Health Street',
      line2: 'Chandigarh',
    },
  },
];



// Specialities data
export const specialities = [
  { img: ph, label: 'Physician', speciality: 'General Physician' },
  { img: maternity, label: 'Gynecologist', speciality: 'Gynecologist' },
  { img: neuro, label: 'Neurologist', speciality: 'Neurologist' },
  { img: heart, label: 'Cardiologist', speciality: 'Cardiologist' },
  { img: eye, label: 'Ophthalmologist', speciality: 'Ophthalmologist' },
  { img: pediatrician, label: 'Pediatrician', speciality: 'Pediatrician' },
  { img: hema, label: 'Hematologist', speciality: 'Hematologist' },
  { img: skin, label: 'Dermatologist', speciality: 'Dermatologist' },
  { img: surgeon, label: 'Surgeon', speciality: 'Surgeon' },
  { img: ent, label: 'ENT Specialist', speciality: 'ENT Specialist' },
];

export const assets = {
  prof
}
