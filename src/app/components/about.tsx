"use client";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from 'react'
import Image from 'next/image';
import logoT from '../public/logoT.png';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../recoil/atoms';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
    
  const {scrollYProgress}= useScroll({
      target:ref,
      offset:["0 1","1.2 1"]
  })

  const language=useRecoilValue(languageAtom);
  return (
    <div 
    id='about'
    className='
    h-screen w-full pt-4
    bg-gradient-to-b from-white via-blue-100 to-sky-500'>
      <div 
      className=' pl-20 md:pl-32 pt-8 flex flex-col'>
      {
        language?(
          <h1 className=' text-3xl lg:text-7xl lg:-mt-6  font-extrabold border-b-8'>ང་ཅག་ ཀ་ འབོ </h1>

        ):(
          <h1 className='text-2xl lg:text-5xl font-extrabold border-b-8'>WHO WE ARE </h1>

        )
      }
        {
          language?(
            <h1 className='-ml-16 md:ml-6 py-8 md:text-4xl -mt-2 font-bold'> རྒྱལ་ས་ སྒང་ཏོག་ན་ ཡོད་པའི་ འབྲས་ལྗོངས་ སྟོང་ གང་གི་ འཐུད་མི་ ཆོ༹གས་ཆུང
          རྒྱལ་ས་ སྒང་ཏོག་ན་ ཡོད་པའི་ འབྲས་ལྗོངས་ སྟོང་ གང་གི་ འཐུད་མི་ ཆོ༹གས་ཆུང
            </h1>
            
          ):(
            <h1 className=' -ml-16 md:ml-6 py-8 text-xl md:text-2xl font-bold'> Based in Gangtok with members from all over Sikkim </h1>

          )
        }
      
          </div>
      <div className=' flex w-full relative '>
          <div className=' px-1 md:inset-x-2/4 absolute md:w-1/3 md:inset-y-24'>
            {
              language?(
                <div>
                    <p className=' text-lg md:text-2xl'>བྷོ་ཊི་ཡ སྐད་རབས་ ཡར་རྒྱས་ ཆོ༹གས་པོ་ ཕྱི༹་ལོ་ ༡༩༨༣  ལས་ འགོ་བཅུ༹ག་ཀོ་ སྦད། ཆོ༹གས་པོ་ འདི་ འགོ་བཅུ༹གས་ཀོའི་ དམིགས་ཡུལ་ གཅོ༹་བོ་ འབྲས་ལྗོངས་ སྟོང་ གང་གི་ སྐད་རིགས་ དང་ རིག་གཞུང་ལོ་  ཡར་རྒྱས་ བཏང་ཤད་ དང་  སྲུང་སྐྱོབ་ བྱ༹ས་བའི་ དོན་ལོ་ ཨིན། ཆོ༹གས་པོ་ འདི་ གཞི་གྱིང་མཁན་ བསྟེན་འཇི༹ན་ སྐྱེ་བུ་ དམ་པ་ སྐུ་ཞབས་ ནོར་ལྡན་ ཆེ༹་རིང་ དང་ པད་མ་ རིག་འཇི༹ན་ མཆོག་གི་ དབུ་བཅུ༹གས་ཀོ་ གནང་བོ་ སྦད།
                   འདེས་རྔ་ ཁོང་མཉམ་པོ་ འབྲས་ལྗོངས་ སྟོང་ གང་གི་ སྐད་ྲརིགས་ སློབ་དཔོན་ཅུ༹་ཀི་ཡང་ ཐུགས་འགན་ རྒྱ་ཆེ་དྲགས་
                    བཞེས་པོ་སྦད།
                <br /><br />
                </p>
                <Link
            href="aboutPage" // Replace "portfolio" with the actual ID of the target section
              className="group text-white w-fit 
              px-6 py-3 
              my-2 flex 
             items-center rounded-3xl
             bg-black
             shadow-md
             hover:bg-gradient-to-r from-orange-500 to-amber-400 transition duration-200
             shadow-gray-900
             cursor-pointer"
              >Click here to know more about bhu Us</Link>

                </div>
                
              ):(
                <div>

                
                <p >Bhutia Khayrab Yargay Tshogpo is an association which was formed in the year 1983 with its main goal and purpose being to develop and protect the language and traditions of the  
                Bhutia people of Sikkim. This association was first formed by Mr Norden Tshering Bhutia and Pema Tshering Bhutia along with the esteemed Bhutia teachers of Sikkim  
                Unde distinctio omnis sequi quaerat voluptates aut
                
               ipsa velit ea non voluptatem facere explicabo laboriosam cum.
                <br /><br />
                </p>
                <Link
            href="aboutPage" // Replace "portfolio" with the actual ID of the target section
              className="group text-white w-fit 
              px-6 py-3 
              my-2 flex 
             items-center rounded-3xl
             bg-black
             shadow-md
             hover:bg-gradient-to-r from-orange-500 to-amber-400 transition duration-200
             shadow-gray-900
             cursor-pointer"
              >Click here to know more about Us</Link>
              </div>

              )
            }
              
             </div>
          
      </div>
      <motion.div 
       ref={ref}

       style={{
         opacity: scrollYProgress,
       }}
      className=' hidden md:block relative pt-6  md:inset-x-24  w-1/3 h-96'>
            
          <Image 
              src={logoT} 
              alt='pic of logo'
              width={400}
              height={400}
               />          
            </motion.div>
    </div>
  )
}

export default About