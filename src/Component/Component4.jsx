import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import ope from "../assets/ope.png";
import bambam from "../assets/bambam.png";
import company from "../assets/company.png";
import { NavLink } from 'react-router-dom';


function Component4() {
  return (
    <div style={{ backgroundColor: 'whiteSmoke', minHeight: '100vh' }}>
        
    <Container className='p-5'>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <h3 className='fw-bold'>Support Ticket</h3>
</div>
     
    </Container>



    <Container   className='p-3'>
    <div className='p-0' style={{ backgroundColor: 'white', minHeight: '100vh' }}>
   
   <div>

      <Row className="p-0">
   
     
      <Col className='me-4 '>
        <div>
        <Card style={{ width: '18rem' }} className=' border border-none outline-none border-0'>
            <div className=''>
        <Button style={{backgroundColor:'#F8CA25'}}  className='mt-3 w-100 shadow-none p-3 border border-none'>Compose Message</Button>
        </div>
        <div className=" mt-3">
  <form className="d-flex mx-auto">
    <div className="input-group">
      <input
        className="form-control p-4"
        type="search"  
        placeholder="Search"
        aria-label="Search"
        style={{ backgroundColor: 'whiteSmoke', color: 'white-smoke' }}
      />
    
    </div>
  </form>
</div> 
    
      <Card.Body>
        <div style={{minHeight: '100vh' }}>
      <div className="p-0 mt-2" style={{ display: 'flex', alignItems: 'flex-start'}}>
  <img src={ope} alt="" className="me-2" style={{ marginBottom: 0 }} />
  <div>
    <div>
      <h5 className='fw-bold'>Ope</h5>
      <p className='fw-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
    </div>
  </div>
</div>

<div className="p-0 mt-3" style={{ display: 'flex', alignItems: 'flex-start'}}>
  <img src={bambam} alt="" className="me-2" style={{ marginBottom: 0 }} />
  <div>
    <div>
      <h5 className='fw-bold'>Bambam</h5>
      <p className='fw-light'>
      Lorem ipsum dolor sit amet, conur incididunt adipiscing elit.
      </p>
    </div>
  </div>
</div>

<div className="p-0 mt-3" style={{ display: 'flex', alignItems: 'flex-start'}}>
  <img src={bambam} alt="" className="me-2" style={{ marginBottom: 0 }} />
  <div>
    <div>
      <h5 className='fw-bold'>Bambam</h5>
      <p className='fw-light'>
      Lorem ipsum dolor sit amet, conur incididunt adipiscing elit.
      </p>
    </div>
  </div>
</div>


<div className="p-0 mt-3" style={{ display: 'flex', alignItems: 'flex-start'}}>
  <img src={bambam} alt="" className="me-2" style={{ marginBottom: 0 }} />
  <div>
    <div>
      <h5 className='fw-bold'>Bambam</h5>
      <p className='fw-light'>
      Lorem ipsum dolor sit amet, conur incididunt adipiscing elit.
      </p>
    </div>
  </div>
</div>

</div>
      </Card.Body>
    </Card>
        </div>
      </Col>
   
  


      <Col md="6" className=' d-flex align-items-center text-center '>
      <h5 className='fw-bolder'>No Message selected<span>
        <p className='mt-2' style={{fontSize:'16px'}}>
          Select a message and see all conversation here</p></span></h5>
      
      </Col>
      </Row>

   


    </div>

   
    <div style={{ minHeight: '100vh' }}>
   

   
    </div>


   

  </div>
  
  </Container>
  

</div>
  );
}

export default Component4;
