"use client"
import React, { useState } from 'react'
import Landing1 from './landing1'
import Navbar from './navbar'
import Landing2 from './landing2'
import Landing3 from './landing3'
import Footer from './footer'

const PageSelector = () => {
  const [landing,setLanding]=useState(0);
//   console.log(landing);
    return (
    <div>
    <Navbar/>
    <Landing1/>
    <Landing2/>
    <Landing3/>
    <Footer/>
  </div>
  )
}

export default PageSelector