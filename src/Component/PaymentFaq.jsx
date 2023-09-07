import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import elitelogo from "../assets/elitelogo.png";
import company from "../assets/company.png";
import { NavLink } from 'react-router-dom';


function Component3() {
  return (
    <div>
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row>
        <Col xs={12} className="text-center">
          <img src={elitelogo} alt="Elite Logo" />
          <h4 className='fw-bolder mt-2'>No Content Yet</h4>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Component3;
