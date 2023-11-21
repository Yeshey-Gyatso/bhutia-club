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
import Page4 from './page4'
import About2 from './about2'
import Team2 from './team2'
import AboutPage from '../aboutPage/aboutPage'
import Contact from './contactUs'
const PageSelector = () => {
  const [landing,setLanding]=useState(0);
//   console.log(landing);
//just got the data

    return (
    <div className="overflow-x-hidden">
      <RecoilRoot>
      <Navbar/>
      <Landing1/>
      <About/>
      <Page1/>
      <Team/>
      <Contact/>
      <Page4/>

      {/* <div className=''>
      
      </div> */}
      {/* <div  className=" ">
      <Landing2 />
      </div>
      <div className=''>
      <About2/>
      </div>
      <Page2/>
      <div className=''>
      <Team2/>
      </div>
      <div className=' hidden'>
      <AboutPage/>
      </div> */}
      </RecoilRoot>
    
  </div>
  )
}

export default PageSelector