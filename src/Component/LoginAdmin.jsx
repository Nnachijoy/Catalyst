


import  { useState } from 'react';
import { Form, Col, Row, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import catalystlogo from "../assets/catalystlogo.png";
import  {NavLink} from "react-router-dom"


function MyForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false) 
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const result = validateUserLogin({ email, password })

      if (result.errLength) {
        setLoading(false);
  
        return toast.error(() => <Toast title="Error" body={result.errMsg} />);
      }

    const response = await userLogin(email, password)

    console.log(response);

    if(response.message == "Successful"){
      setLoading(false)
      window.location.href = '/maindb'
      
    } else {
      setLoading(false)

    }

    
  };

  return (
    <>
      <Container className="justify-content-center align-items-center" style={{ maxWidth: '540px' }}>
        <div className='text-center mt-5'>
          <h2 className='fw-bolder mt-5' style={{lineHeight:'50px'}}>Login as an Investment Committee Member</h2>
          <p style={{fontSize:'17px'}}>Please enter your password</p>
        </div >
        <Card className="p-4" style={{ border: 'none', boxShadow: 'none' }}>
          <Form onSubmit={handleFormSubmit}>
            <Row className="mb-4">
              <Col xs={12} md={12}>
                <div className=''>
                  <Form.Label className='text-black fw-bold'>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    className=''
                    style={{ padding: '20px 32px 20px 32px', boxShadow: 'none', backgroundColor:'#ECECEC'}}
                    
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>

                <div className='mt-4'>
                  <Form.Label className='text-black fw-bold'>Password</Form.Label>
                  <div className='position-relative'>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      className=''
                      style={{ padding: '20px 64px 20px 32px', boxShadow: 'none' }}
                      
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <span
                      className='position-absolute end-0 top-50 translate-middle-y pe-3'
                      style={{ cursor: 'pointer' }}
                      onClick={togglePasswordVisibility}
                    >
                      <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                    </span>
                  </div>
                </div>

                {/* ... Rest of the form fields ... */}

                <div className='mt-3 d-flex align-items-center justify-content-between'>
                   <div>
                   <Form.Check
       type='checkbox'
       name='flexCheck'
       label='Remember me'
       id='flexCheckDefault'
       className='remember-me-checkbox' // Add custom CSS class for styling
       style={{
         color: '#6B7588', // Add inline text color style
         boxShadow: 'none',
         padding: '8px 12px', // Add inline padding style
         borderRadius: '4px', // Add inline border-radius style
         '&:checked': {
           backgroundColor: 'yellow',
            // Change the background color when the checkbox is checked
         },
       }}
     />
                   </div>


                   <div>
                     <NavLink to='/resetpassword' className='text-decoration-none' style={{ color: 'black' }}> {/* Added inline style for black color */}
                       Forgot Password?
                     </NavLink>
                   </div>
                 </div>

                <MDBBtn
                  className="mt-4 w-100 gradient-custom-2"
                  style={{
                    padding: '16px 48px', // Updated the padding format
                    background: "#F8CA25",
                    border: "none",
                    boxShadow: 'none',
                    transition: 'background 0.3s',
                    textTransform: 'none', // Add text transformation
                    fontSize: '18px'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#000'}
                  onMouseLeave={(e) => e.target.style.background = '#F8CA25'}
                  type="submit" // Add type attribute to specify this button as a submit button
                >
                  Login
                </MDBBtn>

                {/* ... Rest of the component ... */}
                {/* <div className="mt-3 text-center">
     <p className="mb-0"> Don't have an account? <NavLink to="/signup" 
     className="text-decoration-none" style={{ color: '#F8CA25', fontWeight: 'bold' }}>Sign Up</NavLink></p>
  </div> */}
               </Col>
             </Row>
            </Form>
          </Card>
        </Container>

        <div className="mt-5" style={{ backgroundColor: 'rgba(254, 244, 211, 0.7)', padding: '9px', width: '100%' }}>
        <Container>
          <img src={catalystlogo} alt="" />
        </Container>
      </div>

    </>
  );
}

export default MyForm;





