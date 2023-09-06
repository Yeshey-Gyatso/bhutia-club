"use client";
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineCaretDown,AiOutlineCaretUp} from "react-icons/ai";
import {GrLanguage} from "react-icons/gr";
import flag from '../assets/flag.svg';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'

// import { toast } from 'react-toastify';


const Navbar = () => {

  const [isOpen,setIsOpen]=useState(false)

  return (
    <div className=' flex md:justify-between 
     bg-gradient-to-r from-rose-500 to-rose-200
     w-full 
     fixed
      p-4
       z-10'>
        <div className=' brand'>
            <h1 className='md:text-xl font-bold border-b-2 border-white
                     md:p-1 inline cursor-default '>BKYT</h1>
        </div>
        <div className=' flex space-x-2  '>
            <h1><Link href={'/'} className=' hover:text-gray-300'>Home</Link></h1>   
            <h1><Link href={'/about' }className=' hover:text-gray-300'>About</Link></h1>
            <h1><Link href={'/team' }className=' hover:text-gray-300'> Team</Link></h1>   
            </div>
        <div>
            <ul className='flex space-x-2 '>
              <li>
               <h1 className=' inline cursor-default'  
               >name</h1>
                </li>

              <li>
              <h1><Link href={'/translator' }className=' hover:text-gray-300'> Translator</Link></h1>   
              </li>

              <li>
              <div className=' relative flex items-center w-auto h-auto rounded-lg'>
                  <button className=' bg-gray-300 flex 
                  items-center justify-between
                   rounded-lg tracking-wider 
                   border-4 border-transparent 
                   active:border-white duration-300
                   
                   '
                   onClick={ ()=>setIsOpen((prev)=>!prev)}
                   >Language
                   {
                    !isOpen?(
                      <AiOutlineCaretDown className="h-8"/>
                    ):(
                      <AiOutlineCaretUp className="h-8"/>
                    )
                   }
                   </button>
                  
                  {isOpen &&(
                    <div className=' bg-blue-400 absolute top-14 flex flex-col items-start rounded-lg p-2 w-auto'>

                      <div className=' flex w-full p-2 justify-between hover:bg-slate-500 cursor-pointer 
                      rounded-r-lg border-l-transparent
                      hover:border-l-white border-l-4
                      '>
                        <h3>English </h3>
                        <GrLanguage className="ml-2 pt-1"/>
                      </div>
                      
                      <div className=' flex w-full justify-between hover:bg-slate-500 cursor-pointer 
                      rounded-r-lg border-l-transparent 
                      hover:border-l-white border-l-4'>
                        <h3>Bhutia</h3>
                        <img src={flag} alt="img" />
                      </div>

                    </div>
                  )}

                </div>   
              </li>
            </ul>           
        </div>
        </div>
  )
}

export default Navbar