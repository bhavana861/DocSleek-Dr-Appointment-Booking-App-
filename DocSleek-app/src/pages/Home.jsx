import React from 'react'
import Header from '../components/Header'
import Speciality from '../components/Speciality'
import Steps from '../components/Steps'
import Questions from '../components/Questions'
import TopDoctors from '../components/TopDoctors'

const Home = () => {
  return (
    <div>
      <Header/>
      <Speciality/>   
      <TopDoctors/>
      <Steps/>
      <Questions/>
    </div>
  )
}

export default Home
