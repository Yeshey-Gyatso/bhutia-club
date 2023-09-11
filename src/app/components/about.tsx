import React from 'react';
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
        {/* //div to compress the contents */}
        <div className='relative flex bg-slate-600 w-4/5 h-auto'>
            <div className=' flex flex-row justify-center items-center '>
                  <div className=' bg-red-600 '>  <Image 
                          src={logoT} 
                             alt='pic of logo'
                            width={500}
                            height={500}
                          /></div>
                        <div className='w-auto h-auto
                        bg-yellow-600 flex flex-col justify-center 
                        items-center text-center'>
                          <p className="text-left tracking-wide text-lg"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nobis quae facilis a quaerat eaque esse! Maxime libero aperiam nostrum 
                            debitis provident facilis sequi suscipit quo pariatur, similique, quidem error!</p>
                      
                          </div>
                    </div>
          </div>
      
    </div>
  )
}

export default About