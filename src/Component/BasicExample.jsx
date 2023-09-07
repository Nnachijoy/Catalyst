// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import catalystlogo from "../assets/catalystlogo.png";

// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="shadow-0">
//       <Container>
//         <Navbar.Brand href="#home">
//           <img src={catalystlogo} alt="" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//           <Nav className="text-black fw-bold">
//             <Nav.Link href="/" className="me-4">Home</Nav.Link>
//             <Nav.Link href="/about" className="me-4">About</Nav.Link>
//             <Nav.Link href="/ourteam" className="me-4">OurTeam</Nav.Link>
//             <Nav.Link href="/portfolio" className="me-4">Portfolio</Nav.Link>
//             <Nav.Link href="/blogg" className="me-4">Blog</Nav.Link>
//             <Nav.Link href="/contactus" className="me-4">ContactUs</Nav.Link>

//             {/* <Nav.Link href="/signup" className="me-4">Sign</Nav.Link>
//             <Nav.Link href="/email" className="me-4">Email</Nav.Link>
//             <Nav.Link href="/newpassword" className="me-4">Password</Nav.Link>
//             <Nav.Link href="/login" className="me-4">Login</Nav.Link>
//             <Nav.Link href="/resetpassword" className="me-4">Reset</Nav.Link>
//             <Nav.Link href="/otp" className="me-4">Otp</Nav.Link>
//             <Nav.Link href="/dhero" className="me-4">Dashboard</Nav.Link> */}
        
         
//             {/* <Nav.Link href="/superdash" className="me-4">Onboarding</Nav.Link> */}
//             <Nav.Link href="/maindb" className="me-4">Maindb</Nav.Link>
//             <Nav.Link href="/loginadmin" className="me-4">LoginAdmin</Nav.Link>
//             <Nav.Link href="/investmentdashboard" className="me-4">InvestmentDashboard</Nav.Link>
//             {/* <Nav.Link href="/readmore" className="me-4">ReadMore</Nav.Link> */}
      
//             {/* <Nav.Link href="/ddd" className="me-4">ddd</Nav.Link> */}
//             {/* <Nav.Link href="/dashboard" className="me-4">Dashboard</Nav.Link> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;





import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import catalystlogo from '../assets/catalystlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


function BasicExample() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <Navbar expand="lg" className="shadow-0">
    //   <Container>
    //     <Navbar.Brand as={Link} to="/">
    //       <img src={catalystlogo} alt="" />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    //       <Nav className="text-black fw-bold">
          
    //         <Nav.Link as={Link} to="/" className="me-4">
    //           Home
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/about" className="me-4">
    //           About
    //         </Nav.Link>
            // {/* <Nav.Link as={Link} to="/ourteam" className="me-4">
            //   Our Team
            // </Nav.Link> */}
            // <Nav.Link as={Link} to="/portfolio" className="me-4">
            //   Portfolio
            // </Nav.Link>
            // {/* <Nav.Link as={Link} to="/blogg" className="me-4">
            //   Blog
            // </Nav.Link> */}
            // <Nav.Link as={Link} to="/contactus" className="me-4">
            //   Contact Us
            // </Nav.Link>

            // <Nav.Link as={Link} to="/maindb" className="me-4">
            //   Maindb
            // </Nav.Link>
            // <Nav.Link as={Link} to="/loginadmin" className="me-4">
            //   Login Admin
            // </Nav.Link> 
            // <Nav.Link as={Link} to="/investmentdashboard" className="me-4">
            //   Investment Dashboard
            // </Nav.Link> 
           
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <Navbar expand="lg" className="shadow-0">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={catalystlogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle className='m-auto'
          aria-controls="basic-navbar-nav"
          onClick={toggleNavbar}
        >
          {isOpen ? (
    <FontAwesomeIcon icon={faTimes} className="text-black fa-lg border-0" />
  ) : (
    <FontAwesomeIcon icon={faBars} className="text-black fa-lg border-none" />
  )}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end ${isOpen ? 'show' : ''}`}>
          <Nav className="text-black fw-bold">
            <Nav.Link as={Link} to="/" className="me-4">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="me-4">
              About
            </Nav.Link>
            
                      {/* <Nav.Link as={Link} to="/ourteam" className="me-4">
              Our Team
            </Nav.Link> */}
            <Nav.Link as={Link} to="/portfolio" className="me-4">
              Portfolio
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/blogg" className="me-4">
              Blog
            </Nav.Link> */}
            <Nav.Link as={Link} to="/contactus" className="me-4">
              Contact Us
            </Nav.Link>

            <Nav.Link as={Link} to="/maindb" className="me-4">
              Maindb
            </Nav.Link>
            <Nav.Link as={Link} to="/loginadmin" className="me-4">
              Login Admin
            </Nav.Link> 
            <Nav.Link as={Link} to="/investmentdashboard" className="me-4">
              Investment Dashboard
            </Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default BasicExample;















