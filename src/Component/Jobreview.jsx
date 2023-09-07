import React, { useState, useRef } from 'react';
import { Form, Col, Row, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Jobexpertise.css';
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
import catalystlogo from '../assets/catalystlogo.png';

const Game = () => {
    
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


  return (
    <div>
    <Container className="px-5">
      <div className="">
        <h4 style={{ color: '#7C6512' }} className="fw-bolder">
          Pitch Application
        </h4>
        <p>step 1 of 4</p>
      </div>

      <div>
        <hr />
      </div>
      <MDBRow>
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

      <MDBRow>
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

      <MDBRow>
        <MDBCol xs={12} md={6}>
          <div className="mb-4">
            <Form.Label className="text-black fw-bold">What is the primary country of operation for your startup?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your answer"
              className=""
              style={{ padding: '20px 32px', boxShadow: 'none' }}
              required // Add required attribute
            />
          </div>
          <div className="mb-4">
            <Form.Label className="text-black fw-bold">What is the primary country of operation for your startup?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your answer"
              className=""
              style={{ padding: '20px 32px', boxShadow: 'none' }}
              required // Add required attribute
            />
          </div>
        </MDBCol>

        <MDBCol xs={12} md={6}>
          <div className="mb-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bold text-black">How is it solving the stated problem?</Form.Label>
              <Form.Control as="textarea" rows={8} placeholder="Type Something" />
            </Form.Group>
          </div>
        </MDBCol>
      </MDBRow>

        <MDBRow>
       
        <MDBCol xs={12} md={6}>
          <div className="mb-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bold text-black">Why is now the best time for this product to exist?
               Why are you tackling this problem? Why has no one taken this approach before?</Form.Label>
              <Form.Control as="textarea" rows={8} placeholder="Type Something" />
            </Form.Group>
          </div>
        </MDBCol>
       
        <MDBCol xs={12} md={6}>
          <div className="mb-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bold text-black">
              How large is the opportunity you are pursuing? How much are customers 
              spending on alternative solutions right now?
              </Form.Label>
              <Form.Control as="textarea" rows={8} placeholder="Type Something" />
            </Form.Group>
          </div>
        </MDBCol>
        </MDBRow>

        <MDBRow>
       
       <MDBCol xs={12} md={6}>
         <div className="mb-4">
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Label className="fw-bold text-black">How are people currently solving the problem
             , and how is your startup better?</Form.Label>
             <Form.Control as="textarea" rows={8} placeholder="Type Something" />
           </Form.Group>
         </div>

         
         <div>
  <h6 className='fw-bold'>Would you like to receive our monthly newsletter 
  to stay updated on all things VPFund?</h6>
  <label className="me-3"style={{ display: 'inline-block', marginRight: '10px' }}>
    <input
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
         <div className="mb-4">
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Label className="fw-bolder text-black">
             How many users or customers have you acquired since launch? How many 
             are ‘active’ today? What is the avg. weekly growth rate?
             </Form.Label>
             <Form.Control as="textarea" rows={8} placeholder="Type Something" />
           </Form.Group>
         </div>

       </MDBCol>

       </MDBRow>


       <MDBRow>
        <MDBCol xs={12} md={6}>
            <h6 className='mt-4 fw-bold'>What industry vertical does your startup operate in?</h6>
          <Row className="mt-2 my-2">
            <Col xs={12} sm={6} md={4}>
            <Button
        className="mt-3 btn-sm"
        style={{
          background: "#F8CA25",
          border: "none",
          transition: 'background 0.3s',
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '17px',
          color: '#FFFFFF',
          borderRadius: '20px', // Adjust the value to control the level of rounding
          display: 'flex',
          alignItems: 'center', // To align the icon and text vertically
        }}>

        <MDBIcon icon="check" className=" me-2" /> {/* Add the MDBIcon component */}
        Energy
      </Button>
            </Col>


            <Col xs={12} sm={6} md={4}>
            <Button
        className="mt-3 btn-sm"
        style={{
          background: "#F8CA25",
          border: "none",
          transition: 'background 0.3s',
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '17px',
          color: '#FFFFFF',
          borderRadius: '20px', // Adjust the value to control the level of rounding
          display: 'flex',
          alignItems: 'center', // To align the icon and text vertically
        }}>

        <MDBIcon icon="check" className="me-2" /> {/* Add the MDBIcon component */}
        Energy
      </Button>
            </Col>


            <Col xs={12} sm={6} md={4}>
            <Button
        className="mt-3 btn-sm"
        style={{
          background: "#F8CA25",
          border: "none",
          transition: 'background 0.3s',
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '17px',
          color: '#FFFFFF',
          borderRadius: '20px', // Adjust the value to control the level of rounding
          display: 'flex',
          alignItems: 'center', // To align the icon and text vertically
        }}>

        <MDBIcon icon="check"  className="me-2" /> {/* Add the MDBIcon component */}
        Energy
      </Button>
            </Col>


          </Row>

          <Row className="mt-2 my-2">
            <Col xs={12} sm={6} md={4}>
            <Button
        className="mt-3 btn-sm"
        style={{
          background: "#F8CA25",
          border: "none",
          transition: 'background 0.3s',
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '17px',
          color: '#FFFFFF',
          borderRadius: '20px', // Adjust the value to control the level of rounding
          display: 'flex',
          alignItems: 'center', // To align the icon and text vertically
        }}>
       
        <MDBIcon icon="check" className="me-2" /> {/* Add the MDBIcon component */}
        Energy
      </Button>
            </Col>


            <Col xs={12} sm={6} md={4}>
            <Button
            className="mt-3 "
            style={{
                background: "#FEF4D3",
              border: "none",
              transition: 'background 0.3s',
              textTransform: 'none',
              boxShadow: 'none',
              fontSize: '17px',
              color: '#F8CA25', 
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
            }}>
         
            <MDBIcon icon="plus" className="me-1" />
           Consumer
          </Button>
            </Col>

            <Col xs={12} sm={6} md={4}>
            <Button
            className="mt-3 m-2"
            style={{
                background: "#FEF4D3",
              border: "none",
              transition: 'background 0.3s',
              textTransform: 'none',
              boxShadow: 'none',
              fontSize: '17px',
              color: '#F8CA25', 
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
            }}>

            <MDBIcon icon="plus" className="me-2" />
           Consumer
          </Button>
            </Col>



          </Row>

          <Row className="mt-2 btn-sm">
            <Col xs={12} sm={6} md={6}>
            <Button
        className="mt-3"
        style={{
          background: "#F8CA25",
          border: "none",
          transition: 'background 0.3s',
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '17px',
          color: '#FFFFFF',
          borderRadius: '20px', // Adjust the value to control the level of rounding
          display: 'flex',
          alignItems: 'center', // To align the icon and text vertically
        }}>

        <MDBIcon icon="check" className="me-2" /> {/* Add the MDBIcon component */}
        Financial Services
      </Button>
            </Col>


            <Col xs={12} sm={6} md={6}>
            <Button
        className="mt-3 btn-sm"
        style={{
          background: "#F8CA25",
          border: "none",
          transition: 'background 0.3s',
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '17px',
          color: '#FFFFFF',
          borderRadius: '20px', // Adjust the value to control the level of rounding
          display: 'flex',
          alignItems: 'center', // To align the icon and text vertically
        }}>
        <MDBIcon icon="check" className="me-2" /> {/* Add the MDBIcon component */}
        Ecommerce & Retail
      </Button>
            </Col>

        
          </Row>


        </MDBCol>

        <MDBCol xs={12} md={6}>
          <div className="mb-5">
            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
              <Form.Label className=" text-black fw-bold">
              What will you spend the money on? What milestones will it help you achieve, 
              and how long will it take you to achieve them?
              </Form.Label>
              <Form.Control className='p-3' as="textarea" rows={8} placeholder="Type Something" />
            </Form.Group>
          </div>
        </MDBCol>
      </MDBRow>

      
      <MDBRow>


      <MDBCol xs={12} md={6}>
          <div className="mb-5">
            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
              <Form.Label className=" text-black fw-bold">
              Why do you think Ventures Platform is a good fit for your startup?
               How, exactly, can we help you grow your business?
              </Form.Label>
              <Form.Control className='p-3' as="textarea" rows={8} placeholder="Type Something" />
            </Form.Group>
          </div>  

          <h6 className='fw-bold'>What industry vertical does your startup operate in?</h6>
          <Row className="mt-2 my-2">
            <Col xs={12} sm={6} md={4}>
            <Button
        className="mt-3 btn-sm"
        style={{
          background: "#F8CA25",
          border: "none",
          transition: 'background 0.3s',
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '17px',
          color: '#FFFFFF',
          borderRadius: '20px', // Adjust the value to control the level of rounding
          display: 'flex',
          alignItems: 'center', // To align the icon and text vertically
        }}>

        <MDBIcon icon="check" className="me-2" /> {/* Add the MDBIcon component */}
        Energy
      </Button>
            </Col>


            <Col xs={12} sm={6} md={4}>
            <Button
        className="mt-3 btn-sm"
        style={{
          background: "#F8CA25",
          border: "none",
          transition: 'background 0.3s',
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '17px',
          color: '#FFFFFF',
          borderRadius: '20px', // Adjust the value to control the level of rounding
          display: 'flex',
          alignItems: 'center', // To align the icon and text vertically
        }}>

        <MDBIcon icon="check" className="me-2" /> {/* Add the MDBIcon component */}
        Energy
      </Button>
            </Col>


            <Col xs={12} sm={6} md={4}>
            <Button
        className="mt-3 btn-sm"
        style={{
          background: "#F8CA25",
          border: "none",
          transition: 'background 0.3s',
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '17px',
          color: '#FFFFFF',
          borderRadius: '20px', // Adjust the value to control the level of rounding
          display: 'flex',
          alignItems: 'center', // To align the icon and text vertically
        }}>

        <MDBIcon icon="check"  className="me-2" /> {/* Add the MDBIcon component */}
        Energy
      </Button>
            </Col>



          
           
          </Row>

       
       
          <Row className="mt-2 my-2">
            <Col xs={12} sm={6} md={4}>
            <Button
        className="mt-3 btn-sm"
        style={{
          background: "#F8CA25",
          border: "none",
          transition: 'background 0.3s',
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '17px',
          color: '#FFFFFF',
          borderRadius: '20px', // Adjust the value to control the level of rounding
          display: 'flex',
          alignItems: 'center', // To align the icon and text vertically
        }}>
       
        <MDBIcon icon="check" className="me-2" /> {/* Add the MDBIcon component */}
        Energy
      </Button>
            </Col>


            <Col xs={12} sm={6} md={4}>
            <Button
            className="mt-3 btn-sm"
            style={{
                background: "#FEF4D3",
              border: "none",
              transition: 'background 0.3s',
              textTransform: 'none',
              boxShadow: 'none',
              fontSize: '17px',
              color: '#F8CA25', 
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
            }}>
         
            <MDBIcon icon="plus" className="me-2" />
           Consumer
          </Button>
            </Col>

            <Col xs={12} sm={6} md={4}>
            <Button
            className="mt-3 btn-sm"
            style={{
                background: "#FEF4D3",
              border: "none",
              transition: 'background 0.3s',
              textTransform: 'none',
              boxShadow: 'none',
              fontSize: '17px',
              color: '#F8CA25', 
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
            }}>

            <MDBIcon icon="plus" className="me-2" />
           Consumer
          </Button>
            </Col>


          </Row>
       
       
       
        </MDBCol>
        




        <MDBCol xs={12} md={6} >
        <div className="mb-4">
      <label className="text-black fw-bold">If you have prepared a pitch deck, please upload it</label>

      <div
        style={{
          border: '2px dashed #ccc',
          padding: '1rem',
          borderRadius: '10px',
          height: '300px',
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
            className="text-center dragdrop"
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
  
          <h5 className='fw-bold mt-1 p-2' style={{ fontSize:"17px" }}>Thank you for filling the funding application form.
           We will get back to you soon.</h5>

           <div className="d-flex mt-5 p-2">
      <Button
  className="mt-3 btn-sm p-3 me-3"
  style={{
    background: "#F2F2F5",
    border: "none",
    transition: 'background 0.3s',
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: '17px',
    color: '#6B7588',
    fontWeight: 'bold',
    width: '27%'
 
  }}
  onMouseEnter={(e) => e.target.style.background = '#000'}
  onMouseLeave={(e) => e.target.style.background = '#F2F2F5'}
>
  Previous
</Button>
{/* width: '100%', // Set a fixed width or use '100%' to take up the full container width
    whiteSpace: 'nowrap', // Prevent text from wrapping
    overflow: 'hidden', // Hide any overflow text
    textOverflow: 'ellipsis', */}
        
      <Button
  className="mt-3 btn-lg  me-4"
  style={{
    background: "none",
    border: "2px solid #F8CA25",
    transition: 'background 0.3s',
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: '17px',
    color: '#F8CA25',
    fontWeight: 'bold',
  
  }}
  onMouseEnter={(e) => e.target.style.background = 'black'}
  onMouseLeave={(e) => e.target.style.background = 'none'}
>
  Save as Draft
</Button>

<Button
  className="mt-3 btn-lg p-3"
  style={{
    background: "#F8CA25",
    border: "none",
    transition: 'background 0.3s',
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: '17px',
    color: '#FFFFFF',
    fontWeight: 'bold',
    width: '27%'
 
  }}
  onMouseEnter={(e) => e.target.style.background = '#000'}
  onMouseLeave={(e) => e.target.style.background = '#F8CA25'}
>
  Submit
</Button>


      </div>
          
        </MDBCol>

      </MDBRow>


      {/* Two buttons */}
    
    </Container>


    <div className="mt-5" style={{ backgroundColor: 'rgba(254, 244, 211, 0.7)', padding: '9px', width: '100%'}}>
<Container>
<img src={catalystlogo} alt="" />
</Container>

</div>

    </div>

    
  );
};

export default Game;


