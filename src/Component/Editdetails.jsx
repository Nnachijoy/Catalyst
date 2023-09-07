import React, { useState, useRef, useEffect  } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import elitelogo from "../assets/elitelogo.png";
import company from "../assets/company.png";
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import draganddrop from "../assets/draganddrop.png";

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

    const [text, setText] = useState('');

    const handleTextChange = (event) => {
      const newText = event.target.value;
      setText(newText);
    };
  
    const characterLimit = 500;
    const usedCharacters = text.length;
    const isOverLimit = usedCharacters > characterLimit;
  

    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleLanguageChange = (event) => {
      setSelectedLanguage(event.target.value);
    };
    
    switch (selectedContent) {
      case 'socialmedia':
        return (
          <div>
    <MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
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
  
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Discord Link</Form.Label>
              <Form.Control
                type="email"
                placeholder="https://discord.com"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
          </MDBCol>
        </MDBRow>


        <MDBRow  className='mt-4'> 
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Instagram Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://instagram.com"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
          </MDBCol>
  
        

          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Telegram Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://telegram.com"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
          </MDBCol>
        </MDBRow>

      

        <MDBRow  className='mt-4'>
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">What is the primary country of operation
               for your startup?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your company name"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>


            <div className="mb-4">
              <Form.Label className="text-black fw-bold">What is the primary country of operation
               for your startup?</Form.Label>
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
          

            
      <div className="d-flex justify-content-end" style={{marginTop:'300px'}}>

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
      <div className="mb-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-black fw-bolder">Team Description</Form.Label>
          <Form.Control
            className='p-3'
            as="textarea"
            rows={8}
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
            <div className="mb-4">
              <Form.Label className="text-black fw-bolder">What is the primary country of operation for your startup?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>

            <div className="mb-4">
              <Form.Label className="text-black fw-bolder">What is the primary country of operation for your startup?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
          </MDBCol>
  
        
        </MDBRow>

<MDBRow className='mt-3'>
<MDBCol xs={12} md={6}>
          <div className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bolder text-black">How many users or customers have you acquired 
              since launch? How many are ‘active’ today? What is the avg. weekly growth rate?</Form.Label>
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
        
     
<div >
<Form.Label className="fw-bolder text-black mt-5">Would you like to receive our monthly newsletter to stay updated on 
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
</MDBCol>



<MDBCol xs={12} md={6}>
          <div className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bolder text-black">How many users or customers have you acquired 
              since launch? How many are ‘active’ today? What is the avg. weekly growth rate?</Form.Label>
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
        
     
<div >
<Form.Label className="fw-bolder text-black mt-5">Would you like to receive our monthly newsletter to stay updated on 
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


      
<MDBRow className='mt-3'>
<MDBCol xs={12} md={6}>
          <div className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bolder text-black">How many users or customers have you acquired 
              since launch? How many are ‘active’ today? What is the avg. weekly growth rate?</Form.Label>
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
          <div className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bolder text-black">How many users or customers have you acquired 
              since launch? How many are ‘active’ today? What is the avg. weekly growth rate?</Form.Label>
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
          </MDBRow>
        
          <div className="d-flex justify-content-end mt-3">

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
    width: "20%",
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
    width: "20%",
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
          </div>
        );
      case 'traction':
        return (
          <div>


<MDBRow className='mt-3'>
<MDBCol xs={12} md={6}>
          <div className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bolder text-black">How many users or customers have you acquired 
              since launch? How many are ‘active’ today? What is the avg. weekly growth rate?</Form.Label>
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
          <div className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bolder text-black">How many users or customers have you acquired 
              since launch? How many are ‘active’ today? What is the avg. weekly growth rate?</Form.Label>
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
          </MDBRow>


          <MDBRow className='mt-3'>
<MDBCol xs={12} md={6}>
          <div className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bolder text-black">How many users or customers have you acquired 
              since launch? How many are ‘active’ today? What is the avg. weekly growth rate?</Form.Label>
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
        
     
<div >
<Form.Label className="fw-bolder text-black mt-5">Would you like to receive our monthly newsletter to stay updated on 
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
</MDBCol>



<MDBCol xs={12} md={6}>
          <div className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bolder text-black">How many users or customers have you acquired 
              since launch? How many are ‘active’ today? What is the avg. weekly growth rate?</Form.Label>
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
        
     
<div >
<Form.Label className="fw-bolder text-black mt-5">Would you like to receive our monthly newsletter to stay updated on 
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
</MDBCol>
</MDBRow>


        <MDBRow className='mt-3'>
<MDBCol xs={12} md={6}>
          <div className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bolder text-black">How many users or customers have you acquired 
              since launch? How many are ‘active’ today? What is the avg. weekly growth rate?</Form.Label>
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
          <div className="mt-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bolder text-black">How many users or customers have you acquired 
              since launch? How many are ‘active’ today? What is the avg. weekly growth rate?</Form.Label>
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
          </MDBRow>


          <MDBRow  className='mt-4'> 

<MDBCol xs={12} md={6}>
      <div className="mb-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-black fw-bolder">Team Description</Form.Label>
          <Form.Control
            className='p-3'
            as="textarea"
            rows={6}
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
      <div className="mb-4">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-black fw-bolder">Team Description</Form.Label>
          <Form.Control
            className='p-3'
            as="textarea"
            rows={6}
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
        </MDBRow>

        <MDBRow  className='mt-4'>
        <MDBCol xs={12} md={6}>
            </MDBCol>

  
      
          <MDBCol xs={12} md={6}>
      
      <div className="d-flex justify-content-end mt-5">

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
          width: "40%",
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
          width: "40%",
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
      case 'documents':
        return (
          <div>

<div className="mb-4">
      <label className="text-black fw-bold">If you have prepared a pitch deck, please upload it</label>

      <div
        style={{
          border: '2px dashed #ccc',
          padding: '1rem',
          borderRadius: '10px',
          height: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden', // To ensure the content does not exceed the container boundaries
        }}
        className="mt-4"
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
      >
        {selectedFile ? (
          <div style={{ maxWidth: '100%', maxHeight: '100%', position: 'relative' }}>
            {selectedFile.type.startsWith('image/') ? (
              <img
                src={URL.createObjectURL(selectedFile)} // Use URL.createObjectURL() to create a temporary URL
                alt="Selected File Preview"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            ) : (
              <div>
                <p>Selected File: {selectedFile.name}</p>
                <a href={URL.createObjectURL(selectedFile)} download>
                  Download Document
                </a>
              </div>
            )}
            <button
              className="btn btn-danger"
              onClick={handleRemoveFile}
              style={{
                position: 'absolute',
                top: '100px',
                left: '70%',
                transform: 'translateX(-50%)',
              }}
            >
              Remove
            </button>
          </div>
        ) : (
          <div
            className="text-center"
            onClick={() => fileInputRef.current.click()}
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
          >
            <img src={draganddrop} alt="" />
            <p>
              Select a file or drag and drop here
              <br />
              <span style={{ fontSize: '11px', color: '#C7C9D9' }}>
                JPG, PNG or PDF, file size no more than 10MB
              </span>
            </p>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
              accept=".jpg, .jpeg, .png, .pdf"
            />
            <label
              className="btn btn-primary mt-3"
              htmlFor="fileInput"
              style={{
                background: 'none',
                border: '2px solid #F8CA25',
                transition: 'background 0.3s',
                textTransform: 'none',
                boxShadow: 'none',
                fontSize: '17px',
                color: '#F8CA25',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.target.style.background = 'black')}
              onMouseLeave={(e) => (e.target.style.background = 'none')}
            >
              Select File
            </label>
          </div>
        )}
      </div>
    </div>


        <MDBRow  className='mt-4'>
          <MDBCol xs={12} md={6}>
        

          </MDBCol>
  
        

          <MDBCol xs={12} md={6}>
         


            
      <div className="d-flex justify-content-end mt-3">

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
      default:
        return (
          <div>
           <MDBRow className='mt-4'>
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Company Name</Form.Label>
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


        <MDBRow  className='mt-4'> 
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your company name"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>


            <div className="mb-4">
              <Form.Label className="text-black fw-bold">What is the primary country of operation
               for your startup?</Form.Label>
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
              <Form.Label className="fw-bolder text-black">Bio</Form.Label>
              <Form.Control as="textarea" rows={6} placeholder="Type Something" />
            </Form.Group>
            </div>
            </MDBCol>
        </MDBRow>

        <MDBRow  className='mt-4'>   
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">What is the primary country of operation
               for your startup?</Form.Label>
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
            <Form.Label className="text-black fw-bold">Do you have a female co-founder?</Form.Label>

            <Form.Control
              as="select" // Change the input type to "select"
              className=""
              style={{ padding: '20px 32px', boxShadow: 'none' }}
              required // Add required attribute
            >
              <option value="">-Select-</option> {/* Add the "-select-" option */}
              <option value="yes">Yes</option> {/* Add other options if needed */}
              <option value="no">No</option>
            </Form.Control>
          </div>
        </MDBCol>
        </MDBRow>

        <MDBRow  className='mt-4'>
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">What is the primary country of operation
               for your startup?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your company name"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>


            <div className="mb-4">
              <Form.Label className="text-black fw-bold">What is the primary country of operation
               for your startup?</Form.Label>
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
              <Form.Label className="fw-bolder text-black">how are people currently solving the problem,
               and how is your startup better?</Form.Label>
              <Form.Control as="textarea" rows={6} placeholder="Type Something" />
            </Form.Group>
            </div>


            
      <div className="d-flex justify-content-end mt-3">

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
    }
  };


  return (
    <div style={{ backgroundColor: 'whiteSmoke', minHeight: '100vh' }}>
        
    <Container className='p-5'>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={company} alt="" className="p-0 me-1" style={{ margin: '0' }} />
  {/* <p style={{ margin: '0' }} className='me-1'>My Company &gt;</p> */}
  <NavLink
  to="/component2"
  activeClassName="active-link"
  style={{ textDecoration: 'none' }}
>
  <p style={{ margin: '0' }} className='me-1'>My Company &gt;</p>
</NavLink>
  <p style={{ margin: '0', color: '#7C6512' }} className=''>Edit Details</p>
</div>
     
    </Container>



    <Container   className='p-5 '>
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