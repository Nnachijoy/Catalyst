import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import elitelogo from "../assets/elitelogo.png";
import company from "../assets/company.png";
import { NavLink } from 'react-router-dom';


function Component2() {
  return (
    <div style={{ backgroundColor: 'whiteSmoke', minHeight: '100vh' }}>
        
      <Container>
   
        <h4 className='fw-bold p-5'>My Company</h4>
       
      </Container>



      <Container  className='p-5' > 
      <div className='p-3' style={{ backgroundColor: 'white', minHeight: '30vh' }}>
     
     <div className='p-5' >
     <Row >
        <Col md="7">

        
        <Row className="p-0 m">
        <Col xs="auto">
        <img src={elitelogo} alt="" className="p-0" />

        </Col>
        <Col className='me-4 p-0'>
          <div>
            <h6 className='fw-bold'>Elitepath software</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore </p>
          </div>
        </Col>
      </Row>
    

        </Col>


        <Col md="3" className='container'>
       <p  className='' style={{fontSize:'13px'}}>Created: <span className='text-black fw-bold'>3rd Aug 2023</span></p> 
        
        <Button
             style={{
              backgroundColor:'#F8CA25', 
              color: 'white',
              fontSize: '16px',
            textTransform:'none',
            border: "2px solid #F8CA25",
          
          }}
              className='w-100 p-2 shadow-none mt-4 btn-sm'>
          <NavLink style={{color: 'white', textDecoration:'none'}} to="/editdetails" >Edit Details</NavLink>
              </Button>

              <Button
             style={{
              backgroundColor:'white', 
              color: '#F8CA25',
              fontSize: '16px',
            textTransform:'none',
            border: "2px solid #F8CA25",
          
          }}
              className='w-100 p-2 shadow-none mt-4 btn-sm'>
         <NavLink style={{color: '#F8CA25', textDecoration:'none'}} to="/reviewdetails" >Review Details</NavLink>
              </Button>
        </Col>
        </Row>
     

  
      </div>



    </div>
    </Container>



    <Container  className='p-5' > 
      <div className='p-3' style={{ backgroundColor: 'white', minHeight: '30vh' }}>
     
     <div className='p-5' >
     <Row >
        <Col md="7">

        
        <Row className="p-0 m">
        <Col xs="auto">
        <img src={elitelogo} alt="" className="p-0" />

        </Col>
        <Col className='me-4 p-0'>
          <div>
            <h6 className='fw-bold'>Elitepath software</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore </p>
          </div>
        </Col>
      </Row>
    

        </Col>


        <Col md="3" className='container'>
       <p  className='' style={{fontSize:'13px'}}>Created: <span className='text-black fw-bold'>3rd Aug 2023</span></p> 
        
        <Button
             style={{
              backgroundColor:'#F8CA25', 
              color: 'white',
              fontSize: '16px',
            textTransform:'none',
            border: "2px solid #F8CA25",
          
          }}
              className='w-100 p-2 shadow-none mt-4 btn-sm'>
          <NavLink style={{color: 'white', textDecoration:'none'}} to="/editdetails" >Edit Details</NavLink>
              </Button>

              <Button
             style={{
              backgroundColor:'white', 
              color: '#F8CA25',
              fontSize: '16px',
            textTransform:'none',
            border: "2px solid #F8CA25",
          
          }}
              className='w-100 p-2 shadow-none mt-4 btn-sm'>
         <NavLink style={{color: '#F8CA25', textDecoration:'none'}} to="/reviewdetails" >Review Details</NavLink>
              </Button>
        </Col>
        </Row>
     

  
      </div>



    </div>
    </Container>


    </div>
  );
}

export default Component2;
