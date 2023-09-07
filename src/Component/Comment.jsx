import { Row, Col, Card, Container, Button } from 'react-bootstrap';
import blogcard from "../assets/blogcard.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faComment } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Form from 'react-bootstrap/Form';
import commentcircle from "../assets/commentcircle.png";

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
  import { NavLink } from 'react-router-dom'; 




function BasicExample() {
  
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
        <h2 className='fw-bolder'>Bring to the table win-win survival strategies
         to ensure proactive customer service.</h2>
             <p className=""><span  className="me-2">By Martin King</span>
              <span className="me-2">&#8226; </span>  <span className="me-2">20 Jun 2023 </span>
              <span className="me-2">&#8226;</span> 5 min read</p>
    <Card  className='mt-5' style={{ border: 'none' }}>
      <Card.Img variant="top" src={blogcard} className="img-fluid" />
      <Card.Body>
      <div className="d-flex align-items-center">
      <FontAwesomeIcon icon={faCalendarAlt} className="me-2 icon mb-3" />
      <p className="me-3">July 14, 2023</p>
  <FontAwesomeIcon icon={faComment} className="me-2 icon mb-3" />
      <p className="">5 comments</p>
    </div>
        
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
         eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, 
         consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, 
          consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
          do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
           Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem
          ipsum dolor sit amet, consectetur 
        </Card.Text>

        <Card.Title className='fw-bolder mt-2'>
       Summary of Completed Research 
        </Card.Title>

        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
         ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur 
         adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, 
        consectetur 
        </Card.Text>

        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
         ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur 
         adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, 
        consectetur 
        </Card.Text>

        <Card.Title className='fw-bolder mt-2'>
       Security and Reliability
        </Card.Title>

        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
         ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur 
         adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, 
        consectetur 
        </Card.Text>

        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
         ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur 
         adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, 
        consectetur 
        </Card.Text>
       
      </Card.Body>
    </Card>
  </Container>
  

  <div style={{ background: '#FFFDF4' }} className='mt-4 py-3 py-md-5 p-4'>
  

    <div  className='fw-bolder mt-2 container'>
    <h5>Leave a Comment</h5>
    </div>

    <Form className='mt-4 container'>
      <Form className='mt-4' style={{ maxWidth: '930px' }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className='fw-bolder text-black'>Comment</Form.Label>
          <Form.Control as="textarea" rows={8} placeholder="Type Something" />
        </Form.Group>
      </Form>

      <MDBRow>
                <MDBCol xs={12} md={6}>
                  <div className='mb-4'>
                    <Form.Label className='text-black fw-bold'>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your first & last name"
                      className=''
                      style={{ padding: '20px 32px', boxShadow: 'none' }}
                      required // Add required attribute
                    />
                  </div>
                </MDBCol>

                <MDBCol xs={12} md={6}>
                  <div className='mb-4'>
                    <Form.Label className='text-black fw-bold'>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email address"
                      className=''
                      style={{ padding: '20px 32px', boxShadow: 'none' }}
                      required // Add required attribute
                    />
                  </div>
                </MDBCol>
              </MDBRow>

            

<div className='mt-3 container'>
      <a href="#" className="btn " style={{ backgroundColor: '#F8CA25', color: 'white' }} >
        Post Comment
      </a>
      </div>
    </Form>
 
</div>




<Container className='mt-5' >


<Row>
    <Col xs={6}>
      <h5>Other Comments</h5>
    </Col>
    <Col xs={6} className='d-flex justify-content-end'>
      <div className='d-flex p-2'>
      <NavLink to='/comment' style={{ }}>
      <div style={{ ...whiteCircleStyle, ...arrowStyle }}>&#8592;</div>
          </NavLink>
 
            <NavLink to='/commenttwo' style={{ cursor: "pointer" }}>
            <div style={{ ...circleStyle, ...arrowStyle }}>&#8594;
            </div> {/* Right-pointing arrow (→) */}
          </NavLink>
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
  );
}

export default BasicExample;