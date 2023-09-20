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
import pdfupload from "../assets/pdfupload.png";


const Users = ({ onNext, onPrevious }) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handleNext = () => {
    onNext();
    setPageNumber(pageNumber + 1);
  };

  const handlePrevious = () => {
    onPrevious();
    setPageNumber(pageNumber - 1);
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  // Function to handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    alert(`Selected File: ${file.name}`);
  };

  // Function to handle file drop
  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
    alert(`Selected File: ${file.name}`);
  };

  // Function to handle the "Edit Image" button click
  const handleEditImageClick = () => {
    fileInputRef.current.click();
  };

  // Function to remove the selected file
  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  // Prevent the default behavior for drag-and-drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };


    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleLanguageChange = (event) => {
      setSelectedLanguage(event.target.value);
    };


    
// State variables to handle button style changes
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
   Review & Submit
  </h4>
  <p>step 4 of 4</p>
</div>

<div>
  <hr />
</div>


      <MDBRow>
        <MDBCol xs={12} md={6}>
          <div className="mb-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>Company Name</div>
            <div className='mt-2'> Elitepath Innovation Hub</div>
          </div>
        </MDBCol>

        <MDBCol xs={12} md={6}>
        <div className="mb-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>Email Address</div>
            <div className='mt-2'>contact@elitepath.gmail.com</div>
          </div>
        </MDBCol>
      </MDBRow>

      <MDBRow className='mt-3'>
        <MDBCol xs={12} md={6}>
        <div className="mb-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>Website</div>
            <div className='mt-2'>www.elitepath.com</div>
          </div>
        </MDBCol>

        <MDBCol xs={12} md={6}>
              <h6 className='fw-bolder'  style={{color:'#7C6512', fontSize:'17px'}}>
                What industry vertical does your startup operate in?</h6>
            <Row className="mt-1 my-2">
            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-sm w-75 px-4"
                style={
                   {
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
                }>
                Energy
              </Button>
            </Col>
  
  
            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-sm w-75 px-4"
                style={
                     {
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
              >
                Fintech
              </Button>
            </Col>
  
            {/* <Col xs={12} sm={6} md={4}>
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
                <MDBIcon icon={energyButtonToggle3 ? 'check' : 'plus'} className="me-2" />
                Edutech
              </Button>
            </Col> */}

             {/* <Col xs={12} sm={6} md={3}>
              <Button
                className="mt-3 btn-sm"
                style={
                  energyButtonToggle4
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
                onClick={handleEnergyButtonClick4}
              >
                <MDBIcon icon={energyButtonToggle4 ? 'plus' : 'check'} className="me-1" />
                Fintech
              </Button>
            </Col> */}
  
            </Row>
  
  
  
{/*   
            <Row className="mt-2 my-2">
       
            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-sm"
                style={
                  energyButtonToggle5
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
                onClick={handleEnergyButtonClick5}
              >
                <MDBIcon icon={energyButtonToggle5 ? 'plus' : 'check'} className="me-1" />
               Real Estate
              </Button>
            </Col>
  
  
            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-sm"
                style={
                  energyButtonToggle6
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
                onClick={handleEnergyButtonClick6}
              >
                <MDBIcon icon={energyButtonToggle6 ? 'plus' : 'check'} className="me-1" />
                Ecommerce
              </Button>
            </Col>




            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-sm"
                style={
                  energyButtonToggle7
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
                onClick={handleEnergyButtonClick7}
              >
                <MDBIcon icon={energyButtonToggle7 ? 'plus' : 'check'} className="me-2" />
              Agritech
              </Button>
            </Col>



            </Row> */}

  
          </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol xs={12} md={6}>
        <div className="mt-3">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>Location</div>
            <div className='mt-2'>PortHarcourt, Rivers State</div>
          </div>
          <div className="mt-3">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>Founding Date</div>
            <div className='mt-2'>01 Sep, 2000</div>
          </div>

          <div className="mt-3">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>Are you currently generating revenue?</div>
            <div className='mt-2'>Yes</div>
          </div>

          <div className="mt-3">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>If yes, please specify your annual revenue</div>
            <div className='mt-2'>$0 - $100k</div>
          </div>
 
        </MDBCol>

        <MDBCol xs={12} md={6}>
        <div className="mt-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>Briefly describe your target market and customer segment</div>
            <div className='mt-2'>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore
             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  Lorem ipsum dolor sit amet, consectetur
             sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
             </div>
          </div>
        </MDBCol>
      </MDBRow>

        <MDBRow className='mt-2'>
       
    
        <MDBCol xs={12} md={6}>
        <div className="mt-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>
            How did you hear about our program?
            </div>
            <div className='mt-2'>Referral</div>
          </div>
          <div className="mt-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>
            Team Size
            </div>
            <div className='mt-2'>5-10 Persons</div>
          </div>
       </MDBCol>
     
        <MDBCol xs={12} md={6}>
        <div className="mb-5">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>
            Describe the background and expertise of your team
            </div>
            <div className='mt-2'>
            Lorem ipsum dolor sit amet, consectetur sed do eiusmod 
            tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
            </div>
          </div>
        </MDBCol>
        </MDBRow>

        <MDBRow>
       
       <MDBCol xs={12} md={6}>
       <div className="mt-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>
            Key Team Members 
            </div>
            <div className='mt-2'>Lorem ipsum dolor sit amet, consectetur 
            sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore </div>
          </div>
       
       </MDBCol>
      
       <MDBCol xs={12} md={6}>
       <div className="mt-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>
            Have you received any previous funding or investment?
            </div>
            <div className='mt-2'>Yes</div>
          </div>
       </MDBCol>

       </MDBRow>


<MDBRow className='mt-4'> 
       
<MDBCol xs={12} md={6}>
<div className="mt-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>
            If yes, please specify the amount and source of funding
            </div>
            <div className='mt-2'>Lorem ipsum dolor sit amet, consectetur
             sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt ut labore </div>
          </div>
         </MDBCol>
      
      
         <MDBCol xs={12} md={6}>
         <div className="mt-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>
            Team Description
            </div>
            <div className='mt-2'>Lorem ipsum dolor sit amet, consectetur
             sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt ut labore </div>
          </div>
       </MDBCol>

       </MDBRow>


       <MDBRow>
       
       <MDBCol xs={12} md={6}>
       <div className="mt-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>
            What problem does your startup solve??
            </div>
            <div className='mt-2'>Lorem ipsum dolor sit amet, consectetur 
            sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore  </div>
          </div>
       </MDBCol>
      
       <MDBCol xs={12} md={6}>
       <div className="mt-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>
            Describe your unique value proposition
            </div>
            <div className='mt-2'>Lorem ipsum dolor sit amet, consectetur sed do eiusmod
             tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor 
             incididunt ut labore  </div>
          </div>
         </MDBCol>

       </MDBRow>



       <MDBRow>
       
       <MDBCol xs={12} md={6}>
       <div className="mt-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>
            What is your growth strategy?
            </div>
            <div className='mt-2'>
            Lorem ipsum dolor sit amet, consectetur
             sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore 
            </div>
          </div>
       </MDBCol>
      
       <MDBCol xs={12} md={6}>
       <div className="mt-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>
            File Uploaded
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
  <div className='border-custom p-4 mt-2'
    style={{
      border: 'none',
      flex: 11,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#FAFAFA'
    }}
  >
    <div className='d-flex justify-content-between w-100'>
      <div style={{ flexGrow: 1 }}>
        <img src={pdfupload} /><span className='px-3'>Application Teams</span>
      </div>
      <div>
       5.7MB
      </div>
    </div>
  </div>
</div>

          </div>
       </MDBCol>
       </MDBRow>

       <MDBRow>
       
       <MDBCol xs={12} md={6}>
       <div className="mt-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>
            How do you plan to use the investment if selected?
            </div>
            <div className='mt-2'>
            Lorem ipsum dolor sit amet, consectetur
             sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore 
            </div>
          </div>
       </MDBCol>
      
       <MDBCol xs={12} md={6}>
       <div className="mt-4">
            <div className=" fw-bold" style={{color:'#7C6512', fontSize:'17px'}}>
            Any additional comments or information you'd like to share?
            </div>
            <div className='mt-2'>
            Lorem ipsum dolor sit amet, consectetur
             sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore
            </div>
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
>
  Submit
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


      {/* Two buttons */}
    
    </Container>
   

    </div>
  );
};

export default Users;