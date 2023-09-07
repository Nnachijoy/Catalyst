import React, { useEffect, useRef, useState } from 'react';
import Sixthsection from '../assets/Sixthsection.png';


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
    <section ref={sectionRef} className={`fade-in-section ${isVisible ? 'active' : ''}`}>
      <div className="container mt-5">
        <div className="text-center">
          <h5 className='fw-bolder'>Testimonies</h5>
          <p style={{ color: "#7C6512" }} className='text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor<br /> incididunt ut labore Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>
        <div>
          <img src={Sixthsection} alt="Section Image" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

export default Section;
