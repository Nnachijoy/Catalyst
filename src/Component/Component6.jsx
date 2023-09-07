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
      
      case 'notification':
        return (

<div className="container">
  <style>{styles}</style>
  {switchData.map((item, index) => (
    <div className="row align-items-center" key={item.id}>
      <div className="col-md-4">
        {index === 0 && (
          <h6 style={{ color: '#7C6512' }} className="fw-bolder mt-5">
            {item.label} Notifications
          </h6>
        )}
        <p style={{ fontSize: '15px' }}>{item.text}</p>
      </div>
      <div className="col-md-7">
        <h5 className="fw-bolder">{item.newsUpdateHeader}</h5>
        <p>{item.newsUpdate}</p>
      </div>
      <div className="col-md-1">
        <div
          className={`toggle-switch ${switches[item.id] ? 'active' : ''}`}
          onClick={() => handleToggle(item.id)}
        >
          <div className="toggle-thumb"></div>
        </div>
      </div>
    </div>
  ))}

</div>









//          <div>
// <div className="container">



// <div className="row">
//     <div className="col-md-4 col-12">
//      <h6 style={{color:'#7C6512'}} className='fw-bolder'>Email Notification</h6>
//      <p style={{fontSize:'14px'}}>Get emails to find out what’s going on when you’re not 
//      online. You can turn these off.</p>
//     </div>
    
//     <div className="col-md-7 col-10">
//  <h5 className='fw-bolder'>News and Updates</h5>
//  <p>Lorem ipsum dolor news about product 
//   and feature updates consectetur adipiscing elit, sed do eiusmod tempor incididu tlabor</p>
//     </div>
//     <div className="col-md-1 col-2">
//     <Form className='mb-3'>
//       <label style={switchStyles} onClick={toggleSwitch}>
//         <span style={thumbStyles}></span>
//       </label>
//     </Form>
//     </div>
//   </div>




//   <div className="row">
//     <div className="col-md-4 col-12">

//     </div>
//     <div className="col-md-7 col-10">
//  <h5 className='fw-bolder'>Tips and Tutorials</h5>
//  <p>Lorem ipsum dolor news about product 
//   and feature updates consectetur adipiscing elit, sed do eiusmod tempor incididu tlabor</p>
//     </div>
//     <div className="col-md-1 col-2">
//     <Form className='mb-3'>
//       <label style={switchStyles} onClick={toggleSwitch}>
//         <span style={thumbStyles}></span>
//       </label>
//     </Form>
//     </div>
//   </div>


//   <div className="row">
//     <div className="col-md-4 col-12">

//     </div>
//     <div className="col-md-7 col-10">
//  <h5 className='fw-bolder'>News and Updates</h5>
//  <p>Lorem ipsum dolor news about product 
//   and feature updates consectetur adipiscing elit, sed do eiusmod tempor incididu tlabor</p>
//     </div>
//     <div className="col-md-1 col-2">
//     <Form className='mb-3'>
//       <label style={switchStyles} onClick={toggleSwitch}>
//         <span style={thumbStyles}></span>
//       </label>
//     </Form>
//     </div>
//   </div>


//   <div className="row">
//     <div className="col-md-4 col-12">

//     </div>
//     <div className="col-md-7 col-10">
//  <h5 className='fw-bolder'>News and Updates</h5>
//  <p>Lorem ipsum dolor news about product 
//   and feature updates consectetur adipiscing elit, sed do eiusmod tempor incididu tlabor</p>
//     </div>
//     <div className="col-md-1 col-2">
//     <Form className='mb-3'>
//       <label style={switchStyles} onClick={toggleSwitch}>
//         <span style={thumbStyles}></span>
//       </label>
//     </Form>
//     </div>
//   </div>
// </div>













//          </div>
        );
      case 'security':
        return (
        <div>
<Row>
  <Col>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'>Current Password</Form.Label>
        <div className="position-relative">
          <Form.Control
            className='p-3'
            type={showPassword ? "text" : "password"}
            placeholder="12345678"
          />
          <div
            className="position-absolute end-0 p-5 top-50 justify-content-end translate-middle-y"
            style={{ cursor: 'pointer', left:'' }}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </Form.Group>
    </Form>
  </Col>

  <Col>
  
  </Col>
</Row>


<Row>
  <Col>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'>Set Password</Form.Label>
        <div className="position-relative">
          <Form.Control
            className='p-3'
            type={showPassword ? "text" : "password"}
            placeholder="12345678"
          />
          <div
            className="position-absolute end-0 p-5 top-50 justify-content-end translate-middle-y"
            style={{ cursor: 'pointer', left:'' }}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </Form.Group>
    </Form>
  </Col>

  <Col>
  
  </Col>
</Row>



<Row>
  <Col>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'>Confirm Password</Form.Label>
        <div className="position-relative">
          <Form.Control
            className='p-3'
            type={showPassword ? "text" : "password"}
            placeholder="12345678"
          />
          <div
            className="position-absolute end-0 p-5 top-50 justify-content-end translate-middle-y"
            style={{ cursor: 'pointer', left:'' }}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </Form.Group>
    </Form>
  </Col>

  <Col>
  
  </Col>
</Row>

<Row>
  <Col>
  
<Button
             style={{
              backgroundColor:'#F8CA25', 
              color: 'white',
              fontSize: '16px',
            textTransform:'none',
            border: "2px solid #F8CA25",
          
          }}
              className='w-100 p-3 shadow-none mt-4 btn-sm'>
          <NavLink style={{color: 'white', textDecoration:'none', fontSize:'19px'}} to="/resetpassword" >Update</NavLink>
              </Button>
  </Col>

  <Col>

  </Col>
</Row>
    


        </div>
        );


      case 'account':
        return (
          <div>
          <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Row>
              <Col xs={12} className="text-center">
                <img src={elitelogo} alt="Elite Logo" />
                <h4 className='fw-bolder mt-2'>No Content Yet</h4>
              </Col>
            </Row>
          </Container>
          </div>
        );


        
      default:
        return (
          <div>

            

<MDBRow className='mt-4'>
            
            <MDBCol xs={12} md={7}>


            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'>First Name</Form.Label>
        <div className="position-relative">
          <Form.Control
            className='p-3 shadow-0'
            placeholder="Helen"
          />
        
        </div>
      </Form.Group>
    </Form>

     

    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'>Last Name</Form.Label>
        <div className="position-relative">
          <Form.Control
            className='p-3 shadow-0'
            placeholder="Chinweike"
          />
        
        </div>
      </Form.Group>
    </Form>

    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'>Phone Number</Form.Label>
        <div className="position-relative">
          <Form.Control
            className='p-3 shadow-0'
            placeholder="08069845980"
          />
        
        </div>
      </Form.Group>
    </Form>


    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'>Email Address</Form.Label>
        <div className="position-relative">
          <Form.Control
            className='p-3 shadow-0'
            placeholder="helenchinweike@gmail.com"
          />
        
        </div>
      </Form.Group>
    </Form>

              {/* <p className="mt-2"> Want to change your email address?<NavLink to="/resetemail" 
     className="" style={{ color: '#F8CA25' }}>Click Here</NavLink></p> */}

<Button
             style={{
              backgroundColor:'#F8CA25', 
              color: 'white',
              fontSize: '16px',
            textTransform:'none',
            border: "2px solid #F8CA25",
          
          }}
              className='w-100 p-3 shadow-none mt-4 btn-sm'>
          <NavLink style={{color: 'white', textDecoration:'none', fontSize:'19px'}} to="/editdetails" >Update</NavLink>
              </Button>


            </MDBCol>



    
            <MDBCol xs={12} md={5}>
            <div className="mt-4">
              <div className='border-custom p-3' style={{ border: '1px solid #C7C9D9' }}>
<img src={Facebookdb} alt="Section Image" className="img-fluid mb-0 me-2" />    https://facebook.com/helenchiweike
</div>
            </div>

            <div className="mt-3">
              <div className='border-custom p-3' style={{ border: '1px solid #C7C9D9' }}>
<img src={Instagramdb} alt="Section Image" className="img-fluid mb-0 me-1" />    https://instagram.com/helenchiweike
</div>
            </div>

            <div className="mt-3">
              <div className='border-custom p-3' style={{ border: '1px solid #C7C9D9' }}>
<img src={Linkedindb} alt="Section Image" className="img-fluid mb-0 me-1" />    https://linkedin.com/helenchiweike
</div>
            </div>

            <div className="mt-3">
              <div className='border-custom p-3' style={{ border: '1px solid #C7C9D9' }}>
<img src={Twitterdb} alt="Section Image" className="img-fluid mb-0 me-1" />    https://twitter.com/helenchiweike
</div>
            </div>


            <div className="mt-3">
              <div className='border-custom p-3' style={{ border: '1px solid #C7C9D9' }}>
<img src={Discorddb} alt="Section Image" className="img-fluid mb-0 me-1" />    https://discord.com/helenchiweike
</div>
            </div>

            
            </MDBCol>

            
          </MDBRow>   
  

          </div>
        );
    }
  };


  return (
    <div style={{ backgroundColor: 'whiteSmoke', minHeight: '100vh' }}>
        
    <Container className='p-5'>
    <div style={{ position: 'relative' }}>
  <img src={rectangle} alt="" className="p-0 me-1 container-fluid" style={{ margin: '0' }} />
  <div style={{ position: 'absolute', top: '70%', left: '0',
   transform: 'translateY(-50%)', zIndex: '1', padding: '10px'}}>
  <img src={helen}  /><span className='fw-bolder px-4' style={{fontSize:'20px'}}>Helen Chinweike</span>
  
  </div>
 
  
  <div style={{ marginLeft: '70%' }}>
    <div style={{ padding: '10px' }}>
  
          <div className="d-flex">
        <div className="flex-shrink-0">
        {/* <img src={hackathon} alt=""/> */}
        </div>
        <div className="flex-grow-1 px-3">
          <div>
            <h5 className='fw-bold'>Social Media</h5>
            <div className="d-flex ">
        <div className="me-2">
        <img src={Discorddb} alt=""  className='w-75'/>
        </div>
        <div className="me-2">
        <img src={Facebookdb} alt=""  className='w-75'/>
        </div>
        <div className="me-2">
        <img src={Instagramdb} alt=""  className='w-75'/>
        </div>
        <div className="me-2">
        <img src={Linkedindb} alt="" className='w-75'/>
        </div>
       
        <div className="me-2">
        <img src={Twitterdb} alt=""  className='w-75'/>
        </div>
      </div>
          </div>
        </div>
      </div>
  

    </div>
  </div>
</div>

     
    </Container>


    



    <Container   className='p-5 '>
    <div className='p-4' style={{ backgroundColor: 'white', minHeight: '100vh' }}>
   
   <div>
    {/* <Row>
      <Col md="7">

      
      <Row className="p-0 mt-4">
      <Col xs="auto">
      <img src={elitelogo} alt="" className="p-0" />

      </Col>
      <Col className='me-4 mt-4'>
        <div>
          <h6 className='fw-bold'>Elitepath software</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore </p>
        </div>
      </Col>
    </Row>
  

      </Col>


      <Col md="5">
  
      </Col>
      </Row> */}

   


    </div>

   
    <div style={{ minHeight: '100vh' }}>
      <Navbar expand="lg" className="custom-navbar mt-3">
        <Container className=''>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fw-bold px-3">
              <Nav.Link onClick={() => setSelectedContent('overview')} className="home me-5" style={{ color: '#7C6512' }}>
               Profile Details
              </Nav.Link>
         
              <Nav.Link onClick={() => setSelectedContent('notification')} className="me-5">
               Notification
              </Nav.Link>
              <Nav.Link onClick={() => setSelectedContent('security')} className="me-5">
             Security & Privacy
              </Nav.Link>
              <Nav.Link onClick={() => setSelectedContent('account')} className="me-5">
               Account
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