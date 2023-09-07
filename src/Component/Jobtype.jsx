import React, { useState } from 'react';
import { Form, Col, Row, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Jobtype.css';
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
        <p>step 1 of 2</p>
      </div>

      <div>
        <hr />
      </div>
      <MDBRow>
      <MDBCol xs={12} md={6}>
          <div className="mb-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bolder text-black">
              Why is now the best time for this product to exist? Why are you
               tackling this problem? Why has no one taken this approach before?
              </Form.Label>
              <Form.Control as="textarea" rows={8} placeholder="Type Something" />
            </Form.Group>
          </div>
        </MDBCol>
        <MDBCol xs={12} md={6}>
          <div className="mb-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="text-black fw-bolder">How large is the opportunity you are pursuing?
               How much are customers spending on alternative solutions right now?</Form.Label>
              <Form.Control as="textarea" rows={8} placeholder="Type Something" />
            </Form.Group>
          </div>
        </MDBCol>
      </MDBRow>

      <MDBRow>
      <MDBCol xs={12} md={6}>
          <div className="mb-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bolder text-black">how are people currently solving the problem,
               and how is your startup better?</Form.Label>
              <Form.Control as="textarea" rows={8} placeholder="Type Something" />
            </Form.Group>
          </div>
          
          <div>
  <p>Would you like to receive our monthly newsletter to stay updated on all things VPFund?</p>
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
              <Form.Label className="fw-bolder text-black">How many users or customers have you acquired 
              since launch? How many are ‘active’ today? What is the avg. weekly growth rate?</Form.Label>
              <Form.Control as="textarea" rows={8} placeholder="Type Something" />
            </Form.Group>
          </div>
        </MDBCol>
      </MDBRow>






     
      <div className="d-flex justify-content-end mt-3">
      <Button
  className="mt-3 btn-lg p-3 me-3"
  style={{
    background: "#F2F2F5",
    border: "none",
    transition: 'background 0.3s',
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: '17px',
    color: '#6B7588',
    width: "15%",
    fontWeight: 'bold'
 
  }}
  onMouseEnter={(e) => e.target.style.background = '#000'}
  onMouseLeave={(e) => e.target.style.background = '#F8CA25'}
>
  Previous
</Button>

<Button
  className="mt-3 btn-lg  p-3 me-4"
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
  className="mt-3 btn-sm p-3"
  style={{
    background: "#F8CA25",
    border: "none",
    transition: 'background 0.3s',
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: '17px',
    color: '#FFFFFF',
    width: "15%",
    fontWeight: 'bold'
   
  }}
  onMouseEnter={(e) => e.target.style.background = '#000'}
  onMouseLeave={(e) => e.target.style.background = '#F8CA25'}
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


    <div className="mt-5" style={{ backgroundColor: 'rgba(254, 244, 211, 0.7)', padding: '9px', width: '100%'}}>
<Container>
<img src={catalystlogo} alt="" />
</Container>

</div>

    </div>

    
  );
};

export default Game;





