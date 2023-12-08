"use client"

import logoT from '../public/logoT.png';
import Image from 'next/image'
import Link from 'next/link';
import Navbar from '../components/navbar';
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../recoil/atoms';
import { Heading1 } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const About = () => {
  const language=useRecoilValue(languageAtom);
  const [aboutData, setAboutData] = useState({ title1: '', description1: '',title2: '', description2: '',
  btitle1: '', bdescription1: '',btitle2: '', bdescription2: '',
});
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/admin/contents', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const data = await response.json();
      setAboutData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle the error appropriately
    }
  };

  fetchData();
}, []); 
  return (
    
    <div className=' h-screen w-screen flex justify-center '>
        <Navbar/>
         <div className=' flex flex-row justify-center items-center pt-24 '>
        <div className='p-2'>

        <Image 
              src={logoT} 
              alt='pic of logo'
              width={400}
              height={400}
               />     
        </div>
       
       
        <title>
          About Us - Bhutia Khayrab Yargay tshogpo
          </title>
      

      <main className="bg-gray-100 p-8">
        <section className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-lg font-semibold mb-4">
            {
              language?(<h1>{aboutData.btitle1}</h1>):(<h1>{aboutData.title1}</h1>)
            }
            </h1>
          <div className="text-gray-700 text-sm">
            {
              language ? (
                  <p>{aboutData.bdescription1}</p>
              ):(
                  <p>{aboutData.description1}</p>
              )
            }
           
          
          </div>

          <div className="text-lg font-semibold mt-8 mb-4">
            {
              language?(<h2>{aboutData.btitle2}</h2>):(<h2>{aboutData.title2}</h2>)
            }
            
            
            </div>
          <div className="text-gray-700 text-sm">
            {
              language?(<p>{aboutData.bdescription2}</p>)
              :(<p>{aboutData.description2}</p>)
            }
                      
          </div>
          <div className=' flex justify-center items-center'>
          <Link className='text-black bg-transparent px-6 py-3 
                 my-8 mx-auto flex items-center rounded-md border
                  border-black hover:scale-110 duration-300'
                  href={"/contactUs"}
                  >
                    {
                      
                    }
                 Contact Us
                </Link>  
          </div>
                 
          <div className='flex justify-center items-center'>
        
        </div>
        </section>
        
      </main>
      
      </div>
      
    </div>
   
  )
}

export default About