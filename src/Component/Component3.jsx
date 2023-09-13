import React from 'react';
import pitchtous from "../assets/pitchtous.png";
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import startup from "../assets/startup.png";
import message from "../assets/message.png";
import onboardcard from "../assets/onboardcard.png";
import ProgressBar from 'react-bootstrap/ProgressBar';

import { NavLink } from 'react-router-dom';



export default function App() {
  return (
    <div className='p-5' style={{backgroundColor:'whitesmoke', border: "1px solid #C7C9D9" }}>
      <Container className=''>
      <h3 className='fw-bolder'>My Application</h3>
      </Container>
    

<div>
<Container style={{backgroundColor:'#FFFFFF'}} className='mt-4 p-3'>
<Row>
  <Col style={{ flex: '1' }}>
    {/* emptycol */}
  </Col>

  <Col style={{ textAlign: 'right', marginRight:'40px' }} className='mt-3'>
  <NavLink to="/inprogress">
  <Button
    className=""
    style={{
      background: '#FEF4D3',
      color: '#FFCC00',
      fontWeight:'bold',
      borderRadius: '20px',
      padding: '10px 15px',
      boxShadow:'none',
      fontSize:'14px',
      textTransform: 'none',
      lineHeight: '23.8px',
      border:'none',
      width:'8rem'
    }}
  >
    In-progress
  </Button>
</NavLink>
  </Col>
</Row>


    <Row className="align-items-center">
        <Col xs="auto">
        <img src={startup} className='mb-4'/>
        </Col>
        <Col className='me-4'>
          <div>
            <h4 className='fw-bolder'>Africa Start-Ups bootcamps</h4>
            <p style={{ lineHeight: '23.8px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore </p>
          </div>
        </Col>
      </Row>

      <div className='mt-2'>
  <ProgressBar variant="warning" now={60} style={{ height: '12.5px' }} />
</div>



 
      <Row className='mt-4'>
  <Col style={{ flex: '1' }}>
  <Button
      className=""
      style={{
        background: 'whiteSmoke',
        color: '#8F90A6',
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
      3rd Aug, 2022
    </Button>
  </Col>

  <Col style={{ textAlign: 'right', marginRight:'40px' }} className='mt-3'>
  <img src={message} className='me-2' style={{ display: 'inline-block' }} />
<span className='' style={{ display: 'inline-block' }}>0</span>

  </Col>
</Row>


  </Container>
  </div>


  
  <div>
<Container style={{backgroundColor:'#FFFFFF'}} className='mt-5 p-3'>
<Row>
  <Col style={{ flex: '1' }}>
    {/* emptycol */}
  </Col>

  <Col style={{ textAlign: 'right', marginRight:'40px' }} className='mt-3'>
  <Button
      className=""
      style={{
        backgroundColor: '#F2FCF8',
        color: '#06C270',
        fontWeight:'bold',
        borderRadius: '20px',
        padding: '10px 15px',
        boxShadow:'none',
        fontSize:'14px',
        textTransform: 'none',
        lineHeight: '23.8px',
        border:'none',
        width:'8rem'
      }}
    >
      Approved
    </Button>
  </Col>
</Row>


    <Row className="align-items-center">
        <Col xs="auto">
        <img src={startup} className='mb-4'/>
        </Col>
        <Col className='me-4'>
          <div>
            <h4 className='fw-bolder'>Africa Start-Ups bootcamps</h4>
            <p style={{ lineHeight: '23.8px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore </p>
          </div>
        </Col>
      </Row>

      <div className='mt-2'>
  <ProgressBar variant="success" now={100} style={{ height: '12.5px' }} />
</div>



 
      <Row className='mt-4'>
  <Col style={{ flex: '1' }}>
  <Button
      className=""
      style={{
        background: 'whiteSmoke',
        color: '#8F90A6',
        fontWeight:'bold',
        borderRadius: '20px',
        padding: '10px 15px',
        boxShadow:'none',
        fontSize:'14px',
        textTransform: 'none',
        lineHeight: '23.8px',
        border:'none',
       
      }}
    >
      3rd July, 2022
    </Button>
  </Col>

  <Col style={{ textAlign: 'right', marginRight:'40px' }} className='mt-3'>
  <img src={message} className='me-2' style={{ display: 'inline-block' }} />
<span className='' style={{ display: 'inline-block' }}>3</span>

  </Col>
</Row>


  </Container>
  </div>


  <div>
<Container style={{backgroundColor:'#FFFFFF'}} className='mt-5 p-3'>
<Row>
  <Col style={{ flex: '1' }}>
    {/* emptycol */}
  </Col>

  <Col style={{ textAlign: 'right', marginRight:'40px' }} className='mt-3'>
  <Button
      className=""
      style={{
        backgroundColor: '#FFF5F5',
        color: '#FF3B3B',
        fontWeight:'bold',
        borderRadius: '20px',
        padding: '10px 15px',
        boxShadow:'none',
        fontSize:'14px',
        textTransform: 'none',
        lineHeight: '23.8px',
        border:'none',
        width:'8rem'
      }}
    >
      Rejected
    </Button>
  </Col>
</Row>


    <Row className="align-items-center">
        <Col xs="auto">
        <img src={startup} className='mb-4'/>
        </Col>
        <Col className='me-4'>
          <div>
            <h4 className='fw-bolder'>Africa Start-Ups bootcamps</h4>
            <p style={{ lineHeight: '23.8px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore </p>
          </div>
        </Col>
      </Row>

      <div className='mt-2'>
  <ProgressBar variant="danger" now={100} style={{ height: '12.5px' }} />
</div>



 
      <Row className='mt-4'>
  <Col style={{ flex: '1' }}>
  <Button
      className=""
      style={{
        background: 'whiteSmoke',
        color: '#8F90A6',
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
      3rd June, 2022
    </Button>
  </Col>

  <Col style={{ textAlign: 'right', marginRight:'40px' }} className='mt-3'>
  <img src={message} className='me-2' style={{ display: 'inline-block' }} />
<span className='' style={{ display: 'inline-block' }}>3</span>

  </Col>
</Row>


  </Container>
  </div>







    </div>
  );
}
