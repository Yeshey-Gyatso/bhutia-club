"use client"
import React, { useState } from 'react'
import Landing1 from './landing1'
import Navbar from './navbar'
import Landing2 from './landing2'
import Landing3 from './landing3'
import Footer from './footer'
import { RecoilRoot } from 'recoil'
import Page1 from './page1'
import Page2 from './page2'

import Team from './team'

import About from './about'
const PageSelector = () => {
  const [landing,setLanding]=useState(0);
//   console.log(landing);
//just got the data

    return (
    <div className=''>
      <RecoilRoot>
      <Navbar/>

      <Landing2/>
      <About/>
      <Page1/>
      <Team/>
      <Page4/>
      <div  className=" ">
        <Landing1 />
      </div>
      <div className=''>
      <About/>
      </div>
      <Page2/>
      <div className=''>
      <Team/>
      </div>
   
      </RecoilRoot>
    
  </div>
  )
}

export default PageSelector