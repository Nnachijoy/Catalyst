import React from 'react';
import { Form, Col, Row, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';
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
  return (
    <div className="">
    <Container className="px-5 mb-5 ">
      <div className="">
        <h4 style={{ color: '#7C6512' }} className="fw-bolder">
          Pitch Application
        </h4>
        <p>step 1 of 1</p>
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
              <Form.Label className="fw-bolder text-black">Message</Form.Label>
              <Form.Control as="textarea" rows={8} placeholder="Type Something" />
            </Form.Group>
          </div>
        </MDBCol>
      </MDBRow>


      <div className="d-flex justify-content-end mt-3">
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
        Save as Draft
      </Button>

      <Button
        className="mt-3 btn-sm  p-3"
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
      {/* Two buttons */}
    
    </Container>

{/* 
    <div className="mt-5" style={{ backgroundColor: 'rgba(254, 244, 211, 0.7)', padding: '9px', width: '100%'}}>
<Container>
<img src={catalystlogo} alt="" />
</Container>

</div> */}

    </div>

    
  );
};

export default Game;



// import React from 'react';
// import { Form, Col, Row, Container, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Signup.css';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBIcon,
//   MDBCheckbox,
// } from 'mdb-react-ui-kit';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import catalystlogo from '../assets/catalystlogo.png';

// const Game = () => {
//   return (
//     <div className="">
//       <Container className="px-5 mb-5 ">
//         <div className="">
//           <h4 style={{ color: '#7C6512' }} className="fw-bolder">
//             Pitch Application
//           </h4>
//           <p>step 1 of 1</p>
//         </div>

//         <div>
//           <hr />
//         </div>
//         <MDBRow>
//           <MDBCol xs={12} md={6}>
//             <div className="mb-4">
//               <Form.Label className="text-black fw-bold">Company Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your company name"
//                 className=""
//                 style={{ padding: '20px 32px', boxShadow: 'none' }}
//                 required // Add required attribute
//               />
//             </div>
//           </MDBCol>

//           <MDBCol xs={12} md={6}>
//             <div className="mb-4">
//               <Form.Label className="text-black fw-bold">Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email address"
//                 className=""
//                 style={{ padding: '20px 32px', boxShadow: 'none' }}
//                 required // Add required attribute
//               />
//             </div>
//           </MDBCol>
//         </MDBRow>

//         <MDBRow>
//           <MDBCol xs={12} md={6}>
//             <div className="mb-4">
//               <Form.Label className="text-black fw-bold">Website</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email address"
//                 className=""
//                 style={{ padding: '20px 32px', boxShadow: 'none' }}
//                 required // Add required attribute
//               />
//             </div>
//           </MDBCol>

//           <MDBCol xs={12} md={6}>
//             <div className="mb-4">
//               <Form.Label className="text-black fw-bold">Do you have a female co-founder?</Form.Label>

//               <Form.Control
//                 as="select" // Change the input type to "select"
//                 className=""
//                 style={{ padding: '20px 32px', boxShadow: 'none' }}
//                 required // Add required attribute
//               >
//                 <option value="">-Select-</option> {/* Add the "-select-" option */}
//                 <option value="yes">Yes</option> {/* Add other options if needed */}
//                 <option value="no">No</option>
//               </Form.Control>
//             </div>
//           </MDBCol>
//         </MDBRow>

//         <MDBRow>
//           <MDBCol xs={12} md={6}>
//             <div className="mb-4">
//               <Form.Label className="text-black fw-bold">What is the primary country of operation for your startup?</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your answer"
//                 className=""
//                 style={{ padding: '20px 32px', boxShadow: 'none' }}
//                 required // Add required attribute
//               />
//             </div>
//             <div className="mb-4">
//               <Form.Label className="text-black fw-bold">What is the primary country of operation for your startup?</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your answer"
//                 className=""
//                 style={{ padding: '20px 32px', boxShadow: 'none' }}
//                 required // Add required attribute
//               />
//             </div>
//           </MDBCol>

//           <MDBCol xs={12} md={6}>
//             <div className="mb-4">
//               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                 <Form.Label className="fw-bolder text-black">Message</Form.Label>
//                 <Form.Control as="textarea" rows={8} placeholder="Type Something" />
//               </Form.Group>
//             </div>
//           </MDBCol>
//         </MDBRow>

//         <div className="d-md-flex justify-content-md-center mt-3">
//           <Button
//             className="mt-3 btn-lg  p-3 me-md-4"
//             style={{
//               background: 'none',
//               border: '2px solid #F8CA25',
//               transition: 'background 0.3s',
//               textTransform: 'none',
//               boxShadow: 'none',
//               fontSize: '17px',
//               color: '#F8CA25',
//             }}
//             onMouseEnter={(e) => e.target.style.background = 'black'}
//             onMouseLeave={(e) => e.target.style.background = 'none'}
//           >
//             Save as Draft
//           </Button>

//           <Button
//             className="mt-3 btn-lg p-3"
//             style={{
//               background: '#F8CA25',
//               border: 'none',
//               transition: 'background 0.3s',
//               textTransform: 'none',
//               boxShadow: 'none',
//               fontSize: '17px',
//               color: '#FFFFFF',
//             }}
//             onMouseEnter={(e) => e.target.style.background = '#000'}
//             onMouseLeave={(e) => e.target.style.background = '#F8CA25'}
//           >
//             Next
//           </Button>
//         </div>
//         {/* Two buttons */}
//       </Container>

//       {/* 
//     <div className="mt-5" style={{ backgroundColor: 'rgba(254, 244, 211, 0.7)', padding: '9px', width: '100%'}}>
//       <Container>
//         <img src={catalystlogo} alt="" />
//       </Container>
//     </div> */}
//     </div>
//   );
// };

// export default Game;

// import React from 'react';
// import { Form, Container, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Signup.css';
// import {
//   MDBRow,
//   MDBCol,
// } from 'mdb-react-ui-kit';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import catalystlogo from '../assets/catalystlogo.png';

// const Game = () => {
//   return (
//     <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
//       <Container className="px-5 mb-5 d-flex flex-column">
//         <div className="text-center">
//           <h4 style={{ color: '#7C6512' }} className="fw-bolder">
//             Pitch Application
//           </h4>
//           <p>step 1 of 1</p>
//         </div>

//         <div>
//           <hr />
//         </div>

//         <MDBRow>
//           <MDBCol xs={12} md={6}>
//             <div className="mb-4">
//               <Form.Label className="text-black fw-bold">Company Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your company name"
//                 className=""
//                 style={{ padding: '20px 32px', boxShadow: 'none' }}
//                 required // Add required attribute
//               />
//             </div>
//           </MDBCol>

//           <MDBCol xs={12} md={6}>
//             <div className="mb-4">
//               <Form.Label className="text-black fw-bold">Email Address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email address"
//                 className=""
//                 style={{ padding: '20px 32px', boxShadow: 'none' }}
//                 required // Add required attribute
//               />
//             </div>
//           </MDBCol>
//         </MDBRow>

//         <MDBRow>
//           <MDBCol xs={12} md={6}>
//             <div className="mb-4">
//               <Form.Label className="text-black fw-bold">Website</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter your email address"
//                 className=""
//                 style={{ padding: '20px 32px', boxShadow: 'none' }}
//                 required // Add required attribute
//               />
//             </div>
//           </MDBCol>

//           <MDBCol xs={12} md={6}>
//             <div className="mb-4">
//               <Form.Label className="text-black fw-bold">Do you have a female co-founder?</Form.Label>
//               <Form.Control
//                 as="select"
//                 className=""
//                 style={{ padding: '20px 32px', boxShadow: 'none' }}
//                 required // Add required attribute
//               >
//                 <option value="">-Select-</option>
//                 <option value="yes">Yes</option>
//                 <option value="no">No</option>
//               </Form.Control>
//             </div>
//           </MDBCol>
//         </MDBRow>

//         <MDBRow>
//           <MDBCol xs={12} md={6}>
//             <div className="mb-4">
//               <Form.Label className="text-black fw-bold">What is the primary country of operation for your startup?</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your answer"
//                 className=""
//                 style={{ padding: '20px 32px', boxShadow: 'none' }}
//                 required // Add required attribute
//               />
//             </div>
//             <div className="mb-4">
//               <Form.Label className="text-black fw-bold">What is the primary country of operation for your startup?</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter your answer"
//                 className=""
//                 style={{ padding: '20px 32px', boxShadow: 'none' }}
//                 required // Add required attribute
//               />
//             </div>
//           </MDBCol>

//           <MDBCol xs={12} md={6}>
//             <div className="mb-4">
//               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                 <Form.Label className="fw-bolder text-black">Message</Form.Label>
//                 <Form.Control as="textarea" rows={8} placeholder="Type Something" />
//               </Form.Group>
//             </div>
//           </MDBCol>
//         </MDBRow>

//         <div className="d-md-flex justify-content-md-center mt-3">
//           <Button
//             className="mt-3 btn-lg  p-3 me-md-4"
//             style={{
//               background: 'none',
//               border: '2px solid #F8CA25',
//               transition: 'background 0.3s',
//               textTransform: 'none',
//               boxShadow: 'none',
//               fontSize: '17px',
//               color: '#F8CA25',
//             }}
//             onMouseEnter={(e) => e.target.style.background = 'black'}
//             onMouseLeave={(e) => e.target.style.background = 'none'}
//           >
//             Save as Draft
//           </Button>

//           <Button
//             className="mt-3 btn-lg p-3"
//             style={{
//               background: '#F8CA25',
//               border: 'none',
//               transition: 'background 0.3s',
//               textTransform: 'none',
//               boxShadow: 'none',
//               fontSize: '17px',
//               color: '#FFFFFF',
//             }}
//             onMouseEnter={(e) => e.target.style.background = '#000'}
//             onMouseLeave={(e) => e.target.style.background = '#F8CA25'}
//           >
//             Next
//           </Button>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Game;






