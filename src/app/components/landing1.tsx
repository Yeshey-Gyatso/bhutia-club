"use client"
//will add in grid way now
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useRecoilValue } from 'recoil';
import { languageAtom } from '../recoil/atoms';


function Landing1() {

  const language=useRecoilValue(languageAtom);


  const slides = [
    {
      url:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      url:'https://images.unsplash.com/photo-1682685797365-41f45b562c0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1874&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=' h-screen w-full m-auto pb-16  relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500 mt-1'
      >
       {/* //////english to bhutia change ///////////////////// */}
       
        <div className='absolute lg:inset-x-40 inset-y-1/4 bg-white/60 opacity-90 lg:w-1/4 h-1/5 flex flex-col items-center '>
                        <div className=' cursor-default pt-6 text-black md:text-2xl max-w-full sm:mx-auto 
                        z-10 
                        '>  
                           {
                            language ?(
                            <span className=' mx-4 md:ml-1 text-3xl md:text-5xl lg:text-7xl'>༈ བྱོན་བོ་ ལེགས་སོ།</span>
                            ):
                            (
                              <div className= ' md:pt-6'>
                                <span className=' mx-6 md:ml-2 text-3xl lg:text-6xl'>Welcome To</span>

                              </div>
                              )
                           } 
                            
                        </div>
                     </div>
        <div className='absolute lg:inset-x-96 inset-y-2/4 bg-black/50 opacity-90 w-4/6 h-1/4 flex flex-col items-center '>
                        <div className=' cursor-default pt-8 text-white md:text-2xl max-w-full sm:mx-auto 
                        z-10 
                        '>  
                            {
                              language ?(
                                <div className=' mx-4 md:ml-2'>
                                       <span className='leading-loose text-2xl md:text-5xl lg:text-8xl'>༈ བྷོ་ཊི་ཡ་ སྐད་རབས་ ཡར་རྒྱས་ ཆོ༹གས་པོ།
                                </span>
                                </div>
                               

                              ):(
                                <div className=' mx-4 md:ml-2 pt-8'>
                                <span className=' leading-loose text-2xl md:text-3xl lg:text-6xl'>Bhutia khayrab Yargay Tshogpo. </span>

                                </div>

                              )
                            }
                        
                        </div>
                     </div>

      
      
      
      
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Landing1;