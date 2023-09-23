"use client"
import Image from 'next/image';
import {GiMailbox} from 'react-icons/gi'
import { Link } from 'react-scroll';
import logoT from '../public/logoT.png';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../recoil/atoms';

const Landing1 = () => {  
  
  const language=useRecoilValue(languageAtom);
  
  return (
    <section  
    id='home'
    className=' h-screen w-full
     flex items-center
     bg-cover
     bg-fixed
     md:bg-blend-overlay
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
          {/* this div is only for white line */}
            <div className=' md:absolute inset-y-72 -mt-4 md:bg-white/50 w-full h-[25rem]'></div>
              <div 
                className='relative
                md:grid grid-cols-12 gap-32 items-center 
                bottom-0 mt-40 w-auto
                
                '>
                <div className=' col-span-6'>
                    {/* start of div for titles */}
                <div>  
                <div className='  items-center '>
                  <div 
                  className='  cursor-default -mt-28 
                  -ml-40 md:ml-auto
                  md:mt-auto text-2xl sm:text-4xl 
                  font-bold md:6xl 
                  
                  text-white'>
                    
                    {
                            language ?(
                              <div>
                            <span className=' md:ml-48  text-2xl lg:text-6xl text-black'>༈ བྱོན་བོ་ ལེགས་སོ།</span>

                              </div>
                            ):
                            (
                              <div className= 'pt-4'>
                                <span className='md:ml-48  text-3xl lg:text-4xl text-black font-sans'>Welcome To</span>

                              </div>
                              )
                           }
                    
                  </div>
                  </div>  
                  <div className=' 
                     md:grid-row-auto
                     my-10  py-10  bg-gray-800 
                     -ml-28 md:ml-auto
                     opacity-70 w-full px-8 flex flex-col items-center '>
                        <div className=' cursor-default py-4 text-white md:text-2xl max-w-full sm:mx-auto z-10 font-light   
                        '>
                             {
                              language ?(
                                <div className=' ml-2 -mt-2'>
                                       <span className=' leading-loose text-2xl lg:text-5xl '>༈ བྷོ་ཊི་ཡ་ སྐད་རབས་ ཡར་རྒྱས་ ཆོ༹གས་པོ།

                                </span>
                                
                                </div>
                               

                              ):(
                                <div className=' ml-2 '>
                                <span className=' leading-loose text-3xl lg:text-4xl font-serif'>Bhutia Khayrab Yargay Tshogpo. </span>

                                </div>

                              )
                            }
                        </div>
                       
                     </div>
                     <div className=' absolute inset-x-96 inset-y-64 pl-7 pt-4'>
                     <Link to ='contact' spy={true} smooth={true} offset={-70} duration={500}  className='group
                      text-white w-fit px-6 py-3 my-2 flex 
                     items-center rounded-md  bg-black
                     shadow-md
                     bg-gradient-to-r from-blue-600 to to-blue-300
                     
                     cursor-pointer'>
                        Contact Us <span
                        className=' group-hover:skew-y-12 group-hover:rotate-12 duration-200'
                        >
                        <GiMailbox size={40} className=' ml-1'/>
                        </span>
                    </Link>
                     </div>
                     

                {/* end of div */}
                </div>
                </div>
                <div className=' hidden md:block col-span-6'> 
                <Image 
              src={logoT} 
              alt='pic of logo'
              width={400}
              height={400}
               /> 
                </div>
                
                    
                     
                     

                </div>
                
               
            
        </div>
        
    </section>
  )
}
export default Landing1;