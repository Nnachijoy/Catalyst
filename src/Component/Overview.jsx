
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
import dashboard2 from "../assets/dashboard2.png";
import axios from 'axios';
import  {NavLink} from "react-router-dom"



const Overview = ({ onNext, onPrevious }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handleNext = () => {
    onNext();
    setPageNumber(pageNumber + 1);
  };

  const handlePrevious = () => {
    onPrevious();
    setPageNumber(pageNumber - 1);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get('https://catalyst-zkhb.onrender.com/api/application/stage-one'); // Replace with your API URL

      // Handle the response data as needed
      console.log('API Response:', response.data);
    } catch (error) {
      // Handle errors
      console.error('API Error:', error);
    }
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


  return (
    <div className="dashboard-content">
      {/* <h2>Overview Content - Page {pageNumber}</h2> */}
      <Container className=" mt-3 px-5">

      <div style={{ display: 'flex', alignItems: 'center' }}>
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
        <h4 style={{ color: '#7C6512', lineHeight:'43.57px' }} className="fw-bolder mt-4">
          About Your Start Up
        </h4>
        <p>step 1 of 1</p>
      </div>

      <div>
        <hr />
      </div>
     
      <MDBRow>
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Startup Name</Form.Label>
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
              <Form.Label className="text-black fw-bold">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
          </MDBCol>
        </MDBRow>
  
        <MDBRow classname='mt-4'>
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Website</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
          </MDBCol>
  
          <MDBCol xs={12} md={6}>
              <h6 className=''>What industry vertical does your startup operate in?</h6>
            <Row className="mt-2 my-2">
            <Col xs={12} sm={6} md={3}>
              <Button
                className="mt-3 btn-sm"
                style={
                  energyButtonToggle1
                    ? {
                        background:'#F8CA25',
                        border: 'none',
                        transition: 'background 0.3s',
                        textTransform: 'none',
                        boxShadow: 'none',
                        fontSize: '17px',
                        color: '#FFFFFF',
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                      }
                    : {
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
                      }
                }
                onClick={handleEnergyButtonClick1}
              >
                <MDBIcon icon={energyButtonToggle1 ? 'check' : 'plus'} className="me-1" />
                Energy
              </Button>
            </Col>
  
  
            <Col xs={12} sm={6} md={3}>
              <Button
                className="mt-3 btn-sm"
                style={
                  energyButtonToggle2
                    ?  {  
                   background:'#F8CA25',
                    border: 'none',
                    transition: 'background 0.3s',
                    textTransform: 'none',
                    boxShadow: 'none',
                    fontSize: '17px',
                    color: '#FFFFFF',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                  }
                : {
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
                  }
                }
                onClick={handleEnergyButtonClick2}
              >
                <MDBIcon icon={energyButtonToggle2 ? 'check' : 'plus'} className="me-1" />
                Health
              </Button>
            </Col>
  
  
  
            
           
  
            <Col xs={12} sm={6} md={3}>
              <Button
                className="mt-3 btn-sm"
                style={
                  energyButtonToggle3
                    ? {
                      background:'#F8CA25',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#FFFFFF',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
                  : {
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
                    }
                }
                onClick={handleEnergyButtonClick3}
              >
                <MDBIcon icon={energyButtonToggle3 ? 'check' : 'plus'} className="me-1" />
                Edutech
              </Button>
            </Col>



             <Col xs={12} sm={6} md={3}>
              <Button
                className="mt-3 btn-sm"
                style={
                  energyButtonToggle4
                    ? {
                      background:'#F8CA25',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#FFFFFF',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
                  : {
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
                    }
                }
                onClick={handleEnergyButtonClick4}
              >
                <MDBIcon icon={energyButtonToggle4 ? 'check' : 'plus'} className="me-1" />
                Fintech
              </Button>
            </Col>
  
            </Row>
  
  
  
  
            <Row className="mt-2 my-2">
       
            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-sm"
                style={
                  energyButtonToggle5
                    ? {
                      background:'#F8CA25',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#FFFFFF',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
                  : {
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
                    }
                }
                onClick={handleEnergyButtonClick5}
              >
                <MDBIcon icon={energyButtonToggle5 ? 'check' : 'plus'} className="me-1" />
                Real Estate
              </Button>
            </Col>
  
  
            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-sm"
                style={
                  energyButtonToggle6
                    ? {
                      background:'#F8CA25',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#FFFFFF',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
                  : {
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
                    }
                }
                onClick={handleEnergyButtonClick6}
              >
                <MDBIcon icon={energyButtonToggle6 ? 'check' : 'plus'} className="me-1" />
                Ecommerce
              </Button>
            </Col>




            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-sm"
                style={
                  energyButtonToggle7
                    ? {
                      background:'#F8CA25',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#FFFFFF',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
                  : {
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
                    }
                }
                onClick={handleEnergyButtonClick7}
              >
                <MDBIcon icon={energyButtonToggle7 ? 'check' : 'plus'} className="me-2" />
                Agritech
              </Button>
            </Col>




            {/* <Col xs={12} sm={6} md={3}>
              <Button
                className="mt-3 btn-sm"
                style={
                  energyButtonToggle8
                    ? {
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
                      }
                    : {
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
                      }
                }
                onClick={handleEnergyButtonClick8}
              >
                <MDBIcon icon={energyButtonToggle8 ? 'plus' : 'check'} className="me-2" />
                Energy
              </Button>
            </Col> */}
  
            </Row>

  
          </MDBCol>
        </MDBRow>
  
        <MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
         
          <div className="">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bolder text-black">Location</Form.Label>
               <Form.Select aria-label="Select a reason" className=""
        style={{ padding: '20px 32px', boxShadow: 'none' }}
         
        required>
        <option value="option1">-Select Option-</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option3">Option 4</option>
        {/* Add more options as needed */}
      </Form.Select>
            </Form.Group>
          </div>
      
        
          <div className="">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bolder text-black">Founding date</Form.Label>
               <Form.Select aria-label="Select a reason" className=""
        style={{ padding: '20px 32px', boxShadow: 'none' }}
         
        required>
        <option value="option1">-Select Option-</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option3">Option 4</option>
        {/* Add more options as needed */}
      </Form.Select>
            </Form.Group>
          </div>
      
    
          </MDBCol>
  
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="fw-bolder text-black">Describe your start up in one sentence</Form.Label>
                <Form.Control as="textarea" rows={8} placeholder="Type Something" />
              </Form.Group>
            </div>
          </MDBCol>
        </MDBRow>
  
        <MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
         
          <div >
<Form.Label className="fw-bolder text-black mt-2">Are you currently generating revenue?</Form.Label>

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
      
        
          <div className="mt-5">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bolder text-black">If yes, specify your actual revenue</Form.Label>
               <Form.Select aria-label="Select a reason" className=""
        style={{ padding: '20px 32px', boxShadow: 'none' }}
         
        required>
        <option value="option1">-Select Option-</option>
        <option value="option2">$0-100k</option>
        <option value="option3">$100-$1M</option>
        <option value="option3">$1M-$10M</option>
        <option value="option4">$10M+</option>
        {/* Add more options as needed */}
      </Form.Select>
            </Form.Group>
          </div>
      
    
          </MDBCol>
  
     





          <MDBCol xs={12} md={6}>
         
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Briefly describe your target market and customer segment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your company name"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
    

     
       
         <div className="mt-4">
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Label className="fw-bolder text-black">
             How did you hear about our program?
             </Form.Label>
              <Form.Select aria-label="Select a reason" className=""
       style={{ padding: '20px 32px', boxShadow: 'none' }}
        
       required>
       <option value="option1">-Select Option-</option>
       <option value="option2">Website</option>
       <option value="option3">Event</option>
       <option value="option3">Social Media</option>
       <option value="option4">Other</option>
       {/* Add more options as needed */}
     </Form.Select>
           </Form.Group>
         </div>
     
   
         </MDBCol>
        </MDBRow>
  


      <div className="d-flex justify-content-end mt-5">
          <Button
            className="mt-3 me-4"
            style={{
              background: "none",
              border: "2px solid #F8CA25",
              transition: "background 0.3s",
              textTransform: "none",
              boxShadow: "none",
              fontSize: "18px",
              color: "#F8CA25",
              fontWeight: "bold"
            }}
            onMouseEnter={(e) => (e.target.style.background = "black")}
            onMouseLeave={(e) => (e.target.style.background = "none")}
           >
            Save as Draft
          </Button>

          <Button
  className="mt-3 p-3"
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
        </div>
    
    </Container>

      {/* <button onClick={handleNext}>Next</button> */}
    </div>
  );
};

export default Overview;