import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Firstsection3 = () => {
  return (
    <div className='text-center hero2 p-2'>
    <h4 className='fw-bolder'>Meet our team</h4>
    <p className='text-muted mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor<br/>
        incididunt ut labore Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore </p>

         <Container>
  <Row className="justify-content-center mt-4">
  <Col md={6}>
  <div className="d-flex justify-content-around fw-bolder flex-wrap">
      <span style={{ color: "#7C6512" }}>ALL TEAM</span>
      <span>MANAGEMENT</span>
      <span>BOARD</span>
      <span>STAFF</span>
    </div>
        </Col>
  </Row>
</Container>

         
</div>
  )
}

export default Firstsection3

