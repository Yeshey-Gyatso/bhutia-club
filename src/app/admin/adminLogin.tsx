"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { authAtom } from '../recoil/auth';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { adminlogin } from '@/services/adminService';

const AdminLogin = () => {
 

  const router=useRouter();
  const [user,setUser]=useState({
    username:"",
    password:"",  
  });

  const doLogin=async(event:any)=>{
    event.preventDefault();
    console.log(user);
//   input validation
    if(user.username.trim()==="" || user.password.trim()===""){
      toast.error("data cannot be empty!",{
        position:"top-center"
      });
      return;
    }
  try {
    const result = await adminlogin(user); 
    console.log(result)
    
    toast.success("Logged in successfully",{
      position:"top-center",
    });
      router.push("admin/pannel")


    // if (user.username==="admin" && user.password==="qwer")
    // {
      
    // }
    // else{
    //     toast.error("Logged in error",{
    //         position:"top-center",
    //       });

    // }
   
       
         } catch (error:any) {
            console.log(error);
              toast.error(error.response.data.message,{
               position:"top-center",
    });
    }
   }

  return (
    <div className='w-screen h-screen '>
      <Image className=' opacity-50 -z-10'
        src="/bg1.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        loading="lazy"
      />
        <div className='w-screen h-screen flex justify-center items-center '>
          
          <div className=' w-1/2 h-1/2 p-5 bg-black/40 rounded-xl'>

            <h1 className=' text-4xl text-white text-bold text-center'>ADMIN LOGIN HERE</h1>
            <form action="#!" onSubmit={doLogin} className='mt-5 '  >
              {/* username */}
              <div className=' mt-5'>
                <label htmlFor="user_name"
                className='block text-xl font-medium mb-2 ps-1 text-white'
                >Username</label>
                <input 
                 type="name"
                 className='w-full p-3 rounded-2xl bg-gray-800 
                 focus:ring-gray-400 border-gray-800 text-white' 
                 placeholder='Enter your name here'
                 id='user_name'
                 onChange={(e)=>{
                  setUser({
                    ...user,
                    username:e.target.value,
                  });
                 }}
                 value={user.username}

                 />

              </div>

             
              {/* password */}
              <div className=' mt-5'>
                <label htmlFor="user_password"
                className='block text-xl font-medium mb-2 ps-1 text-white'
                >Password</label>
                <input 
                 type="password"
                 className='w-full p-3 rounded-2xl bg-gray-800 
                 focus:ring-gray-400 border-gray-800
                 text-white
                 ' 
                 placeholder='Enter your password here'
                 id='user_password'
                 onChange={(e)=>{
                  setUser({
                    ...user,
                    password:e.target.value,
                  });
                 }}
                 value={user.password}
                 /> 
                   
              </div>

             <div className='flex justify-center items-center   mt-4'>
                    <button 
                    type='submit'
                    className='  border border-white bg-blue-200 p-4 rounded-3xl 
                     hover:bg-blue-800 '>Login</button>
                     {/* <button className=' bg-orange-600 p-3 rounded-full
                     hover:bg-orange-800 '>Reset</button> */}
                </div>
                    
              {/* {JSON.stringify(user)} */}
            </form>
          </div>
        </div>

    </div>
  )
}

export default AdminLogin;