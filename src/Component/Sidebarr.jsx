// import React, { useState } from 'react';
// import { Nav } from 'react-bootstrap';
// import { FaCheckCircle } from 'react-icons/fa'; // Import the FaCheckCircle icon from react-icons/fa

// const Sidebar = ({ setSelectedItem }) => {
//   const [isActive, setIsActive] = useState(false);
//   const [activeItem, setActiveItem] = useState('Link 1'); // Initialize the activeItem state with 'Link 1'

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//     setActiveItem(item); // Update the active item when an item is clicked
//     // Close the sidebar on mobile view after clicking a link
//     if (window.innerWidth <= 767) {
//       setIsActive(false);
//     }
//   };

//   const toggleSidebar = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <div className={`sidebar${isActive ? ' active' : ''}`}>
//       {/* Hamburger Menu Icon */}
//       <div className="toggle-button" onClick={toggleSidebar}>
//         <div className={`bar ${isActive ? 'bar1-active' : ''}`} />
//         <div className={`bar ${isActive ? 'bar2-active' : ''}`} />
//         <div className={`bar ${isActive ? 'bar3-active' : ''}`} />
//         <div className={`bar ${isActive ? 'bar4-active' : ''}`} />
//       </div>
//       <Nav className="flex-column custom-sidebar"> {/* Add the custom-sidebar class here */}
//         {/* Add your sidebar links or menu items here */}
//         <Nav.Link onClick={() => handleItemClick('Link 1')}>
//           <div className="d-flex justify-content-between align-items-center text-black">
//             <span className="link-text">Job Details</span>
//             <FaCheckCircle
//               className={`active-icon ${activeItem === 'Link 1' ? 'active' : 'inactive'}`}
//               style={{ color: activeItem === 'Link 1' ? 'yellow' : 'black' }}
//             />
//           </div>
//         </Nav.Link>


//         <Nav.Link onClick={() => handleItemClick('Link 3')}>
//           <div className="d-flex justify-content-between align-items-center text-black">
//             <span className="link-text">Expertise</span>
//             <FaCheckCircle
//               className={`active-icon ${activeItem === 'Link 3' ? 'active' : 'inactive'}`}
//               style={{ color: activeItem === 'Link 3' ? 'yellow' : 'black' }}
//             />
//           </div>
//         </Nav.Link>

        
//         <Nav.Link onClick={() => handleItemClick('Link 2')}>
//           <div className="d-flex justify-content-between align-items-center text-black">
//             <span className="link-text">Job Type</span>
//             <FaCheckCircle
//               className={`active-icon ${activeItem === 'Link 2' ? 'active' : 'inactive'}`}
//               style={{ color: activeItem === 'Link 2' ? 'yellow' : 'black' }}
//             />
//           </div>
//         </Nav.Link>
   

//         <Nav.Link onClick={() => handleItemClick('Link 4')}>
//           <div className="d-flex justify-content-between align-items-center text-black">
//             <span className="link-text">Review</span>
//             <FaCheckCircle
//               className={`active-icon ${activeItem === 'Link 4' ? 'active' : 'inactive'}`}
//               style={{ color: activeItem === 'Link 4' ? 'yellow' : 'black' }}
//             />
//           </div>
//         </Nav.Link>
//       </Nav>
//     </div>
//   );
// };

// export default Sidebar;




































// import React, { useState } from 'react';
// import { Nav } from 'react-bootstrap';
// import { FaCheckCircle } from 'react-icons/fa'; // Import the FaCheckCircle icon from react-icons/fa
// import "./Sidebar.css"

// const Sidebar = ({ setSelectedItem }) => {
//   const [isActive, setIsActive] = useState(false);
//   const [activeItem, setActiveItem] = useState('Link 1'); // Initialize the activeItem state with 'Link 1'

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//     setActiveItem(item); // Update the active item when an item is clicked
//     // Close the sidebar on mobile view after clicking a link
//     if (window.innerWidth <= 767) {
//       setIsActive(false);
//     }
//   };

//   const toggleSidebar = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <div className={`sidebar${isActive ? ' active' : ''}`}>
//       {/* Hamburger Menu Icon */}
//       <div className="toggle-button" onClick={toggleSidebar}>
//         <div className={`bar ${isActive ? 'bar1-active' : ''}`} />
//         <div className={`bar ${isActive ? 'bar2-active' : ''}`} />
//         <div className={`bar ${isActive ? 'bar3-active' : ''}`} />
//         <div className={`bar ${isActive ? 'bar4-active' : ''}`} />
//       </div>
//       <Nav className="flex-column custom-sidebar"> {/* Add the custom-sidebar class here */}
//         {/* Add your sidebar links or menu items here */}
//         <Nav.Link onClick={() => handleItemClick('Link 1')}>
//           <div className="d-flex justify-content-between align-items-center text-black">
//             <span className="link-text">Job Details</span>
//             <FaCheckCircle
//               className={`active-icon ${activeItem === 'Link 1' ? 'active' : 'inactive'}`}
//               style={{ color: activeItem === 'Link 1' ? 'yellow' : 'black' }}
//             />
//           </div>
//         </Nav.Link>
//         <Nav.Link onClick={() => handleItemClick('Link 2')}>
//           <div className="d-flex justify-content-between align-items-center text-black">
//             <span className="link-text">Job Type</span>
//             <FaCheckCircle
//               className={`active-icon ${activeItem === 'Link 2' ? 'active' : 'inactive'}`}
//               style={{ color: activeItem === 'Link 2' ? 'yellow' : 'black' }}
//             />
//           </div>
//         </Nav.Link>
//         <Nav.Link onClick={() => handleItemClick('Link 3')}>
//           <div className="d-flex justify-content-between align-items-center text-black">
//             <span className="link-text">Expertise</span>
//             <FaCheckCircle
//               className={`active-icon ${activeItem === 'Link 3' ? 'active' : 'inactive'}`}
//               style={{ color: activeItem === 'Link 3' ? 'yellow' : 'black' }}
//             />
//           </div>
//         </Nav.Link>

//         <Nav.Link onClick={() => handleItemClick('Link 4')}>
//           <div className="d-flex justify-content-between align-items-center text-black">
//             <span className="link-text">Review</span>
//             <FaCheckCircle
//               className={`active-icon ${activeItem === 'Link 4' ? 'active' : 'inactive'}`}
//               style={{ color: activeItem === 'Link 4' ? 'yellow' : 'black' }}
//             />
//           </div>
//         </Nav.Link>
//       </Nav>
//     </div>
//   );
// };

// export default Sidebar;




import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const Sidebar = ({ setSelectedItem }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeItems, setActiveItems] = useState([]); // Initialize activeItems state as an empty array

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setActiveItems(prevItems => [...prevItems, item]); // Append the clicked item to activeItems
    if (window.innerWidth <= 767) {
      setIsActive(false);
    }
  };

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`sidebar${isActive ? ' active' : ''}`}>
      <div className="toggle-button" onClick={toggleSidebar}>
        <div className={`bar ${isActive ? 'bar1-active' : ''}`} />
        <div className={`bar ${isActive ? 'bar2-active' : ''}`} />
        <div className={`bar ${isActive ? 'bar3-active' : ''}`} />
        <div className={`bar ${isActive ? 'bar4-active' : ''}`} />
      </div>
      <Nav className="flex-column custom-sidebar">
        <Nav.Link onClick={() => handleItemClick('Link 1')}>
          <div className="d-flex justify-content-between align-items-center text-black">
            <span className="link-text">Job Details</span>
            <FaCheckCircle
              className={`active-icon ${activeItems.includes('Link 1') ? 'active' : 'inactive'}`}
              style={{ color: activeItems.includes('Link 1') ? 'yellow' : 'black' }}
            />
          </div>
        </Nav.Link>

        <Nav.Link onClick={() => handleItemClick('Link 3')}>
          <div className="d-flex justify-content-between align-items-center text-black">
            <span className="link-text">Expertise</span>
            <FaCheckCircle
              className={`active-icon ${activeItems.includes('Link 3') ? 'active' : 'inactive'}`}
              style={{ color: activeItems.includes('Link 3') ? 'yellow' : 'black' }}
            />
          </div>
        </Nav.Link>

        <Nav.Link onClick={() => handleItemClick('Link 2')}>
          <div className="d-flex justify-content-between align-items-center text-black">
            <span className="link-text">Job Type</span>
            <FaCheckCircle
              className={`active-icon ${activeItems.includes('Link 2') ? 'active' : 'inactive'}`}
              style={{ color: activeItems.includes('Link 2') ? 'yellow' : 'black' }}
            />
          </div>
        </Nav.Link>

        <Nav.Link onClick={() => handleItemClick('Link 4')}>
          <div className="d-flex justify-content-between align-items-center text-black">
            <span className="link-text">Review</span>
            <FaCheckCircle
              className={`active-icon ${activeItems.includes('Link 4') ? 'active' : 'inactive'}`}
              style={{ color: activeItems.includes('Link 4') ? 'yellow' : 'black' }}
            />
          </div>
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
