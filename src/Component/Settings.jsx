import React, { useState, useRef, useEffect  } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import elitelogo from "../assets/elitelogo.png";
import company from "../assets/company.png";
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import draganddrop from "../assets/draganddrop.png";
import rectangle from "../assets/rectangle.png";
import helen from "../assets/helen.png";
import uju from "../assets/uju.png";
import Twitter from "../assets/Twitter.png";
import Threads from "../assets/Threads.png";
import telegram from "../assets/telegram.png";
import Instagram from "../assets/Instagram.png";
import Facebook from "../assets/Facebook.png";
import discord from "../assets/discord.png";
import Facebookdb from '../assets/facebookdb.png';
import Instagramdb from '../assets/instagramdb.png';
import Linkedindb from '../assets/linkedindb.png';
import Twitterdb from '../assets/twitterdb.png';
import Discorddb from '../assets/Discorddb.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';



// const [selectedLanguage, setSelectedLanguage] = useState('');

// const handleLanguageChange = (event) => {
//   setSelectedLanguage(event.target.value);
// };


const  Component6 = () => {

 

  const underlineHoverStyle = {
    textDecoration: 'none',
    position: 'relative',
    transition: 'all 0.3s ease'
  };

  const underlineHoverOnHover = {
    content: '',
    position: 'absolute',
    left: 0,
    bottom: '-2px',
    width: '100%',
    height: '2px',
    backgroundColor: '#000', // Change this to the desired underline color
  };

  const [selectedContent, setSelectedContent] = useState('overview');

  const renderContent = () => {


    const [text, setText] = useState('');

    const handleTextChange = (event) => {
      const newText = event.target.value;
      setText(newText);
    };
  
    const characterLimit = 500;
    const usedCharacters = text.length;
    const isOverLimit = usedCharacters > characterLimit;
  

    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleLanguageChange = (event) => {
      setSelectedLanguage(event.target.value);
    };

    const [clicked, setClicked] = useState(false);


    const toggleSwitch = () => {
      setClicked(prevClicked => !prevClicked);
    };

  
    const switchStyles = {
      position: 'relative',
      display: 'inline-block',
      width: '52px', // Increased width
      height: '30px', // Increased height
      backgroundColor: clicked ? 'yellow' : 'gray',
      borderRadius: '15px', // Half of the height to make it rounded
      transition: 'background-color 0.3s',
    };
  
    const thumbStyles = {
      position: 'absolute',
      top: '4px', // Adjust the position of the thumb
      left: clicked ? '30px' : '0',
      width: '22px', // Increased width of the thumb
      height: '22px', // Increased height of the thumb
      backgroundColor: 'white',
      borderRadius: '50%',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      transition: 'left 0.3s',
    };

    const [isContentVisible, setContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setContentVisible(prevVisible => !prevVisible);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };



  const [switches, setSwitches] = useState({
    switch1: false,
    switch2: false,
    switch3: false,
    switch4: false,
  });

  const handleToggle = (switchName) => {
    setSwitches((prevSwitches) => ({
      ...prevSwitches,
      [switchName]: !prevSwitches[switchName],
    }));
  };

  const switchData = [
    // Your switch data items
    // ...
      {
      id: 'switch1',
      label: 'Email',
      text: 'Receive emails about upcoming events and promotions. You can opt out anytime.',
      newsUpdate: 'Stay up-to-date with our exciting events and exclusive promotions.',
      newsUpdateHeader: 'Event and Promotion Updates',
    },
    {
      id: 'switch2',
      // label: 'Toggle 2',
      // text: 'Stay informed with weekly newsletters featuring the latest trends and tips.',
      newsUpdate: 'Explore the latest trends and stay ahead with our insightful newsletters.',
      newsUpdateHeader: 'Trendy Tips and Insights',
    },
    {
      id: 'switch3',
      // label: 'Toggle 3',
      // text: 'Get alerts for breaking news and important announcements.',
      newsUpdate: 'Be the first to know about breaking news and important updates.',
      newsUpdateHeader: 'Breaking News Alerts',
    },
    {
      id: 'switch4',
      // label: 'Toggle 4',
      // text: 'Receive personalized recommendations based on your preferences.',
      newsUpdate: 'Discover tailored recommendations that match your preferences.',
      newsUpdateHeader: 'Personalized Recommendations',
    },

    
  ];

  const styles = `
    /* Your styles here */
    .toggle-switch {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 20px;
      background-color: #ddd;
      border-radius: 10px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
   
    .toggle-switch .toggle-thumb {
      position: absolute;
      top: 1px;
      left: 1px;
      width: 18px;
      height: 18px;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s;
    }
   
    .toggle-switch.active {
      background-color: yellow;
    }
   
    .toggle-switch.active .toggle-thumb {
      transform: translateX(20px);
    }
  `;




    switch (selectedContent) {
      
      case 'security&privacy':
        return (
                <div>
                    
<MDBRow className='mt-4'>
            
            <MDBCol xs={12} md={6}>
            <Form.Label className='fw-bolder text-muted'>Current Password</Form.Label>
            <div className='border-custom p-3' style={{ border: '1px solid #DDE5E9'}}>
12345678
</div>




            </MDBCol>


            <MDBCol xs={12} md={6}>
           {/* emptycol */}
            </MDBCol>
    
            
          </MDBRow>   



          <MDBRow className='mt-4'>
            
            <MDBCol xs={12} md={6}>
            
          <h4 className='mt-2 fw-bolder' style={{color:'#7C6512'}}>Create New Password</h4>

          <Form>
      <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'>New Password</Form.Label>
        <div className="position-relative">
          <Form.Control
            className='p-3 shadow-0'
            placeholder="Enter a new password"
          />
        
        </div>
      </Form.Group>
    </Form>

    <Form>
      <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'>Confirm Password</Form.Label>
        <div className="position-relative">
          <Form.Control
            className='p-3 shadow-0'
            placeholder="Enter your password again"
          />
        
        </div>
      </Form.Group>
    </Form>

    <Button
             style={{
              backgroundColor:'#F8CA25', 
              color: 'white',
              fontSize: '16px',
            textTransform:'none',
            border: "2px solid #F8CA25",
          
          }}
              className='w-100 p-3 shadow-none mt-4 btn-sm'>
          <NavLink style={{color: 'white', textDecoration:'none', fontSize:'19px'}} to="/" >Save Password</NavLink>
              </Button>
            </MDBCol>


            <MDBCol xs={12} md={6}>
           {/* emptycol */}

            </MDBCol>
    
            
          </MDBRow>  

                </div>


        );

        
      default:
        return (
          <div>

            

<MDBRow className='mt-4'>
            
            <MDBCol xs={12} md={6}>
            <Form.Label className='fw-bolder text-muted'>First Name</Form.Label>
            <div className='border-custom p-3' style={{ border: 'none', backgroundColor:'#DDE5E9' }}>
Helen
</div>



            </MDBCol>


            <MDBCol xs={12} md={6}>
            <Form.Label className='fw-bolder text-muted'>Last Name</Form.Label>
            <div className='border-custom p-3' style={{ border: 'none', backgroundColor:'#DDE5E9' }}>
Chinweike
</div>



            </MDBCol>
    
            
          </MDBRow>   
  

  
<MDBRow className='mt-5'>
            
            <MDBCol xs={12} md={6}>
            <Form.Label className='fw-bolder text-muted'>Phone Number</Form.Label>
            <div className='border-custom p-3' style={{ border: 'none', backgroundColor:'#DDE5E9' }}>
            08127451653
</div>



            </MDBCol>


            <MDBCol xs={12} md={6}>
            <Form.Label className='fw-bolder text-muted'>Email Address</Form.Label>
            <div className='border-custom p-3' style={{ border: 'none', backgroundColor:'#DDE5E9' }}>
            helenchinweike@gmail.com
</div>



            </MDBCol>
    
            
          </MDBRow> 


            
<MDBRow className='mt-1'>
            
            <MDBCol xs={12} md={6}>
          {/* empty col */}
            </MDBCol>


            <MDBCol xs={12} md={6}>
    
            <p>
        Want to change your email address?{' '}
        <Link to="/change-email" className='' style={{ color: '#F8CA25' }}>
          Click here
        </Link>
      </p>

            </MDBCol>
    
            
          </MDBRow>

          </div>
        );
    }
  };


  return (
    <div style={{ backgroundColor: 'whiteSmoke', minHeight: '100vh' }}>
 

    <Container   className='p-5'>
        <h4 className='fw-bolder'>Settings</h4>
    <div className='mt-3' style={{ backgroundColor: 'white', minHeight: '100vh' }}>
   
    
    <div style={{ position: 'relative' }}>
  <img src={rectangle} alt="" className="p-0 me-1 container-fluid" style={{ margin: '0' }} />
  <div style={{ position: 'absolute', top: '110%', left: '0',
   transform: 'translateY(-50%)', zIndex: '1', padding: '10px'}}>
  <img src={uju}  /><span className='fw-bolder px-4' style={{fontSize:'20px'}}>Uju Jerome</span>
  
  </div>
 
 
</div>




   
    <div style={{ minHeight: '100vh' }}>
      <Navbar expand="lg" className="custom-navbar">
        <Container className=''  style={{marginTop:'120px'}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fw-bold px-3">
              <Nav.Link onClick={() => setSelectedContent('overview')} className="home me-5" style={{ color: '#7C6512' }}>
               Profile Details
              </Nav.Link>
         
              <Nav.Link onClick={() => setSelectedContent('security&privacy')} className="me-5">
              Security & Privacy
              </Nav.Link>
            
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr/>

      <Container className='p-3 '>
        <div className='p-4' style={{ backgroundColor: 'white', minHeight: '100vh' }}>
          {renderContent()}

          {/* Rest of your code */}
        </div>
      </Container>
    </div>



   

  </div>
  
  </Container>
  

</div>
  )
}

export default Component6