"use client"

import React from 'react';





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
        backgroundImage: 'url("/bg1.jpg")'
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
                     

                </div>
                
               
            
        </div>
        
    </section>
  )
}
export default Landing2;