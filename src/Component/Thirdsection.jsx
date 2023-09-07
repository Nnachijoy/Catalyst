// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import icon40 from "../assets/icon40.png";
// import thirdsectionn from "../assets/thirdsectionn.png";
// import Button from 'react-bootstrap/Button';
// import './Secondsection.css'; // Import the CSS file

// const Secondsection = () => {
//   return (
//     <section style={{ background: "#FFFBEF" }}>
    
//       <Container className='p-5'>

   
//         <Row>
//         <Col md={6}>
//   <div className="image-container" style={{ marginBottom: "-1rem", marginTop: "-2rem" }}>
//     <div className="image-wrapper">
//       <img src={thirdsectionn} alt="" className="w-100" />
//     </div>
//     <h6 className="text-center mb-5" style={{ color: "#7C6512", marginLeft: "170px", marginBottom: "0" }}>
//       USER INTERFACE
//     </h6>
//   </div>
// </Col>




//           <Col md={6} className='mt-5'>
            
//               <h6  style={{ color: "#7C6512" }}>USER INTERFACE</h6>
            
//             <h3 className='fw-bolder '>Communicate your vision,<br />share your designs.</h3>
//             <p className=''>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do eiusmod tempor
//                incididunt<br />ut labore Lorem ipsum dolor sit amet, consectetur </p>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Secondsection;


import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import secondsection from "../assets/secondsection.png";
import Button from 'react-bootstrap/Button';
import icon40 from "../assets/icon40.png";
import thirdsvg from "../assets/thirdsvg.png";
import culture from "../assets/culture.png";
import yourbrand from "../assets/yourbrand.png";
import logodesign from "../assets/logodesign.png";


import './Secondsection.css'; // Import the CSS file

const Fourthsection = () => {
  return (
    <section style={{ background: "#FFFBEF" }}>
      <Container className='p-5'>
        <Row>
        <Col md={6}>
            <img src={thirdsvg} alt="" className="w-100 mt-5" /> 
          </Col>
          <Col md={6} className='d-flex align-items-center'>
            <div>
            <img src={icon40} alt="" className="small-icon mt-4" />
              {/* <h6 style={{ color: "#7C6512" }} className='mt-5'>USER INTERFACE</h6> */}
              <h3 className='fw-bolder mt-3'>Venturing Without Limit<br /> user-friendly platform</h3>
              <p className='mt-2'>
                Our diverse portfolio showcases visionary startups that span various industries.
                 These forward-thinking ventures are not just transforming markets but also revolutionizing 
                 how we live and work. Explore their stories of innovation, 
                resilience, and growth as they continue to shape the future with groundbreaking solutions and disruptive ideas.
                 </p>
                 {/* <Button
  className='mt-3 text-white'
  style={{
    background: "#F8CA25",
    border: "none",
    transition: 'background 0.3s'
  }}
  onMouseEnter={(e) => e.target.style.background = '#000'}
  onMouseLeave={(e) => e.target.style.background = '#F8CA25'}
>
  Learn More {' '}
  <span
    className='fw-bolder'
    style={{
      fontSize: '30px',
      letterSpacing: '-1px',
      fontWeight: 'bolder',
      lineHeight: '30px',
     
    }}
  >
    &rarr;
  </span>
</Button> */}



            </div>
          </Col>
         
        </Row>
      </Container>
    </section>
  );
}

export default Fourthsection;













