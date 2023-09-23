import React, { useRef } from 'react'
import Paragraph from './paragraph'
import { useScroll, useTransform } from 'framer-motion';

const Page1 = () => {
  const ref = useRef<HTMLDivElement>(null);
    
  const {scrollYProgress}= useScroll({target:ref})
  
  const x = useTransform(scrollYProgress, [-1, 0, 1], [-100, 100, -500]);

  return (
    <section  
    className=' h-screen w-full
    
     
     flex items-center
     bg-cover
     bg-fixed
     bg-blend-overlay
     
     '
     style={{
        backgroundImage: 'url("/bg5.jpg")'
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
                <div className=' 
                     grid-row-auto
                     my-10  py-10  bg-gray-800 opacity-70 w-full px-8 flex flex-col items-center '>
                        <div className=' cursor-default py-4 text-white md:text-2xl max-w-full sm:mx-auto z-10 font-light   
                        '>
                            
                          "Welcome to our literary club, where words come alive and stories unfold!"
                        </div>
                       
                     </div>
                         
                
               
                </div> 
                </div> 
        </div>
        
    </section>

    
  )
}

export default Page1