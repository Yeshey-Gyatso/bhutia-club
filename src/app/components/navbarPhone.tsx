import Flag from '../assets/flag.svg';
import React, { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { GrLanguage } from 'react-icons/gr';
import { useRecoilState } from 'recoil';
import { languageAtom } from '../recoil/atoms';

const NavP = () => {
    const [language,setLanguage]=useRecoilState(languageAtom);
  console.log(language);
  const [isOpen,setIsOpen]=useState(false)

  return (
    <div className=' relative  lg:mt-4 md:mt-auto ml-52 md:ml-auto flex items-center w-auto h-auto rounded-lg'>
                  <button className=' bg-gray-300 flex 
                  items-center justify-between
                   rounded-lg tracking-wider 
                   border-4 border-transparent md:mr-10
                   active:border-white duration-300
                   
                   '
                   onMouseEnter={ ()=>setIsOpen((prev)=>!prev)}
                   
                   >
                    {
                      language?(
                          <h1 className='md:-mt-3 text-xl md:text-3xl'>བྷོ་ཊི་ཡ།</h1>
                      ):(
                        <h1 className='font-mono'>English</h1>
                      )
                    }
                   
                   {
                    !isOpen?(
                      <AiOutlineCaretDown className="h-8"/>
                    ):(
                      <AiOutlineCaretUp className="h-8"/>
                    )
                   }
                   </button>
                  
                  {isOpen &&(
                    <div className=' bg-blue-400 absolute
                     top-12 flex flex-col items-start rounded-lg 
                     p-2 w-auto'>
                      
                      <button 
                      onClick={() => {setLanguage(false);
                                      setIsOpen(false);}
                      }

                      className=' flex w-full p-2 justify-between hover:bg-slate-500 cursor-pointer 
                      rounded-r-lg border-l-transparent
                      hover:border-l-white border-l-4
                      '>
                        <h3 className=' font-serif'>English</h3>
                        <GrLanguage className="ml-2 "/>
                      </button>
                      
                      <button
                      onClick={() => {setLanguage(true);setIsOpen(false);}}
                      className=' flex w-full justify-between hover:bg-slate-500 cursor-pointer 
                      rounded-r-lg border-l-transparent 
                      hover:border-l-white border-l-4'>
                        <h3 className=' ml-2'>Bhutia</h3>
                        <Flag className="w-7 h-7" />
                      </button>
                    </div>
                  )}
                </div>
  )
}

export default NavP