
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {  Accordion, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Component1 from './Component1'; // Import Component1
import Component2 from './Component2'; // Import Component2
import Component3 from './Component3'; // Import Component2
import Component4 from './Component4'; 
import Component5 from './Component5'; 
import Component6 from './Component6'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import dashboard from "../assets/dashboard.png";
import mycompany from "../assets/mycompany.png";
import activity1 from "../assets/activity1.png";
import activity2 from "../assets/activity2.png";
import activity3 from "../assets/activity3.png";
import activity4 from "../assets/activity4.png";
import bookk from "../assets/bookk.png";
import starr from "../assets/starr.png";
import dropdown from "../assets/dropdown.png";
import profile from "../assets/profile.png";
import setting from "../assets/setting.png";
import faq from "../assets/faq.png";
import logout from "../assets/logout.png";
import application from "../assets/application.png";

import mentorship from "../assets/mentorship.png";
import supportticket from "../assets/supportticket.png";
import settings from "../assets/settings.png";
import searchicon from "../assets/searchicon.png";
import searchimg from "../assets/searchimg.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { NavLink } from 'react-router-dom';
import Mysidebar from './Mysidebarr.jsx/Mysidebar';
// import Mysidebar from './Mysidebar';

function DB() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const sidebarItems = [
    {
      id: 1,
      title: 'Dashboard',
      content: <Component1 />,
    },
    {
      id: 2,
      title: 'My Company',
      content: <Component2 />,
    },

   
   
    {
      id: 3,
      title: 'Application',
      content: <Component3 />,
    },

    {
      id: 4,
      title: 'Support Ticket',
      content: <Component4 />,
    },

    {
      id: 5,
      title: 'Mentorship',
      content: <Component5 />,
    },

    {
      id: 6,
      title: 'Settings',
      content: <Component6 />,
    },
  ];


        
  useEffect(() => {
    setSelectedItem(sidebarItems[0]); // Set the first item as the default content
  }, []); // Run this effect only once, on component mount

  const handleSidebarItemClick = (itemId) => {
    if (itemId === 3) {
      setSelectedItem(sidebarItems.find((item) => item.id === itemId));
    } else {
      setSelectedItem(sidebarItems.find((item) => item.id === itemId));
      toggleSidebar();
    }
  };

  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Container fluid className='mt-3'>
      <Row>
        <Col xs={12} sm={2} className={`sidebar ${sidebarOpen ? 'open' : ''}`} style={{ backgroundColor: 'white' }}>
        <ListGroup>
  {sidebarItems.map((item) => (
    <ListGroup.Item
      key={item.id}
      onClick={() => handleSidebarItemClick(item.id)}
      active={selectedItem === item}
      action
      style={{
        marginTop: item.id === 1 ? '5rem' : item.id === 2 ? '2rem' :
         item.id === 3 ? '2rem' :
          item.id === 4 ? '2rem' :
          item.id === 5 ? '2rem' :
          item.id === 6 ? '2rem' :
          '0',
        backgroundColor: item.id === 1 ? '#F8CA25' : 
        item.id === 2 ? 'transparent' :
         item.id === 3 ? 'transparent' :
         item.id === 4 ? 'transparent' :
         item.id === 5 ? 'transparent' :
         item.id === 6 ? 'transparent' :
         '',
        border: item.id === 1 || 
        item.id === 2 ? 'none' : 
        item.id === 3 ? 'none' : 
        item.id === 4 ? 'none' : 
        item.id === 5 ? 'none' : 
        item.id === 6 ? 'none' : 
        '', 
    color: item.id === 1 ? 'white' :
     item.id === 2 ? 'var(--bs-text-muted)' :
      item.id === 3 ? 'var(--bs-text-muted)' :
      item.id === 4 ? 'var(--bs-text-muted)' :
      item.id === 5 ? 'var(--bs-text-muted)' :
      item.id === 6 ? 'var(--bs-text-muted)' :
      '',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '1rem', // Add some space between the image and the text
      }}
    >
    <img
    src={
      item.id === 1 ? dashboard : 
      item.id === 2 ? mycompany : 
      item.id === 3 ? application :
      item.id === 4 ? supportticket :
      item.id === 5 ? mentorship :
      item.id === 6 ? settings :
      ''
    }
    alt={`Image ${item.id}`}
    style={{
      width: '30px',
      height: '30px',
      marginRight: '1rem',
    }}
  />
      {item.title}
    </ListGroup.Item>
  ))}
  
  
</ListGroup>

       {/* <Mysidebar/> */}

          
        </Col>
        <Col xs={12} sm={10} className="content-col">
          <Row>



         
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
                      <NavLink to="/editdetails"
                                                      className="fw-light"
                                                      style={{textDecoration:'none', color:'#6B7588'}}> 
                        <NavDropdown.Item href="#action/3.2 style={{ border: 'none' }}">    
                          <div className="p-0" style={{ display: 'flex', alignItems: 'center' }}>      
                            <img src={profile} alt="" className=" me-2" />    
                                <div className=''>    
                                <div>
                                                 
                                                      Edit Profile
                                                  
                                                       </div> 
                                         </div>
                                         </div>
                                         </NavDropdown.Item> 
                                         </NavLink> 
                                          

                                         <NavLink to="/component6"
                                                      className="fw-light"
                                                      style={{textDecoration:'none', color:'#6B7588'}}>
                                                    <NavDropdown.Item href="#action/3.3">
                                             <div className="p-0" style={{ display: 'flex', alignItems: 'center' }}>       
                                                <img src={setting} alt="" className="mt-3 me-2" />       
                                                <div className=''>
                                                <div className='mt-3'>
                                                   
                                                       Account Setting
                                                     
                                                       </div> 
                                                    </div>
                                                    </div>
                                                    </NavDropdown.Item>
                                                    </NavLink>


                                                    <NavLink to="/faq"
                                                      className="fw-light"
                                                      style={{textDecoration:'none', color:'#6B7588'}}>
                                                     <NavDropdown.Item href="#action/3.4"> 
                                                     <div className="p-0 mt-3" style={{ display: 'flex', alignItems: 'center' }}>   
                                                    <img src={faq} alt="" className="me-2" />
                                                    <div className=''>         
                                                     <div>
                                                    
                                                        FAQ
                                                  
                                                       </div>     
                                                        </div>
                                                        </div>
                                                        </NavDropdown.Item>
                                                            </NavLink>

                                                            
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


    {/* <Col sm={8} style={{ marginTop: '0px' }}>
    {selectedItem ? selectedItem.content : 'Select an Item'}
            </Col> */}

            <Col sm={selectedItem && selectedItem.id === 1 ? 8 : 12} style={{ marginTop: '0px' }}>
  {selectedItem ? selectedItem.content : 'Select an Item'}
</Col>


            {selectedItem && selectedItem.id === 1 && (
            <Col sm={4} className="secondary-content" style={{ marginTop: '30px' }}>
              {/* Your static secondary content goes here */}
             <h5 className='fw-bold mt-2'>Activities</h5>

             <Row className="p-0 mt-4">
        <Col xs="auto">
        <img src={activity1} alt="" className="p-0" />

        </Col>
        <Col className='me-4 p-0'>
          <div>
            <h6 className='fw-bold'>You have a bug that needs to...</h6>
            <p>Just now </p>
          </div>
        </Col>
      </Row>

      <Row className="p-0 mt-2">
        <Col xs="auto">
        <img src={activity4} alt="" className="p-0" />

        </Col>
        <Col className='me-4 p-0'>
          <div>
            <h6 className='fw-bold'>You have a bug that needs to...</h6>
            <p>Just now </p>
          </div>
        </Col>
      </Row>

      <Row className="p-0 mt-2">
        <Col xs="auto">
        <img src={activity3} alt="" className="p-0" />

        </Col>
        <Col className='me-4 p-0'>
          <div>
            <h6 className='fw-bold'>You have a bug that needs to...</h6>
            <p>Just now </p>
          </div>
        </Col>
      </Row>


      <Row className="p-0 mt-2">
        <Col xs="auto">
        <img src={activity4} alt="" className="p-0" />

        </Col>
        <Col className='me-4 p-0'>
          <div>
            <h6 className='fw-bold'>You have a bug that needs to...</h6>
            <p>Just now </p>
          </div>
        </Col>
      </Row>


      <Row className="p-0 mt-2">
        <Col xs="auto">
        <img src={activity2} alt="" className="p-0" />

        </Col>
        <Col className='me-4 p-0'>
          <div>
            <h6 className='fw-bold'>You have a bug that needs to...</h6>
            <p>Just now </p>
          </div>
        </Col>
      </Row>
            </Col>

)}





          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default DB;



























