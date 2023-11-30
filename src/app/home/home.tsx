"use client"
import React, { useState } from 'react'
import Landing1 from '../components/landing1'
import Navbar from '../components/navbar'

import Page1 from '../components/page1'
import Team from '../components/team'
import About from '../components/about'
import Page4 from '../components/page4'
import Contact from '../components/contactUs'
const PageSelector = () => {
  const [landing,setLanding]=useState(0);
//   console.log(landing);
//just got the data

    return (
    <div className="overflow-x-hidden">
     
      <Navbar/>
      <Landing1/>
      <About/>
      <Page1/>
      <Team/>
      <Contact/>
      <Page4/>
     
    
  </div>
  )
}

export default PageSelector