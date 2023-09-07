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

const Reports = ({ onNext, onPrevious }) => {
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
;



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
    Your Vision
  </h4>
  <p>step 3 of 4</p>
</div>

<div>
  <hr />
</div>
      {/* <MDBRow>
          <MDBCol xs={12} md={6}>
              <h6 className=''>What industry vertical does your startup operate in?</h6>
            <Row className="mt-2 my-2">
            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-lg"
                
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
                <MDBIcon icon={energyButtonToggle1 ? 'plus' : 'check'} className="me-1 p-1" />
                Energy
              </Button>

              
            </Col>
  
  
            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-lg"
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
                <MDBIcon icon={energyButtonToggle2 ? 'plus' : 'check'} className="me-1 p-1" />
                Energy
              </Button>
            </Col>
  
  
  
            
           
  
            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-lg"
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
                <MDBIcon icon={energyButtonToggle3 ? 'plus' : 'check'} className="me-1 p-1" />
                Energy
              </Button>
            </Col>
  
            </Row>
  
  
  
  
            <Row className="mt-2 my-2">
  
            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-lg"
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
                <MDBIcon icon={energyButtonToggle4 ? 'plus' : 'check'} className="me-1 p-1" />
                Energy
              </Button>
            </Col>
  
            
            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-lg"
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
                <MDBIcon icon={energyButtonToggle5 ? 'plus' : 'check'} className="me-1 p-1" />
                Energy
              </Button>
            </Col>
  
  
            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-lg"
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
                <MDBIcon icon={energyButtonToggle6 ? 'plus' : 'check'} className="me-1 p-1" />
                Energy
              </Button>
            </Col>
            </Row>
  
            <Row className="mt-2 my-2">
            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-lg"
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
                <MDBIcon icon={energyButtonToggle7 ? 'plus' : 'check'} className="me-1 p-1" />
                Energy
              </Button>
            </Col>
  
  
            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-lg"
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
                <MDBIcon icon={energyButtonToggle8 ? 'plus' : 'check'} className="me-1 p-1" />
                Energy
              </Button>
            </Col>
  
            <Col xs={12} sm={6} md={4}>
              <Button
                className="mt-3 btn-lg"
                style={
                  energyButtonToggle9
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
                onClick={handleEnergyButtonClick9}
              >
                <MDBIcon icon={energyButtonToggle9 ? 'plus' : 'check'} className="me-1 p-1" />
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
  

  <MDBRow className='mt-5'>


  <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className=" text-black fw-bolder">
                What problem does your startup solve??
                </Form.Label>
                <Form.Control className='p-3' as="textarea" rows={4} placeholder="Type Something" />
              </Form.Group>
            </div>
          </MDBCol>


          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className=" text-black fw-bolder">
                Describe your unique value proposition
                </Form.Label>
                <Form.Control className='p-3' as="textarea" rows={4} placeholder="Type Something" />
              </Form.Group>
            </div>
          </MDBCol>
      </MDBRow>


      <MDBRow className='mt-5'>


<MDBCol xs={12} md={6}>
          <div className="mb-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className=" text-black fw-bolder">
              What is your growth strategy?
              </Form.Label>
              <Form.Control className='p-3' as="textarea" rows={4} placeholder="Type Something" />
            </Form.Group>
          </div>
        </MDBCol>


        <MDBCol xs={12} md={6}>
          <div className="mb-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className=" text-black fw-bolder">
              How do you plan to use the investment if selected?
              </Form.Label>
              <Form.Control className='p-3' as="textarea" rows={4} placeholder="Type Something" />
            </Form.Group>
          </div>
        </MDBCol>
    </MDBRow>

        <MDBRow>

          <MDBCol xs={12} md={6} >
          <div className="mt-5">
        <label className="text-black fw-bold">Upload Pitch Deck</label>
  
        <div
          style={{
            border: '2px dashed #ccc',
            padding: '1rem',
            borderRadius: '10px',
            height: '250px',
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

  
           
            
          </MDBCol>


          


<MDBCol xs={12} md={6}>
          <div className="mt-5">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className=" text-black fw-bolder">
              Any additional comments or information you'd like to share?
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

export default Reports;
