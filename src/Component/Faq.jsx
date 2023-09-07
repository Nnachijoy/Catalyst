import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import GeneralFaq from './GeneralFaq';
import PaymentFaq from './PaymentFaq';
import ServicesFaq from './ServicesFaq';
import QuestionFaq from './QuestionFaq';

const Faq = () => {
  // State to keep track of the selected navigation item
  const [selectedItem, setSelectedItem] = useState('item1'); // Default item

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const getContentComponent = () => {
    switch (selectedItem) {
      case 'item1':
        return <GeneralFaq />;
      case 'item2':
        return <PaymentFaq />;
      case 'item3':
        return <ServicesFaq />;
      case 'item4':
        return <QuestionFaq />;
      default:
        return null;
    }
  };

  return (
    <div className='' style={{ backgroundColor: 'whiteSmoke', minHeight: '100vh' }}>
      <Container>
        <Row>
          <Col md={4}>
            <h3 className='mt-5 fw-bolder'>Frequently Asked Questions</h3>
            {/* Vertical Navigation Bar */}
            <Navbar expand="md" className="shadow-none">
              <Navbar.Toggle aria-controls="faq-nav" style={{ backgroundColor: 'black', color: 'white' }}>
                <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="faq-nav">
                <Nav className="flex-column fw-bolder">
                  <Nav.Link
                    onClick={() => handleItemClick('item1')}
                    style={{ color: selectedItem === 'item1' ? '#F8CA25' : '' }}
                  >
                    General
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => handleItemClick('item2')}
                    style={{ color: selectedItem === 'item2' ? '#F8CA25' : '' }}
                  >
                    Payment
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => handleItemClick('item3')}
                    style={{ color: selectedItem === 'item3' ? '#F8CA25' : '' }}
                  >
                    Services
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => handleItemClick('item4')}
                    style={{ color: selectedItem === 'item4' ? '#F8CA25' : '' }}
                  >
                    Drop a Question
                  </Nav.Link>
                  {/* Add more navigation items as needed */}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>

          <Col md={8}>
            {/* Content Display */}
            <div className='mt-5'>
              {/* <h2>FAQ Content</h2> */}
              {getContentComponent()}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Faq;
