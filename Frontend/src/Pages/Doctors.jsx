import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
// 1. Change import to point to DoctorsPage
import DoctorsPage from '../Components/DoctorsPage' 

const Doctors = () => {
  return (
    <div>
        <Navbar/>
        
        {/* 2. Render the imported DoctorsPage component */}
        <DoctorsPage/> 
        
        <Footer/>
    </div>
  )
}

export default Doctors