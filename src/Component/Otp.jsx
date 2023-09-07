// import React, { useState } from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBInput,
//   MDBCheckbox
// }
// from 'mdb-react-ui-kit';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import logincircle from "../assets/logincircle.png";
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



// function App() {
//   const [showPassword, setShowPassword] = useState(false);


//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };




//   const [hover, setHover] = useState(false);

//   const handleMouseEnter = () => {
//     setHover(true);
//   };

//   const handleMouseLeave = () => {
//     setHover(false);
//   };

//   const linkStyle = {
//     textDecoration: 'none',
//     color: hover ? 'black' : '#F8CA25',
//     /* Add any other styles you want for the hover effect */
//   };

//   const [otp, setOtp] = useState(['', '', '', '']);

//   const handleChange = (index, value) => {
//     // Update the OTP array with the new value at the specified index
//     setOtp((prevOtp) => {
//       const newOtp = [...prevOtp];
//       newOtp[index] = value;
//       return newOtp;
//     });
//   };

//   const handleKeyPress = (event, index) => {
//     // If the user presses the backspace key, move focus to the previous box
//     if (event.key === 'Backspace' && index > 0) {
//       document.getElementById(`otp-${index - 1}`).focus();
//     }
//   };

  

//   return (
//     <section className='bg-dark'>
//        {/* <section className={window.innerWidth <= 767 ? '' : 'bg-dark'}> */}
    
//     <MDBContainer className="my-2 p-4 pt-5">

//       <MDBRow>

//         <MDBCol col='12' md='6' className="mb-5 bg-white p-4">
//           <div className="d-flex flex-column ms-3">

//             <div className="text-center mt-5 pt-5">
//               <h5 className='fw-bolder text-black mt-5'>OTP Code</h5>
//               <p className="mt-1  pb-1 fw-bolder">Enter the 6 digit code sent to<br/>
//               <span style={{ color: '#F8CA25'}}>hchinweike19@gmail.com</span></p>
              
//             </div>


//             <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
//       {otp.map((digit, index) => (
//         <input
//           key={index}
//           type="text"
//           id={`otp-${index}`}
//           value={digit}
//           maxLength="1"
//           style={{
//             width: '50px',
//             height: '50px',
//             fontSize: '24px',
//             textAlign: 'center',
//             margin: '0 5px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//           }}
//           onChange={(e) => handleChange(index, e.target.value)}
//           onKeyPress={(e) => handleKeyPress(e, index)}
//         />
//       ))}
//     </div>

//             {/* <MDBInput wrapperClass='mb-4' label='First Name' id='form1' type='name' />
//             <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />
//            */}
//             <div style={{ display: 'flex', flexDirection: 'column' }} className=' fw-bolder'>
             


//            <div style={{ display: 'flex', flexDirection: 'column' }} >
             


          
          
//             </div>
//             <div className="text-center pt-1 mb-5 pb-1">
//             <MDBBtn className="mt-4 w-100 gradient-custom-2"  style={{ background: "#F8CA25", border: "none", transition: 'background 0.3s' }}
//         onMouseEnter={(e) => e.target.style.background = '#000'} // Change background color on hover
//         onMouseLeave={(e) => e.target.style.background = '#F8CA25'}>
//                   Login  </MDBBtn>
              
      
            
//                   <div className="d-flex flex-row align-items-center justify-content-center pb-4 mt-4">
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <p className="mb-0">Don't have an account?</p>
             
//               </div>
             
//             </div>
            
//             </div>

          
//             </div>
//           </div>

//         </MDBCol>

//         <MDBCol col='12' md='6' className="d-none d-md-block mb-5" style={{ background: "#7C6512 " }}>  

//           <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

//             <div className="text-white px-3 py-4 p-md-5 mx-md-4">
//             <div>
//       {/* Assuming the FontAwesome icon for a solid star is 'fas fa-star' */}
//       <span className="star"><i className="fas fa-star text-warning"></i></span>
//       <span className="star"><i className="fas fa-star text-warning"></i></span>
//       <span className="star"><i className="fas fa-star text-warning"></i></span>
//       <span className="star"><i className="fas fa-star text-warning"></i></span>
//       <span className="star"><i className="fas fa-star text-warning"></i></span>
//     </div>
//               <p class="small mt-2 text-white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//                sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur 
//                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
//               ut labore Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
//               </p>
            
//               <div className="row align-items-center  no-gutters mt-5">
//         <div className="col-md-4">
//           <div className="circle-container">
//             <div className="circle">
           
//               <img src={logincircle} className="img-fluid circle-image" /> 
//             </div>
//           </div>
//         </div>
//         <div className="col-md-8">
//           <div className="text-container text-white" style={{ marginLeft: '-70px',  marginTop: '20px' }}>
//             <h6  className="text-white fw-bold">Ann Frank</h6>
//             <p  className="text-white">
//             Marketing Expert
//             </p>
//           </div>
//         </div>
//       </div>
            
//             </div>


         
//           </div>

//         </MDBCol>

//       </MDBRow>

//     </MDBContainer>


//     </section>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import catalystlogo from '../assets/catalystlogo.png';

function MyForm() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  
  const handleChange = (index, value) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });
  };

  const handleKeyPress = (event, index) => {
    if (event.key === 'Backspace' && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSendClick = async () => {
    const apiUrl = 'https://catalyst-zkhb.onrender.com/api/user/refresh-token';

    try {
      const response = await axios.post(apiUrl, {});
      console.log('API response:', response.data);
      // Handle the response as needed
      
      // Example: Redirect the user after successful API call
      // window.location.href = '/success-page';
    } catch (error) {
      console.error('API error:', error);
      // Handle the error as needed
    }
  };

  return (
    <>
      <div>
        <Container className="justify-content-center align-items-center vh-100" style={{ maxWidth: '540px' }}>
          <div className='text-center' style={{ marginTop: '120px' }}>
            <h4 className='fw-bolder mt-5'>OTP Code</h4>
            <p>Enter the 6 digits code sent to <br/>
              <span style={{ color: '#F8CA25'}} className='fw-bolder'> hchinweike19@gmail.com</span></p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                id={`otp-${index}`}
                value={digit}
                maxLength="1"
                style={{
                  width: '50px',
                  height: '50px',
                  fontSize: '24px',
                  textAlign: 'center',
                  margin: '0 5px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            ))}
          </div>
          <MDBBtn
            className="mt-4 w-100 gradient-custom-2"
            onClick={handleSendClick}
            style={{
              padding: '16px 48px',
              background: '#F8CA25',
              border: 'none',
              boxShadow: 'none',
              transition: 'background 0.3s',
              textTransform: 'none',
              fontSize: '18px',
            }}
            onMouseEnter={(e) => e.target.style.background = '#000'}
            onMouseLeave={(e) => e.target.style.background = '#F8CA25'}
            type="button" // Change type to "button" to prevent form submission
          >
            Send
          </MDBBtn>
        </Container>
        <div className="" style={{ backgroundColor: 'rgba(254, 244, 211, 0.7)', padding: '9px', width: '100%' }}>
          <Container>
            <img src={catalystlogo} alt="" />
          </Container>
        </div>
      </div>
    </>
  );
}

export default MyForm;
