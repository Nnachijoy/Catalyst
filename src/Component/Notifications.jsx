// import React from 'react';
// import { Container } from 'react-bootstrap';
// import bell from "../assets/bell.png";
// import { NavLink } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';



// const Notifications = () => {



  
//   return (
//     <div style={{ backgroundColor: 'whiteSmoke', minHeight: '100vh' }}>
        
//       <Container>
//         <h4 className='fw-bold p-3'>Notification</h4>
       
//       </Container>



//       <Container>
//       <div className='p-3' style={{ backgroundColor: 'white', minHeight: '80vh' }}>
     
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//           <h6 className='fw-bold m-0 me-3' style={{color:'#7C6512'}}>New Notification</h6>
//           <h6 className='fw-bold p-3 m-0' style={{color:'#8F90A6'}}> Read Notification</h6>
     
//         </div>
//         <hr/>
     
        // <div className='align-items-center mt-5' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        //   <img src={bell} alt="Bell" style={{ }} />
        //   <div className='text-center mt-1'>
        //     <h5 className='fw-bolder'> No Nofication Yet</h5>
        //     <p>Amet minim non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        //   </div>
        // </div>


//     </div>


//     <div style={{ minHeight: '100vh' }}>
//       <Navbar expand="lg" className="custom-navbar mt-3">
//         <Container>
//           <Navbar.Toggle aria-controls="basic-navbar-nav">
//             <span className="navbar-toggler-icon"></span>
//           </Navbar.Toggle>
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link onClick={() => setSelectedContent('overview')} className="home me-5" style={{ color: '#7C6512' }}>
//                 Overview
//               </Nav.Link>
//               <Nav.Link onClick={() => setSelectedContent('socialmedia')} className="me-5">
//                 Social Media
//               </Nav.Link>
//               <Nav.Link onClick={() => setSelectedContent('teams')} className="me-5">
//                 Teams
//               </Nav.Link>
//               <Nav.Link onClick={() => setSelectedContent('traction')} className="me-5">
//                 Traction
//               </Nav.Link>
//               <Nav.Link onClick={() => setSelectedContent('documents')} className="me-5">
//                 Documents
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Container className='p-3 '>
//         <div className='p-4' style={{ backgroundColor: 'white', minHeight: '100vh' }}>
//           {renderContent()}

//           {/* Rest of your code */}
//         </div>
//       </Container>
//     </div>
//     </Container>






//     </div>
//   );
// }

// export default Notifications;



import React, { useState, useRef, useEffect  } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import elitelogo from "../assets/elitelogo.png";
import company from "../assets/company.png";
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import bell from "../assets/bell.png";

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
   
      case 'readnotification':
        return (
          <div>

<div className='align-items-center mt-5' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <img src={bell} alt="Bell" style={{ }} />
          <div className='text-center mt-1'>
            <h5 className='fw-bolder'> No Nofication Yet</h5>
            <p>We'll let you know when there is a new notification</p>
          </div>
        </div>

          </div>
        );
     
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
        <div className='align-items-center mt-5' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
          <img src={bell} alt="Bell" style={{ }} />
          <div className='text-center mt-1'>
            <h5 className='fw-bolder'> No New Nofication Yet</h5>
            <p>Amet minim non deserunt ullamco est sit aliqua dolor do amet sint.</p>
          </div>
        </div>

          </div>
        );
    }
  };


  return (
    <div style={{ backgroundColor: 'whiteSmoke', minHeight: '100vh' }}>
        
    <Container className='p-5'>
    <div style={{ display: 'flex', alignItems: 'center' }}>
 <h4 className='fw-bold'>Notification</h4>
</div>
     
    </Container>



    <Container   className='p-3 '>
    <div className='p-4' style={{ backgroundColor: 'white', minHeight: '100vh' }}>
   

   
    <div style={{ minHeight: '100vh' }}>
      <Navbar expand="lg" className="custom-navbar mt-3">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => setSelectedContent('newnotification')} className="home me-5" style={{ color: '#7C6512' }}>
             New Notification
              </Nav.Link>
              <Nav.Link onClick={() => setSelectedContent('readnotification')} className="me-5">
             Read Notification
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