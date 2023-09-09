import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import catalystlogo from "../../assets/catalystlogo.png";
import { Link, useNavigate } from "react-router-dom";
import "./MyNavBar.css";

function MyNavBar() {
  const [selectedLink, setSelectedLink] = useState(null);
  let redir = useNavigate();

  return (
    <Navbar expand="lg" className="shadow-0 my-nav-bar">
      <Container>
        <Navbar.Brand onClick={() => redir("/")}>
          <img src={catalystlogo} alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-black fw-bolder">
            <Nav.Link
              onClick={() => { setSelectedLink("/"); redir("/") }}
              className={`me-4 ${selectedLink === "/" ? 'text-warning' : ''} fw-bolder`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => { setSelectedLink("/about"); redir("/about") }}
              className={`me-4 ${selectedLink === "/about" ? 'text-warning' : ''} fw-bolder`}
            >
              About
            </Nav.Link>
            {/* <Nav.Link className="me-4">
              <Link to="/ourteam">OurTeam</Link>
            </Nav.Link> */}
            <Nav.Link
              onClick={() => { setSelectedLink("/portfolio"); redir("/portfolio") }}
              className={`me-4 ${selectedLink === "/portfolio" ? 'text-warning' : ''} fw-bolder`}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              onClick={() => { setSelectedLink("/contactus"); redir("/contactus") }}
              className={`me-4 ${selectedLink === "/contactus" ? 'text-warning' : ''} fw-bolder`}
            >
              ContactUs
            </Nav.Link>
 
            {/* <Nav.Link
              onClick={() => { setSelectedLink("/maindb"); redir("/maindb") }}
              className={`me-4 ${selectedLink === "/maindb" ? 'text-warning' : ''} fw-bolder`}
            >
              Maindb
            </Nav.Link>
            <Nav.Link
              onClick={() => { setSelectedLink("/investmentdb"); redir("/investmentdb") }}
              className={`me-4 ${selectedLink === "/investmentdb" ? 'text-warning' : ''} fw-bolder`}
            >
              Investment
            </Nav.Link> */}

             {/*  <Nav.Link as={Link} to="/blogg" className="me-4">
              Blog
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
