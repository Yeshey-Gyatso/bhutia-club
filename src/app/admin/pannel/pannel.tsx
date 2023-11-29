"use client"
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { authAtom } from '@/app/recoil/auth';


const Pannel = () => {
  const adminSignedIn = useRecoilValue(authAtom);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  const renderContent = () => {
    switch (selectedButton) {
      case 'About':
        return <div>About Content</div>;
      case 'Contact':
        return <div>Contact Content</div>;
      case 'Team':
        return <div>Team Content</div>;
      case 'Others':
        return <div>Others Content</div>;
      default:
        return <div className='text-4xl'>Select a button to change the content</div>;
    }
  };

  return adminSignedIn ? (
    <div className='h-screen w-screen'>
      <div className='flex flex-row'>
        <div className='h-screen flex flex-col gap-8 w-1/3 bg-gray-500 justify-center items-center'>
          <button
            onClick={() => handleButtonClick('About')}
            className={`text-3xl cursor-pointer ${
              selectedButton === 'About' ? 'bg-blue-500 text-white' : 'bg-gray-300'
            } p-4 rounded-lg w-1/2`}
          >
            About
          </button>
          <button
            onClick={() => handleButtonClick('Contact')}
            className={`text-3xl cursor-pointer ${
              selectedButton === 'Contact' ? 'bg-blue-500 text-white' : 'bg-gray-300'
            } p-4 rounded-lg w-1/2`}
          >
            Contact
          </button>
          <button
            onClick={() => handleButtonClick('Team')}
            className={`text-3xl cursor-pointer ${
              selectedButton === 'Team' ? 'bg-blue-500 text-white' : 'bg-gray-300'
            } p-4 rounded-lg w-1/2`}
          >
            Team
          </button>
          <button
            onClick={() => handleButtonClick('Others')}
            className={`text-3xl cursor-pointer ${
              selectedButton === 'Others' ? 'bg-blue-500 text-white' : 'bg-gray-300'
            } p-4 rounded-lg w-1/2`}
          >
            Others
          </button>
        </div>
        <div className='w-full h-screen flex justify-center items-center'>{renderContent()}</div>
      </div>
    </div>
  ) : (
    <div>error page</div>
  );
};

export default Pannel;
