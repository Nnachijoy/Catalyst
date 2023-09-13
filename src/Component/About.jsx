import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
// import Seventhsection from '../assets/Seventhsection.png';

import firstcard from "../assets/firstcard.png";
import secondcard from "../assets/secondcard.png";
import thirdcard from "../assets/thirdcard.png";
import Seventhsection from "./Seventhsection"
import { Link } from 'react-router-dom'; 



const CardExample = () => {
  return (
    <div>
    <Container>
      <div className='text-center hero2'>
        <h1 className='fw-bolder'>We help business to grow their<br/> customer base</h1>
        <p className='text-muted mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor<br/>
            incididunt ut labore Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do<br/> eiusmod tempor incididunt ut labore </p>
        

<Link to="/contactus">
  <button
    className='mt-3 text-white p-2'
    style={{
      background: "#F8CA25",
      border: "none",
      boxShadow: "none",
      fontSize: "18px", // Adding font-size of 18px
      textTransform: "none", 
    }}
  >
 Contact Us
  </button>
</Link>
    </div>
      
      <Row className='mt-5 p-4'>
        <Col md={6}>
          <div>
            <img src={card1} alt="Card 1" className="img-fluid" />
            <div>
              <h2 className="mt-4 fw-bolder">Empower business to achieve success.</h2>
              <p className="card-text mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
              </p>
              <p className="card-text mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur sed do eiusmod
                tempor incididunt ut labore Lorem ipsum dolor sit amet, 
                consectetur sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
              </p>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div>
            <img src={card2} alt="Card 2" className="img-fluid mt-5" />
            <div>
            
              <p className="card-text mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
              </p>
            </div>
          </div>
        </Col>
      </Row>



    </Container>

    <section style={{ background: "#FFFDF4" }}>
    <Container className='mt-5'>
    
      
      <Row className='mt-5'>
        <Col md={6}>
          <div>
            <img src={firstcard} alt="Card 1" className="img-fluid" />
            </div>
            <div>
            <img src={secondcard} alt="Card 2" className="img-fluid mt-5" />
            </div>
          
        </Col>

        <Col md={6} className='p-4'>
         
            <h4 className='fw-bolder mt-5'>High skilled employee
from worldwide.</h4>
              <p className="card-text mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
              </p>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
              </p>

             
            <img src={thirdcard} alt="thirdcard" className="img-fluid mt-5" />
        


           
        </Col>
      </Row>



    </Container>
    </section>

<Seventhsection />

</div>


    

    
  );
};

export default CardExample;
