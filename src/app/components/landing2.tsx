"use client"

import React from 'react';
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../recoil/atoms';

const Landing2 = () => {  
  
  const language=useRecoilValue(languageAtom);
  
  return (
    <section  
    className=' h-screen w-full
    bg-white/40
     height: 20px
     flex items-center
     bg-cover
     bg-fixed
     bg-blend-overlay
     
     '
     style={{
        backgroundImage: 'url("/bg4.jpg")'
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
                <div 
                className='cursor-default text-2xl sm:text-4xl font-bold md:6xl text-white'>
                    
                    {
                            language ?(
                            <span className=' ml-1  text-3xl lg:text-8xl text-black'>༈ བྱོན་བོ་ ལེགས་སོ།</span>
                            ):
                            (
                              <div className= 'pt-4'>
                                <span className='  ml-2   text-3xl lg:text-7xl text-black'>Welcome To</span>

                              </div>
                              )
                           }
                    
                </div>
                  
               
                </div>      
                     <div className=' my-10  py-10  bg-gray-800 opacity-70 w-full px-8 flex flex-col items-center '>
                        <div className=' cursor-default py-4 text-white md:text-2xl max-w-full sm:mx-auto z-10 font-light   
                        '>
                             {
                              language ?(
                                <div className=' ml-2'>
                                       <span className=' leading-loose text-3xl lg:text-8xl '>༈ བྷོ་ཊི་ཡ་ སྐད་རབས་ ཡར་རྒྱས་ ཆོ༹གས་པོ།
                                </span>
                                </div>
                               

                              ):(
                                <div className=' ml-2 '>
                                <span className=' text-3xl lg:text-6xl'>Bhutia khayrab Yargay Tshogpo. </span>

                                </div>

                              )
                            }
                        </div>
                     </div>
                     

                </div>
                
               
            
        </div>
        
    </section>
  )
}
export default Landing2;