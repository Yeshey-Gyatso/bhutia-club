import React from 'react'
import Image from 'next/image';
import logoT from '../public/logoT.png';
const About = () => {
  return (
    <div className='
    h-screen w-full
    bg-gradient-to-b from-white via-blue-100 to-sky-500'>
      <div className='pl-10 pt-28 flex flex-col'>
            <h1 className=' text-6xl font-extrabold'>WHO WE ARE </h1>
            <h1 className=' ml-28 py-4 text-2xl font-bold'> Based in Gangtok with team from all over Sikkim to ... ?
              </h1>
            </div>
      <div className=' flex w-full relative '>
          <div className=' inset-x-1/2 absolute w-40 bg-red-600'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Unde distinctio omnis sequi quaerat voluptates aut
                harum mollitia soluta fugit eum atque, 
               ipsa velit ea non voluptatem facere explicabo laboriosam cum.</p>
             </div>
          
      </div>
      <div className=' inset-x-24 relative  w-1/3 h-96'>
            
          <Image 
              src={logoT} 
              alt='pic of logo'
              width={1000}
              height={1000}
            />
            </div>
    </div>
  )
}

export default About