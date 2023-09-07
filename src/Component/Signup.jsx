
import { useState } from 'react';
import { Form, Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import catalystlogo from "../assets/catalystlogo.png";
import axios from 'axios';
import Email from './Email'; // Import the Email component
import { BaseURL } from '../config/variables';
import Spinner from './Alert/Spinner/Spinner';
import { toast } from 'react-toastify';
import { validateUserSignUp } from '../utils/validations/authValidations';
import Toast from './Alert/Toast';
import  {NavLink} from "react-router-dom"


function MyForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    lastName: '',
  });

  const [loading, setLoading] = useState(false)

  const [registrationSuccess, setRegistrationSuccess] = useState(false); // State to track registration status

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)

      const result = validateUserSignUp(formData)

      if (result.errLength) {
        setLoading(false);
  
        return toast.error(() => <Toast title="Error" body={result.errMsg} />);
      }


      const response = await axios.post( `${BaseURL}user/register`, formData);
      console.log('API response:', response.data);

      if(response.data.message == "Successful"){
        setRegistrationSuccess(true); // Set registration status to true on successful API response
        setLoading(false)
      } 
    } catch (error) {
        if(error.response?.data?.message){
          setLoading(false)
          return toast.error(error.response?.data?.message) 
      } else {
        setLoading(false)
          return toast.error(error.message) 
      }
    }
  };

  if (registrationSuccess) {
    return <Email email={formData.email} />; // Render Email component with the user's email
  }

  return (
    <>
      <Container className="mb-3 justify-content-center align-items-center " style={{ maxWidth: '540px' }}>
      <div className="text-center mt-5">
              <h5 className='fw-bolder'>Create an account</h5>
              <p className="mt-1 mb-2 pb-1 ">Enter your personal Information to continue</p>
            </div>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-4">
            <Col xs={12} md={12}>
              <div>
                <Form.Label className='text-black fw-bold'>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className=''
                  style={{ padding: '20px 32px 20px 32px', boxShadow: 'none', border: '1px solid #ced4da', borderRadius: '4px' }}
                  
                />
              </div>

              

              <div className='mt-4'>
                <Form.Label className='text-black fw-bold'>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className=''
                  style={{ padding: '20px 32px 20px 32px', boxShadow: 'none', border: '1px solid #ced4da', borderRadius: '4px' }}
                  
                />
              </div>


              <div className='mt-4'>
                <Form.Label className='text-black fw-bold'>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className=''
                  style={{ padding: '20px 32px 20px 32px', boxShadow: 'none', border: '1px solid #ced4da', borderRadius: '4px' }}
                  
                />
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
                Sign up
              </MDBBtn>
            </Col>
          </Row>
        </Form>
      </Container>

      <div className="mt-3 text-center">
     <p className="mb-0"> Already have an account? <NavLink to="/login" 
     className="text-decoration-none" style={{ color: '#F8CA25', fontWeight: 'bold' }}>Login</NavLink></p>
  </div>

      <div className="mt-5" style={{ backgroundColor: 'rgba(254, 244, 211, 0.7)', padding: '9px', width: '100%' }}>
        <Container>
          <img src={catalystlogo} alt="" />
        </Container>
      </div>

      { loading && <Spinner />}
    </>
  );
}

export default MyForm;

