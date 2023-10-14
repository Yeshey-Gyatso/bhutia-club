import React from 'react'
import logoT from '../public/logoT.png';
import Image from 'next/image'
import Navbar from '../components/navbar';
const AboutPage = () => {
  return (
    <div>
        
         <div className=' flex flex-row justify-center items-center mt-40'>
        <div className=' p-2 '>

        <Image 
              src={logoT} 
              alt='pic of logo'
              width={400}
              height={400}
               />     
        </div>
       
       
        <title>About Us - Your Company Name</title>
      

      <main className="bg-gray-100 p-8">
        <section className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-4">About Us</h1>
          <p className="text-gray-700">
            Welcome to Bhutia Khayrab Yargay Tshogpo. We are a dedicated team of professionals passionate about delivering high-quality products and services to our customers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At Bhutia Khayrab Yargay Tshogpo, our mission is to provide innovative solutions that meet our customers' needs. We strive for excellence in everything we do and are committed to making a positive impact on the world.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            Our team is comprised of experienced professionals who bring diverse skills and expertise to the table. i guess it is wat  We work collaboratively to achieve our goals and exceed our goals and expectations.
          </p>
        </section>
      </main>
      </div>
    </div>
   
  )
}

export default AboutPage