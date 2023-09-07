

import React, { useState } from "react";
import pitchtous from "../../assets/pitchtous.png";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import startup from "../../assets/startup.png";
import onboardcard from "../../assets/onboardcard.png";


import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import "./Card.css";
// import { cardsData } from "../../Data/Data";
// import Cards from "../Cards/Cards"

// import Card from "../Card/Card";

const Cardshy = () => {
  return (
    <div className="Cards">
    <div className='mt-5' style={{backgroundColor:'whitesmoke'}}>

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className=''>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0" // Add mx-auto class to center-align horizontally
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
          <Container className='mt-4'>
          <h3 className='fw-bolder'>My Dashboard</h3>
          <h6 className='text-muted'>Welcome Helen</h6>
          </Container>
          <Container style={{ backgroundColor: '#F8CA25', position: 'relative' }}>
            <img
              src={pitchtous}
              alt=""
              style={{
                position: 'absolute',
                top: '-50px', // Adjust this value to move the image above its original position
                left: '70%',
                transform: 'translateX(-50%)',
                zIndex: 1,
              }}
            />
            <Row>
              <Col md={7}>
                <div className='p-5'>
                  <h3 className='text-white fw-bolder'>
                    Pitch To Us
                  </h3>
                  <div className='text-white mt-4'>
                    Every large design company whether it’s a multi-national
                    branding corporation or a regular down at heel tatty magazine
                    publisher needs to fill holes in the workforce.
                  </div>
    
                  <button
                    className="btn btn-primary mt-3"
                    style={{
                      backgroundColor: 'white',
                      color: '#F8CA25',
                      border: 'none',
                      borderRadius: '5px',
                      padding: '10px 20px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      textTransform:'none',
                      boxShadow: 'none',
                    }}
                  >
                    Pitch To Us
                  </button>
                </div>
              </Col>
              <Col md={6}>
                {/* Empty Col for spacing */}
              </Col>
            </Row>
          </Container>
    
    
    
    
    
    
    
    
    <div>
      <Container>
    <h4 className='mt-5 fw-bolder'>My Application Status</h4>
    </Container>
    
    <Container style={{backgroundColor:'#FFFFFF'}}>
      <Row className='p-5 mt-3'>
        <Col md={10}>
        <Row className="align-items-center">
            <Col xs="auto">
            <img src={startup} className='mb-4'/>
            </Col>
            <Col>
              <div>
                <h4 className='fw-bolder'>Africa Start-Ups bootcamps</h4>
                <p style={{ lineHeight: '23.8px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
                   sed do eiusmod tempor incididunt ut labore </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={2}>
        <Button
          className="w-100"
          style={{
            background: '#06C2700D',
            color: '#06C270',
            fontWeight:'bold',
            borderRadius: '20px',
            padding: '10px 15px',
            boxShadow:'none',
            fontSize:'14px',
            textTransform: 'none',
            lineHeight: '23.8px',
            border:'none'
          }}
        >
          Approved
        </Button>
        <h6 className='mt-4 fw-bold text-center'>3rd Aug 2023</h6>
        </Col>
      </Row>
      </Container>
      </div>
    
    
      
    
    <div>
      <section>
    <Container>
    <h4 className='fw-bolder mt-5'>Upcoming Events</h4>
    <Row className='mt-4'>
    <Col xs={12} md={6}>
            <Card style={{}}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <img src={onboardcard}  className='p-3'/>
              <Card.Body>
                <Card.Title className='fw-bold mt-3'>UI/UX Design Hackathon</Card.Title>
                <Card.Text>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                 Velit officia consequat duis enim velit mollit. Exercitation veniam 
                 consequat sunt nostrud amet.
                </Card.Text>
                <Button 
                style={{backgroundColor:'#F8CA25',
                border:'none',
                fontWeight:'bold',
                textTransform:'none',
                boxShadow:'none'}} className='w-100 p-3 mt-4'>Apply</Button>
    
    <Button 
                style={{backgroundColor:'white',
                border: "2px solid #F8CA25",
                color:'#F8CA25',
                fontWeight:'bold',
                textTransform:'none',
                boxShadow:'none'}} className='w-100 p-3 mt-3'>Read More</Button>
              </Card.Body>
            </Card>
          </Col>
          
    
    
          <Col xs={12} md={6}>
            <Card style={{}}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <img src={onboardcard}  className='p-3'/>
              <Card.Body>
                <Card.Title className='fw-bold mt-3'>UI/UX Design Hackathon</Card.Title>
                <Card.Text>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                 Velit officia consequat duis enim velit mollit. Exercitation veniam 
                 consequat sunt nostrud amet.
                </Card.Text>
                <Button 
                style={{backgroundColor:'#F8CA25',
                border:'none',
                fontWeight:'bold',
                textTransform:'none',
                boxShadow:'none'}} className='w-100 p-3 mt-4'>Apply</Button>
    
    <Button 
                style={{backgroundColor:'white',
                border: "2px solid #F8CA25",
                color:'#F8CA25',
                fontWeight:'bold',
                textTransform:'none',
                boxShadow:'none'}} className='w-100 p-3 mt-3'>Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
        </section>
    </div>
    
    
    
    
    
    
    
    
    
    
        </div>
  )

    </div>
  );
};

export default Cardshy;
