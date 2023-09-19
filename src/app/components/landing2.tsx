"use client"

import React from 'react';
import {GiMailbox} from 'react-icons/gi';
import bgT from '../assets/portfolio/bgT.png';
import { Link } from 'react-scroll';



const Landing2 = () => {                        
  return (
    <section  
    className=' h-screen w-full
     bg-black/50
     height: 20px
     flex items-center
     bg-cover
     bg-fixed
     bg-blend-overlay
     
     '
     style={{
        // backgroundImage:`url(${bgT})`
     }}
     >

       
            
       
        <div className='
        
        max-w-screen-lg mx-auto 
        flex 
        items-center 
        justify-center 
        max-w-responsive
        px-4 md:flex-row
        
        '>
            
              <div 
                className='relative z-10 flex flex-col items-center bottom-0 mt-40'>
                <div className='relative flex flex-row items-center'>
                <h2 
                className='cursor-default text-2xl sm:text-4xl font-bold md:6xl text-white'>
                    WELCOME TO MY SITE 
                    
                </h2>
                  
                  <h2 
                     className='text-4xl text-opacity-0 md:text-opacity-100 font-bold  text-white pl-2'  
                    >!</h2> 
                </div>      
                     <div className=' my-10  py-10  bg-gray-800 opacity-70 w-full px-8 flex flex-col items-center '>
                        <p className=' cursor-default py-4 text-white md:text-2xl max-w-full sm:mx-auto z-10 font-light   
                        '>
                            <span className=' font-quote'>"Creativity is contagious. Pass it on." </span><span className='  font-mono font-bold'>- Albert Einstein</span>
                        </p>
                     </div>
                     

                      <div className=' mt-auto'>
                    <Link to='contact' smooth duration={800} className='group text-white w-fit px-6 py-3 my-2 flex 
                     items-center rounded-md
                     bg-gradient-to-r from-orange-400 to to-orange-800
                     cursor-pointer'>
                        Contact Me <span
                        className=' group-hover:skew-y-12 group-hover:rotate-12 duration-200'
                        >
                        <GiMailbox size={40} className=' ml-1'/>
                        </span>
                    </Link>
                </div>
                </div>
                
               
            
        </div>
        
    </section>
  )
}
export default Landing2;