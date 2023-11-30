import React from 'react'
import BlogCard from './blogcard'
import Navbar from '../components/navbar'

const Blog = () => {
  return (
    <div >
      <Navbar/>
<div className=' flex justify-center items-center h-full w-screen'>
      
      <div className=' flex flex-col p-4'> 
      <div className=' p-10'>
         <h1 className=' text-3xl font-bold '>Blogs:</h1> 
      </div>
      
      <div className=' flex flex-row gap-2 '>
          <div className=''>
          <BlogCard/>
          </div>
          <div>
          <BlogCard/>
          </div>
          <div>
          <BlogCard/>
          </div>
      </div>
      </div>
      
    
      
  </div>
    </div>
    
  )
}

export default Blog