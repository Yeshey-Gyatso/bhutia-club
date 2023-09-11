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
import About from './about'
const PageSelector = () => {
  const [landing,setLanding]=useState(0);
//   console.log(landing);
//just got the data

    return (
    <div className=' snap-y snap-mandatory h-screen w-screen scrollbar-none overflow-x-hidden '>
      <RecoilRoot>
      <Navbar/>
      <div  className=" snap-start">
        <Landing1 />
      </div>
      <div className='snap-start'>
      <About/>

      </div>
      <Page1/>
      <Page2/>
      <Landing2/>
      <Landing3/>
      <Footer/>
      </RecoilRoot>
    
  </div>
  )
}

export default PageSelector