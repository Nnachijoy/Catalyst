


import React, { useState, useRef, useEffect  } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';




import { Form, Col, Row, Container, Button, Nav, Card} from 'react-bootstrap';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import catalystlogo from '../assets/catalystlogo.png';
import './Jobexpertise.css';
import draganddrop from "../assets/draganddrop.png";

import axios from 'axios';
import  {NavLink} from "react-router-dom"

import dashboard2 from "../assets/dashboard2.png";


const Analytics = ({ onNext, onPrevious }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handleNext = () => {
    onNext();
    setPageNumber(pageNumber + 1);
  };

  const handlePrevious = () => {
    onPrevious();
    setPageNumber(pageNumber - 1);
  };

  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };



  const [energyButtonStyle, setEnergyButtonStyle] = useState({
    background: '#F8CA25',
    border: 'none',
    transition: 'background 0.3s',
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: '17px',
    color: '#FFFFFF',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
  });

  const [consumerButtonStyle, setConsumerButtonStyle] = useState({
    background: '#F8CA25',
    border: 'none',
    transition: 'background 0.3s',
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: '17px',
    color: '#FFFFFF',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
  });

  // State variable to track the button toggle
  const [energyButtonToggle, setEnergyButtonToggle] = useState(false);
  const [consumerButtonToggle, setConsumerButtonToggle] = useState(false);

  // Function to handle the "Energy" button click
  const handleEnergyButtonClick = () => {
    if (energyButtonToggle) {
      setEnergyButtonStyle({
        background: '#F8CA25',
        border: 'none',
        transition: 'background 0.3s',
        textTransform: 'none',
        boxShadow: 'none',
        fontSize: '17px',
        color: '#FFFFFF',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
      });
    } else {
      setEnergyButtonStyle({
        background: '#FEF4D3',
        border: 'none',
        transition: 'background 0.3s',
        textTransform: 'none',
        boxShadow: 'none',
        fontSize: '17px',
        color: '#F8CA25',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
      });
    }
    setEnergyButtonToggle(!energyButtonToggle);
  };

  // Function to handle the "Consumer" button click
  const handleConsumerButtonClick = () => {
    if (consumerButtonToggle) {
      setConsumerButtonStyle({
        background: '#F8CA25',
        border: 'none',
        transition: 'background 0.3s',
        textTransform: 'none',
        boxShadow: 'none',
        fontSize: '17px',
        color: '#FFFFFF',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
      });
    } else {
      setConsumerButtonStyle({
        background: '#FEF4D3',
        border: 'none',
        transition: 'background 0.3s',
        textTransform: 'none',
        boxShadow: 'none',
        fontSize: '17px',
        color: '#F8CA25',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
      });
    }
    setConsumerButtonToggle(!consumerButtonToggle);
  };

  const [energyButtonToggle1, setEnergyButtonToggle1] = useState(false);
  const [energyButtonToggle2, setEnergyButtonToggle2] = useState(false);
  const [energyButtonToggle3, setEnergyButtonToggle3] = useState(false);
  const [energyButtonToggle4, setEnergyButtonToggle4] = useState(false);
  const [energyButtonToggle5, setEnergyButtonToggle5] = useState(false);
  const [energyButtonToggle6, setEnergyButtonToggle6] = useState(false);
  const [energyButtonToggle7, setEnergyButtonToggle7] = useState(false);
  const [energyButtonToggle8, setEnergyButtonToggle8] = useState(false);
  const [energyButtonToggle9, setEnergyButtonToggle9] = useState(false);
  const [energyButtonToggle10, setEnergyButtonToggle10] = useState(false);
  const [energyButtonToggle11, setEnergyButtonToggle11] = useState(false);
  const [energyButtonToggle12, setEnergyButtonToggle12] = useState(false);
  const [energyButtonToggle13, setEnergyButtonToggle13] = useState(false);
  const [energyButtonToggle14, setEnergyButtonToggle14] = useState(false);
  const [energyButtonToggle15, setEnergyButtonToggle15] = useState(false);

  // Function to handle the "Energy" button click for the first button
  const handleEnergyButtonClick1 = () => {
    setEnergyButtonToggle1(!energyButtonToggle1);
  };

  // Function to handle the "Energy" button click for the second button
  const handleEnergyButtonClick2 = () => {
    setEnergyButtonToggle2(!energyButtonToggle2);
  };

  // Function to handle the "Energy" button click for the third button
  const handleEnergyButtonClick3 = () => {
    setEnergyButtonToggle3(!energyButtonToggle3);
  };

  const handleEnergyButtonClick4 = () => {
    setEnergyButtonToggle4(!energyButtonToggle4);
  };


  const handleEnergyButtonClick5 = () => {
    setEnergyButtonToggle5(!energyButtonToggle5);
  };

  const handleEnergyButtonClick6 = () => {
    setEnergyButtonToggle6(!energyButtonToggle6);
  };

  const handleEnergyButtonClick7 = () => {
    setEnergyButtonToggle7(!energyButtonToggle7);
  };

  const handleEnergyButtonClick8 = () => {
    setEnergyButtonToggle8(!energyButtonToggle8);
  };

  const handleEnergyButtonClick9 = () => {
    setEnergyButtonToggle9(!energyButtonToggle9);
  };


  const handleEnergyButtonClick10 = () => {
    setEnergyButtonToggle10(!energyButtonToggle10);
  };

  const handleEnergyButtonClick11 = () => {
    setEnergyButtonToggle11(!energyButtonToggle11);
  };


  const handleEnergyButtonClick12 = () => {
    setEnergyButtonToggle12(!energyButtonToggle12);
  };

  const handleEnergyButtonClick13 = () => {
    setEnergyButtonToggle13(!energyButtonToggle13);
  };

  const handleEnergyButtonClick14 = () => {
    setEnergyButtonToggle14(!energyButtonToggle14);
  };

  const handleEnergyButtonClick15 = () => {
    setEnergyButtonToggle15(!energyButtonToggle15);
  };

  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };
  
  const characterLimit = 500;
  const usedCharacters = text.length;
  const isOverLimit = usedCharacters > characterLimit;






  return (
    <div className="dashboard-content">
      <Container className="px-5 ">

      <div style={{ display: 'flex', alignItems: 'center' }} className='mt-3'>
  <img src={dashboard2} alt="" className="p-0 me-1" style={{ margin: '0' }} />
  {/* <p style={{ margin: '0' }} className='me-1'>My Company &gt;</p> */}
  <NavLink
  to="/maindb"
  activeClassName="active-link"
  style={{ textDecoration: 'none' }}
>
  <p style={{ margin: '0' }} className='me-1'>My Dashboard &gt;</p>
</NavLink>
  <p style={{ margin: '0', color: '#7C6512' }} className=''>Pitch Application</p>
</div>


      <div className="">
        <h4 style={{ color: '#7C6512' }} className="fw-bolder mt-4">
          Your Team
        </h4>
        <p>step 2 of 4</p>
      </div>

      <div>
        <hr />
      </div>



      <MDBRow>
      <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Team Size</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your company name"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
          </MDBCol>
          
  
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className=" text-black fw-bolder">
                Describe the background and expertise of your team
                </Form.Label>
                <Form.Control className='p-3' as="textarea" rows={4} placeholder="Type Something" />
              </Form.Group>
            </div>
          </MDBCol>
        </MDBRow>



      <MDBRow>
      <MDBCol xs={12} md={6}>
      <div className="mb-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-black fw-bolder">Team Description</Form.Label>
          <Form.Control
            className='p-3'
            as="textarea"
            rows={4}
            placeholder="Type Something"
            value={text}
            onChange={handleTextChange}
          />
          <p className='d-flex justify-content-end mt-2'>
            {usedCharacters}/{characterLimit} Characters
          </p>
          {isOverLimit && (
            <p className="text-danger">500 character limit exceeded</p>
          )}
        </Form.Group>
      </div>
    </MDBCol>

        
          <MDBCol xs={12} md={6}>
     
     <div >
     <Form.Label className="fw-bolder text-black">Would you like to receive our monthly newsletter to stay updated on 
     all things VPFund?</Form.Label>
     
       <label className="me-3"style={{ display: 'inline-block', marginRight: '10px' }}>
         <input className=''
           type="radio"
           name="fav_language"
           value="Yes"
           checked={selectedLanguage === 'Yes'}
           onChange={handleLanguageChange}
         />
         Yes
       </label>
       <label style={{ display: 'inline-block' }}>
         <input
           type="radio"
           name="fav_language"
           value="No"
           checked={selectedLanguage === 'No'}
           onChange={handleLanguageChange}
         />
         No
       </label>
     </div>

     <div className="mt-3">
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className=" text-black fw-bolder">
                If yes, please specify the amount and source of funding
                </Form.Label>
                <Form.Control className='p-3' as="textarea" rows={4} placeholder="Type Something" />
              </Form.Group>
            </div>
     </MDBCol>
      </MDBRow>


     
      <div className="d-flex justify-content-end mt-5">
      <Button
  className="mt-3 btn-lg p-2 me-3"
  style={{
    background: "#F2F2F5",
    border: "none",
    transition: 'background 0.3s',
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: '17px',
    color: '#6B7588',
    width: "16%",
    fontWeight: 'bold'
 
  }}
  onMouseEnter={(e) => e.target.style.background = '#000'}
  onMouseLeave={(e) => e.target.style.background = '#F2F2F5'}
  onClick={handlePrevious}
>
  Previous
</Button>

<Button
  className="mt-3 p-3 me-4"
  style={{
    background: "none",
    border: "2px solid #F8CA25",
    transition: 'background 0.3s',
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: '17px',
    color: '#F8CA25',
    fontWeight: 'bold'
    
  }}
  onMouseEnter={(e) => e.target.style.background = 'black'}
  onMouseLeave={(e) => e.target.style.background = 'none'}
>
  Save as Draft
</Button>

<Button
  className="mt-3 btn-lg p-2"
  style={{
    background: "#F8CA25",
    border: "none",
    transition: 'background 0.3s',
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: '17px',
    color: '#FFFFFF',
    width: "16%",
    fontWeight: 'bold'
   
  }}
  onMouseEnter={(e) => e.target.style.background = '#000'}
  onMouseLeave={(e) => e.target.style.background = '#F8CA25'}
  onClick={handleNext}
>
  Next
</Button>

{/* For mobile, apply different styles using media query */}
<style jsx>{`
  @media (max-width: 768px) {
    .btn-lg {
     
    }
  }
`}</style>
      </div>
      {/* Two buttons */}
    
    </Container>
    
    </div>
  );
};

export default Analytics;