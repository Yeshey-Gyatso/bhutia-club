import React from 'react'
import { FacebookIcon, InstagramIcon, Mail, Phone } from "lucide-react"
import logoT from '../public/logoT.png';
import Image from 'next/image'
import Navbar from '../components/navbar';
import Link from 'next/link';
const ContactUs = () => {
  return (
    <div className=' h-screen w-screen bg-gray-200 flex '>
      <Navbar/>
      <div className=' '>
        
      </div>
        <div className="container my-24 mx-auto md:px-6">

<section className="mb-32 text-center">
  <div className="py-12 md:px-12">
    <div className="container mx-auto xl:px-32">
      <div className="grid items-center lg:grid-cols-2">
        <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
          <div
            className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
            <h2 className="mb-12 text-3xl font-bold">Contact us</h2>
            {/* inside contact */}
            <div  className="bg-white p-2">
            <div className="flex w-full flex-col  items-start justify-center  gap-y-5 sm:gap-y-10 md:text-2xl  ">
          <span className="on flex flex-row items-center justify-evenly gap-5 p-1">
            <FacebookIcon className="h-10 w-10 shadow-lg " />
            <Link
              href="https://www.facebook.com/p/Bhutia-kayrab-yargay-Tshokpo-100025627511936/"
              target="_blank"
              className="bg-gradient-to-r from-teal-400 to-red-700 bg-clip-text leading-relaxed text-transparent shadow-inner"
            >
              Bhutia Khayrab Yargay Tshogpo
            </Link>
          </span>
         
          <div className="flex flex-row items-center justify-center gap-5 p-1">
            <Mail className="h-10 w-10 shadow-lg" />
            <Link href="mailto:example@gmail.com" className="pb-1 shadow-inner">
              example@gmail.com
            </Link>
          </div>
          <div className="flex flex-row items-center justify-center gap-5 p-1">
            <Phone className="h-10 w-10 shadow-lg " />
            <Link href="tel:+911234567890">
              <span className=' shadow-inner'> +91 123-4567-890</span>
            </Link>
          </div>
        </div>
            </div>

          </div>
        </div>
        <div className="md:mb-12 lg:mb-0">
          <div
            className="relative h-[700px] rounded-lg shadow-lg shadow-black/20">
            <iframe
              src="https://maps.google.com/maps?q=MAKHIM - Bhutia Kay-Rab Yargay Tshogpo Centre, Sadar PS Road, Gangtok, Sikkim 737101&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="absolute left-0 top-0 h-full w-full rounded-lg"
              frameBorder="0"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
    </div>
  

   
  )
}

export default ContactUs