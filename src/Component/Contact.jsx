
import React from 'react';
import { Form } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import headseticon from "../assets/headseticon.png";
import callicon from "../assets/callicon.png";
import pricon from "../assets/pricon.png";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function App() {
  return (
    <>
     <MDBContainer fluid>
      <h4 className="fw-bold mb-2 text-center mt-5">Contact Us</h4>
      <p className="text-center mb-3">
        Have a question or just want to say hi? We'd love to hear from you.
      </p>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '1100px', border: 'none' }}>

            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <MDBRow>
                <MDBCol xs={12} md={6}>
                  <div className='mb-4'>
                    <Form.Label className='text-black fw-bold'>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your first & last name"
                      className=''
                      style={{ padding: '20px 32px', boxShadow: 'none' }}
                      required // Add required attribute
                    />
                  </div>
                </MDBCol>

                <MDBCol xs={12} md={6}>
                  <div className='mb-4'>
                    <Form.Label className='text-black fw-bold'>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                      className=''
                      style={{ padding: '20px 32px', boxShadow: 'none' }}
                      required // Add required attribute
                    />
                  </div>
                </MDBCol>
              </MDBRow>

              <MDBRow>
                <MDBCol xs={12} md={6}>
                  <div className='mb-4 mt-md-5'>
                    <Form.Label className='text-black fw-bold mt-4'>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your phone number"
                      className=''
                      style={{ padding: '20px 32px', boxShadow: 'none' }}
                      required // Add required attribute
                    />
                  </div>
                </MDBCol>

                <MDBCol xs={12} md={6}>
                  <div className='mb-4 mt-md-5'>
                    <Form.Label className='text-black fw-bold mt-4'>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter a subject line"
                      className=''
                      style={{ padding: '20px 32px', boxShadow: 'none' }}
                      required // Add required attribute
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <Form className='mt-4'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className='fw-bolder text-black'>Message</Form.Label>
                  <Form.Control as="textarea" rows={8} placeholder="Type Something" />
                </Form.Group>
              </Form>

              <a
                href="/login" // Replace with the actual login page URL
                className="btn btn-lg focus-ring text-white"
                style={{
                  backgroundColor: '#F8CA25',
                  // Add any other custom styles you need
                }}
              >
                Send
              </a>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>

    <section style={{ background: '#FFFBEF'}} className=''>
  <Container>
    <Row>
      <Col md={4} xs={12} className="px-md-4 px-5">
        <div className="h-100 ">
          <div className="d-flex flex-column ">
            <img src={headseticon} alt="" className="icon-small mt-5" />
            <div className="mt-1">
              <h6 className="fw-bolder mt-4">Help & support</h6>
              <p className='mt-2 text-black mt-4'>Email <span style={{ color: '#6B7588'}} className='fw-bolder'>support@appextheme.com</span>
                <span><br/>for help with a current product or service or refer to FAQs and developer tools</span>
              </p>
            </div>
          </div>
        </div>
      </Col>
      <Col md={4} xs={12} className="px-md-3 px-5">
        <div className="h-100 ">
          <div className="d-flex flex-column ">
            <img src={callicon} alt="" className="icon-small mt-5" />
            <div className="mt-1">
              <h5 className="fw-bolder mt-4">Call us</h5>
              <p className="mt-2 text-black mt-4">Call us to speak to a member of our team.<br/>
                <span style={{ color: '#6B7588'}} >+578 305 045 883<br/>+ 578 305 045 883</span>
              </p>
            </div>
          </div>
        </div>
      </Col>
      <Col md={4} xs={12} className="px-md-4 px-5">
        <div className="h-100 ">
          <div className="d-flex flex-column ">
            <img src={pricon} alt="" className="icon-small mt-5" />
            <div className="mt-1">
              <h5 className="fw-bolder mt-4">PR</h5>
              <p className="mt-2 text-black mt-4">Get in touch with Assembly for media resources.
                <span style={{ color: '#6B7588'}}><br/>support@catalyst.com</span>
              </p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>



</>
    
  );
}

export default App;























// import React from 'react'
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBCheckbox,
//   MDBIcon
// }
// from 'mdb-react-ui-kit';


// const Contactus = () => {
//   return (
//     <>
//     {/* <div>
//         <div className='text-center'>
//             <h5 className="fw-bolder">Contact Us</h5>
//             <p>Have a question or just want to say hi? We'd love to hear from you.</p>
//         </div>
//     </div> */}


// <MDBContainer fluid className='p-4'>

     

        

//         <div md='12'>

//           <MDBCard className='my-5'>
//             <MDBCardBody className='p-5'>

//               <MDBRow>
//                 <MDBCol col='6'>
//                   <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
//                 </MDBCol>

//                 <MDBCol col='6'>
//                   <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
//                 </MDBCol>
//               </MDBRow>

//               <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
//               <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

//               <div className='d-flex justify-content-center mb-4'>
//                 <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
//               </div>

//               <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

//               <div className="text-center">

//                 <p>or sign up with:</p>

//                 <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//                   <MDBIcon fab icon='facebook-f' size="sm"/>
//                 </MDBBtn>

//                 <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//                   <MDBIcon fab icon='twitter' size="sm"/>
//                 </MDBBtn>

//                 <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//                   <MDBIcon fab icon='google' size="sm"/>
//                 </MDBBtn>

//                 <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
//                   <MDBIcon fab icon='github' size="sm"/>
//                 </MDBBtn>

//               </div>

//             </MDBCardBody>
//           </MDBCard>

//         </div>

  

//     </MDBContainer>
//     </>
//   )
// }

// export default Contactus