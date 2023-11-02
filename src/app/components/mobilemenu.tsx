// MobileMenu.js
import React, { useState } from 'react';

function MobileMenu() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="block md:hidden">
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={toggleDropdown}
            className="hover:opacity-75 p-2"
          >
            <span className="block w-6 h-1 bg-gray-600 my-1"></span>
            <span className="block w-6 h-1 bg-gray-600 my-1"></span>
            <span className="block w-6 h-1 bg-gray-600 my-1"></span>
          </button>
        </div>
        {showDropdown && (
          <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div className="py-1" role="none">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                Option 2
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                Option 3
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileMenu;
