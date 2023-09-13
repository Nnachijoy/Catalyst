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
import nolink from '../assets/nolink.png';
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

  const [showPassword1, setShowPassword1] = useState(false);

const togglePasswordVisibility1 = () => {
  setShowPassword1(!showPassword1);
};



const [showPassword2, setShowPassword2] = useState(false);

const togglePasswordVisibility2 = () => {
  setShowPassword2(!showPassword2);
};


  // socialmedia
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('https://facebook.com/helenchiweike');

  const [isEditing1, setIsEditing1] = useState(false);
const [inputValue1, setInputValue1] = useState('https://instagram.com/helenchiweike');

const [isEditing2, setIsEditing2] = useState(false);
const [inputValue2, setInputValue2] = useState('https://linkedin.com/helenchiweike');

const [isEditing3, setIsEditing3] = useState(false);
const [inputValue3, setInputValue3] = useState('https://twitter.com/helenchiweike');

const [isEditing4, setIsEditing4] = useState(false);
const [inputValue4, setInputValue4] = useState('https://discord.com/helenchiweike');


const [isEditing5, setIsEditing5] = useState(false);
const [inputValue5, setInputValue5] = useState('https://www.thread.com/');

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleEditClick1 = () => {
    setIsEditing1(true);
  };
  const handleEditClick2 = () => {
    setIsEditing2(true);
  };
  const handleEditClick3 = () => {
    setIsEditing3(true);
  };
  const handleEditClick4 = () => {
    setIsEditing4(true);
  };

  const handleEditClick5 = () => {
    setIsEditing5(true);
  };



  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputChange1 = (e) => {
    setInputValue1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };

 
  const handleInputChange3 = (e) => {
    setInputValue3(e.target.value);
  };

  const handleInputChange4 = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputChange5 = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Add code to handle saving the input value
  };

  const handleSaveClick1 = () => {
    setIsEditing1(false);
  };
  
    const handleSaveClick2 = () => {
      setIsEditing2(false);
    };
      
  const handleSaveClick3 = () => {
    setIsEditing3(false);
  };

    const handleSaveClick4 = () => {
      setIsEditing4(false);
   };


   const handleSaveClick5 = () => {
    setIsEditing5(false);
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

    {
      id: 'switch5',
      newsUpdate: 'Explore the latest trends and stay ahead with our insightful newsletters.',
      newsUpdateHeader: 'Trendy Tips and Insights',
    },

    {
      id: 'switch6',
      // label: 'Toggle 3',
      // text: 'Get alerts for breaking news and important announcements.',
      newsUpdate: 'Be the first to know about breaking news and important updates.',
      newsUpdateHeader: 'Breaking News Alerts',
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


        );
      case 'security':
        return (
        <div>
<Row>
  <Col>
  <Form style={{outline:'none'}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'>Current Password</Form.Label>
        <div className="position-relative">
          <Form.Control
            className='p-3'
            type={showPassword ? "text" : "password"}
            placeholder="12345678"
            style={{ boxShadow: 'none' }}
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
  {/* emptycol */}
  </Col>
</Row>

<h4 style={{color:'#7C6512'}} className='mt-5 fw-bolder'>Create New Password</h4>

<Row>
  <Col>
  <Form>
      <Form.Group className="mt-1" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'>Set New Password</Form.Label>
        <div className="position-relative">
          <Form.Control
            className='p-3'
            type={showPassword1 ? "text" : "password"}
            placeholder="12345678"
            style={{ boxShadow: 'none' }}
          />
          <div
            className="position-absolute end-0 p-5 top-50 justify-content-end translate-middle-y"
            style={{ cursor: 'pointer', left:'' }}
            onClick={togglePasswordVisibility1}
          >
            {showPassword1 ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </Form.Group>
    </Form>
  </Col>

  <Col>
  {/* emptycol */}
  </Col>
</Row>

<Row>
  <Col>
  <Form>
      <Form.Group className="mt-2" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'>Confirm Password</Form.Label>
        <div className="position-relative">
          <Form.Control
            className='p-3'
            type={showPassword2 ? "text" : "password"}
            placeholder="12345678"
            style={{ boxShadow: 'none' }}
          />
          <div
            className="position-absolute end-0 p-5 top-50 justify-content-end translate-middle-y"
            style={{ cursor: 'pointer', left:'' }}
            onClick={togglePasswordVisibility2}
          >
            {showPassword2 ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </Form.Group>
    </Form>
  </Col>

  <Col>
  {/* empty col */}
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
              className='w-100 p-2 shadow-none mt-4 btn-sm'>
          <NavLink style={{color: 'white', textDecoration:'none', fontSize:'19px'}} to="/" >Update</NavLink>
              </Button>
  </Col>

  <Col>
{/* emptycol */}
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

        case 'socialmedia':
          return (
            <div>


 <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className='border-custom p-3' style={{ border: '1px solid #C7C9D9', flex: 11, display: 'flex', alignItems: 'center' }}>
        <img src={Facebookdb} alt="Section Image" className="img-fluid mb-0 me-2" />
        {isEditing ? (
          <input className='w-100 p-2 '
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            style={{ border: 'none', outline: 'none'}}
          />
        ) : (
          <div>
            {inputValue}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flex: 1,  marginLeft: '10px'  }} className=''>
      <button  className='me-3'
  onClick={handleEditClick} 
  style={{
    marginRight: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer',
    color:'#6B7588',
   fontSize:'16px'
  }}
>
  Edit
</button>
       


<button className=''
  onClick={handleSaveClick} 
  style={{
    borderRadius: '3px',
    padding: '10px 20px',
    backgroundColor: '#F8CA25',
    border: 'none',
    cursor: 'pointer'
  }}
>
  Save
</button>
      
      </div>
    </div>


    <div style={{ display: 'flex', alignItems: 'center' }} className='mt-4'>
      <div className='border-custom p-3' style={{ border: '1px solid #C7C9D9', flex: 11,
       display: 'flex', alignItems: 'center' }}>
        <img src={Instagramdb} alt="Section Image" className="img-fluid mb-0 me-2" />
        {isEditing1 ? (
          <input className='w-100 p-2 '
            type="text"
            value={inputValue1}
            onChange={handleInputChange1}
            style={{ border: 'none', outline: 'none'}}
          />
        ) : (
          <div>
            {inputValue1}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flex: 1,  marginLeft: '10px'  }} className=''>
      <button  className='me-3'
  onClick={handleEditClick1} 
  style={{
    marginRight: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer',
    color:'#6B7588',
   fontSize:'16px'
  }}
>
  Edit
</button>
       


<button className=''
  onClick={handleSaveClick} 
  style={{
    borderRadius: '3px',
    padding: '10px 20px',
    backgroundColor: '#F8CA25',
    border: 'none',
    cursor: 'pointer'
  }}
>
  Save
</button>
      
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center' }} className='mt-4'>
      <div className='border-custom p-3' style={{ border: '1px solid #C7C9D9', flex: 11,
       display: 'flex', alignItems: 'center' }}>
        <img src={Linkedindb} alt="Section Image" className="img-fluid mb-0 me-2" />
        {isEditing2 ? (
          <input className='w-100 p-2 '
            type="text"
            value={inputValue2}
            onChange={handleInputChange2}
            style={{ border: 'none', outline: 'none'}}
          />
        ) : (
          <div>
            {inputValue2}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flex: 1,  marginLeft: '10px'  }} className=''>
      <button  className='me-3'
  onClick={handleEditClick2} 
  style={{
    marginRight: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer',
    color:'#6B7588',
   fontSize:'16px'
  }}
>
  Edit
</button>
       


<button className=''
  onClick={handleSaveClick2} 
  style={{
    borderRadius: '3px',
    padding: '10px 20px',
    backgroundColor: '#F8CA25',
    border: 'none',
    cursor: 'pointer'
  }}
>
  Save
</button>
      
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center' }} className='mt-4'>
      <div className='border-custom p-3' style={{ border: '1px solid #C7C9D9', flex: 11,
       display: 'flex', alignItems: 'center' }}>
        <img src={Twitterdb} alt="Section Image" className="img-fluid mb-0 me-2" />
        {isEditing3 ? (
          <input className='w-100 p-2 '
            type="text"
            value={inputValue2}
            onChange={handleInputChange3}
            style={{ border: 'none', outline: 'none'}}
          />
        ) : (
          <div>
            {inputValue3}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flex: 1,  marginLeft: '10px'  }} className=''>
      <button  className='me-3'
  onClick={handleEditClick3} 
  style={{
    marginRight: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer',
    color:'#6B7588',
   fontSize:'16px'
  }}
>
  Edit
</button>
       


<button className=''
  onClick={handleSaveClick3} 
  style={{
    borderRadius: '3px',
    padding: '10px 20px',
    backgroundColor: '#F8CA25',
    border: 'none',
    cursor: 'pointer'
  }}
>
  Save
</button>
      
      </div>
    </div>


    <div style={{ display: 'flex', alignItems: 'center' }} className='mt-4'>
      <div className='border-custom p-3' style={{ border: '1px solid #C7C9D9', flex: 11,
       display: 'flex', alignItems: 'center' }}>
        <img src={Discorddb} alt="Section Image" className="img-fluid mb-0 me-2" />
        {isEditing4 ? (
          <input className='w-100 p-2 '
            type="text"
            value={inputValue4}
            onChange={handleInputChange4}
            style={{ border: 'none', outline: 'none'}}
          />
        ) : (
          <div>
            {inputValue4}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flex: 1,  marginLeft: '10px'  }} className=''>
      <button  className='me-3'
  onClick={handleEditClick4} 
  style={{
    marginRight: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer',
    color:'#6B7588',
   fontSize:'16px'
  }}
>
  Edit
</button>
       


<button className=''
  onClick={handleSaveClick4} 
  style={{
    borderRadius: '3px',
    padding: '10px 20px',
    backgroundColor: '#F8CA25',
    border: 'none',
    cursor: 'pointer'
  }}
>
  Save
</button>
      
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center' }} className='mt-4'>
      <div className='border-custom p-3' style={{ border: '1px solid #C7C9D9', flex: 11,
       display: 'flex', alignItems: 'center', color:'#C7C9D9' }}>
        <img src={nolink} alt="Section Image" className="img-fluid mb-0 me-2" />
        {isEditing5 ? (
          <input className='w-100 p-2 '
            type="text"
            value={inputValue5}
            onChange={handleInputChange5}
            style={{ border: 'none', outline: 'none'}}
          />
        ) : (
          <div>
            {inputValue5}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flex: 1,  marginLeft: '10px'  }} className=''>
      <button  className='me-3'
  onClick={handleEditClick5} 
  style={{
    marginRight: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    textDecoration: 'underline',
    cursor: 'pointer',
    color:'#6B7588',
   fontSize:'16px'
  }}
>
  Edit
</button>
       


<button className=''
  onClick={handleSaveClick5} 
  style={{
    borderRadius: '3px',
    padding: '10px 20px',
    backgroundColor: '#F8CA25',
    border: 'none',
    cursor: 'pointer'
  }}
>
  Save
</button>
      
      </div>
    </div>


    <Button
             style={{
              backgroundColor:'#F8CA25', 
              color: 'white',
              fontSize: '16px',
            textTransform:'none',
            border: "2px solid #F8CA25",
          
          }}
              className='w-50 p-3 shadow-none mt-4 btn-sm'>
          <NavLink style={{color: 'white', textDecoration:'none', fontSize:'19px'}} to="/" >Update</NavLink>
              </Button> 
            {/* <div className="mt-3">
              <div className='border-custom p-3' style={{ border: '1px solid #C7C9D9' }}>
<img src={Discorddb} alt="Section Image" className="img-fluid mb-0 me-1" />    https://discord.com/helenchiweike
</div>
            </div> */}

          </div>
          );


        
      default:
        return (
          <div>
         <Row>
          <Col>
          <Form style={{}}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'>First Name</Form.Label>
       
          <Form.Control
            className='p-3'
            type='name'
            placeholder="Helen"
            style={{ boxShadow: 'none', background:'#FAFAFC'
           }}
          />
       
 
      
      </Form.Group>

      <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'>Last Name</Form.Label>
       
          <Form.Control
            className='p-3'
            type='name'
            placeholder="Chinweike"
            style={{ boxShadow: 'none', background:'#FAFAFC'
           }}
          />
       
 
      
      </Form.Group>

      <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'> Phone Number</Form.Label>
      
          <Form.Control
            className='p-3'
            type='text'
            placeholder="08127451653"
            style={{ boxShadow: 'none', background:'#FAFAFC'
           }}
          />
       
 
      
      </Form.Group>


      <Form.Group className="mt-3" controlId="exampleForm.ControlInput1">
        <Form.Label className='fw-bolder text-muted'>Email Address</Form.Label>
      
          <Form.Control
            className='p-3'
            type='email'
            placeholder="helenchinweike@gmail.com"
            style={{ boxShadow: 'none', background:'#FAFAFC'
           }}
          />
       
 
      
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
              className='w-100 p-2 shadow-none mt-4 btn-sm'>
          <NavLink style={{color: 'white', textDecoration:'none', fontSize:'19px'}} to="/" >Update</NavLink>
              </Button>
          </Col>

          <Col>
          {/* emptycol */}
          </Col>
         </Row>
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
  
    </div>

   
    <div style={{ minHeight: '100vh' }}>
    <Navbar expand="lg" className="custom-navbar mt-3">
      <Container className=''>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fw-bold px-3 me-5">
            <Nav.Link className='me-5'
              onClick={() => setSelectedContent('overview')}
              style={{
                marginRight: '5px',
                color: selectedContent === 'overview' ? '#7C6512' : '#000000',
                fontWeight: selectedContent === 'overview' ? 'bold' : 'normal',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              Profile Details
            </Nav.Link>

            <Nav.Link className='me-5'
              onClick={() => setSelectedContent('socialmedia')}
              style={{
                marginRight: '5px',
                color: selectedContent === 'socialmedia' ? '#7C6512' : '#000000',
                fontWeight: selectedContent === 'socialmedia' ? 'bold' : 'normal',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              Social Media
            </Nav.Link>

            <Nav.Link  className='me-5'
              onClick={() => setSelectedContent('notification')}
              style={{
                marginRight: '5px',
                color: selectedContent === 'notification' ? '#7C6512' : '#000000',
                fontWeight: selectedContent === 'notification' ? 'bold' : 'normal',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              Notification
            </Nav.Link>

            <Nav.Link  className='me-5'
              onClick={() => setSelectedContent('security')}
              style={{
                marginRight: '5px',
                color: selectedContent === 'security' ? '#7C6512' : '#000000',
                fontWeight: selectedContent === 'security' ? 'bold' : 'normal',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
              Security & Privacy
            </Nav.Link>

            <Nav.Link  className='me-5'
              onClick={() => setSelectedContent('account')}
              style={{
                color: selectedContent === 'account' ? '#7C6512' : '#000000',
                fontWeight: selectedContent === 'account' ? 'bold' : 'normal',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
            >
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