


import { useState } from 'react';
import { Form, Col, Row, Container, Card } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import  {NavLink} from "react-router-dom"
import {
  MDBBtn,
} from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import catalystlogo from "../assets/catalystlogo.png";
import { resetUserPassword } from '../utils/userActions/authActions';
import Spinner from './Alert/Spinner/Spinner';
import { toast } from 'react-toastify';
import { validateUserForgotPassword } from '../utils/validations/authValidations';
import Toast from './Alert/Toast';
// import axios from 'axios'; // Import Axios



function MyForm() {


  const [ loading, setLoading ] = useState(false)

  const handleSubmit = async (e) => {
    
    try {
      e.preventDefault();
      setLoading(true)
  
      const email = e.target.elements.email.value; // Replace 'email' with the actual input name or ID

      const result = validateUserForgotPassword({ email })

      if (result.errLength) {
        setLoading(false);
  
        return toast.error(() => <Toast title="Error" body={result.errMsg} />);
      }

      const response = await resetUserPassword(email)

      if(response.message == "Successful"){
        toast.success("Please check your email.")
        // window.location.href = '/'
        setLoading(false)

      } else {
        toast.error("Something went wrong.")
        setLoading(false)
      }

    } catch (error) {
      // Handle errors
      console.error('Error:', error);
      
    }
    }
    

  return (
    <>
      <Container className="justify-content-center align-items-center" style={{ maxWidth: '540px' }}>
        <div className='text-center' style={{ marginTop: "140px" }}>
          <h4 className='fw-bolder'>Reset Password</h4>
        </div>
        <Card className="p-4" style={{ border: 'none', boxShadow: 'none' }}>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-4">
              <Col xs={12} md={12}>
                <div className=''>
                  <Form.Label className='text-black fw-bold'>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email" // Add a name attribute
                    placeholder="Enter your email address"
                    className=''
                    style={{ padding: '20px 32px 20px 32px', boxShadow: 'none' }}
                    
                  />
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
                  Send Reset link
                </MDBBtn>

                <div className="mt-3 text-center">
                  <NavLink to="/login" className="text-decoration-none" style={{ color: '#6B7588', fontWeight: 'bold' }}>Back to login</NavLink>
                </div>
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

      { loading && <Spinner />}
    </>
  );
}

export default MyForm;





