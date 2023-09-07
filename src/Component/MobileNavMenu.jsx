import React from 'react';
import './Db.css'; // Create this file and add styles for the mobile menu

const MobileNavMenu = ({ handleItemClick, selectedItem }) => {
  return (
    <div className="mobile-nav-menu">
      <ul>
        <li
          className={`sidebar-item ${selectedItem === 1 ? 'active' : ''}`}
          onClick={() => handleItemClick(1)}
        >
          Job Details
        </li>
        <li
          className={`sidebar-item ${selectedItem === 2 ? 'active' : ''}`}
          onClick={() => handleItemClick(2)}
        >
          Job Type
        </li>
        <li
          className={`sidebar-item ${selectedItem === 3 ? 'active' : ''}`}
          onClick={() => handleItemClick(3)}
        >
          Expertise
        </li>
        <li
          className={`sidebar-item ${selectedItem === 4 ? 'active' : ''}`}
          onClick={() => handleItemClick(4)}
        >
          Review
        </li>
      </ul>
    </div>
  );
};

export default MobileNavMenu;
