// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import elitelogo from "../assets/elitelogo.png";
// import company from "../assets/company.png";
// import { NavLink } from 'react-router-dom';
// import Table from 'react-bootstrap/Table';
// import helenn from "../assets/helenn.png";
// import progress from "../assets/progress.png";

// function Component2() {
//   return (
//     <div style={{ backgroundColor: 'whiteSmoke', minHeight: '100vh' }}>
        
//       <Container>
   
//         <h4 className='fw-bold p-5'>Application</h4>
       
//       </Container>



//       <Container className='p-5' >
//       <div className='p-5' style={{ backgroundColor: 'white', minHeight: '100vh' }}>
     
//      <div className='' >

//      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//    <h5 className='fw-bolder'>List</h5>
//    <div>
//       <button className='me-2' style={{ borderRadius: '8px', background: 'transparent', border: '1px solid #DDE5E9' }}>
//         Date Range</button>
//       <button style={{ borderRadius: '8px', background: 'transparent', border: '1px solid #DDE5E9' }}>
//         Status</button>
//    </div>
// </div>

//  <div>
//       <Table className="mt-3" style={{ borderSpacing: '0 1rem' }}  align='middle'>
//         <thead>
          
//           <tr className="table-secondary mt-5">
//             <th>No.</th>
//             <th>Applicant Name</th>
//             <th>Date of Submission</th>
//             <th>Name of Company </th>
//             <th>Status </th>
//             <th>Details </th>
//           </tr>


//         </thead>
//         <tbody>
          
        
//           <tr >
//             <td>01</td>
//             <td>
//             <Row>
//             <Col md={2}>
//             <img src={helenn} alt="" />
//               </Col>
//               <Col md={10}>
//                 <p className='text-black'>Helen Chinweike</p>
//               </Col>
             
//             </Row>
//           </td>
//             <td>08 Aug 2023</td>
//             <td>Elitepath Software</td>
           
//             <td>
//             <Row>
//             <Col md={2}>
//             <img src={progress} alt="" />
//               </Col>
//               <Col md={10}>
//                 <p className='text-black'>In Progress</p>
//               </Col>
             
//             </Row>
//           </td>
//           <td>
//             <Button
//               variant=""
//               style={{
//                textTransform:'none',
//                shadow:'none',
//                outline:'none',
//                border:'none',
//                 height: '32px',
//                 borderRadius: '4px',
//                 padding: '4px 16px',
//                 marginRight: '8px', // This adds a gap between the button and the next element
//                 backgroundColor: '#7C6512', // Brand Color/Darker
//                 color: '#fff', // Text color
//               }}
//             >
//               Details
//             </Button>
//           </td>
//           </tr>
        
         
//           <tr>
//             <td>02</td>
//             <td>
//             <Row>
//             <Col md={2}>
//             <img src={helenn} alt="" />
//               </Col>
//               <Col md={10}>
//                 <p className='text-black'>Helen Chinweike</p>
//               </Col>
             
//             </Row>
//           </td>
//             <td>08 Aug 2023</td>
//             <td>Elitepath Software</td>
           
//             <td>
//             <Row>
//             <Col md={2}>
//             <img src={progress} alt="" />
//               </Col>
//               <Col md={10}>
//                 <p className='text-black'>In Progress</p>
//               </Col>
             
//             </Row>
//           </td>
//           <td>
//             <Button
//               variant=""
//               style={{
//                textTransform:'none',
//                shadow:'none',
//                outline:'none',
//                border:'none',
//                 height: '32px',
//                 borderRadius: '4px',
//                 padding: '4px 16px',
//                 marginRight: '8px', // This adds a gap between the button and the next element
//                 backgroundColor: '#7C6512', // Brand Color/Darker
//                 color: '#fff', // Text color
//               }}
//             >
//               Details
//             </Button>
//           </td>
//           </tr>



//           <tr>
//             <td>03</td>
//             <td>
//             <Row>
//             <Col md={2}>
            // <img src={helenn} alt="" />
//               </Col>
//               <Col md={10}>
//                 <p className='text-black'>Helen Chinweike</p>
//               </Col>
             
//             </Row>
//           </td>
//             <td>08 Aug 2023</td>
//             <td>Elitepath Software</td>
           
//             <td>
//             <Row>
//             <Col md={2}>
//             <img src={progress} alt="" />
//               </Col>
//               <Col md={10}>
//                 <p className='text-black'>In Progress</p>
//               </Col>
             
//             </Row>
//           </td>
          // <td>
          //   <Button
          //     variant=""
          //     style={{
          //      textTransform:'none',
          //      shadow:'none',
          //      outline:'none',
          //      border:'none',
          //       height: '32px',
          //       borderRadius: '4px',
          //       padding: '4px 16px',
          //       marginRight: '8px', // This adds a gap between the button and the next element
          //       backgroundColor: '#7C6512', // Brand Color/Darker
          //       color: '#fff', // Text color
          //     }}
          //   >
          //     Details
          //   </Button>
          // </td>
//           </tr>
//         </tbody>
//       </Table>

//     </div>

// </div>
//     </div>
//     </Container>

//     </div>
//   );
// }

// export default Component2;





// import React from 'react';
// import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import elitelogo from "../assets/elitelogo.png";
// import company from "../assets/company.png";
// import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom'; 
// import Table from 'react-bootstrap/Table';
// import helenn from "../assets/helenn.png";
// import progress from "../assets/progress.png";
// import status from "../assets/status.png";
// import date from "../assets/date.png";
// import Dropdown from 'react-bootstrap/Dropdown';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faCircle} from '@fortawesome/free-solid-svg-icons';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


// export default function App() {
//   return (
//     <div style={{ backgroundColor: 'whiteSmoke', minHeight: '100vh' }}>


//     <Container className='p-4' >
//     <h4 className='fw-bold p-3'>Application</h4>
//     <div className='p-5' style={{ backgroundColor: 'white', minHeight: '100vh' }}>
   
//    <div className='' >

  

//    <div className='d-flex flex-column'>
// <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//   <h5 className='fw-bolder'>List</h5>
//   <div style={{ display: 'flex' }}>
//     <div style={{ marginRight: '10px' }}> {/* Add some margin for spacing */}
//     <Dropdown>
//       <Dropdown.Toggle
//         variant=""
//         id="dropdown-basic"
//         className="me-2"
//         style={{
//           borderRadius: '8px',
//           background: 'transparent',
//           border: '1px solid #DDE5E9',
//           padding: '7px',
//           display: 'flex',
//           alignItems: 'center', // Center content vertically
//           color:'#6B7588',
//           boxShadow:'none'
//         }}
//       >
//         <img
//           src={date}
//           alt=""
//           style={{
//             verticalAlign: 'middle',
//             marginRight: '5px',
//             maxWidth: '20px',
//             maxHeight: '20px',
//           }}
//         />
//         <span style={{ color: '#6B7588', textTransform: 'none' }}>Date Range</span>
//       </Dropdown.Toggle>

//       <Dropdown.Menu className='bg-white'>

//         <Dropdown.Item href="#action1" style={{ background: '#F2F2F5' }}>
//           <FontAwesomeIcon
//             icon={faCircle}
//             style={{ marginRight: '5px', color: 'green' }}
//           />
//           Newest
//         </Dropdown.Item>

//         <Dropdown.Item href="#action3" className='px-4'>Oldest</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//     </div>
//     <div>
//     <Dropdown>
//       <Dropdown.Toggle
//         variant=""
//         id="dropdown-basic"
//         className="me-2"
//         style={{
//           borderRadius: '8px',
//           background: 'transparent',
//           border: '1px solid #DDE5E9',
//           padding: '7px',
//           display: 'flex',
//           alignItems: 'center', // Center content vertically
//           color:'#6B7588',
//          boxShadow:'none'
//         }}
//       >
//         <img
//           src={status}
//           alt=""
//           style={{
//             verticalAlign: 'middle',
//             marginRight: '5px',
//             maxWidth: '20px',
//             maxHeight: '20px',
//           }}
//         />
//         <span style={{ color: '#6B7588', textTransform: 'none' }}>Status</span>
//       </Dropdown.Toggle>

//       <Dropdown.Menu className='bg-white'>

//         <Dropdown.Item href="#action1" style={{ background: '#F2F2F5' }}>
//           <FontAwesomeIcon
//             icon={faCircle}
//             style={{ marginRight: '5px', color: 'green' }}
//           />
//           Newest
//         </Dropdown.Item>

//         <Dropdown.Item href="#action3" className='px-4'>Oldest</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//     </div>
//   </div>
// </div>
// </div>


//     <div className='mt-5' style={{ maxHeight: '400px', overflowY: 'auto', '@media (min-width: 768px)': { overflowY: 'visible', maxHeight: 'none' } }}>
//     <MDBTable align='middle'>
//       <MDBTableHead >
//         <tr  className="table-secondary mt-5" >

//           <th className="">No.</th>
//           <th className="">Applicant Name</th>
//           <th className="">Date of Submission</th>
//           <th className="" >Name of Company</th>
//           <th className="">Status</th>
//           <th className="">Details</th>
          
//         </tr>
//       </MDBTableHead>
//       <MDBTableBody >
//         <tr>

//           <td>
//            01
//           </td>


//           <td>
//             <div className='d-flex align-items-center'>
//             <img src={helenn} alt="" />
//               <div className='ms-2'>
//                 <p className='mb-1 text-black'>Helen Chinweike</p>
           
//               </div>
//             </div>
//           </td>

          
//           <td>
//             <p className='text-black mb-1'>8 Aug 2023</p>
       
//           </td>
//           <td>
//           ElitePath Software
//           </td>
     
//           <td>
//             <div className='d-flex align-items-center'>
//             <img src={progress} alt="" />
//               <div className='ms-2'>
//                 <p className='mt-3 text-black'>In-progress</p>
           
//               </div>
//             </div>
//           </td>



//           <td>
  //         <Nav.Link as={Link} to="/details" className="me-4">
  //         <Button
  //   variant=""
  //   style={{
  //     textTransform: 'none',
  //     boxShadow: 'none',
  //     outline: 'none',
  //     border: 'none',
  //     height: '32px',
  //     borderRadius: '4px',
  //     padding: '4px 16px',
  //     marginRight: '8px',
  //     backgroundColor: '#7C6512',
  //     color: '#fff',
  //   }}
  // >
  //   Details
  // </Button>
  //           </Nav.Link>
       
//           </td>
//         </tr>

//         <tr>

// <td>
//  02
// </td>


// <td>
//   <div className='d-flex align-items-center'>
//   <img src={helenn} alt="" />
//     <div className='ms-2'>
//       <p className='mb-1 text-black'>Helen Chinweike</p>
 
//     </div>
//   </div>
// </td>


// <td>
//   <p className='text-black mb-1'>8 Aug 2023</p>

// </td>
// <td>
// IOT Startups
// </td>

// <td>
//   <div className='d-flex align-items-center'>
//   <img src={progress} alt="" />
//     <div className='ms-2'>
//       <p className='mt-3 text-black'>In-progress</p>
 
//     </div>
//   </div>
// </td>



// <td>
//   <Button
//     variant=""
//     style={{
//      textTransform:'none',
//      shadow:'none',
//      outline:'none',
//      border:'none',
//       height: '32px',
//       borderRadius: '4px',
//       padding: '4px 16px',
//       marginRight: '8px', // This adds a gap between the button and the next element
//       backgroundColor: '#7C6512', // Brand Color/Darker
//       color: '#fff', // Text color
//     }}
//   >
//     Details
//   </Button>
// </td>
//        </tr>



//         <tr>

// <td>
//  03
// </td>


// <td>
//   <div className='d-flex align-items-center'>
//   <img src={helenn} alt="" />
//     <div className='ms-2'>
//       <p className='mb-1 text-black'>Helen Chinweike</p>
 
//     </div>
//   </div>
// </td>


// <td>
//   <p className='text-black mb-1'>8 Aug 2023</p>

// </td>
// <td>
// FinTech Startups
// </td>

// <td>
//   <div className='d-flex align-items-center'>
//   <img src={progress} alt="" />
//     <div className='ms-2'>
//       <p className='mt-3 text-black'>In-progress</p>
 
//     </div>
//   </div>
// </td>



// <td>
//   <Button
//     variant=""
//     style={{
//      textTransform:'none',
//      shadow:'none',
//      outline:'none',
//      border:'none',
//       height: '32px',
//       borderRadius: '4px',
//       padding: '4px 16px',
//       marginRight: '8px', // This adds a gap between the button and the next element
//       backgroundColor: '#7C6512', // Brand Color/Darker
//       color: '#fff', // Text color
//     }}
//   >
//     Details
//   </Button>
// </td>
//         </tr>



 
//        <tr>

// <td>
//  04
// </td>


// <td>
//   <div className='d-flex align-items-center'>
//   <img src={helenn} alt="" />
//     <div className='ms-2'>
//       <p className='mb-1 text-black'>Helen Chinweike</p>
 
//     </div>
//   </div>
// </td>


// <td>
//   <p className='text-black mb-1'>8 Aug 2023</p>

// </td>
// <td>
// Elitepath Software
// </td>

// <td>
//   <div className='d-flex align-items-center'>
//   <img src={progress} alt="" />
//     <div className='ms-2'>
//       <p className='mt-3 text-black'>In-progress</p>
 
//     </div>
//   </div>
// </td>



// <td>
//   <Button
//     variant=""
//     style={{
//      textTransform:'none',
//      shadow:'none',
//      outline:'none',
//      border:'none',
//       height: '32px',
//       borderRadius: '4px',
//       padding: '4px 16px',
//       marginRight: '8px', // This adds a gap between the button and the next element
//       backgroundColor: '#7C6512', // Brand Color/Darker
//       color: '#fff', // Text color
//     }}
//   >
//     Details
//   </Button>
// </td>
//        </tr>


//        <tr>

// <td>
//  05
// </td>


// <td>
//   <div className='d-flex align-items-center'>
//   <img src={helenn} alt="" />
//     <div className='ms-2'>
//       <p className='mb-1 text-black'>Helen Chinweike</p>
 
//     </div>
//   </div>
// </td>


// <td>
//   <p className='text-black mb-1'>8 Aug 2023</p>

// </td>
// <td>
// IOT Startups
// </td>

// <td>
//   <div className='d-flex align-items-center'>
//   <img src={progress} alt="" />
//     <div className='ms-2'>
//       <p className='mt-3 text-black'>In-progress</p>
 
//     </div>
//   </div>
// </td>



// <td>
//   <Button
//     variant=""
//     style={{
//      textTransform:'none',
//      shadow:'none',
//      outline:'none',
//      border:'none',
//       height: '32px',
//       borderRadius: '4px',
//       padding: '4px 16px',
//       marginRight: '8px', // This adds a gap between the button and the next element
//       backgroundColor: '#7C6512', // Brand Color/Darker
//       color: '#fff', // Text color
//     }}
//   >
//     Details
//   </Button>
// </td>
//        </tr>

//        <tr>

// <td>
//  06
// </td>


// <td>
//   <div className='d-flex align-items-center'>
//   <img src={helenn} alt="" />
//     <div className='ms-2'>
//       <p className='mb-1 text-black'>Helen Chinweike</p>
 
//     </div>
//   </div>
// </td>


// <td>
//   <p className='text-black mb-1'>8 Aug 2023</p>

// </td>
// <td>
// FinTech Startups
// </td>

// <td>
//   <div className='d-flex align-items-center'>
//   <img src={progress} alt="" />
//     <div className='ms-2'>
//       <p className='mt-3 text-black'>In-progress</p>
 
//     </div>
//   </div>
// </td>



// <td>
//   <Button
//     variant=""
//     style={{
//      textTransform:'none',
//      shadow:'none',
//      outline:'none',
//      border:'none',
//       height: '32px',
//       borderRadius: '4px',
//       padding: '4px 16px',
//       marginRight: '8px', // This adds a gap between the button and the next element
//       backgroundColor: '#7C6512', // Brand Color/Darker
//       color: '#fff', // Text color
//     }}
//   >
//     Details
//   </Button>
// </td>
//         </tr>

//       </MDBTableBody>
//     </MDBTable>
//     </div>

//     </div>
//     </div>
//     </Container>

//     </div>
//   );
// }




import React, { useState } from 'react';
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from 'mdb-react-ui-kit';

import helenn from "../assets/helenn.png";

import { Container, Row, Col, Button } from 'react-bootstrap';
import elitelogo from "../assets/elitelogo.png";
import company from "../assets/company.png";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import Table from 'react-bootstrap/Table';
import progress from "../assets/progress.png";
import status from "../assets/status.png";
import date from "../assets/date.png";
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircle} from '@fortawesome/free-solid-svg-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';












export default function App() {
  


   const [currentSet, setCurrentSet] = useState(1);
  const totalSets = 3; // Assuming there are 3 sets of tables

  const handleNextClick = () => {
    if (currentSet < totalSets) {
      setCurrentSet(currentSet + 1);
    }
  }

  const handlePreviousClick = () => {
    if (currentSet > 1) {
      setCurrentSet(currentSet - 1);
    }
  }

  return (
    <div style={{ backgroundColor: 'whiteSmoke', minHeight: '100vh' }}>
      <Container className='p-4' >
        <h4 className='fw-bold p-3'>Application</h4>
        <div className='p-5' style={{ backgroundColor: 'white', minHeight: '100vh' }}>
          <div className=''>
            <div className='d-flex flex-column'>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h5 className='fw-bolder'>List</h5>
              </div>
            </div>

            <div className='mt-5' style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <MDBTable align='middle'>
                <MDBTableHead>
                  <tr className="table-secondary">
                    <th className="">No.</th>
                    <th className="">Applicant Name</th>
                    <th className="">Date of Submission</th>
                    <th className="" >Name of Company</th>
                    <th className="">Status</th>
                    <th className="">Details</th>
                  </tr>
                </MDBTableHead>

                <MDBTableBody>
                  {currentSet === 1 && (
                    <>
                      <tr>
                      <td>01</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Helen Chinweike</p>
                            </div>
                          </div>
                        </td>
                        <td>8 Aug 2023</td>
                        <td>ElitePath Software</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                        <Nav.Link as={Link} to="/details" className="me-4">
          <Button
    variant=""
    style={{
      textTransform: 'none',
      boxShadow: 'none',
      outline: 'none',
      border: 'none',
      height: '32px',
      borderRadius: '4px',
      padding: '4px 16px',
      marginRight: '8px',
      backgroundColor: '#7C6512',
      color: '#fff',
    }}
  >
    Details
  </Button>
            </Nav.Link>
                        </td>
                      </tr>

                      <tr>
                      <td>02</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Alvan Norman</p>
                            </div>
                          </div>
                        </td>
                        <td>8 Aug 2023</td>
                        <td>IOT Startups</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            variant=""
                            style={{
                              textTransform: 'none',
                              boxShadow: 'none',
                              outline: 'none',
                              border: 'none',
                              height: '32px',
                              borderRadius: '4px',
                              padding: '4px 16px',
                              marginRight: '8px',
                              backgroundColor: '#7C6512',
                              color: '#fff',
                            }}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>



                      <tr>
                      <td>03</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Alvan Norman</p>
                            </div>
                          </div>
                        </td>
                        <td>8 Aug 2023</td>
                        <td>FinTech Startups</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            variant=""
                            style={{
                              textTransform: 'none',
                              boxShadow: 'none',
                              outline: 'none',
                              border: 'none',
                              height: '32px',
                              borderRadius: '4px',
                              padding: '4px 16px',
                              marginRight: '8px',
                              backgroundColor: '#7C6512',
                              color: '#fff',
                            }}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>


                      <tr>
                      <td>04</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Helen Chinweike</p>
                            </div>
                          </div>
                        </td>
                        <td>8 Aug 2023</td>
                        <td>ElitePath Software</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            variant=""
                            style={{
                              textTransform: 'none',
                              boxShadow: 'none',
                              outline: 'none',
                              border: 'none',
                              height: '32px',
                              borderRadius: '4px',
                              padding: '4px 16px',
                              marginRight: '8px',
                              backgroundColor: '#7C6512',
                              color: '#fff',
                            }}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>

                      <tr>
                      <td>05</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Alvan Norman</p>
                            </div>
                          </div>
                        </td>
                        <td>8 Aug 2023</td>
                        <td>IOT Startups</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            variant=""
                            style={{
                              textTransform: 'none',
                              boxShadow: 'none',
                              outline: 'none',
                              border: 'none',
                              height: '32px',
                              borderRadius: '4px',
                              padding: '4px 16px',
                              marginRight: '8px',
                              backgroundColor: '#7C6512',
                              color: '#fff',
                            }}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>



                      <tr>
                      <td>06</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Alvan Norman</p>
                            </div>
                          </div>
                        </td>
                        <td>8 Aug 2023</td>
                        <td>FinTech Startups</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            variant=""
                            style={{
                              textTransform: 'none',
                              boxShadow: 'none',
                              outline: 'none',
                              border: 'none',
                              height: '32px',
                              borderRadius: '4px',
                              padding: '4px 16px',
                              marginRight: '8px',
                              backgroundColor: '#7C6512',
                              color: '#fff',
                            }}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>
                    </>
                  )}

                  {currentSet === 2 && (
                    <>


                   <tr>
                      <td>07</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Helen Chinweike</p>
                            </div>
                          </div>
                        </td>
                        <td>8 Aug 2023</td>
                        <td>ElitePath Software</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            variant=""
                            style={{
                              textTransform: 'none',
                              boxShadow: 'none',
                              outline: 'none',
                              border: 'none',
                              height: '32px',
                              borderRadius: '4px',
                              padding: '4px 16px',
                              marginRight: '8px',
                              backgroundColor: '#7C6512',
                              color: '#fff',
                            }}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>

                    <tr>
                      <td>08</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Alvan Norman</p>
                            </div>
                          </div>
                        </td>
                        <td>8 Aug 2023</td>
                        <td>IOT Startups</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            variant=""
                            style={{
                              textTransform: 'none',
                              boxShadow: 'none',
                              outline: 'none',
                              border: 'none',
                              height: '32px',
                              borderRadius: '4px',
                              padding: '4px 16px',
                              marginRight: '8px',
                              backgroundColor: '#7C6512',
                              color: '#fff',
                            }}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>

                      <tr>
                      <td>09</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Alvan Norman</p>
                            </div>
                          </div>
                        </td>
                        <td>8 Aug 2023</td>
                        <td>FinTech Startups</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            variant=""
                            style={{
                              textTransform: 'none',
                              boxShadow: 'none',
                              outline: 'none',
                              border: 'none',
                              height: '32px',
                              borderRadius: '4px',
                              padding: '4px 16px',
                              marginRight: '8px',
                              backgroundColor: '#7C6512',
                              color: '#fff',
                            }}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>

                      
                   <tr>
                      <td>11</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Helen Chinweike</p>
                            </div>
                          </div>
                        </td>
                        <td>8 Aug 2023</td>
                        <td>ElitePath Software</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            variant=""
                            style={{
                              textTransform: 'none',
                              boxShadow: 'none',
                              outline: 'none',
                              border: 'none',
                              height: '32px',
                              borderRadius: '4px',
                              padding: '4px 16px',
                              marginRight: '8px',
                              backgroundColor: '#7C6512',
                              color: '#fff',
                            }}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>

                    <tr>
                      <td>12</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Alvan Norman</p>
                            </div>
                          </div>
                        </td>
                        <td>8 Aug 2023</td>
                        <td>IOT Startups</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            variant=""
                            style={{
                              textTransform: 'none',
                              boxShadow: 'none',
                              outline: 'none',
                              border: 'none',
                              height: '32px',
                              borderRadius: '4px',
                              padding: '4px 16px',
                              marginRight: '8px',
                              backgroundColor: '#7C6512',
                              color: '#fff',
                            }}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>

                      {/* Add other rows for set 2 */}
                    </>
                  )}

                  {currentSet === 3 && (
                    <>



<tr>
                      <td>13</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Helen Chinweike</p>
                            </div>
                          </div>
                        </td>
                        <td>8 Aug 2023</td>
                        <td>ElitePath Software</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            variant=""
                            style={{
                              textTransform: 'none',
                              boxShadow: 'none',
                              outline: 'none',
                              border: 'none',
                              height: '32px',
                              borderRadius: '4px',
                              padding: '4px 16px',
                              marginRight: '8px',
                              backgroundColor: '#7C6512',
                              color: '#fff',
                            }}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>

                      <tr>
                      <td>14</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Alvan Norman</p>
                            </div>
                          </div>
                        </td>
                        <td>8 Aug 2023</td>
                        <td>IOT Startups</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            variant=""
                            style={{
                              textTransform: 'none',
                              boxShadow: 'none',
                              outline: 'none',
                              border: 'none',
                              height: '32px',
                              borderRadius: '4px',
                              padding: '4px 16px',
                              marginRight: '8px',
                              backgroundColor: '#7C6512',
                              color: '#fff',
                            }}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>


                     
                     <tr>
                      <td>15</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Alvan Norman</p>
                            </div>
                          </div>
                        </td>
                        <td>8 Aug 2023</td>
                        <td>FinTech Startups</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            variant=""
                            style={{
                              textTransform: 'none',
                              boxShadow: 'none',
                              outline: 'none',
                              border: 'none',
                              height: '32px',
                              borderRadius: '4px',
                              padding: '4px 16px',
                              marginRight: '8px',
                              backgroundColor: '#7C6512',
                              color: '#fff',
                            }}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>



                   <tr>
                      <td>16</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Helen Chinweike</p>
                            </div>
                          </div>
                        </td>




                        <td>8 Aug 2023</td>
                        <td>ElitePath Software</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            variant=""
                            style={{
                              textTransform: 'none',
                              boxShadow: 'none',
                              outline: 'none',
                              border: 'none',
                              height: '32px',
                              borderRadius: '4px',
                              padding: '4px 16px',
                              marginRight: '8px',
                              backgroundColor: '#7C6512',
                              color: '#fff',
                            }}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>

                    <tr>
                      <td>17</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={helenn} alt="" />
                            <div className='ms-2'>
                              <p className='mb-1 text-black'>Alvan Norman</p>
                            </div>
                          </div>
                        </td>
                        <td>8 Aug 2023</td>
                        <td>IOT Startups</td>
                        <td>
                          <div className='d-flex align-items-center'>
                            <img src={progress} alt="" />
                            <div className='ms-2'>
                              <p className='mt-3 text-black'>In-progress</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Button
                            variant=""
                            style={{
                              textTransform: 'none',
                              boxShadow: 'none',
                              outline: 'none',
                              border: 'none',
                              height: '32px',
                              borderRadius: '4px',
                              padding: '4px 16px',
                              marginRight: '8px',
                              backgroundColor: '#7C6512',
                              color: '#fff',
                            }}
                          >
                            Details
                          </Button>
                        </td>
                      </tr>

                   
                      

                    </>
                  )}
                </MDBTableBody>
              </MDBTable>
            </div>


            <div style={{  textAlign: 'center' }}>
        <span>{`${currentSet}/${totalSets}`}</span>
      </div>

      <div style={{  textAlign: 'right', padding: '20px'}}>
        <Button className='p-2 me-4'
         onClick={handlePreviousClick}
          disabled={currentSet === 1} 
          style={{backgroundColor:'black',
                 outline:'none',
                border:'none',
                 shadow:'none',}}
        >Previous</Button>

        <Button className='p-2'
         onClick={handleNextClick}
         disabled={currentSet === totalSets}
         style={{ backgroundColor: '#F8CA25',
         outline:'none',
         border:'none',
         shadow:'none',
         width:'120px'
         }} 
         
        >Next</Button>
      </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

{/* <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '20px' }}>
<Button onClick={handlePreviousClick} disabled={currentSet === 1}>Previous</Button>
<span style={{ margin: '0 10px' }}>{`${currentSet}/${totalSets}`}</span>
<Button onClick={handleNextClick} disabled={currentSet === totalSets}>Next</Button>
</div>
</div> */}























