import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from 'react-bootstrap/Button';
import mainimg from "../../assets/mainimg.png";
import topimg from "../../assets/topimg.png";
import leftimg from "../../assets/leftimg.png";
import bottomimg from "../../assets/bottomimg.png";
import verticalline from "../../assets/verticalline.png";
import { NavLink } from "react-router-dom";
import Dashboard from "../Dashboard";
import Ddd from "../Ddd";
import herooo from "../../assets/herooo.png";
import { Button, Spinner } from "react-bootstrap";
import HeroImgBox from "./HeroImgBox";

const Hero = () => {
  const [amountRaised, setAmountRaised] = useState(1500);
  const [minimum, setMinimum] = useState(1500);
  const [valuationCap, setValuationCap] = useState(1500);

  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll(".slide-in-right");
    elementsToAnimate.forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "translateX(0)";
    });
  }, []);

  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll(".slide-in");
    elementsToAnimate.forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "translateX(0)"; // Use translateX(0) instead of translateY(0)
    });
  }, []);

  useEffect(() => {
    const animateNumbers = () => {
      const step = 100;
      const animate = (currentValue, targetValue, setter) => {
        if (currentValue > targetValue) {
          const newValue = Math.max(currentValue - step, targetValue);
          setter(newValue);
          requestAnimationFrame(() => animate(newValue, targetValue, setter));
        }
      };

      // Call animate function for each number
      animate(15000, 240, setAmountRaised);
      animate(15000, 1.88, setMinimum);
      animate(15000, 26, setValuationCap);
    };

    // Call the animation function
    animateNumbers();
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    // Simulate an asynchronous operation (e.g., fetching data from the server)
    setTimeout(() => {
      // After the operation is complete, navigate to the next page or perform any desired action
      // Replace 'next-page' with the actual URL or action you want to perform.
      window.location.href = "/signup";
    }, 2000); // Simulating 2 seconds of loading time
  };

  return (
    <section className="hero">
      <Container className="p-5">
        <Row>
          <Col md={8}>
            <div className="herofw">
              <div className="hero-h1">
                <h1 className="mt-0  fs-md-2 fs-lg-4 slide-in-right hero-h1">
                  Welcome to <span className="animated-bg">The Catalyst,</span>{" "}
                  <br />
                  where innovation
                  <br />
                  meets investment.
                </h1>
              </div>
              <p className="mt-3 slide-in-right " style={{ color: "#6B7588" }}>
                We are dedicated to fueling the growth of promising startups and
                driving
                <br className="d-none d-sm-block" />
                forward groundbreaking ideas. With our deep expertise and
                extensive
                <br className="d-none d-sm-block" />
                network, we empower entrepreneurs to make their visions a
                reality.
              </p>

              <Button
                variant="primary"
                className="mt-3 text-white w-50 btn-lg d-none d-lg-block p-3"
                style={{
                  background: "#F8CA25",
                  border: "none",
                  transition: "background 0.3s",

                  textTransform: "none",
                  boxShadow: "none",
                  fontSize: "17px",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#000")}
                onMouseLeave={(e) => (e.target.style.background = "#F8CA25")}
                disabled={isLoading}
                onClick={handleClick}
              >
                {isLoading ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                      style={{ marginRight: "5px" }}
                    />
                    <NavLink
                      to="/signup"
                      className="text-white"
                      style={{ textDecoration: "none" }} // Remove underline
                    >
                      Apply Now
                    </NavLink>
                  </>
                ) : (
                  "Apply Now"
                )}
              </Button>

              <Button
                className="mt-3 text-white w-50 d-lg-none"
                style={{
                  background: "#F8CA25",
                  border: "none",
                  transition: "background 0.3s",
                  textTransform: "none",
                  boxShadow: "none",
                  fontSize: "17px",
                }}
                onMouseEnter={(e) => (e.target.style.background = "#000")}
                onMouseLeave={(e) => (e.target.style.background = "#F8CA25")}
              >
                <NavLink
                  to="/signup"
                  className="text-white"
                  style={{ textDecoration: "none" }} // Remove underline
                >
                  Apply Now
                </NavLink>
              </Button>

              <div>
                <div className="mt-5 w-50 w-md-auto">
                  <Row className="align-items-center custom-row">
                    <Col xs={12} sm={12} md={4} className="mb-0">
                      <h6 className="fw-bolder">${amountRaised.toFixed(1)}K</h6>
                      <p
                        className="mb-0 fw-bolder"
                        style={{ fontSize: "12px" }}
                      >
                        Amount Raised
                      </p>
                    </Col>

                    <Col xs={12} sm={1} md={0}>
                      <div className="d-flex" style={{ height: "70px" }}>
                        <div className="vr"></div>
                      </div>
                    </Col>

                    <Col xs={12} sm={12} md={2} className="mb-0">
                      {/* <h6 className="fw-bolder">${minimum.toFixed(1)}K</h6> */}
                      <h6 className="fw-bolder">$1.6K</h6>
                      <p
                        className="mb-0 fw-bolder"
                        style={{ fontSize: "12px" }}
                      >
                        Minimum
                      </p>
                    </Col>

                    <Col xs={1} sm={1} md={0}>
                      <div className="d-flex" style={{ height: "70px" }}>
                        <div className="vr"></div>
                      </div>
                    </Col>

                    <Col xs={12} sm={12} md={4} className="mb-0">
                      <h6 className="fw-bolder">${valuationCap.toFixed(1)}K</h6>
                      <p
                        className="mb-0 fw-bolder"
                        style={{ fontSize: "12px" }}
                      >
                        Valuation Cap
                      </p>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>

          {/* <Col md={4} className='position-relative mt-5 slide-in'>
  <div className="position-absolute top-0 start-0 d-none d-md-block slide-in" style={{ zIndex: '2' }}>
    <img src={topimg} alt="Top Image" className="img-fluid" style={{ marginTop: '-100px', marginLeft: '-130px' }} />
  </div>
  <img src={mainimg} alt="Main Image" className="img-fluid slide-in" />
  <div className="position-absolute top-0 end-0 d-none d-md-block slide-in" style={{ zIndex: '2' }}>
    <img src={leftimg} alt="Right Image" className="img-fluid" style={{ marginTop: '-65px', marginLeft: '110px' }} />
  </div>
  <div className="position-absolute bottom-0 d-none d-md-block slide-in" style={{ top: '40%', left: '-260px', zIndex: '1' }}>
    <img src={bottomimg} alt="Bottom Image" className="img-fluid" />
  </div>
</Col> */}
          <Col md={4} className=" slide-in">
            <HeroImgBox />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
