import React, { useEffect, useState } from 'react';

const AboutComponent = () => {
  const [aboutData, setAboutData] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/admin/contents');
        
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
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>{aboutData.title}</h1>
      <p>{aboutData.description}</p>
    </div>
  );
};

export default AboutComponent;
