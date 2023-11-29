import React from 'react';

interface PannelContentProps {
  selectedButton: string | null;
}

const PannelContent: React.FC<PannelContentProps> = ({ selectedButton }) => {
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

export default PannelContent;
