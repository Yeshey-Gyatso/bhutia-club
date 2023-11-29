"use client"
import { authAtom } from '@/app/recoil/auth';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import PannelContent from './pannelContent';

// ... (other imports)

const Pannel = () => {
  const adminSignedIn = useRecoilValue(authAtom);
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName:string) => {
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
        return <div>Select a button to see content</div>;
    }
  };

  return adminSignedIn ? (
    <div className='h-screen w-screen'>
      <div className='flex flex-row'>
        <div className='h-screen flex flex-col gap-8 w-1/3 bg-gray-500 justify-center items-center'>
          <button onClick={() => handleButtonClick('About')}>
            About
          </button>
          <button onClick={() => handleButtonClick('Contact')}>
            Contact
          </button>
          <button onClick={() => handleButtonClick('Team')}>
            Team
          </button>
          <button onClick={() => handleButtonClick('Others')}>
            Others
          </button>
        </div>
        <PannelContent selectedButton={selectedButton} />
      </div>
    </div>
  ) : (
    <div>error page</div>
  );
};

export default Pannel;
