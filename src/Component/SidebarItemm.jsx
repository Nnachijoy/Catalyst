import React from 'react';

const SidebarItem = ({ label, icon, onClick }) => {
  return (
    <div className="py-4" style={{marginTop:"-50px"}}>
    <li className="sidebar-item" onClick={onClick} style={{cursor: "pointer", listStyle:"none"}}>
      <span className="sidebar-label me-2">{label}</span>
      <span className="sidebar-icon">{icon}</span>
    </li>
    </div>
  );
};

export default SidebarItem;
