import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import elitelogo from "../assets/elitelogo.png";
import company from "../assets/company.png";
import feedback from "../assets/feedback.png";
import { NavLink } from 'react-router-dom';
import startup from "../assets/startup.png";
import investor from "../assets/investor.png";
import dot from "../assets/dot.png";
import ProgressBar from 'react-bootstrap/ProgressBar';


function Approved() {
  return (
    <div style={{ backgroundColor: 'whiteSmoke', minHeight: '100vh' }}>
        
      <Container className='p-5'>
   
      <div style={{ display: 'flex', alignItems: 'center' }}>
  <img src={feedback} alt="" className="p-0 me-1" style={{ margin: '0' }} />
  {/* <p style={{ margin: '0' }} className='me-1'>My Company &gt;</p> */}
  <NavLink
  to="/component3"
  activeClassName="active-link"
  style={{ textDecoration: 'none' }}
>
  <p style={{ margin: '0' }} className='me-1'>Application &gt;</p>
</NavLink>
  <p style={{ margin: '0', color: '#7C6512' }} className=''>Feedback</p>
</div>
      </Container>



      <Container  className='p-2' > 
      <div className='p-3' style={{ backgroundColor: 'white', minHeight: '30vh' }}>
     
     <div className='p-5' >
<Row>
    <Col md={10}>
    <Row className="align-items-center">
        <Col xs="auto">
        <img src={startup} className='mb-5'/>
        </Col>
        <Col className='me-4'>
          <div>
            <h4 className='fw-bolder mt-1'>Africa Start-Ups bootcamps</h4>
            <p style={{ lineHeight: '23.8px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore </p>
          </div>
        </Col>
      </Row>
    </Col>




    <Col md={2} style={{ textAlign: 'right'}} >
    <NavLink to="/approved">
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
</NavLink>
    </Col>
</Row>




<Row className="d-flex align-items-center">
<Col xs="auto" className="d-none d-sm-block">
    {/* <img src={investor} className='mb-5'/> */}
    <img src={investor} className='mb-5' style={{ marginTop: '10px' }}/>

</Col>
        <Col className='me-3 p-0'>
   <div  >
             <div style={{ display: 'flex', alignItems: 'center' }} className='mt-5'>
            <h6 className='fw-bolder me-2 mb-3'>Guy Hawkins</h6>
            <img src={dot} className='mb-3 me-2'/>
            <p className='mb-3'>1 week ago</p>
            </div>
            <p style={{ lineHeight: '23.8px'}} className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
             consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </Col>
      </Row>

      
<Row className="d-flex align-items-center">
<Col xs="auto" className="d-none d-sm-block">
    {/* <img src={investor} className='mb-5'/> */}
    <img src={investor} className='mb-5' style={{ marginTop: '10px' }}/>

</Col>
        <Col className='me-3 p-0'>
   <div  >
             <div style={{ display: 'flex', alignItems: 'center' }} className='mt-5'>
            <h6 className='fw-bolder me-2 mb-3'>Guy Hawkins</h6>
            <img src={dot} className='mb-3 me-2'/>
            <p className='mb-3'>1 week ago</p>
            </div>
            <p style={{ lineHeight: '23.8px'}} className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
             consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </Col>
      </Row>

      
<Row className="d-flex align-items-center">
<Col xs="auto" className="d-none d-sm-block">
    {/* <img src={investor} className='mb-5'/> */}
    <img src={investor} className='mb-5' style={{ marginTop: '10px' }}/>

</Col>
        <Col className='me-3 p-0'>
   <div  >
             <div style={{ display: 'flex', alignItems: 'center' }} className='mt-5'>
            <h6 className='fw-bolder me-2 mb-3'>Guy Hawkins</h6>
            <img src={dot} className='mb-3 me-2'/>
            <p className='mb-3'>1 week ago</p>
            </div>
            <p style={{ lineHeight: '23.8px'}} className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
             consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
             sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </Col>
      </Row>

   

      </div>

    
    </div>
    </Container>




    </div>
  );
}

export default Approved;
