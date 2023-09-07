


// ... (import statements)
import  { useState } from 'react';
import { Form, Col, Row, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
import { MDBBtn } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import catalystlogo from "../assets/catalystlogo.png";
import { changeUserPassword } from '../utils/userActions/authActions';
import { toast } from 'react-toastify';
import Spinner from './Alert/Spinner/Spinner';
import { validateResetUserPassword } from '../utils/validations/authValidations';
import Toast from './Alert/Toast';

function MyForm( prop ) {
    // ... (other state and function definitions)
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [cf_password, setCf_Password] = useState('');
    const [loading, setLoading] = useState(false) 
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
    const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword((prev) => !prev);

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleCFPasswordChange = (e) => {
      setCf_Password(e.target.value);
    };
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      try {

        const token = prop.accessToken
        setLoading(true)  

        const result = validateResetUserPassword({password, cf_password })

      if (result.errLength) {
        setLoading(false);
  
        return toast.error(() => <Toast title="Error" body={result.errMsg} />);
      }      

        const response = await changeUserPassword( token, password)

        if(response.message == "Successful"){
          toast.success("Password Changed Please login")
          window.location.href = '/login'; // Replace with the actual login page URL
          setLoading(false) 
        }

        setLoading(false) 
      } catch (error) {
        console.error('Error:', error);
        setLoading(false) 
  
        if(error.response?.data?.message){
          return toast.error(error.response?.data?.message) 
      } else {
          return toast.error(error.message) 
      }
      }
    };
  
    return (
        
        <>
      <Container className="justify-content-center align-items-center" style={{ maxWidth: '540px' }}>
      <div className='text-center'>
        <h5 style={{ fontSize: '25px', marginTop: '90px' }} className='fw-bolder'>Create New Password</h5>
        <p style={{ fontSize: '15px' }}>Enter a password to continue</p>
      </div>
      <Card className="p-3" style={{ border: 'none', boxShadow: 'none' }}>
        <Form onSubmit={handleFormSubmit}>
          <Row className="mb-4">
            <Col xs={12} md={12}>
              <div className='position-relative mt-4'>
                <Form.Label className='text-black fw-bold'>Create Password</Form.Label>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create your password"
                  className=''
                  style={{ padding: '20px 64px 20px 32px', boxShadow: 'none' }}
                  
                  value={password}
                  onChange={handlePasswordChange}
                />
                <span className='position-absolute end-0 top-50 translate-middle-x pe-3' style={{ cursor: 'pointer' }} onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} style={{ color: showPassword ? '#6B7588' : '#6B7588' }} />
                </span>
              </div>

              {/* ... Rest of the form ... */}
              <div className='position-relative mt-4'>
              <Form.Label className='text-black fw-bold'>Confirm Password</Form.Label>
              <Form.Control 
              type={showConfirmPassword ? 'text' : 'password'} 
              placeholder="Confirm your password" 
              className='' 
              value={cf_password}
              style={{ padding: '20px 64px 20px 32px', boxShadow: 'none' }} 
              onChange={handleCFPasswordChange}
               />
              <span className='position-absolute end-0 top-50 translate-middle-x pe-3' style={{ cursor: 'pointer' }} onClick={toggleConfirmPasswordVisibility}>
                  <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} style={{ color: showConfirmPassword ? '#6B7588' : '#6B7588' }} />
                  
              </span>
             </div>

              <MDBBtn
                className="mt-4 w-100 gradient-custom-2"
                style={{
                  padding: '16px 48px',
                  background: "#F8CA25",
                  border: "none",
                  boxShadow: 'none',
                  transition: 'background 0.3s',
                  textTransform: 'none',
                  fontSize: '18px'
                }}
                onMouseEnter={(e) => e.target.style.background = '#000'}
                onMouseLeave={(e) => e.target.style.background = '#F8CA25'}
                type="submit"
              >
                Create
              </MDBBtn>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
    <div className="mt-5 px-5 " style={{ backgroundColor: 'rgba(254, 244, 211, 0.7)', padding: '9px', width: '100%' }}>
      <Container>
        <img src={catalystlogo} alt="" />
      </Container>
    </div>
    {loading && <Spinner />} 
        </>
    );
  }
  
  export default MyForm;
  