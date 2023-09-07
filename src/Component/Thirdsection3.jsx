import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cardimg from "../assets/cardimg.png";
import thirdsvg from "../assets/thirdsvg.png";
import culture from "../assets/culture.png";
import yourbrand from "../assets/yourbrand.png";
import logodesign from "../assets/logodesign.png";
import fourthhsvg from "../assets/fourthhsvg.png";
import loremippsum from "../assets/loremippsum.png";

function Cards() {
  return (
    <div>

        
      <Container className="">
        <div className='text-center my-5 p-5 mt-2'>
      <h3 className='fw-bolder'>Igniting Innovation, One<br/> Venture at a Time</h3>
        <p  className='mt-3'>Welcome to our diverse and dynamic portfolio of startups. Each one of 
          these visionary<br/> ventures represents the essence of innovation, resilience, 
          and the pursuit of<br/> excellence. We are dedicated in funding Pre-Seed 
          to Series A in Health tech, Edtech,<br/> Enterprise SaaS, Agri-Tech, Food Security,
           Green Energy and Financial Services. </p>
        </div>
        <Container>
  <div className='w-100'>
    <img
      src={fourthhsvg}
      alt=""
      className=""
      style={{ maxWidth: '100%', height: 'auto' }} // Set max width to 100% and auto adjust height
    />
  </div>
</Container>


<div>
  <p>With over 25,000 customers worldwide, Appex is the world leading analytics and marketing suite for Instagram and a 
    partner of the world's most-loved brands such as National Geographic, Gucci, Marc Jacobs, Samsung, Emirates and more.</p>


<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
</p>

</div>





        {/* <Container>
  <Row className="justify-content-center mt-5">
  <Col md={6}>
  <div className="d-flex justify-content-between align-items-center fw-bolder flex-wrap my-container">
      <span style={{ color: "#7C6512" }}  className='me-2'>ALL Works</span>
      <span className='me-2 mb-2'>BRANDING</span>
      <span className='mb-2' >BRANDING</span>
      <span className='me-2 mb-2'>BRANDING</span>
    </div>


  
        </Col>
  </Row>
</Container> */}
        <Row className="g-4 mt-3">
          {/* Card 1 */}
          <Col md={3} className="mb-4">
          <img src={culture} alt="" className="mt-4" />
          </Col>


          {/* Card 2 */}
          <Col md={3} className="mb-4">
          <img src={yourbrand} alt="" className="mt-4" />
          </Col>



          {/* Card 3 */}
          <Col md={3} className="mb-4">
          <img src={logodesign} alt="" className="mt-4" />
          </Col>

            {/* Card 4 */}
          <Col md={3} className="mb-4">
          <img src={loremippsum} alt="" className="mt-4" />

          </Col>
        </Row>

       

      </Container>
    </div>
  );
}

export default Cards;








// <Row xs={1} md={2} lg={3} className="g-4 mt-3">
// {/* Card 1 */}
// <Col className="mb-4">
//   <Card style={{ width: '18rem',   boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }} className='border-0'>
//     <Card.Img variant="top" src={cardimg} alt="" />
//     <Card.Body>
//       <Card.Text className='fw-bolder' style={{ fontSize: "17px" }}>
//         Build beautiful prototypes with thousands of components.
//       </Card.Text>
//       <Card.Text style={{ color: "#8F90A6", fontSize: "14px" }}>
//         Leverage agile frameworks to provide a robust synopsis anymore for high level overviews. Iterative approaches.
//       </Card.Text>
//       <a href="#" style={{ color: "#F8CA25", textDecoration: "none", display: "flex", alignItems: "center", fontWeight: "bolder", marginTop: "25px" }}>
//         <span style={{ flexGrow: 1 }}>See Case Study</span>
       
//       </a>
//     </Card.Body>
//   </Card>
// </Col>
// {/* Card 2 */}
// <Col className="mb-4">
//   <Card style={{ width: '18rem',   boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }} className='border-0'>
//     <Card.Img variant="top" src={cardimg} alt="" />
//     <Card.Body>
//       <Card.Text className='fw-bolder' style={{ fontSize: "17px" }}>
//         Build beautiful prototypes with thousands of components.
//       </Card.Text>
//       <Card.Text style={{ color: "#8F90A6", fontSize: "14px" }}>
//         Leverage agile frameworks to provide a robust synopsis anymore for high level overviews. Iterative approaches.
//       </Card.Text>
//       <a href="#" style={{ color: "#F8CA25", textDecoration: "none", display: "flex", alignItems: "center", fontWeight: "bolder", marginTop: "25px" }}>
//         <span style={{ flexGrow: 1 }}>See Case Study</span>
       
//       </a>
//     </Card.Body>
//   </Card>
// </Col>
// {/* Card 3 */}
// <Col className="mb-4">
//   <Card style={{ width: '18rem',   boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }} className='border-0'>
//     <Card.Img variant="top" src={cardimg} alt="" />
//     <Card.Body>
//       <Card.Text className='fw-bolder' style={{ fontSize: "17px" }}>
//         Build beautiful prototypes with thousands of components.
//       </Card.Text>
//       <Card.Text style={{ color: "#8F90A6", fontSize: "14px" }}>
//         Leverage agile frameworks to provide a robust synopsis anymore for high level overviews. Iterative approaches.
//       </Card.Text>
//       <a href="#" style={{ color: "#F8CA25", textDecoration: "none", display: "flex", alignItems: "center", fontWeight: "bolder", marginTop: "25px" }}>
//         <span style={{ flexGrow: 1 }}>See Case Study</span>
       
//       </a>
//     </Card.Body>
//   </Card>
// </Col>
// </Row>