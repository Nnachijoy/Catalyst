// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import portfolioimage from "../assets/portfolioimage.png";
// import './Otherportfolio.css';
// import cardimg from "../assets/cardimg.png";




// const SectionContainer = () => {
//   return (
//     <div>
//     <Container className='p-5'>
//       <Row className='otherportfolio align-items-center '>
//         {/* Column with image (adjust the path to your image) */}
//         <Col xs={12} md={6}>
//           <img src={portfolioimage} alt="Section Image" className="img-fluid " style={{ maxWidth: "400px" }} />
//         </Col>
//         {/* Column with write up */}
//         <Col xs={12} md={6}>
//             <p className='fw-bolder' style={{ color: "#7C6512" }} >Development</p>
//             <h1 className="fw-bolder"  style={{ fontSize: "30px" }} >Build beautiful prototypes with 
//                 thousands of components.<br/> Bring to the table win-win survival strategies to ensure.</h1>
        
//           <Row xs={2} md={4} lg={3}>
//         <Col><p>Timeline<br/><span>2018-2020</span></p></Col>
//         <Col className=''><p>Our Role<br/><span>Design</span></p></Col>
//       </Row>
//         </Col>
//       </Row>

// <div className='mt-5'>
//       <p>With over 25,000 customers worldwide, Appex is the world leading analytics 
//         and marketing suite for Instagram and a partner of the world's most-loved brands 
//         such as National Geographic, Gucci, Marc Jacobs, Samsung, Emirates and more.
//       </p>

//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//          ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
//           adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
//            consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//             incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, 
//         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
//          amet, consectetur </p>
//       </div>

//       <div style={{ backgroundColor: "#7C6512" }} className='p-4 text-white mt-2'>
//         <h6 className='fw-bolder'>
//         About the project
//         </h6>
//         <p style={{ color: "#DDE5E9" }} >
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
//         Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//          do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetu Lorem ipsum dolor sit 
//          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
//           amet, consectetur Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor
//            incididunt ut labore Lorem ipsum dolor sit amet, consectetur r 
//         </p>
//       </div>

//       <div>
//         <h6 className='fw-bolder mt-4'>Challenges</h6>
//         <p className='mt-2'>With over 25,000 customers worldwide, Appex is the world leading analytics and marketing suite for
//              Instagram and a partner of the world's most-loved brands such as National Geographic, Gucci, Marc
//               Jacobs, Samsung, Emirates and more.</p>

//          <p className='mt-2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//              sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
//               sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor
//                sit amet, consectetur Lorem ipsum dolor sit amet, 
//             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
//             Lorem ipsum dolor sit amet, consectetur </p>
//       </div>

//       <div>
//         <h6 className='fw-bolder mt-4'>Solutions</h6>
//         <p className='mt-2'>With over 25,000 customers worldwide, Appex is the world leading analytics and marketing suite for
//              Instagram and a partner of the world's most-loved brands such as National Geographic, Gucci, Marc
//               Jacobs, Samsung, Emirates and more.</p>

//               <p className='mt-2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//              sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
//               sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor
//                sit amet, consectetur Lorem ipsum dolor sit amet, 
//             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
//             Lorem ipsum dolor sit amet, consectetur </p>
//       </div>

//       <div>
//         <h6 className='fw-bolder mt-4'>Result</h6>

//               <p className='mt-2' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
//              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
//              sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
//               sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor
//                sit amet, consectetur Lorem ipsum dolor sit amet, 
//             consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
//             Lorem ipsum dolor sit amet, consectetur </p>
//       </div>

//       <Row className="justify-content-md-center mt-5">
//         <Col xs lg="3">
//           <h1 className='text-center mt-3 fw-bolder'>36% <br/> 
//           <span style={{ fontSize: "17px", color:"#7C6512" }}>Efficiency Increased</span></h1>
   
//         </Col>
//         <Col  xs lg="3">
//         <h1 className='text-center mt-3 fw-bolder'>10k+<br/>
//          <span style={{ fontSize: "17px", color:"#06C270" }}>New customer gain</span></h1>
//         </Col>
//         <Col xs lg="3">
//         <h1 className='text-center mt-3 fw-bolder'>26% <br/> 
//         <span style={{ fontSize: "17px", color:"#FFCC00" }}>Revenue Increased</span></h1>
//         </Col>
//       </Row>
//     </Container>

    
//     <div style={{backgroundColor:"#FFFDF4"}} className='p-5'>
//       <div>
//         <h3 className='fw-bolder text-center p-5'>
//             Other Portfolio
//         </h3>
//       </div>

// <Container>
// <Row xs={1} md={2} lg={3} className="g-4 mt-3">
//           {/* Card 1 */}
//           <Col className="mb-4">
//             <Card style={{boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }} className='border-0'>
//               <Card.Img variant="top" src={cardimg} alt="" />
//               <Card.Body>
//                 <Card.Text className='fw-bolder' style={{ fontSize: "17px" }}>
//                   Build beautiful prototypes with thousands of components.
//                 </Card.Text>
//                 <Card.Text style={{ color: "#8F90A6", fontSize: "14px" }}>
//                   Leverage agile frameworks to provide a robust synopsis anymore for high level overviews. Iterative approaches.
//                 </Card.Text>
//                 <a href="#" style={{ color: "#F8CA25", textDecoration: "none", display: "flex", alignItems: "center", fontWeight: "bolder", marginTop: "25px" }}>
//                   <span style={{ flexGrow: 1 }}>See Case Study</span>
                 
//                 </a>
//               </Card.Body>
//             </Card>
//           </Col>
//           {/* Card 2 */}
//           <Col className="mb-4">
//             <Card style={{boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }} className='border-0'>
//               <Card.Img variant="top" src={cardimg} alt="" />
//               <Card.Body>
//                 <Card.Text className='fw-bolder' style={{ fontSize: "17px" }}>
//                   Build beautiful prototypes with thousands of components.
//                 </Card.Text>
//                 <Card.Text style={{ color: "#8F90A6", fontSize: "14px" }}>
//                   Leverage agile frameworks to provide a robust synopsis anymore for high level overviews. Iterative approaches.
//                 </Card.Text>
//                 <a href="#" style={{ color: "#F8CA25", textDecoration: "none", display: "flex", alignItems: "center", fontWeight: "bolder", marginTop: "25px" }}>
//                   <span style={{ flexGrow: 1 }}>See Case Study</span>
                 
//                 </a>
//               </Card.Body>
//             </Card>
//           </Col>
//           {/* Card 3 */}
//           <Col className="mb-4">
//             <Card style={{ boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }} className='border-0'>
//               <Card.Img variant="top" src={cardimg} alt="" />
//               <Card.Body>
//                 <Card.Text className='fw-bolder' style={{ fontSize: "17px" }}>
//                   Build beautiful prototypes with thousands of components.
//                 </Card.Text>
//                 <Card.Text style={{ color: "#8F90A6", fontSize: "14px" }}>
//                   Leverage agile frameworks to provide a robust synopsis anymore for high level overviews. Iterative approaches.
//                 </Card.Text>
//                 <a href="#" style={{ color: "#F8CA25", textDecoration: "none", display: "flex", alignItems: "center", fontWeight: "bolder", marginTop: "25px" }}>
//                   <span style={{ flexGrow: 1 }}>See Case Study</span>
                 
//                 </a>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
// </Container>

//       </div>


//     </div>
    
//   );
// };

// export default SectionContainer;
