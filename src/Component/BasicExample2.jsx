import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import catalystlogo from "../assets/catalystlogo.png"

function BasicExample2() {
  return (
    <Navbar expand="lg" className=" p-3">
      <Container>
        <Navbar.Brand href="#home">
        <img src={catalystlogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className="me-4">About</Nav.Link>
            <Nav.Link href="#link" className="me-4">OurTeam</Nav.Link>
            <Nav.Link href="#link" className="me-4">Portfolio</Nav.Link>
            <Nav.Link href="#link" className="me-4">Blog</Nav.Link>
            <Nav.Link href="#link" className="me-4">ContactUs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample2;
