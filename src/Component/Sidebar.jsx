import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import SidebarItem from './SidebarItemm';
import Container from 'react-bootstrap/Container';

const Sidebar = ({ onSidebarItemClick, onSidebarToggle }) => {
  const [selectedItem, setSelectedItem] = useState('overview'); // Set 'overview' as default selected item

  const sidebarItems = [
    { label: 'Your Startup', icon: <FaCheckCircle className='mt-1' style={{ color: selectedItem === 'overview' ? 'yellow' : 'gray'}} />, content: 'overview' },
    { label: 'Your Team', icon: <FaCheckCircle  className='mt-2'  style={{ color: selectedItem === 'analytics' ? 'yellow' : 'gray' }} />, content: 'analytics' },
    { label: 'Your Vision', icon: <FaCheckCircle  className='mt-2'  style={{ color: selectedItem === 'reports' ? 'yellow' : 'gray' }} />, content: 'reports' },

    { label: 'Review', icon: <FaCheckCircle  className='mt-2' style={{ color: selectedItem === 'users' ? 'yellow' : 'gray' }} />, content: 'users' },
  ];

  const handleSidebarItemClick = (content, index) => {
    setSelectedItem(content);
    onSidebarItemClick(content, index);
  };

  return (
    <Container>
      <div className="sidebar" style={{ backgroundColor: 'F1F2F4', color:"gray" }}>
        <ul className="" style={{ listStyle: 'none', padding: 25, marginTop:'30px' }}>
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              label={
                <span style={{ display: 'flex', justifyContent: 'space-between', fontWeight: selectedItem === item.content ? 'bolder' : 'normal' }}>
                  {item.label}
                  {item.icon}
                </span>
              }
              onClick={() => handleSidebarItemClick(item.content, index)}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default Sidebar;
