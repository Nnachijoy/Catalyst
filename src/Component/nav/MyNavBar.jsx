import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import catalystlogo from "../../assets/catalystlogo.png";
import { Link, useNavigate } from "react-router-dom";
import "./MyNavBar.css";

function MyNavBar() {
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
            <Nav.Link onClick={() => redir("/")} className="me-4 fw-bolder">
              Home
            </Nav.Link>
            <Nav.Link onClick={() => redir("/about")} className="me-4 fw-bolder">
              About
            </Nav.Link>
            {/* <Nav.Link className="me-4">
              <Link to="/ourteam">OurTeam</Link>
            </Nav.Link> */}
            <Nav.Link onClick={() => redir("/portfolio")} className="me-4 fw-bolder" >
              Portfolio
            </Nav.Link>
            <Nav.Link onClick={() => redir("/contactus")} className="me-4 fw-bolder">
              ContactUs
            </Nav.Link>

            <Nav.Link onClick={() => redir("/maindb")} className="me-4">
              Maindb
            </Nav.Link>
            <Nav.Link onClick={() => redir("/investmentdb")} className="me-4">
              Investment
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
