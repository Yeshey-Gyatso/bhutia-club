"use client";
// import UserContext from '@/context/userContext';
// import { adminlogin } from '@/services/adminServices';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const AdminLogin = () => {

//   const context=useContext(UserContext);
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
      toast.info("data cannot be empty!",{
        position:"top-center"
      });
      return;
    }
  try {
    // const result = await adminlogin(user); get this from admnin services api call
    // console.log(result)
    if (user.username==="admin" && user.password==="qwer")
    {
        toast.success("Logged in successfully",{
                position:"top-center",
              });
        router.push("admin/other")
    }
    else{
        toast.error("Logged in error",{
            position:"top-center",
          });

    }
    // toast.success("Logged in successfully",{
    //     position:"top-center",
    //   });

        //redirect
        // context.setUser(result.user);
        // router.push("admin/other")
       
         } catch (error:any) {
            console.log(error);
              toast.error(error.response.data.message,{
               position:"top-center",
    });
    }
   }

  return (
    <div className='grid grid-cols-12 justify-center'>
        <div className='  col-span-4 col-start-5'>
          <div className=' p-5'>

            <h1 className=' text-3xl text-center'>ADMIN  Login here</h1>
            <form action="#!" onSubmit={doLogin} className='mt-5'  >
              {/* username */}
              <div className=' mt-5'>
                <label htmlFor="user_name"
                className='block text-sm font-medium mb-2 ps-1'
                >username</label>
                <input 
                 type="name"
                 className='w-full p-3 rounded-2xl bg-gray-800 
                 focus:ring-gray-400 border-gray-800' 
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
                className='block text-sm font-medium mb-2 ps-1'
                >Password</label>
                <input 
                 type="password"
                 className='w-full p-3 rounded-2xl bg-gray-800 
                 focus:ring-gray-400 border-gray-800' 
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

             <div className='flex justify-center gap-x-4 mt-4'>
                    <button 
                    type='submit'
                    className=' bg-blue-700 p-3 rounded-full
                     hover:bg-blue-800 '>login</button>
                     {/* <button className=' bg-orange-600 p-3 rounded-full
                     hover:bg-orange-800 '>Reset</button> */}
                </div>
                    
              {JSON.stringify(user)}
            </form>
          </div>
        </div>

    </div>
  )
}

export default AdminLogin;