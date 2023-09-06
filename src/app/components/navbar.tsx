"use client";


// import UserContext from '@/context/userContext';
// import { logout } from '@/services/userService';
import Link from 'next/link';
import { List } from 'postcss/lib/list';
import {AiOutlineCaretDown,AiOutlineCaretUp} from "react-icons/ai";
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
            <ul className='flex   space-x-2 '>
              <li>
               <h1 className=' inline cursor-default'  
               >name</h1>
                </li>

              <li>
              <h1><Link href={'/translator' }className=' hover:text-gray-300'> Translator</Link></h1>   
              </li>

              <li>
              <div className=' relative flex items-center w-auto h-auto rounded-lg'>
                  <button className=' bg-gray-300 p-1 flex 
                  items-center justify-between
                   font-bold text-lg  
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
                    <div className=' bg-blue-400 absolute'></div>
                  )}

                </div>   
              </li>
            </ul>           
        </div>
        </div>
  )
}

export default Navbar