
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import icon40 from "../assets/icon40.png";
import secondsection from "../assets/secondsection.png";
import secondsvg from "../assets/secondsvg.png";
import Button from 'react-bootstrap/Button';
import './Secondsection.css'; // Import the CSS file
import { useState } from 'react';

const Secondsection = () => {
 
    const [hover, setHover] = useState(false);
  
    const handleMouseEnter = () => {
      setHover(true);
    };
  
    const handleMouseLeave = () => {
      setHover(false);
    };
  
    const buttonStyle = {
      backgroundColor: hover ? '#000' : '#F8CA25',
      border: 'none',
      transition: 'background-color 0.3s',
      boxShadow: 'none',
      fontSize: '16px',
      textTransform: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
    };
  
    const arrowStyle = {
      marginLeft: '5px',
      fontSize: '14px',
    };
  return (
    <section>
      <Container className='p-5'>
        <Row className=''>
          <Col md={6} className='mt-5'>
            <div>
              <img src={icon40} alt="" className="small-icon" /> {/* Added "small-icon" class */}
            </div>
            <h2 className='fw-bolder mt-4'>Igniting Innovation<br/>Through Hackathons</h2>
            <p className='mt-3'>
            Explore our transformative programs, from startup incubation to hackathons.
             Join us in shaping the future through innovation, mentorship, and investment.
               </p>
            

               {/* <Button
      className="mt-3 text-white p-3"
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Learn More{' '}
      <span className=""style={arrowStyle}>{'➔'}</span>
    </Button> */}
{/* 
    <Button
  className='mt-3 text-white'
  style={{
    background: "#F8CA25",
    border: "none",
    boxShadow: "none",
    fontSize: "18px", // Adding font-size of 18px
    textTransform: "none", 
  }}
>
  Learn More
  <span className=""style={arrowStyle}>{'➔'}</span>
</Button> */}
           
          </Col>
          <Col md={6}>
            {/* <img src={secondsection} alt="" className="w-100 mt-3" />  */}
            <img src={secondsvg} alt="" className="w-100 mt-3" /> 
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Secondsection;
