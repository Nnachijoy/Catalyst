import React, { useState } from 'react';
import Jobdetails from './Jobdetails';
import Jobtype from './Jobtype';
import Jobexpertise from './Jobexpertise';
import Jobreview from './Jobreview';

const Content = ({ selectedItem }) => {
  // Define components for each link

  // Render the corresponding component based on the selected item
  // const [selectedItem, setSelectedItem] = useState('Link 1');

  return (
    <div className="content-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="content d-flex flex-column">
        {selectedItem === 'Link 1' && <Jobdetails />}
        {selectedItem === 'Link 2' && <Jobtype />}
        {selectedItem === 'Link 3' && <Jobexpertise />}
        {selectedItem === 'Link 4' && <Jobreview />}
        {!selectedItem && (
          <div>
            <h1 className="fw-bolder">Welcome To The Onboarding Session</h1>
            <p className="fw-bolder">Let's get you started!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
