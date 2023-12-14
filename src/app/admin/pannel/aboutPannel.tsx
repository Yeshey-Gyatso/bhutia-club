"use client"
import Switcher from '@/app/components/switcher';
import { languageAtom } from '@/app/recoil/atoms';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useRecoilValue } from 'recoil';

const AboutComponent = () => {
  const language=useRecoilValue(languageAtom);
  const [aboutData, setAboutData] = useState({
    title1: '',
    description1: '',
    title2: '',
    description2: '',
    btitle1: '',
    bdescription1: '',
    btitle2: '',
    bdescription2: '',
  });

  const updateAboutData = async () => {
    try {
      const response = await fetch('/api/admin/contents', {
        method: 'PUT',  // Use PUT instead of GET for updating data
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(aboutData), // Include the updated data in the request body
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      else{
        toast.success("Updated Successfully", {
          position: "top-center",
        });
      }

      console.log('Data updated successfully');
    } catch (error) {
      console.error('Error updating data:', error);
      // Handle the error appropriately
    }
  };

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

  // Handle input changes and update the state
  const handleInputChange = (key: string, value: string) => {
    setAboutData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  
    return (
      <div className='h-full w-full'>
        <div className=' relative flex'>
        < Switcher />
        </div>
       
  <div className='h-full w-full'>
    <section className="h-full w-full p-4 bg-white rounded-lg shadow-md">
      <div className="text-lg font-semibold mb-4">
        <input
          type="text"
          value={language ? aboutData.btitle1 : aboutData.title1}
          onChange={(e) => language ? handleInputChange('btitle1',e.target.value) : handleInputChange('title1',e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="text-gray-700 text-sm">
        <textarea
         rows={6} 
         cols={50}
          value={language ? aboutData.bdescription1 : aboutData.description1}
         onChange={(e) => language ? handleInputChange('bdescription1',e.target.value) : handleInputChange('description1',e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="text-lg font-semibold mt-8 mb-4">
        <input
        
          type="text"
          value={language ? aboutData.btitle2 : aboutData.title2}
          onChange={(e) => language ? handleInputChange('btitle2',e.target.value) : handleInputChange('title2',e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="text-gray-700 text-sm">
        <textarea
        rows={15} 
        cols={50}
          value={language ? aboutData.bdescription2 : aboutData.description2}
          onChange={(e) => language ? handleInputChange('bdescription2',e.target.value) : handleInputChange('description2',e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className='flex justify-center items-center'></div>
    </section>
  </div>
  <div className='flex'>
    {/* You may choose to remove this input field for description1, as it's already included above */}
    {/* <input
      type="text"
      placeholder="Enter new description"
      value={aboutData.description1}
      onChange={(e) => handleInputChange('description1', e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md"
              /> */}
        </div>

           {/* Repeat similar input fields for other properties if needed */}
        <div className=' relative pl-5'>
        <button onClick={updateAboutData} className="mt-4 p-2 bg-blue-500 text-white rounded-md">
          Update Data
      </button>
        </div>
        
    </div>

    );
  };

export default AboutComponent;
