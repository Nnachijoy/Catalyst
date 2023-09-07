import React, { useState, useRef, useEffect  } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import helenimage from "../assets/helenimage.png";
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
import { Link } from 'react-router-dom'; 


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
       Team Size
          </h5>
          <p  className='fw-bold'>
         5-10 persons
          </p>
          </div>
          </MDBCol>
  
      
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>Describe the background and expertise of your team</h5>
          <p  className='fw-bold'>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore 
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
          </div>
      
          </MDBCol>
        </MDBRow>

        <MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
          Key Team Members 
          </h5>
          <p  className='fw-bold'>
          Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore 
          </p>
          </div>
          </MDBCol>
  
      
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>Have you received any previous funding or investment?</h5>
          <p  className='fw-bold'>Yes</p>
          </div>
          </MDBCol>
        </MDBRow>
        


<MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
          Team Description
          </h5>
          <p  className='fw-bold'>
          Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit,  
          sed do eiusmod tempor incididunt ut labore  Lorem ipsum dolor sit amet, consectetur
           sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          </p>
          </div>
          </MDBCol>
  
      
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
          If yes, please specify the amount and source of funding
          </h5>
          <p  className='fw-bold'>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt
           ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
          </div>
          </MDBCol>
        </MDBRow>

          </div>
        );
      case 'vision':
        return (
            <div>


            <MDBRow className='mt-4'>
                      <MDBCol xs={12} md={6}>
                        <div>
                      <h5 style={{color:'#7C6512'}} className='fw-bold'>
                      What problem does your startup solve??
                      </h5>
                      <p  className='fw-bold'>
                      Lorem ipsum dolor sit amet, consectetur sed do eiusmod 
                      tempor incididunt ut labore consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore 
                      </p>
                      </div>
                      </MDBCol>
              
                  
                      <MDBCol xs={12} md={6}>
                        <div>
                      <h5 style={{color:'#7C6512'}} className='fw-bold'>
                      Describe your unique value proposition
                      </h5>
                      <p  className='fw-bold'>Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore 
                      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
                      </div>
                  
                      </MDBCol>
                    </MDBRow>
            
                    <MDBRow className='mt-4'>
                      <MDBCol xs={12} md={6}>
                        <div>
                      <h5 style={{color:'#7C6512'}} className='fw-bold'>
                      What is your growth strategy?
                      </h5>
                      <p  className='fw-bold'>
                      Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit,
                       sed do eiusmod tempor incididunt ut labore 
                      </p>
                      </div>
                      </MDBCol>
              
                  
                      <MDBCol xs={12} md={6}>
                        <div>
                      <h5 style={{color:'#7C6512'}} className='fw-bold'>
                      How do you plan to use the investment if selected?</h5>
                      <p  className='fw-bold'>    Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit,
                       sed do eiusmod tempor incididunt ut labore </p>
                      </div>
                      </MDBCol>
                    </MDBRow>
                    
            
            
            <MDBRow className='mt-4'>
                      <MDBCol xs={12} md={6}>
                        <div>
                      <h5 style={{color:'#7C6512'}} className='fw-bold'>
                      Any additional comments or information you'd like to share?
                      </h5>
                      <p  className='fw-bold'>
                      Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor 
                      incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                      </p>
                      </div>
                      </MDBCol>
              
                  
                      <MDBCol xs={12} md={6}>
                      {/* emptycol */}
                      </MDBCol>
                    </MDBRow>
            
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
    
        
        case 'comment':
            return (
             <div>
          <h3 className='fw-bolder' style={{lineHeight:'29.05px'}}>Leave a comment about the pitch</h3>

          <Form className='mt-5'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='text-black fw-bold' style={{fontSize:'20px'}}>Comment</Form.Label>
        <Form.Control as="textarea" rows={8} placeholder="Type Something" />
      </Form.Group>
    </Form>

    <Link to="/approvedpitch">
  <button
    className=''
    style={{
      width: '186px',
      padding: '15px',
      margin: '10px',
      backgroundColor: '#06C270',
      color: 'white',
      border: 'none',
      outline: 'none',
      fontSize: '18px',
    }}
  >
    Approved Pitch
  </button>
</Link>

<button className=''
  style={{
    width: '186px', 
    padding: '15px',
    margin: '10px',
    backgroundColor: '#FF3B3B',
    color: 'white',
    border: 'none',
    outline: 'none',
    fontSize:'18px',
  }}
>
 Reject Pitch
</button>
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
          <h5 style={{color:'#7C6512'}} className='fw-bold'>What industry sector does your startup operate in?</h5>
          <button className=''
  style={{
    width: '140px',
    borderRadius: '20px',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#F8CA25',
    color: 'white',
    border: 'none',
    outline: 'none',
  }}
>
 Energy
</button>
<button className=''
  style={{
    width: '140px',
    borderRadius: '20px',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#F8CA25',
    color: 'white',
    border: 'none',
    outline: 'none',
  }}
>
Fintech
</button>
          </div>
          </MDBCol>
        </MDBRow>

        <MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
        Location
          </h5>
          <p  className='fw-bold'>
         Port Harcourt, Rivers State
          </p>
          </div>

          <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
      Founding Date
          </h5>
          <p  className='fw-bold'>
        01 Sep 2000
          </p>
          </div>
          </MDBCol>
  
      
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>How is it solving the stated problem?</h5>
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
          Are you currently generating revenue?
          </h5>
          <p  className='fw-bold'>
          Yes
          </p>
          </div>

          <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
          If yes, please specify your annual revenue
          </h5>
          <p  className='fw-bold'>
          $0 - $100k
          </p>
          </div>
          </MDBCol>
  
      
          <MDBCol xs={12} md={6}>
            <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
          Briefly describe your target market and customer segment
          </h5>
          <p  className='fw-bold'>
          Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut labore consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore  Lorem ipsum dolor sit amet, consectetur
           sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore 
          </p>
          </div>
          </MDBCol>
        </MDBRow>

        <MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
     
          </MDBCol>
  
      
          <MDBCol xs={12} md={6}>
          <div>
          <h5 style={{color:'#7C6512'}} className='fw-bold'>
          How did you hear about our program?
          </h5>

          </div>
          </MDBCol>
        </MDBRow>
          </div>
        );
    }
  };


  return (
    <div style={{ backgroundColor: 'whiteSmoke', minHeight: '100vh' }}>
        
    <Container className='p-3'>
    <div style={{ display: 'flex', alignItems: 'center' }} className='mt-5'>
  <img src={company} alt="" className="p-0 me-1" style={{ margin: '0' }} />

<NavLink
  to="/applicationn"
  activeClassName="active-link"
  style={{ textDecoration: 'none' }}
>
  <p style={{ margin: '0' }} className='me-1'>Application &gt;</p>
</NavLink>

  <p style={{ margin: '0', color: '#7C6512' }} className=''>Applicant's Details</p>
</div>
     
    </Container>



    <Container   className='p-3 '>
    <div className='p-4' style={{ backgroundColor: 'white', minHeight: '100vh' }}>
   
   <div>
    <Row>
      <Col md="7">

      
      <Row className="p-0 mt-4">
      <Col xs="auto">
      <img src={helenimage} alt="" className="p-0" />

      </Col>
      <Col className='me-4 mt-3'>
        <div>
        <h5 className='fw-bold' >Helen Chinweike</h5>
<p className='' style={{ margin: '0', padding: '0' }}>Helenchinweike@gmail.com</p>
<p className='' style={{ margin: '0', padding: '0' }}>+234-8123456789</p>
        </div>
      </Col>
    </Row>
  

      </Col>


      <Col md="5"  className='mt-5'>
      <p className='mt-2'style={{ margin: '0', padding: '0' }}>Personal Social Media</p>
      <div className="d-flex">
        <div className="flex-shrink-0">
        {/* <img src={hackathon} alt=""/> */}
        </div>
        <div className="flex-grow-1 ">
          <div >
            <div className="d-flex mt-2 " style={{ margin: '0', padding: '0' }}>
        <div className="me-2">
        <img src={Discorddb} alt=""  className='w-75'/>
        </div>
        <div className="me-2">
        <img src={Facebookdb} alt=""  className='w-75'/>
        </div>
        <div className="me-2">
        <img src={Instagramdb} alt=""  className='w-75'/>
        </div>
        <div className="me-2">
        <img src={Linkedindb} alt="" className='w-75'/>
        </div>
       
        <div className="me-2">
        <img src={Twitterdb} alt=""  className='w-75'/>
        </div>
      </div>
          </div>
        </div>
      </div>

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
              <Nav.Link onClick={() => setSelectedContent('companyprofile')} className="home me-5" style={{ color: '#7C6512' }}>
                Company Profile
              </Nav.Link>
              <Nav.Link onClick={() => setSelectedContent('socialmedia')} className="me-5">
                Social Media
              </Nav.Link>
              <Nav.Link onClick={() => setSelectedContent('teams')} className="me-5">
                Teams
              </Nav.Link>
              <Nav.Link onClick={() => setSelectedContent('vision')} className="me-5">
                Vision
              </Nav.Link>
              <Nav.Link onClick={() => setSelectedContent('documents')} className="me-5">
                Documents
              </Nav.Link>

              <Nav.Link onClick={() => setSelectedContent('comment')} className="me-5">
                Comment
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