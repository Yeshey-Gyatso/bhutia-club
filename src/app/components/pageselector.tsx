"use client"
import React, { useState } from 'react'
import Landing1 from './landing1'
import Navbar from './navbar'
import Landing2 from './landing2'
import Landing3 from './landing3'
import Footer from './footer'
import { RecoilRoot } from 'recoil'
const PageSelector = () => {
  const [landing,setLanding]=useState(0);
//   console.log(landing);
//just got the data

    return (
    <div>
      <RecoilRoot>
      <Navbar/>
      <Landing1/>
      <Landing2/>
      <Landing3/>
      <Footer/>
      </RecoilRoot>
    
  </div>
  )
}

export default PageSelector