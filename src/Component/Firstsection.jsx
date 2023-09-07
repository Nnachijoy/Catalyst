import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'; // Import the Card component
import icon10 from "../assets/icon10.png";
import icon20 from "../assets/icon20.png";
import icon30 from "../assets/icon30.png";
import startupicon from "../assets/startupicon.png";
import entrepreneurs from "../assets/entrepreneurs.png";
import hackathons from "../assets/hackathons.png";
import './Firstsection.css'; // Import the CSS file

const Firstsection = () => {
  return (
    <section style={{ background: '#3E330B'}} >
      <Container className='p-5 first-section'>
        <h4 className='text-center mt-3 text-white'>Get started on your startup journey with<br/>
         the right investments</h4>
        <Row className='mt-5'>
        <Col md={4} className="mb-4">
  <Card className="h-100 card-top-border ">
    <Card.Body className="d-flex flex-column p-5">
      <img src={startupicon } alt="" className="icon-small2" />
      <div className="mt-1">
        <h5 className="fw-bolder mt-0">Startups</h5>
        <p className="mt-2 lorem">
        Fueling innovation, building dreams, and disrupting industries 
        with bold ideas, determination, and innovation.
        </p>
      </div>
    </Card.Body>
  </Card>
</Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 card-top-border2">
              <Card.Body className="d-flex flex-column p-5 "> {/* Stack the content vertically and center it */}
                <img src={ entrepreneurs} alt="" className="icon-small2" />
                <div className="mt-1"> {/* Add top margin to separate icon and text */}
                  <h5 className="fw-bolder mt-0">Entrepreneurs</h5>
                  <p className="mt-2 fs-6 lorem">
                  Visionaries, risk-takers, and problem solvers shaping the
                   future of business with passion, resilience, and creativity.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 card-top-border3">
              <Card.Body className="d-flex flex-column p-5 "> {/* Stack the content vertically and center it */}
                <img src={hackathons} alt="" className="icon-small2" />
                <div className="mt-1"> {/* Add top margin to separate icon and text */}
                  <h5 className="fw-bolder mt-0">Hackathons</h5>
                  <p className="mt-2 fs-6 lorem"> 
                  Intensive events inspiring rapid innovation, problem-solving, and 
                  collaboration, where creativity thrives, and solutions emerge in the heat of competition.
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Firstsection;
