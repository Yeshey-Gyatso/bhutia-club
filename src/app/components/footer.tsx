"use client"
import React from 'react'

const Footer = () => {
  return (<footer className=' bottom-0 left-0 z-50  bg-gray-500  w-full lg:mx-auto sm:max-w-screen-x'>
    <div className=' flex md:p-5 justify-around'>
      <div className=' text-left md:text-center flex flex-col justify-center '>
          <h1 className='text-lg md:text-3xl '>Bhutia Khayrab Yargay Tshogpo</h1>
          <p className=' text-xs md:text-base pt-4'>The official Bhutia literary club of Sikkim 
             .</p>
      </div>
      
    <div className=' md:text-center text-xs md:text-base'>
      <h1>Import Links</h1>
      <ul>
        <li><a href="#!">facebook</a></li>
        <li><a href="#!">Youtube</a></li>
        <li><a href="#!">LinkedIn</a></li>
      </ul>
    </div>
    </div> 
  </footer>
    
  )
}

export default Footer;