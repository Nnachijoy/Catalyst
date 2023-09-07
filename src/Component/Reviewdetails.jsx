import React, { useState, useRef, useEffect  } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import elitelogo from "../assets/elitelogo.png";
import company from "../assets/company.png";
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import draganddrop from "../assets/draganddrop.png";
import Facebookdb from '../assets/facebookdb.png';
import Instagramdb from '../assets/instagramdb.png';
import Linkedindb from '../assets/linkedindb.png';
import Twitterdb from '../assets/twitterdb.png';
import Discorddb from '../assets/Discorddb.png';
import doc from '../assets/doc.png';
import pdf from '../assets/pdf.png';

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



// const [selectedLanguage, setSelectedLanguage] = useState('');

// const handleLanguageChange = (event) => {
//   setSelectedLanguage(event.target.value);
// };


const Editdetails = () => {

 

  const underlineHoverStyle = {
    textDecoration: 'none',
    position: 'relative',
    transition: 'all 0.3s ease'
  };

  const underlineHoverOnHover = {
    content: '',
    position: 'absolute',
    left: 0,
    bottom: '-2px',
    width: '100%',
    height: '2px',
    backgroundColor: '#000', // Change this to the desired underline color
  };

  const [selectedContent, setSelectedContent] = useState('overview');

  const renderContent = () => {

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

    
    switch (selectedContent) {
      case 'socialmedia':
        return (
          <div>



<div className='border-custom p-3' style={{ border: '1px solid #C7C9D9' }}>
<img src={Facebookdb} alt="Section Image" className="img-fluid mb-0 me-2" />    https://facebook.com/helenchiweike
</div>


<div className='border-custom p-3 mt-4' style={{ border: '1px solid #C7C9D9' }}>
<img src={Instagramdb} alt="Section Image" className="img-fluid mb-0 me-2" />    https://facebook.com/helenchiweike
</div>


<div className='border-custom p-3 mt-4' style={{ border: '1px solid #C7C9D9' }}>
<img src={Linkedindb} alt="Section Image" className="img-fluid mb-0 me-2" />    https://facebook.com/helenchiweike
</div>


<div className='border-custom p-3 mt-4' style={{ border: '1px solid #C7C9D9' }}>
<img src={Twitterdb} alt="Section Image" className="img-fluid mb-0 me-2" />    https://facebook.com/helenchiweike
</div>


<div className='border-custom p-3 mt-4' style={{ border: '1px solid #C7C9D9' }}>
<img src={Discorddb} alt="Section Image" className="img-fluid mb-0 me-2" />    https://discord.com/helenchiweike
</div>
            
    

{/* 
        <MDBRow className='mt-4'>
          <MDBCol xs={12} md={12}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Facebook Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://facebook.com"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
          </MDBCol>
        </MDBRow>



        <MDBRow className='mt-4'>
          <MDBCol xs={12} md={12}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Facebook Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://facebook.com"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow className='mt-4'>
          <MDBCol xs={12} md={12}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Facebook Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://facebook.com"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
          </MDBCol>
          
        </MDBRow>



        <MDBRow className='mt-4'>
          <MDBCol xs={12} md={12}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Facebook Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://facebook.com"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
          </MDBCol>
        </MDBRow>
       */}

        <MDBRow  className=''>
          <MDBCol xs={12} md={6}>
          
          </MDBCol>
  
          <MDBCol xs={12} md={6}>
          

            
      <div className="d-flex justify-content-end" style={{marginTop:'170px'}}>

      <Button
        className="mt-3 btn-sm me-3 p-3"
        style={{
          background: "#F8CA25",
          border: "none",
          transition: "background 0.3s",
          textTransform: "none",
          boxShadow: "none",
          fontSize: "17px",
          color: "#FFFFFF",
          width: "30%",
          fontWeight: "bold"
        }}
        onMouseEnter={(e) => (e.target.style.background = "#000")}
        onMouseLeave={(e) => (e.target.style.background = "#F8CA25")}
      >
        Save
      </Button>



      <Button
        className="mt-3 btn-sm me-4"
        style={{
          background: "none",
          border: "2px solid #F8CA25",
          transition: "background 0.3s",
          textTransform: "none",
          boxShadow: "none",
          fontSize: "17px",
          color: "#F8CA25",
          width: "30%",
          fontWeight: "bold"
        }}
        onMouseEnter={(e) => (e.target.style.background = "black")}
        onMouseLeave={(e) => (e.target.style.background = "none")}
      >
      Next
      </Button>

     

      {/* For mobile, apply different styles using media query */}
      <style jsx>
        {`
          @media (max-width: 576px) {
            .btn-sm {
              /* Define your desired width for smaller devices */
              width: 120px;
            }
          }
        `}
      </style>
    </div>
            </MDBCol>

            
        </MDBRow>
          </div>
        );
      case 'teams':
        return (
          <div>


<MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
       Team Description
          </h5>
          <p  className='fw-bold'>
          Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  Lorem ipsum 
          dolor sit amet, consectetur sed 
          do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore 
          </p>
          </div>
          </MDBCol>
  
      
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>What is the primary country of operation for your startup?</h5>
          <p  className='fw-bold'>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor   </p>
          </div>
          <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>What is the primary country of operation for your startup?</h5>
          <p  className='fw-bold'>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor   labore </p>
          </div>
          </MDBCol>
        </MDBRow>

        <MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
          How are people currently solving the problem), and how is your startup better?
          </h5>
          <p  className='fw-bold'>
          Option A Lorem ipsum dolor 
          </p>
          </div>
          </MDBCol>
  
      
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>How are people currently solving the problem, and how is your startup better?</h5>
          <p  className='fw-bold'>Option A Lorem ipsum dolor </p>
          </div>
          </MDBCol>
        </MDBRow>
          {/* <MDBRow className='mt-4'>
        
  
          <MDBCol xs={12} md={6}>
            <h6 className=''>What industry vertical does your startup operate in?</h6>
          <Row className="mt-2 my-2">
          <Col xs={12} sm={6} md={4}>
            <Button
              className="mt-3 btn-sm"
              style={
                energyButtonToggle1
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
              onClick={handleEnergyButtonClick1}
            >
              <MDBIcon icon={energyButtonToggle1 ? 'plus' : 'check'} className="me-1" />
              Energy
            </Button>
          </Col>


          <Col xs={12} sm={6} md={4}>
            <Button
              className="mt-3 btn-sm"
              style={
                energyButtonToggle2
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
              onClick={handleEnergyButtonClick2}
            >
              <MDBIcon icon={energyButtonToggle2 ? 'plus' : 'check'} className="me-1" />
              Energy
            </Button>
          </Col>



          
         

          <Col xs={12} sm={6} md={4}>
            <Button
              className="mt-3 btn-sm"
              style={
                energyButtonToggle3
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
              onClick={handleEnergyButtonClick3}
            >
              <MDBIcon icon={energyButtonToggle3 ? 'plus' : 'check'} className="me-1" />
              Energy
            </Button>
          </Col>

          </Row>




          <Row className="mt-2 my-2">

          <Col xs={12} sm={6} md={4}>
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
              Energy
            </Button>
          </Col>

          
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
              Energy
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
              Energy
            </Button>
          </Col>
          </Row>

         
        </MDBCol>




        <MDBCol xs={12} md={6}>
          <div className="mb-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className=" text-black">
              Why do you think Ventures Platform is a good fit for
               your startup? How, exactly, can we help you grow your business?
              </Form.Label>
              <Form.Control className='p-3' as="textarea" rows={4} placeholder="Type Something" />
            </Form.Group>
          </div>
        </MDBCol>
      </MDBRow> */}


<MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
          Would you like to receive our monthly newsletter to stay updated on all things VPFund?
          </h5>
          <p  className='fw-bold'>
         Yes
          </p>
          </div>
          </MDBCol>
  
      
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
          Would you like to receive our monthly newsletter to stay updated on all things VPFund?
          </h5>
          <p  className='fw-bold'>Yes</p>
          </div>
          </MDBCol>
        </MDBRow>

        <MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
          Why is now the best time for this product to exist? Why are you tackling this problem? 
          </h5>
          <p  className='fw-bold'>
          Option A 
          </p>
          </div>
          </MDBCol>
  
      
          <MDBCol xs={12} md={6}>
          <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
          Why is now the best time for this product to exist? Why are you tackling this problem? 
          </h5>
          <p  className='fw-bold'>
          Option A 
          </p>
          </div>
          </MDBCol>
        </MDBRow>

       
          </div>
        );
      case 'traction':
        return (
          <div>
          <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Row>
              <Col xs={12} className="text-center">
                <img src={elitelogo} alt="Elite Logo" />
                <h4 className='fw-bolder mt-2'>No Content Yet</h4>
              </Col>
            </Row>
          </Container>
          </div>
        );
      case 'documents':
        return (
         <div>
          <MDBRow className='mt-4'>
          <MDBCol xs={12} md={2}>
            <div>
            <img src={pdf} alt="" className="img-fluid " style={{}} />
          </div>
          </MDBCol>
  
      
          <MDBCol xs={12} md={2}>
            <div>
            <img src={doc} alt="" className="img-fluid " style={{}} />
          </div>
          </MDBCol>


          <MDBCol xs={12} md={2}>
            <div>
            <img src={pdf} alt="" className="img-fluid " style={{}} />
          </div>
          </MDBCol>



          <MDBCol xs={12} md={2}>
            <div>
            <img src={doc} alt="" className="img-fluid " style={{}} />
          </div>
          </MDBCol>


          <MDBCol xs={12} md={2}>
            <div>
            <img src={pdf} alt="" className="img-fluid " style={{}} />
          </div>
         
          </MDBCol>
        </MDBRow>
         </div>
        
        );
      default:
        return (
          <div>
           <MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>Company Name </h5>
          <p  className='fw-bold'>Elitepath Software Innovation Hub</p>
          </div>
          </MDBCol>
  
      
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>Email Address</h5>
          <p  className='fw-bold'>contact@elitepath.gmail.com</p>
          </div>
          </MDBCol>
        </MDBRow>


        <MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>Website</h5>
          <p  className='fw-bold'>www.elitepath.com</p>
          </div>
          </MDBCol>
  
      
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>Bio</h5>
          <p  className='fw-bold'>Lorem ipsum dolor sit amet, consectetur sed do
           eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do 
           eiusmod tempor incididunt ut labore </p>
          </div>
          </MDBCol>
        </MDBRow>

        <MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
          What is the primary country of operation for your startup?
          </h5>
          <p  className='fw-bold'>
          Lorem ipsum dolor sit amet, consectetur sed do eiusmod 
          tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          </p>
          </div>
          </MDBCol>
  
      
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>Do you have a female co-founder?</h5>
          <p  className='fw-bold'>Lorem ipsum dolor sit amet, consectetur sed do
           eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do 
           eiusmod tempor incididunt ut labore </p>
          </div>
          </MDBCol>
        </MDBRow>

        <MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
          What is the primary country of operation for your startup?
          </h5>
          <p  className='fw-bold'>
          Lorem ipsum dolor sit amet, consectetur sed do eiusmod 
          tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          </p>
          </div>
          </MDBCol>
  
      
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>How is it solving the stated problem?</h5>
          <p  className='fw-bold'>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut 
          labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  Lorem ipsum dolor sit amet, consectetur sed
           do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
          </div>
          </MDBCol>
        </MDBRow>

        <MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
          What is the primary country of operation for your startup?
          </h5>
          <p  className='fw-bold'>
          Lorem ipsum dolor sit amet, consectetur sed do eiusmod 
          tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          </p>
          </div>
          </MDBCol>
  
      
          <MDBCol xs={12} md={6}>
            <div>

          </div>
          </MDBCol>
        </MDBRow>
          </div>
        );
    }
  };


  return (
    <div style={{ backgroundColor: 'whiteSmoke', minHeight: '100vh' }}>
        
    <Container className='p-5'>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={company} alt="" className="p-0 me-1" style={{ margin: '0' }} />

<NavLink
  to="/component2"
  activeClassName="active-link"
  style={{ textDecoration: 'none' }}
>
  <p style={{ margin: '0' }} className='me-1'>My Company &gt;</p>
</NavLink>

  <p style={{ margin: '0', color: '#7C6512' }} className=''>Review Details</p>
</div>
     
    </Container>



    <Container   className='p-3 '>
    <div className='p-4' style={{ backgroundColor: 'white', minHeight: '100vh' }}>
   
   <div>
    <Row>
      <Col md="7">

      
      <Row className="p-0 mt-4">
      <Col xs="auto">
      <img src={elitelogo} alt="" className="p-0" />

      </Col>
      <Col className='me-4 mt-4'>
        <div>
          <h6 className='fw-bold'>Elitepath software</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore </p>
        </div>
      </Col>
    </Row>
  

      </Col>


      <Col md="5">
  
      </Col>
      </Row>

   


    </div>

   
    <div style={{ minHeight: '100vh' }}>
      <Navbar expand="lg" className="custom-navbar mt-3">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setSelectedContent('overview')} className="home me-5" style={{ color: '#7C6512' }}>
                Overview
              </Nav.Link>
              <Nav.Link onClick={() => setSelectedContent('socialmedia')} className="me-5">
                Social Media
              </Nav.Link>
              <Nav.Link onClick={() => setSelectedContent('teams')} className="me-5">
                Teams
              </Nav.Link>
              <Nav.Link onClick={() => setSelectedContent('traction')} className="me-5">
                Traction
              </Nav.Link>
              <Nav.Link onClick={() => setSelectedContent('documents')} className="me-5">
                Documents
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className='p-3 '>
        <div className='p-4' style={{ backgroundColor: 'white', minHeight: '100vh' }}>
          {renderContent()}

          {/* Rest of your code */}
        </div>
      </Container>
    </div>


   

  </div>
  
  </Container>
  

</div>
  )
}

export default Editdetails