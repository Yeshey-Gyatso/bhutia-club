"use client";


// import UserContext from '@/context/userContext';
// import { logout } from '@/services/userService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';


const Navbar = () => {
  return (
    <div className=' flex md:justify-between 
    bg-emerald-950 
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
            
            <h1><Link href={'/courses' }className=' hover:text-gray-300'>Courses</Link></h1>
            <h1><Link href={'/profile/user' }className=' hover:text-gray-300'> Purchases</Link></h1>   
              
            
            </div>
        <div>
            <ul className='flex   space-x-2 '>
            {
              context.user && (
                <>
                   <li>
               <h1 className=' inline cursor-default'
                
               >{context.user.username}</h1>
                </li>
                <li>
                  <button
                  onClick={doLogout} 
                  >logout</button>
                </li>

                </>
              )
            }
            {
              !context.user &&(
                <>
                  <li>
               <Link href={'/login'} 
               >login</Link>
                </li>
                <li>
                  <Link href={'/signupUser'}
                   
                  >Signup</Link>
                
                </li>
                </>
              )
            }
               
            </ul>
                  
              
                   
                   
                
            
                
        </div>
        </div>
  )
}

export default Navbar