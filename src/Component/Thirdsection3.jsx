


// import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import culture from "../assets/culture.png";
// import yourbrand from "../assets/yourbrand.png";
// import logodesign from "../assets/logodesign.png";
// import loremippsum from "../assets/loremippsum.png";
// import fourthhsvg from "../assets/fourthhsvg.png";
// import closex from "../assets/closex.png";
// import Firstcompany from './Firstcompany';


// function Cards() {
  
 
//     const [selectedCard, setSelectedCard] = useState(null);
//     const [isSlidingIn, setIsSlidingIn] = useState(false);
  
//     const handleCardClick = (index) => {
//       setSelectedCard(cards[index]);
//       setIsSlidingIn(true);
  
//       setTimeout(() => {
//         setIsSlidingIn(false);
//       }, 300); // Adjust the time to match the transition duration
//     };

//   const cards = [
//     { imgSrc: culture, content: <Firstcompany /> },
//     { imgSrc: yourbrand, content: <Firstcompany /> },
//     { imgSrc: logodesign, content:<Firstcompany />  },
//     { imgSrc: loremippsum, content: "Content for Lorem Ipsum" },
//     { imgSrc: culture, content: <Firstcompany /> },
//     { imgSrc: yourbrand, content: <Firstcompany /> },
//     { imgSrc: logodesign, content:<Firstcompany />  },
//     { imgSrc: loremippsum, content: "Content for Lorem Ipsum" },
//     { imgSrc: culture, content: <Firstcompany /> },
//     { imgSrc: yourbrand, content: <Firstcompany /> },
//     { imgSrc: logodesign, content:<Firstcompany />  },
//     { imgSrc: loremippsum, content: "Content for Lorem Ipsum" },
//   ];
  

 

//   return (
//     <Container>



// <div className='text-center my-5 p-5 mt-2'>
//       <h3 className='fw-bolder'>Igniting Innovation, One<br/> Venture at a Time</h3>
//         <p  className='mt-3'>Welcome to our diverse and dynamic portfolio of startups. Each one of 
//           these visionary<br/> ventures represents the essence of innovation, resilience, 
//           and the pursuit of<br/> excellence. We are dedicated in funding Pre-Seed 
//           to Series A in Health tech, Edtech,<br/> Enterprise SaaS, Agri-Tech, Food Security,
//            Green Energy and Financial Services. </p>
//         </div>
//         <Container>
//   <div className='w-100'>
//     <img
//       src={fourthhsvg}
//       alt=""
//       className=""
//       style={{ maxWidth: '100%', height: 'auto' }} // Set max width to 100% and auto adjust height
//     />
//   </div>
// </Container>


// <div>
//   <p>With over 25,000 customers worldwide, Appex is the world leading analytics and marketing suite for Instagram and a 
//     partner of the world's most-loved brands such as National Geographic, Gucci, Marc Jacobs, Samsung, Emirates and more.</p>


// <p>
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//  sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
// </p>

// </div>


// <div>
//       <Row className="g-4 mt-2">
//         {cards.map((card, index) => (
//           <Col md={3} className="mb-4" key={index}>
//             <img
//               src={card.imgSrc}
//               alt={`Card ${index + 1}`}
//               onClick={() => handleCardClick(index)}
//             />
//           </Col>
//         ))}
//       </Row>

// <div className=' w-75' style={{ marginLeft: 'auto' }}>
//       {selectedCard && (
//         <div 
//           style={{
           
//             top: '50%',
//             left: '50%',
//             transform: 'translateY(-100%)',
//             transition: 'transform 0.5s ease-in-out', // Add slide-in transition
//             transform: isSlidingIn ? 'translateX(-100%)' : 'translateY(-100%)',
            
//             backgroundColor: '#ffffff',
//             padding: '20px',
//             boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//             zIndex: '9999',
//           }}








//         >
//           <button
//             onClick={() => setSelectedCard(null)}
//             style={{
//               border: 'none',
//               background: 'none',
//               padding: '0',
//               float: 'right',
//             }}
//           >
//             <img 
//               src={closex} 
//               alt="" 
//               className="border-none" 
//               style={{
//                 border: 'none',
//                 marginRight: '10px',
//               }} 
//             />
//           </button>
//           <p 
//             className="fw-bolder" 
//             style={{
//               fontSize: '20px',
//             }}
//           >
//             {selectedCard.content}
//           </p>
//         </div>
//       )}
//     </div>
//     </div>

//     </Container>
//   );
// }

// export default Cards;




// import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Pagination from 'react-bootstrap/Pagination'; // Import Pagination component

// import culture from "../assets/culture.png";
// import yourbrand from "../assets/yourbrand.png";
// import logodesign from "../assets/logodesign.png";
// import loremippsum from "../assets/loremippsum.png";
// import fourthhsvg from "../assets/fourthhsvg.png";
// import closex from "../assets/closex.png";
// import Firstcompany from './Firstcompany';

// function Cards() {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [isSlidingIn, setIsSlidingIn] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const cardsPerPage = 4;

//   const handleCardClick = (index) => {
//     setSelectedCard(cards[index]);
//     setIsSlidingIn(true);

//     setTimeout(() => {
//       setIsSlidingIn(false);
//     }, 300);
//   };

//   const cards = [
//     { imgSrc: culture, content: <Firstcompany /> },
//     { imgSrc: yourbrand, content: <Firstcompany /> },
//     { imgSrc: logodesign, content:<Firstcompany />  },
//     { imgSrc: loremippsum, content: "Content for Lorem Ipsum" },
//     { imgSrc: culture, content: <Firstcompany /> },
//     { imgSrc: yourbrand, content: <Firstcompany /> },
//     { imgSrc: logodesign, content:<Firstcompany />  },
//     { imgSrc: loremippsum, content: "Content for Lorem Ipsum" },
//     { imgSrc: culture, content: <Firstcompany /> },
//     { imgSrc: yourbrand, content: <Firstcompany /> },
//     { imgSrc: logodesign, content:<Firstcompany />  },
//     { imgSrc: loremippsum, content: "Content for Lorem Ipsum" },
//   ];
//   const [hoveredIndex1, setHoveredIndex1] = useState(null); // For the first set of rows
//   const [hoveredIndex2, setHoveredIndex2] = useState(null); // For the second set of rows

//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };


//   const paginationItems = [];
//   for (let number = 1; number <= Math.ceil(cards.length / cardsPerPage); number++) {
//     paginationItems.push(
//       <Pagination.Item
//         key={number}
//         active={number === currentPage}
//         onClick={() => paginate(number)}
//       >
//         {number}
//       </Pagination.Item>,
//     );
//   }

//   return (
//     <Container>
//       <div className='text-center my-5 p-5 mt-2'>
//         <h3 className='fw-bolder'>Igniting Innovation, One<br/> Venture at a Time</h3>
//         <p className='mt-3'>Welcome to our diverse and dynamic portfolio of startups. Each one of 
//           these visionary<br/> ventures represents the essence of innovation, resilience, 
//           and the pursuit of<br/> excellence. We are dedicated in funding Pre-Seed 
//           to Series A in Health tech, Edtech,<br/> Enterprise SaaS, Agri-Tech, Food Security,
//           Green Energy and Financial Services. </p>
//       </div>
//       <Container>
//         <div className='w-100'>
//           <img
//             src={fourthhsvg}
//             alt=""
//             className=""
//             style={{ maxWidth: '100%', height: 'auto' }}
//           />
//         </div>
//       </Container>

//       <div>
//         <p>With over 25,000 customers worldwide, Appex is the world leading analytics and marketing suite for Instagram and a 
//           partner of the world's most-loved brands such as National Geographic, Gucci, Marc Jacobs, Samsung, Emirates and more.</p>

//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
//         </p>
//       </div>

//       <div>
//         {/* <Row className="g-4 mt-2">
//           {currentCards.map((card, index) => (
//             <Col md={3} className="mb-4" key={index}>
//               <img
//                 src={card.imgSrc}
//                 alt={`Card ${index + 1}`}
//                 onClick={() => handleCardClick(index)}
//               />
//             </Col>
//           ))}
//         </Row> */}
//        <Row className="g-4 mt-2">
//         {currentCards.map((card, index) => (
//           <Col
//             md={3}
//             className="mb-4"
//             key={index}
//             style={{
//               cursor: 'pointer',
//               boxShadow: hoveredIndex1 === index ? '0 4px 12px rgba(0, 0, 0, 0.2)' : 'none',
//               transition: 'box-shadow 0.3s',
//             }}
//             onMouseEnter={() => setHoveredIndex1(index)}
//             onMouseLeave={() => setHoveredIndex1(null)}
//           >
//             <img
//               src={card.imgSrc}
//               alt={`Card ${index + 1}`}
//               onClick={() => handleCardClick(index)}
//             />
//           </Col>
//         ))}
//       </Row>

//       {/* Second set of rows */}
//       <Row className="g-4 mt-2">
//         {currentCards.map((card, index) => (
//           <Col
//             md={3}
//             className="mb-4"
//             key={index}
//             style={{
//               cursor: 'pointer',
//               boxShadow: hoveredIndex2 === index ? '0 4px 12px rgba(0, 0, 0, 0.2)' : 'none',
//               transition: 'box-shadow 0.3s',
//             }}
//             onMouseEnter={() => setHoveredIndex2(index)}
//             onMouseLeave={() => setHoveredIndex2(null)}
//           >
//             <img
//               src={card.imgSrc}
//               alt={`Card ${index + 1}`}
//               onClick={() => handleCardClick(index)}
//             />
//           </Col>
//         ))}
//       </Row>
        
//         <div className='w-75' style={{ marginLeft: 'auto' }}>
//           {selectedCard && (
//             <div 
//               style={{
//                 top: '50%',
//                 left: '50%',
//                 transform: 'translateY(-100%)',
//                 transition: 'transform 0.5s ease-in-out',
//                 transform: isSlidingIn ? 'translateX(-50%)' : 'translateY(-50%)',
//                 backgroundColor: '#ffffff',
//                 padding: '20px',
//                 boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
//                 zIndex: '9999',
//               }}
//             >
//               <button
//                 onClick={() => setSelectedCard(null)}
//                 style={{
//                   border: 'none',
//                   background: 'none',
//                   padding: '0',
//                   float: 'right',
//                 }}
//               >
//                 <img 
//                   src={closex} 
//                   alt="" 
//                   className="border-none" 
//                   style={{
//                     border: 'none',
//                     marginRight: '10px',
//                   }} 
//                 />
//               </button>
//               <p 
//                 className="fw-bolder" 
//                 style={{
//                   fontSize: '20px',
//                 }}
//               >
//                 {selectedCard.content}
//               </p>
//             </div>
//           )}
//         </div>

//         <div className="mt-4">
//           <Pagination>{paginationItems}</Pagination>
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default Cards;




import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';

import culture from "../assets/culture.png";
import yourbrand from "../assets/yourbrand.png";
import logodesign from "../assets/logodesign.png";
import loremippsum from "../assets/loremippsum.png";
import fourthhsvg from "../assets/fourthhsvg.png";
import closex from "../assets/closex.png";
import Firstcompany from './Firstcompany';

function Cards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isSlidingIn, setIsSlidingIn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const handleCardClick = (index) => {
    setSelectedCard(cards[index]);
    setIsSlidingIn(true);

    setTimeout(() => {
      setIsSlidingIn(false);
    }, 300);
  };

  const cards = [
    { imgSrc: culture, content: <Firstcompany /> },
    { imgSrc: yourbrand, content: <Firstcompany /> },
    { imgSrc: logodesign, content: <Firstcompany /> },
    { imgSrc: loremippsum, content: <Firstcompany />  },

    { imgSrc: culture, content: <Firstcompany /> },
    { imgSrc: yourbrand, content: <Firstcompany /> },
    { imgSrc: logodesign, content: <Firstcompany /> },
    { imgSrc: loremippsum, content: <Firstcompany />  },


  
  ];

  const [hoveredIndex1, setHoveredIndex1] = useState(null); // For the first set of rows
  const [hoveredIndex2, setHoveredIndex2] = useState(null); // For the second set of rows

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  // Ensure all cards are included by slicing the entire array
  const currentCards = cards.slice(0, cards.length);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const paginationItems = [];
  for (let number = 1; number <= Math.ceil(currentCards.length / cardsPerPage); number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => paginate(number)}
      >
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Container>
      <div className='text-center my-5 p-5 mt-2'>
        <h3 className='fw-bolder'>Igniting Innovation, One<br/> Venture at a Time</h3>
        <p className='mt-3'>Welcome to our diverse and dynamic portfolio of startups. Each one of 
          these visionary<br/> ventures represents the essence of innovation, resilience, 
          and the pursuit of<br/> excellence. We are dedicated in funding Pre-Seed 
          to Series A in Health tech, Edtech,<br/> Enterprise SaaS, Agri-Tech, Food Security,
          Green Energy and Financial Services. </p>
      </div>
      <Container>
        <div className='w-100'>
          <img
            src={fourthhsvg}
            alt=""
            className=""
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </Container>

      <div>
        <p>With over 25,000 customers worldwide, Appex is the world leading analytics and marketing suite for Instagram and a 
          partner of the world's most-loved brands such as National Geographic, Gucci, Marc Jacobs, Samsung, Emirates and more.</p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
        </p>
      </div>

      <div>
        {/* First set of rows */}
        <Row className="g-4 mt-2">
          {currentCards.slice(0, 4).map((card, index) => (
            <Col
              md={3}
              className="mb-4"
              key={index}
              style={{
                cursor: 'pointer',
                boxShadow:
                  selectedCard === cards[index]
                    ? '0 4px 12px rgba(0, 0, 0, 0.2)' // Active clicked item
                    : hoveredIndex1 === index
                    ? '0 4px 12px rgba(0, 0, 0, 0.2)' // Hovered item
                    : 'none',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={() => setHoveredIndex1(index)}
              onMouseLeave={() => setHoveredIndex1(null)}
              onClick={() => handleCardClick(index)}
            >
              <img
                src={card.imgSrc}
                alt={`Card ${index + 1}`}
              />
            </Col>
          ))}
        </Row>

        {/* Second set of rows */}
        <Row className="g-4 mt-2">
          {currentCards.slice(4, 8).map((card, index) => (
            <Col
              md={3}
              className="mb-4"
              key={index}
              style={{
                cursor: 'pointer',
                boxShadow:
                  selectedCard === cards[index + 4]
                    ? '0 4px 12px rgba(0, 0, 0, 0.2)' // Active clicked item
                    : hoveredIndex2 === index
                    ? '0 4px 12px rgba(0, 0, 0, 0.2)' // Hovered item
                    : 'none',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={() => setHoveredIndex2(index)}
              onMouseLeave={() => setHoveredIndex2(null)}
              onClick={() => handleCardClick(index + 4)}
            >
              <img
                src={card.imgSrc}
                alt={`Card ${index + 1}`}
              />
            </Col>
          ))}
        </Row>

        <div className='w-75' style={{ marginLeft: 'auto' }}>
          {selectedCard && (
            <div 
              style={{
                top: '50%',
                left: '50%',
                transform: 'translateY(-100%)',
                transition: 'transform 0.5s ease-in-out',
                transform: isSlidingIn ? 'translateX(-50%)' : 'translateY(-70%)',
                backgroundColor: '#ffffff',
                padding: '20px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                zIndex: '9999',
              }}
            >
              <button
                onClick={() => setSelectedCard(null)}
                style={{
                  border: 'none',
                  background: 'none',
                  padding: '0',
                  float: 'right',
                }}
              >
                <img 
                  src={closex} 
                  alt="" 
                  className="border-none" 
                  style={{
                    border: 'none',
                    marginRight: '10px',
                  }} 
                />
              </button>
              <p 
                className="fw-bolder" 
                style={{
                  fontSize: '20px',
                }}
              >
                {selectedCard.content}
              </p>
            </div>
          )}
        </div>

        <div className="mt-4">
          <Pagination>{paginationItems}</Pagination>
        </div>
      </div>
    </Container>
  );
}

export default Cards;




















// <Row xs={1} md={2} lg={3} className="g-4 mt-3">
// {/* Card 1 */}
// <Col className="mb-4">
//   <Card style={{ width: '18rem',   boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }} className='border-0'>
//     <Card.Img variant="top" src={cardimg} alt="" />
//     <Card.Body>
//       <Card.Text className='fw-bolder' style={{ fontSize: "17px" }}>
//         Build beautiful prototypes with thousands of components.
//       </Card.Text>
//       <Card.Text style={{ color: "#8F90A6", fontSize: "14px" }}>
//         Leverage agile frameworks to provide a robust synopsis anymore for high level overviews. Iterative approaches.
//       </Card.Text>
//       <a href="#" style={{ color: "#F8CA25", textDecoration: "none", display: "flex", alignItems: "center", fontWeight: "bolder", marginTop: "25px" }}>
//         <span style={{ flexGrow: 1 }}>See Case Study</span>
       
//       </a>
//     </Card.Body>
//   </Card>
// </Col>
// {/* Card 2 */}
// <Col className="mb-4">
//   <Card style={{ width: '18rem',   boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }} className='border-0'>
//     <Card.Img variant="top" src={cardimg} alt="" />
//     <Card.Body>
//       <Card.Text className='fw-bolder' style={{ fontSize: "17px" }}>
//         Build beautiful prototypes with thousands of components.
//       </Card.Text>
//       <Card.Text style={{ color: "#8F90A6", fontSize: "14px" }}>
//         Leverage agile frameworks to provide a robust synopsis anymore for high level overviews. Iterative approaches.
//       </Card.Text>
//       <a href="#" style={{ color: "#F8CA25", textDecoration: "none", display: "flex", alignItems: "center", fontWeight: "bolder", marginTop: "25px" }}>
//         <span style={{ flexGrow: 1 }}>See Case Study</span>
       
//       </a>
//     </Card.Body>
//   </Card>
// </Col>
// {/* Card 3 */}
// <Col className="mb-4">
//   <Card style={{ width: '18rem',   boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }} className='border-0'>
//     <Card.Img variant="top" src={cardimg} alt="" />
//     <Card.Body>
//       <Card.Text className='fw-bolder' style={{ fontSize: "17px" }}>
//         Build beautiful prototypes with thousands of components.
//       </Card.Text>
//       <Card.Text style={{ color: "#8F90A6", fontSize: "14px" }}>
//         Leverage agile frameworks to provide a robust synopsis anymore for high level overviews. Iterative approaches.
//       </Card.Text>
//       <a href="#" style={{ color: "#F8CA25", textDecoration: "none", display: "flex", alignItems: "center", fontWeight: "bolder", marginTop: "25px" }}>
//         <span style={{ flexGrow: 1 }}>See Case Study</span>
       
//       </a>
//     </Card.Body>
//   </Card>
// </Col>
// </Row>