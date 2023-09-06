"use client";


// import UserContext from '@/context/userContext';
// import { logout } from '@/services/userService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'
// import { toast } from 'react-toastify';


const Navbar = () => {
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
            <h1><Link href={'/translator' }className=' hover:text-gray-300'> Translator</Link></h1>   
            </div>
        <div>
            <ul className='flex   space-x-2 '>
              <li>
               <h1 className=' inline cursor-default'  
               >name</h1>
                </li>
                
           
               
               
             
               
            </ul>
                  
              
                   
                   
                
            
                
        </div>
        </div>
  )
}

export default Navbar