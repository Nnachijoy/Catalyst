import React from 'react'
import catalystlogo from '../assets/catalystlogo.png';
import culture from "../assets/culture.png";
import founder from "../assets/founder.png";
import cofounder from "../assets/cofounder.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Firstcompany = () => {
  return (
    <Container>
    <div>
<div>
  <img src={culture} alt="" className="mt-5" />    
      <h3 className='fw-bolder text-black' style={{lineHeight:'40px', fontSize:'30px'}}>
        Build beautiful prototypes with thousands of<br/>
        components. Bring to the table win-win survival<br/> strategies to ensure.</h3>
        </div>

<div className="d-flex mt-3">
  <div className="d-flex align-items-center me-5">
    <img src={founder} alt="" className="mt-3 me-2" />
    <div className="text-black">
      <p className="m-0">Founder</p>
      <h6 className="fw-bolder mb-0">David Henricks</h6>
    </div>
  </div>

  <div className="d-flex align-items-center">
    <img src={cofounder} alt="" className="mt-3 me-2" />
    <div className="text-black">
      <p className="m-0">Co-Founder</p>
      <h6 className="fw-bolder mb-0">Grace Henricks</h6>
    </div>
  </div>
</div>


    <p  style={{color:'#6B7588'}}  className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
        consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
        ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur
        </p>

       
       <div className='text-white mt-5' style={{
        backgroundColor:'#7C6512',
        borderRadius:'10px'
      }}>
        <div className='p-4'>
        <h5 className=' fw-bolder'>
        About the company project
        </h5>

        <h6 style={{color:'#DDE5E9'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet,
          consectetu Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur r 
        </h6>
        </div>

        </div>

        <Row className="justify-content-md-center mt-5">
        <Col xs lg="3">
          <h1 className='text-center mt-3 fw-bolder text-black'>36% <br/> 
          <span style={{ fontSize: "17px", color:"#7C6512" }}>Efficiency Increased</span></h1>
   
        </Col>
        <Col  xs lg="3">
        <h1 className='text-center mt-3 fw-bolder text-black'>10k+<br/>
         <span style={{ fontSize: "17px", color:"#06C270" }}>New customer gain</span></h1>
        </Col>
        <Col xs lg="3">
        <h1 className='text-center mt-3 fw-bolder text-black'>26% <br/> 
        <span style={{ fontSize: "17px", color:"#FFCC00" }}>Revenue Increased</span></h1>
        </Col>
      </Row>
    
    </div>
    </Container>
  )
}

export default Firstcompany