import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cardimg from "../assets/cardimg.png";

function useCountAnimation(targetNumber) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < targetNumber) {
      const timeoutId = setTimeout(() => {
        setCount((prevCount) => Math.min(prevCount + 1, targetNumber));
      }, 20); // Adjust the timeout value for a smoother animation
      return () => clearTimeout(timeoutId);
    }
  }, [count, targetNumber]);

  return count;
}

function formatNumber(num) {
  return num < 10 ? `0${num}` : num.toString();
}

function Cards() {
  const registeredStartups = useCountAnimation(4000);
  const countries = useCountAnimation(4);
  const activePortfolio = useCountAnimation(1000);

  return (
    <div>
      <Container className="my-5 p-5 mt-5">
        <div className='text-center'>
          <h3 className='fw-bolder'>What Have You Accomplished</h3>
        </div>
        <Row className="g-4 mt-3">
          {/* Card 1 */}
          <Col className="mb-4">
            <Card className="hover-card border shadow-1">
              <Card.Body className="text-center">
                <h5 className='fw-bolder count large-font'>{formatNumber(registeredStartups)}</h5>
                <p>Registered StartUps</p>
              </Card.Body>
            </Card>
          </Col>
          {/* Card 2 */}
          <Col className="mb-4">
            <Card className="hover-card border shadow-1">
              <Card.Body className="text-center">
                <h5 className='fw-bolder count large-font'>{formatNumber(countries)}</h5>
                <p>Countries</p>
              </Card.Body>
            </Card>
          </Col>
          {/* Card 3 */}
          <Col className="mb-4">
            <Card className="hover-card border shadow-1">
              <Card.Body className="text-center">
                <h5 className='fw-bolder count large-font'>{formatNumber(activePortfolio)}</h5>
                <p>Active Portfolio</p>
              </Card.Body>
            </Card>
          </Col>
          {/* Card 4 */}
          <Col className="mb-4">
            <Card className="hover-card shadow-1 border">
              <Card.Body className="text-center">
                <h5 className='fw-bolder count large-font'>{formatNumber(countries)}</h5>
                <p>Countries</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
