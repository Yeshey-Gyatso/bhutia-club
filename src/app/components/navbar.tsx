"use client";
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineCaretDown,AiOutlineCaretUp} from "react-icons/ai";
import {GrLanguage} from "react-icons/gr";
import Flag from '../assets/flag.svg';
import logoT from '../public/logoT.png';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { useRecoilState } from 'recoil';
import { languageAtom } from '../recoil/atoms';

// import { toast } from 'react-toastify';


const Navbar = () => {
  
  const [language,setLanguage]=useRecoilState(languageAtom);
  console.log(language);
  const [isOpen,setIsOpen]=useState(false)

  return (
    <div className=' flex md:justify-between 
    bg-transparent
     w-full 
     fixed
      md:p-4
       z-10'>
        <div className='p-1 md:p-0 brand'>
            {/* <h1 className='md:text-xl font-bold border-b-2 border-black
                     md:p-1 inline cursor-default '>BKYT</h1> */}

            <Image 
              src={logoT} 
              alt='pic of logo'
              width={60}
              height={60}
            />
        </div>
        <div className=' hidden md:flex space-x-10 '>

          {/* /////home */}
            {
              language?(
                <div className=' -mt-2'> 
                    <h1><Link href={'/'} className=' hover:text-gray-300 text-3xl'>ཁྱིམ།</Link></h1>   

                </div>

              ):(
            <h1><Link href={'/'} className=' hover:text-gray-300 text-lg'>Home</Link></h1>   

              )
              
            }

            {/* //about */}
          {
            language?
            (
              <div className=' -mt-2'>
                  <h1><Link href={'/About' }className=' hover:text-gray-300  text-3xl'>སྐོར་ལོ།</Link></h1>

              </div>

            ):
            (
            <h1><Link href={'/About' }className=' hover:text-gray-300 text-lg'>About</Link></h1>

            )
          }

          {/* ////Team */}

          {
            language?(
              <div className=' -mt-2'>
                <h1><Link href={'/team' }className=' hover:text-gray-300 text-3xl'>ཆོ༹གས་ཆུང།</Link></h1>   

              </div>

            ):(
            <h1><Link href={'/team' }className=' hover:text-gray-300 text-lg'> Team</Link></h1>   

            )
          }

            </div>
        <div className='pr-1'>
            <ul className='flex space-x-2 '>
              {/* <li>
               <h1 className=' inline cursor-default' 
               >name</h1>
                </li> */}

              {/* <li>
              <h1><Link href={'/translator' }className=' hover:text-gray-300'> Translator</Link></h1>   
              </li> */}

              <li>
              <div className=' relative mt-2 md:mt-auto ml-52 md:ml-auto flex items-center w-auto h-auto rounded-lg'>
                  <button className=' bg-gray-300 flex 
                  items-center justify-between
                   rounded-lg tracking-wider 
                   border-4 border-transparent 
                   active:border-white duration-300
                   
                   '
                   onClick={ ()=>setIsOpen((prev)=>!prev)}
                   >
                    {
                      language?(
                          <p className='-mt-3 text-2xl/3'>སྐད་རབས།</p>
                      ):(
                        <h1>language</h1>
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
                      onClick={() => setLanguage(false)}
                      className=' flex w-full p-2 justify-between hover:bg-slate-500 cursor-pointer 
                      rounded-r-lg border-l-transparent
                      hover:border-l-white border-l-4
                      '>
                        <h3>English</h3>
                        <GrLanguage className="ml-2 "/>
                      </button>
                      
                      <button
                      onClick={() => setLanguage(true)}
                      className=' flex w-full justify-between hover:bg-slate-500 cursor-pointer 
                      rounded-r-lg border-l-transparent 
                      hover:border-l-white border-l-4'>
                        <h3 className=' ml-2'>Bhutia</h3>
                        <Flag className="w-7 h-7" />
                      </button>
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