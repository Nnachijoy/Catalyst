const DashboardPage = () => {
    const handleSubmit = async () => {
      try {
        const response = await axios.get('https://catalyst-zkhb.onrender.com/api/application/stage-one'); // Replace with your API URL
  
        // Handle the response data as needed
        console.log('API Response:', response.data);
      } catch (error) {
        // Handle errors
        console.error('API Error:', error);
      }
    };
  
  
  
    return (
      <div>
      <Container className=" mb-5 px-5">
        <div className="">
          <h4 style={{ color: '#7C6512' }} className="fw-bolder">
            Pitch Application
          </h4>
          <p>step 1 of 1</p>
        </div>
  
        <div>
          <hr />
        </div>
        <MDBRow>
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Startup Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your company name"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
          </MDBCol>
  
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
          </MDBCol>
        </MDBRow>
  
        <MDBRow>
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Website</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
          </MDBCol>
  
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">Do you have a female co-founder?</Form.Label>
  
              <Form.Control
                as="select" // Change the input type to "select"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              >
                <option value="">-Select-</option> {/* Add the "-select-" option */}
                <option value="yes">Yes</option> {/* Add other options if needed */}
                <option value="no">No</option>
              </Form.Control>
            </div>
          </MDBCol>
        </MDBRow>
  
        <MDBRow>
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">What is the primary country of operation for your startup?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
            <div className="mb-4">
              <Form.Label className="text-black fw-bold">What is the primary country of operation for your startup?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your answer"
                className=""
                style={{ padding: '20px 32px', boxShadow: 'none' }}
                required // Add required attribute
              />
            </div>
          </MDBCol>
  
          <MDBCol xs={12} md={6}>
            <div className="mb-4">
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="fw-bolder text-black">Message</Form.Label>
                <Form.Control as="textarea" rows={8} placeholder="Type Something" />
              </Form.Group>
            </div>
          </MDBCol>
        </MDBRow>
  
  
        <div className="d-flex justify-content-end mt-5">
            <Button
              className="mt-3 me-4"
              style={{
                background: "none",
                border: "2px solid #F8CA25",
                transition: "background 0.3s",
                textTransform: "none",
                boxShadow: "none",
                fontSize: "18px",
                color: "#F8CA25",
                fontWeight: "bold"
              }}
              onMouseEnter={(e) => (e.target.style.background = "black")}
              onMouseLeave={(e) => (e.target.style.background = "none")}
              onClick={handleSubmit} // Call the API request function on button click
            >
              Save as Draft
            </Button>
  
            <Button
              className="mt-3 btn-sm p-3"
              style={{
                background: "#F8CA25",
                border: "none",
                transition: "background 0.3s",
                textTransform: "none",
                boxShadow: "none",
                fontSize: "18px",
                color: "#FFFFFF",
                fontWeight: "bold"
              }}
              onMouseEnter={(e) => (e.target.style.background = "#000")}
              onMouseLeave={(e) => (e.target.style.background = "#F8CA25")}
              onClick={handleSubmit} // Call the API request function on button click
            >
           Next
            </Button>
          </div>
      
      </Container>
  
      </div>
    );
  };
  export default DashboardPage;  