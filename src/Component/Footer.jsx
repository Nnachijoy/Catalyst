import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import catalystlogo from "../assets/catalystlogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './Footer.css';

library.add(fab, faFacebookF, faTwitter, faYoutube);

export default function App() {
  return (
    <MDBFooter bgColor='white' className='text-center text-lg-start text-muted footer ' linkColor='red'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
               
              <img src={catalystlogo} alt="" style={{ width: '230px', height: 'auto' }} />
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </MDBCol>
        
            
              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
  <h6 className='text-uppercase fw-bold mb-4' style={{ color: "#7C6512" }}>OUR PAGES</h6>
  {/* <p>
    <a href='#!' className='custom-link-color text-decoration-none'>
      About
    </a>
  </p> */}

<p>
<NavLink to="/about" className='custom-link-color text-decoration-none'>
  About
</NavLink>
</p>


<p>
<NavLink to="/portfolio" className='custom-link-color text-decoration-none'>
  Portfolio
</NavLink>
</p>


<p>
<NavLink to="/" className='custom-link-color text-decoration-none'>
  Blog
</NavLink>
</p>


<p>
<NavLink to="/" className='custom-link-color text-decoration-none'>
  Our Team
</NavLink>
</p>

<p>
<NavLink to="/contactus" className='custom-link-color text-decoration-none'>
 Contact Us
</NavLink>
</p>

</MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'style={{ color: "#7C6512"}}>PATNERSHIP</h6>
              <p>
                <a href='#!' className='custom-link-color text-decoration-none'>
                  Partners
                </a>
              </p>
              <p>
                <a href='#!' className='custom-link-color text-decoration-none'>
                  Peseller Program
                </a>
              </p>
              <p>
                <a href='#!' className='custom-link-color text-decoration-none'>
                  Al Labs
                </a>
              </p>
              <p>
                <a href='#!' className='custom-link-color text-decoration-none'>
                  Our Team
                </a>
              </p>
              <p>
<NavLink to="/contactus" className='custom-link-color text-decoration-none'>
 Contact Us
</NavLink>
</p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'style={{ color: "#7C6512"}}>GET IN TOUCH</h6>
              <h6 className=''>Contact us any time for getting
support.</h6>

<a href='mailto:contact@catalyst.com.com' style={{ color: '#F8CA25' }} className='text-decoration-none footer'>
  <FontAwesomeIcon icon='' className="me-3 mt-5" />
  contact@catalyst.com.com
</a>
              <div className="social-icons mt-4 custom-link-color">
                <a href='https://www.facebook.com' className='me-4  custom-link-color'>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href='https://www.twitter.com' className='me-4  custom-link-color '>
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href='https://www.youtube.com' className='me-4  custom-link-color '>
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ fontSize: '12px' }}>
      © 2023 Catalyst All rights reserved
    </div>
    </MDBFooter>
  );
}
