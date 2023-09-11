import React from 'react'
import Image from 'next/image';
import logoT from '../public/logoT.png';
const About = () => {
  return (
    <div className='
    
    h-screen w-full
    bg-gradient-to-b from-white via-blue-100 to-sky-500'>
      <div className='pl-10 pt-20 flex flex-col'>
            <h1 className=' text-6xl font-extrabold border-b-8'>WHO WE ARE </h1>
            <h1 className=' ml-6 py-8 text-2xl font-bold'> Based in Gangtok with team from all over Sikkim to ... ? </h1>
            
            </div>
      <div className=' flex w-full relative '>
          <div className=' inset-x-1/2 absolute w-1/3'>
              <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Unde distinctio omnis sequi quaerat voluptates aut
                harum mollitia soluta fugit eum atque, 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, magnam vel maiores necessitatibus, optio sed commodi voluptates consequatur, iste incidunt voluptate soluta 
                saepe deleniti molestias cupiditate facilis impedit 
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus nulla harum sit velit. In non quia eius placeat aperiam atque illo fuga? Omnis velit laudantium quasi ullam sit saepe similique.
                numquam minus?
               ipsa velit ea non voluptatem facere explicabo laboriosam cum.</p>
                <br /><br />
               <p>
                Lorem ipsum d Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda amet quisquam beatae voluptatum, facere ab deserunt porro accusamus id labore consequuntur placeat vitae sint eaque! Itaque a expedita repellat nemo?
                olor sit amet, consectetur adipisicing elit. Mollitia possimus amet repellat est sapiente suscipit quod, voluptatem minima odio alias accusamus numquam consectetur quibusdam praesentium aliquid, adipisci fugiat enim nostrum.
               </p>
             </div>
          
      </div>
      <div className=' inset-x-24 relative  w-1/3 h-96'>
            
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