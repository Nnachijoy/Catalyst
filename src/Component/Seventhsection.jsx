import React, { useEffect, useRef, useState } from 'react';
import Seventhsection from '../assets/Seventhsection.png';
import first from '../assets/first.png';
import second from '../assets/second.png';
import thirdd from '../assets/thirdd.png';
import fourth from '../assets/fourth.png';

import Button from 'react-bootstrap/Button'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// function AutoLayoutSizingExample() {
//   return (
//     <div className='mt-5'>
//       <div className='seven' style={{ height: '380px' }}>
//         <Container>
//           <Row>
//             <Col>
//               <div>
//                 <img src={first} alt="first" className="" style={{ marginLeft: '80px', marginTop: '70px' }} />
//               </div>

//               <div style={{ marginTop: '150px' }}>
//                 <img src={second} alt="first" className="" />
//               </div>
//             </Col>

//             <Col>
//             <div className='text-center'>
//               <h4 className='text-white fw-bolder ' style={{ marginTop: '110px',
//                fontSize:'35px',   whiteSpace: 'nowrap', overflow: 'hidden'}}>Expand your company<br/>
//                 seamlessly with catalyst.</h4>
//                 <div className='text-center no-shadow'>
//                 <Button variant="" style={{ marginTop: '10px', boxShadow: 'none',
//                  backgroundColor: '#F8CA25', color:'white', textTransform: 'none'
//               }}>Give it a Try</Button>
//                 </div>
//                 </div>
//             </Col>

//             <Col>
//               <div>
//                 <img src={thirdd} alt="first" className="mt-5" style={{ marginLeft: '300px' }} />
//                 <div>

//                 </div>
//                 <img src={fourth} alt="first" className="" style={{ marginLeft: '300px', marginTop: '140px' }} />
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default AutoLayoutSizingExample;





function Section() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(sectionRef.current); // Stop observing once section is in view
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section>
      <div className="mt-5">
        <div>
        {/* <div ref={sectionRef} className={`typewriter-animation ${isVisible ? 'active' : ''}`}> */}
          <img src={Seventhsection} alt="Section Image" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

export default Section;




// import React from 'react';


// import first from '../assets/first.png';
// import second from '../assets/second.png';
// import thirdd from '../assets/thirdd.png';
// import fourth from '../assets/fourth.png';

// import Button from 'react-bootstrap/Button'; 
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// function AutoLayoutSizingExample() {
//   return (
//     <div className='mt-5'>
//       <div className='seven'>
//         <Container>
//           <Row>
//             <Col lg={4} md={12}>
//               <div className="image-container">
//                 <img src={first} alt="first" className="img-fluid" />
//               </div>

//               <div className="image-container mt-md-5">
//                 <img src={second} alt="first" className="img-fluid" />
//               </div>
//             </Col>

//             <Col lg={4} md={12} className="text-center mt-md-5">
//               <h4 className='text-white fw-bolder'>Expand your company<br/>seamlessly with catalyst.</h4>
//               <div className='no-shadow'>
//                 <Button variant="" style={{ backgroundColor: '#F8CA25', color: 'white', textTransform: 'none' }}>Give it a Try</Button>
//               </div>
//             </Col>

//             <Col lg={4} md={12}>
//               <div className="image-container mt-md-5">
//                 <img src={thirdd} alt="first" className="img-fluid" />
//               </div>
//               <div className="image-container mt-md-5">
//                 <img src={fourth} alt="first" className="img-fluid" />
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>
//   );
// }

// export default AutoLayoutSizingExample;

