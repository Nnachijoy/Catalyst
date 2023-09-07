import React, { useEffect, useState } from 'react';
import dbreadmore from "../assets/dbreadmore.png";
import hackathon from "../assets/hackathon.png";
import Color from "../assets/Color.png";
import Twitter from "../assets/Twitter.png";
import Threads from "../assets/Threads.png";
import telegram from "../assets/telegram.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import discord from "../assets/discord.png";
import { Button, Col, Row, Container, Card } from 'react-bootstrap';
import { ListGroup, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {  Accordion, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
import bookk from "../assets/bookk.png";
import starr from "../assets/starr.png";
import dropdown from "../assets/dropdown.png";
import profile from "../assets/profile.png";
import setting from "../assets/setting.png";
import faq from "../assets/faq.png";
import logout from "../assets/logout.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';



const ReadMore = () => {

  const [selectedItem, setSelectedItem] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleWindowResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);




  return (
    <div>
      <Navbar
      bg="white"
      expand="lg"
      className="navbar-no-shadow border border-none shadow-none"
      expanded={expanded}
    >
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={handleNavbarToggle}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <div className="d-flex px-5">
          <div className="me-2 p-1 mt-1">
            <img src={bookk} alt="" className="p-0" />
          </div>
          <div className="me-2 p-1 mt-1">
            <img src={starr} alt="" className="p-0" />
          </div>
          <div className="me-2 p-2">Dashboards</div>
        </div>
        <Nav className="me-auto">
          {/* Add your Nav.Link items here */}
        </Nav>
      

         <div className="container">
         <InputGroup className="w-75">
        <FormControl
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{ backgroundColor: 'whiteSmoke', color: 'black' }}
          className='p-2 border-0'
        />
        <InputGroup.Text className='p-2 border-0 ' style={{backgroundColor:'whiteSmoke', color:'#6B7588'}}>
          <FaSearch />
        </InputGroup.Text>
      </InputGroup>
</div> 





<NavLink to="/notifications" style={{ textDecoration: 'none' }}>
      <div
        className=''
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '2.5rem',
          height: '2.5rem',
          borderRadius: '80%',
          background: 'whiteSmoke',
        }}
      >
        <i className="bi bi-bell" style={{ fontSize: '1.5rem', color: 'gray' }}></i>
      </div>
    </NavLink>
        
        <div
          className="px-5"
          style={{ display: 'flex', alignItems: 'center', marginRight: '120px' }}
        >
          
          <img src={dropdown} alt="" className=" me-2" style={{ marginLeft: '50px' }} />
          <NavDropdown title="Helen" id="basic-nav-dropdown"  style={{  }} className=''>




      
            <NavDropdown.Item href="#action/3.1 style={{ border: 'none' }}"> 
             <div className=" mt-4" style={{ display: 'flex', alignItems: 'center' }}> 
                    <img src={dropdown} alt="" className="mb-3 me-2" /><div className=''><div>
                      <h6 className='fw-bold '>Helen Chinweike<span><p className='fw-light mt-1'>Founder</p>
                      </span></h6></div> </div></div> </NavDropdown.Item> <NavDropdown.Divider />   
                        <NavDropdown.Item href="#action/3.2 style={{ border: 'none' }}">    
                          <div className="p-0" style={{ display: 'flex', alignItems: 'center' }}>      
                            <img src={profile} alt="" className="mb-3 me-2" />    
                                <div className=''>    
                                      <div>
                                         <p className='fw-light mt-1'>Edit Profile</p>
                                         </div>
                                         </div>
                                         </div>
                                         </NavDropdown.Item> 
                                           <NavDropdown.Item href="#action/3.3">
                                             <div className="p-0" style={{ display: 'flex', alignItems: 'center' }}>       
                                                <img src={setting} alt="" className="mb-3 me-2" />       
                                                <div className=''>
                                                  <div>
                                                    <p className='fw-light mt-1'>Account Settings</p>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    </NavDropdown.Item>
                                                     <NavDropdown.Item href="#action/3.4"> 
                                                     <div className="p-0" style={{ display: 'flex', alignItems: 'center' }}>   
                                                    <img src={faq} alt="" className="me-2" />
                                                    <div className=''>         
                                                     <div>
                                                     <NavLink to="/faq"
                                                      className="fw-light"
                                                      style={{textDecoration:'none', color:'#6B7588'}}>
                                                        FAQ
                                                      </NavLink>
                                                       </div>     
                                                        </div>
                                                        </div>
                                                        </NavDropdown.Item>
                                                        <NavDropdown.Item href="#action/3.5"> 
                                                        <NavDropdown.Divider />     
                                                        <div className="p-0" style={{ display: 'flex', alignItems: 'center' }}>     
                                                         <img src={logout} alt="" className="mb-3 me-2" />
                                                         <div className=''>         
                                                           <div>
                                         <p className='fw-light mt-1' style={{color:'red'}}>Logout</p>                      
            </div>        
            </div>      
            </div>    
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Navbar.Collapse>
    </Navbar>

<Container>



<div className='mt-5'>
<img src={dbreadmore} alt="" />
</div>

<div className='mt-3'> 
<img src={Color} alt="" style={{ maxWidth: '100%' }} />
</div>



<Row className="mt-5">
          <Col>
          <div className="d-flex">
        <div className="flex-shrink-0">
        <img src={hackathon} alt=""/>
        </div>
        <div className="flex-grow-1 px-3">
          <div>
            <h5 className='fw-bold'>UI/UX Design Hackathon </h5>
            <div className="d-flex">
        <div className="me-2 ">
        <img src={discord} alt=""/>
        </div>
        <div className="me-2 ">
        <img src={Facebook} alt=""/>
        </div>
        <div className="me-2">
        <img src={Instagram} alt=""/>
        </div>
        <div className="me-2">
        <img src={telegram} alt=""/>
        </div>
        <div className="me-2">
        <img src={Threads} alt=""/>
        </div>
        <div className="me-2">
        <img src={Twitter} alt=""/>
        </div>
      </div>
          </div>
        </div>
      </div>
          </Col>


          <Col className="d-flex justify-content-end align-items-center">

          <div className="d-flex justify-content-center align-items-center">
      {isMobile ? (
        <Button
          className="btn-lg shadow-none"
          style={{
            backgroundColor: '#F8CA25',
            color: 'white',
            border: 'none',
            textTransform: 'none',
            width: '100%',
          }}
        >
          Apply
        </Button>
      ) : (
        <Button
          className="btn-lg shadow-none"
          style={{
            backgroundColor: '#F8CA25',
            color: 'white',
            border: 'none',
            textTransform: 'none',
            width:'210px'
           
          }}
        >
          Apply
        </Button>
      )}
    </div>
    </Col>
        </Row>

<div>
<h5 className='mt-5 fw-bolder'>Description</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, 
  consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
   eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
   incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, 
   consectetur </p>

   <h5 className='mt-5 fw-bolder'>About the project</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, 
  consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
   eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
   incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, 
   consectetur </p>

   <h5 className='mt-5 fw-bolder'>Great Ideas</h5>
<p>Here is a fun to great ideas</p>


<Row>
  <Col md className='me-5'>
  <h5 className='mt-5 fw-bolder'>About the project</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, 
  consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
   eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
   incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, 
   consectetur </p>
  </Col>


  <Col xs>
  <h5 className='mt-5 fw-bolder'>About the project</h5>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, 
  consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
   eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
   incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, 
  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, 
   consectetur </p>
  </Col>
</Row>
  
   </div>


<p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, 
  consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do ut labore Lorem ipsum dolor sit amet, consectetu Lorem ipsum dolor
   sit amet, consectetur </p>

</Container>
    </div>
  )
}

export default ReadMore