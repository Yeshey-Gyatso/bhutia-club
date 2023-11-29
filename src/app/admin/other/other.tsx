"use client"
import { authAtom } from '@/app/recoil/auth';
import { Divide } from 'lucide-react';
import React from 'react'
import { useRecoilValue } from 'recoil';


const Other = () => {
  const adminSignedIn=useRecoilValue(authAtom);

  return adminSignedIn? (
    <div className=' h-screen w-screen '>
      <div className=' flex flex-row  '>
      <div className=' h-screen flex flex-col gap-8 w-1/3 bg-gray-500 justify-center items-center '>
          <button>
                About
          </button>
          <button>
                Contact
          </button>
          <button>
                Team
          </button>
          <button>
                Others
          </button>
      </div>
          <div className=' w-full h-screen'>
                       lots of display
                </div>
      </div>
      
    </div>
  ):( <div>error page</div> )
}

export default Other