import React from 'react'
import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import blogcard from "../assets/blogcard.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faComment } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Form from 'react-bootstrap/Form';
import commentcircle from "../assets/commentcircle.png";
import { NavLink } from 'react-router-dom'; 

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';


  
const Comment2 = () => {
  const circleStyle = {
    width: '40px', // Reduce the width
    height: '40px', // Reduce the height
    borderRadius: '50%',
    backgroundColor: '#F8CA25',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
  };
  
  const whiteCircleStyle = {
    ...circleStyle,
    width: '40px', // Apply the same reduced width
    height: '40px', // Apply the same reduced height
    backgroundColor: '#EAECED',
    color: 'whitesmoke',
   
  };
 
  

  const arrowStyle = {
    fontSize: '30px',
    fontWeight: 'bold',
   
    paddingTop: '0px', // Increase the height to make the arrow longer
  };

  return (
    <div>
    <Container className='mt-5' >


<Row>
    <Col xs={6}>
      <h5>Other Comments(2)</h5>
    </Col>
    <Col xs={6} className='d-flex justify-content-end'>
      <div className='d-flex p-2'>
      <NavLink to='/comment' style={{ cursor : "pointer" }}>
      <div style={{ ...whiteCircleStyle, ...arrowStyle }}>&#8592;
            
      </div> {/* Left-pointing arrow (←) */}
          </NavLink>
            <div style={{ ...circleStyle, ...arrowStyle }}>&#8594;
            <NavLink to='/commenttwo' style={{ }}>
            
          </NavLink>
            </div> {/* Right-pointing arrow (→) */}
      </div>
    </Col>
  </Row>


  <Container className='mt-5'>
      <Row>
        <Col md={6}>
          <Card className='mb-4 shadow-none'>
            <Card.Body>
             


      <Row>
        <Col xs={12} md={2}>
          {/* Replace the 'imageSrc' with the URL of the image you want to display */}
          <img src={commentcircle} className="img-fluid mb-4" alt="Comment Circle" />
        </Col>
        <Col xs={12} md={10}>
        <h6 className="text-black fw-bold ">David Henricks</h6>
                    <p className="">20 Jun 2023</p>
        </Col>
      </Row>
   



              <Card.Text className='p-3'>
                Well said! I think the point about changing companies is spot on and I’ve seen
                many friends double their salaries simply by jumping ship. I know companies
                hate that employees stay for so little time (in SF the average tenure is 1.5 years),
                but then they should make pay raises more significant.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className=''>
          {/* Add the second card content here */}
          <Card className="shadow-none">
          <Card.Body>
          


           
      <Row>
        <Col xs={12} md={2}>
          {/* Replace the 'imageSrc' with the URL of the image you want to display */}
          <img src={commentcircle} className="img-fluid mb-4" alt="Comment Circle" />
        </Col>
        <Col xs={12} md={10}>
        <h6 className="text-black fw-bold">David Henricks</h6>
                    <p className="">20 Jun 2023</p>
        </Col>
      </Row>
   




              <Card.Text className= "p-3">
                Well said! I think the point about changing companies is spot on and I’ve seen
                many friends double their salaries simply by jumping ship. I know companies
                hate that employees stay for so little time (in SF the average tenure is 1.5 years),
                but then they should make pay raises more significant.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

</Container>


    </div>
  )
}

export default Comment2