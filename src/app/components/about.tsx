"use client";

import React from 'react'
import Image from 'next/image';
import logoT from '../public/logoT.png';
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../recoil/atoms';

const About = () => {
  const language=useRecoilValue(languageAtom);
  return (
    <div className='
    h-screen w-full
    bg-gradient-to-b from-white via-blue-100 to-sky-500'>
      <div className=' pl-20 md:pl-32 pt-8 flex flex-col'>
        
      {
        language?(
          <h1 className=' text-2xl lg:text-8xl lg:-mt-9  font-extrabold border-b-8'>ང་ཅག་ ཀ་ འབོ </h1>

        ):(
          <h1 className='text-xl lg:text-6xl font-extrabold border-b-8'>WHO WE ARE </h1>

        )
      }
        {
          language?(
            <h1 className='-ml-16 md:ml-6 py-8 md:text-4xl -mt-2 font-bold'> རྒྱལ་ས་ སྒང་ཏོག་ན་ ཡོད་པའི་ འབྲས་ལྗོངས་ སྟོང་ གང་གི་ འཐུད་མི་ ཆོ༹གས་ཆུང
          རྒྱལ་ས་ སྒང་ཏོག་ན་ ཡོད་པའི་ འབྲས་ལྗོངས་ སྟོང་ གང་གི་ འཐུད་མི་ ཆོ༹གས་ཆུང
            </h1>
            
          ):(
            <h1 className=' -ml-16 md:ml-6 py-8 text-2xl font-bold'> Based in Gangtok with team from all over Sikkim </h1>

          )
        }
      
          </div>
      <div className=' flex w-full relative '>
          <div className=' px-1 md:inset-x-1/2 absolute md:w-1/3'>
            {
              language?(
                <p className=' text-xl'>བྷོ་ཊི་ཡ སྐད་རབས་ ཡར་རྒྱས་ ཆོ༹གས་པོ་ ཕྱི༹་ལོ་ ༡༩༨༣  ལས་ འགོ་བཅུ༹ག་ཀོ་ སྦད། ཆོ༹གས་པོ་ འདི་ འགོ་བཅུ༹གས་ཀོའི་ དམིགས་ཡུལ་ གཅོ༹་བོ་ འབྲས་ལྗོངས་ སྟོང་ གང་གི་ སྐད་རིགས་ དང་ རིག་གཞུང་ལོ་  ཡར་རྒྱས་ བཏང་ཤད་ དང་  སྲུང་སྐྱོབ་ བྱ༹ས་བའི་ དོན་ལོ་ ཨིན། ཆོ༹གས་པོ་ འདི་ གཞི་གྱིང་མཁན་ བསྟེན་འཇི༹ན་ སྐྱེ་བུ་ དམ་པ་ སྐུ་ཞབས་ ནོར་ལྡན་ ཆེ༹་རིང་ དང་ པད་མ་ རིག་འཇི༹ན་ མཆོག་གི་ དབུ་བཅུ༹གས་ཀོ་ གནང་བོ་ སྦད།
                   འདེས་རྔ་ ཁོང་མཉམ་པོ་ འབྲས་ལྗོངས་ སྟོང་ གང་གི་ སྐད་ྲརིགས་ སློབ་དཔོན་ཅུ༹་ཀི་ཡང་ ཐུགས་འགན་ རྒྱ་ཆེ་དྲགས་
                    བཞེས་པོ་སྦད།
                <br /><br />
                བྷོ་ཊི་ཡ སྐད་རབས་ ཡར་རྒྱས་ ཆོ༹གས་པོ་ ཕྱི༹་ལོ་ ༡༩༨༣  ལས་ འགོ་བཅུ༹ག་ཀོ་ སྦད། ཆོ༹གས་པོ་ འདི་ འགོ་བཅུ༹གས་ཀོའི་ དམིགས་ཡུལ་ གཅོ༹་བོ་ འབྲས་ལྗོངས་ སྟོང་ གང་གི་ སྐད་རིགས་ དང་ རིག་གཞུང་ལོ་  ཡར་རྒྱས་ བཏང་ཤད་ དང་  སྲུང་སྐྱོབ་ བྱ༹ས་བའི་ དོན་ལོ་ ཨིན། ཆོ༹གས་པོ་ འདི་ གཞི་གྱིང་མཁན་ བསྟེན་འཇི༹ན་ སྐྱེ་བུ་ དམ་པ་ སྐུ་ཞབས་ ནོར་ལྡན་ ཆེ༹་རིང་ དང་ པད་མ་ རིག་འཇི༹ན་ མཆོག་གི་ དབུ་བཅུ༹གས་ཀོ་ གནང་བོ་ སྦད།
                   འདེས་རྔ་ 
                </p>
              ):(
                <p >Bhutia Khayrab Yargay Tshogpo is an association which was formed in the year 1983 with its main goal and purpose is to develope and protect the language and the traditions of the  
                Bhutia people of Sikkim. This association was first formed by Mr Norden Tshering Bhutia and Pema Tshering Bhutia along with the esteemed Bhutia teachers of Sikkim  
                Unde distinctio omnis sequi quaerat voluptates aut
                
               ipsa velit ea non voluptatem facere explicabo laboriosam cum.
                <br /><br />
               
                Lorem ipsum d Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda amet quisquam beatae voluptatum, facere ab deserunt porro accusamus id labore consequuntur placeat vitae sint eaque! Itaque a expedita repellat nemo?
                olor sit amet, consectetur adipisicing elit. Mollitia possimus amet repellat est sapiente suscipit quod, voluptatem minima odio alias accusamus numquam consectetur quibusdam praesentium aliquid, adipisci fugiat enim nostrum.
                </p>
              )
            }
              
             </div>
          
      </div>
      <div className=' relative inset-x-24  w-1/3 h-96'>
            
          <Image 
              src={logoT} 
              alt='pic of logo'
              width={1000}
              height={1000}
            />
            </div>

    </div>
  )
}

export default About