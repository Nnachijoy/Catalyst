import { Button, Card, Container } from 'react-bootstrap';
import blogcard from "../assets/blogcard.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faComment } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { NavLink } from 'react-router-dom'; 
import React, { useState } from 'react';


function BasicExample() {
  const [buttonColor, setButtonColor] = useState('primary');
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
    color: 'black',
  };
 
  

  const arrowStyle = {
    fontSize: '30px',
    fontWeight: 'bold',
   
    paddingTop: '0px', // Increase the height to make the arrow longer
  };

  const handleClick = () => {
    // Toggle the circle color between yellow (#F8CA25) and white (#EAECED)
    setCircleColor(circleColor === '#F8CA25' ? '#EAECED' : '#F8CA25');
  };


  return (
    <div>
    <Container className='mt-5' >

      <div className='text-center'>
        <h5 className='fw-bolder'>Blog (3)</h5>
        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor<br/> incididunt ut labore Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore 

        </p>
      </div>
    <Card  className='mt-5'> 
      <Card.Img variant="top" src={blogcard} className="img-fluid  p-4" />
      <Card.Body>
      <div className="d-flex align-items-center">
      <FontAwesomeIcon icon={faCalendarAlt} className="me-2 icon mb-3" />
      <p className="me-3">July 14, 2023</p>
      <FontAwesomeIcon icon={faComment} className="me-2 icon mb-3" />
      <p className="">5 comments</p>
    </div>
        <Card.Title className='text-black fw-bolder'>
        Bring to the table win-win survival strategies to ensure proactive customer service.
        </Card.Title>
        <Card.Text>
        Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
         Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion 
         along the information highway will close the loop on focusing solely on the bottom line. Override
          the digital divide with additional clickthroughs from DevOps.
         Nanotechnology immersion along the information highway will close the loop on focusing solely on the 
         bottom line.
        </Card.Text>
        
          <NavLink to="/comment" style={{ color: '#F8CA25' }} >Continue Reading</NavLink>
        
      </Card.Body>
    </Card>
  </Container>
  


<Container className='mt-5' >




<div className='mt-5'>
<div style={{ display: 'flex', gap: '10px' }}>
      <div style={circleStyle}>
      <NavLink to='/blog' style={{ color: 'black' }}>
            1
          </NavLink>
      </div>
      <div style={{ ...whiteCircleStyle }} onClick={handleClick}>
          <NavLink to='/numbertwo' style={{ color: 'black' }}>
            2
          </NavLink>
        </div>
      <div style={whiteCircleStyle}>
      <NavLink to='/numberthree' style={{ color: 'black' }}>
            3
          </NavLink>
      </div>
      <div style={whiteCircleStyle}>4</div>
      <div style={whiteCircleStyle}>5</div>
      <div style={{ ...whiteCircleStyle, ...arrowStyle }}>→</div>
    </div>
</div>
</Container>

{/* <Badge className='bg-warning'>9</Badge> */}






</div>
  );
}

export default BasicExample;