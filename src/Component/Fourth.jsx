const Fourth = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
  
    // Function to handle file selection
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setSelectedFile(file);
      alert(`Selected File: ${file.name}`);
    };
  
    // Function to handle file drop
    const handleFileDrop = (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      alert(`Selected File: ${file.name}`);
    };
  
    // Function to handle the "Edit Image" button click
    const handleEditImageClick = () => {
      fileInputRef.current.click();
    };
  
    // Function to remove the selected file
    const handleRemoveFile = () => {
      setSelectedFile(null);
    };
  
    // Prevent the default behavior for drag-and-drop
    const handleDragOver = (e) => {
      e.preventDefault();
    };
  
  
      const [selectedLanguage, setSelectedLanguage] = useState('');
  
      const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
      };
  

      
  // State variables to handle button style changes
  const [energyButtonStyle, setEnergyButtonStyle] = useState({
    background: '#F8CA25',
    border: 'none',
    transition: 'background 0.3s',
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: '17px',
    color: '#FFFFFF',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
  });

  const [consumerButtonStyle, setConsumerButtonStyle] = useState({
    background: '#F8CA25',
    border: 'none',
    transition: 'background 0.3s',
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: '17px',
    color: '#FFFFFF',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
  });

  // State variable to track the button toggle
  const [energyButtonToggle, setEnergyButtonToggle] = useState(false);
  const [consumerButtonToggle, setConsumerButtonToggle] = useState(false);

  // Function to handle the "Energy" button click
  const handleEnergyButtonClick = () => {
    if (energyButtonToggle) {
      setEnergyButtonStyle({
        background: '#F8CA25',
        border: 'none',
        transition: 'background 0.3s',
        textTransform: 'none',
        boxShadow: 'none',
        fontSize: '17px',
        color: '#FFFFFF',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
      });
    } else {
      setEnergyButtonStyle({
        background: '#FEF4D3',
        border: 'none',
        transition: 'background 0.3s',
        textTransform: 'none',
        boxShadow: 'none',
        fontSize: '17px',
        color: '#F8CA25',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
      });
    }
    setEnergyButtonToggle(!energyButtonToggle);
  };

  // Function to handle the "Consumer" button click
  const handleConsumerButtonClick = () => {
    if (consumerButtonToggle) {
      setConsumerButtonStyle({
        background: '#F8CA25',
        border: 'none',
        transition: 'background 0.3s',
        textTransform: 'none',
        boxShadow: 'none',
        fontSize: '17px',
        color: '#FFFFFF',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
      });
    } else {
      setConsumerButtonStyle({
        background: '#FEF4D3',
        border: 'none',
        transition: 'background 0.3s',
        textTransform: 'none',
        boxShadow: 'none',
        fontSize: '17px',
        color: '#F8CA25',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
      });
    }
    setConsumerButtonToggle(!consumerButtonToggle);
  };

  const [energyButtonToggle1, setEnergyButtonToggle1] = useState(false);
  const [energyButtonToggle2, setEnergyButtonToggle2] = useState(false);
  const [energyButtonToggle3, setEnergyButtonToggle3] = useState(false);
  const [energyButtonToggle4, setEnergyButtonToggle4] = useState(false);
  const [energyButtonToggle5, setEnergyButtonToggle5] = useState(false);
  const [energyButtonToggle6, setEnergyButtonToggle6] = useState(false);
  const [energyButtonToggle7, setEnergyButtonToggle7] = useState(false);
  const [energyButtonToggle8, setEnergyButtonToggle8] = useState(false);
  const [energyButtonToggle9, setEnergyButtonToggle9] = useState(false);
  const [energyButtonToggle10, setEnergyButtonToggle10] = useState(false);
  const [energyButtonToggle11, setEnergyButtonToggle11] = useState(false);
  const [energyButtonToggle12, setEnergyButtonToggle12] = useState(false);
  const [energyButtonToggle13, setEnergyButtonToggle13] = useState(false);
  const [energyButtonToggle14, setEnergyButtonToggle14] = useState(false);
  const [energyButtonToggle15, setEnergyButtonToggle15] = useState(false);

  // Function to handle the "Energy" button click for the first button
  const handleEnergyButtonClick1 = () => {
    setEnergyButtonToggle1(!energyButtonToggle1);
  };

  // Function to handle the "Energy" button click for the second button
  const handleEnergyButtonClick2 = () => {
    setEnergyButtonToggle2(!energyButtonToggle2);
  };

  // Function to handle the "Energy" button click for the third button
  const handleEnergyButtonClick3 = () => {
    setEnergyButtonToggle3(!energyButtonToggle3);
  };

  const handleEnergyButtonClick4 = () => {
    setEnergyButtonToggle4(!energyButtonToggle4);
  };


  const handleEnergyButtonClick5 = () => {
    setEnergyButtonToggle5(!energyButtonToggle5);
  };

  const handleEnergyButtonClick6 = () => {
    setEnergyButtonToggle6(!energyButtonToggle6);
  };

  const handleEnergyButtonClick7 = () => {
    setEnergyButtonToggle7(!energyButtonToggle7);
  };

  const handleEnergyButtonClick8 = () => {
    setEnergyButtonToggle8(!energyButtonToggle8);
  };

  const handleEnergyButtonClick9 = () => {
    setEnergyButtonToggle9(!energyButtonToggle9);
  };


  const handleEnergyButtonClick10 = () => {
    setEnergyButtonToggle10(!energyButtonToggle10);
  };

  const handleEnergyButtonClick11 = () => {
    setEnergyButtonToggle11(!energyButtonToggle11);
  };


  const handleEnergyButtonClick12 = () => {
    setEnergyButtonToggle12(!energyButtonToggle12);
  };

  const handleEnergyButtonClick13 = () => {
    setEnergyButtonToggle13(!energyButtonToggle13);
  };

  const handleEnergyButtonClick14 = () => {
    setEnergyButtonToggle14(!energyButtonToggle14);
  };

  const handleEnergyButtonClick15 = () => {
    setEnergyButtonToggle15(!energyButtonToggle15);
  };

    return (
      <div>
  <Container className="px-5">
      <div className="">
        <h4 style={{ color: '#7C6512' }} className="fw-bolder">
          Pitch Application
        </h4>
        <p>step 1 of 4</p>
      </div>

      <div>
        <hr />
      </div>
      <MDBRow>
        <MDBCol xs={12} md={6}>
          <div className="mb-4">
            <Form.Label className="text-black fw-bold">Company Name</Form.Label>
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
          {/* <div className="mb-4">
            <Form.Label className="text-black fw-bold">What is the primary country of operation for your startup?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your answer"
              className=""
              style={{ padding: '20px 32px', boxShadow: 'none' }}
              required // Add required attribute
            />
          </div> */}
        </MDBCol>

        <MDBCol xs={12} md={6}>
          <div className="mb-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bold text-black">How is it solving the stated problem?</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Type Something" />
            </Form.Group>
          </div>
        </MDBCol>
      </MDBRow>

        <MDBRow>
       
        <MDBCol xs={12} md={6}>
          <div className="mb-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bold text-black">Why is now the best time for this product to exist?
               Why are you tackling this problem? Why has no one taken this approach before?</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Type Something" />
            </Form.Group>
          </div>
        </MDBCol>
       
        <MDBCol xs={12} md={6}>
          <div className="mb-4">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="fw-bold text-black">
              How large is the opportunity you are pursuing? How much are customers 
              spending on alternative solutions right now?
              </Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Type Something" />
            </Form.Group>
          </div>
        </MDBCol>
        </MDBRow>

        <MDBRow>
       
       <MDBCol xs={12} md={6}>
         <div className="mb-4">
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Label className="fw-bold text-black">How are people currently solving the problem
             , and how is your startup better?</Form.Label>
             <Form.Control as="textarea" rows={4} placeholder="Type Something" />
           </Form.Group>
         </div>

         
         <div>
  <h6 className='fw-bold'>Would you like to receive our monthly newsletter 
  to stay updated on all things VPFund?</h6>
  <label className="me-3"style={{ display: 'inline-block', marginRight: '10px' }}>
    <input
      type="radio"
      name="fav_language"
      value="Yes"
      checked={selectedLanguage === 'Yes'}
      onChange={handleLanguageChange}
    />
    Yes
  </label>
  <label style={{ display: 'inline-block' }}>
    <input
      type="radio"
      name="fav_language"
      value="No"
      checked={selectedLanguage === 'No'}
      onChange={handleLanguageChange}
    />
    No
  </label>
</div>
       </MDBCol>
      
       <MDBCol xs={12} md={6}>
         <div className="mb-4">
           <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
             <Form.Label className="fw-bolder text-black">
             How many users or customers have you acquired since launch? How many 
             are ‘active’ today? What is the avg. weekly growth rate?
             </Form.Label>
             <Form.Control as="textarea" rows={4} placeholder="Type Something" />
           </Form.Group>
         </div>

       </MDBCol>

       </MDBRow>


       <MDBRow>
        <MDBCol xs={12} md={6}>
            <h6 className='mt-4 fw-bold'>What industry vertical does your startup operate in?</h6>
          <Row className="mt-2 my-2">
          <Col xs={12} sm={6} md={4}>
            <Button
              className="mt-3 btn-sm"
              style={
                energyButtonToggle1
                  ? {
                      background: '#FEF4D3',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#F8CA25',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
                  : {
                      background: '#F8CA25',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#FFFFFF',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
              }
              onClick={handleEnergyButtonClick1}
            >
              <MDBIcon icon={energyButtonToggle1 ? 'plus' : 'check'} className="me-1" />
              Energy
            </Button>
          </Col>



          <Col xs={12} sm={6} md={4}>
            <Button
              className="mt-3 btn-sm"
              style={
                energyButtonToggle2
                  ? {
                      background: '#FEF4D3',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#F8CA25',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
                  : {
                      background: '#F8CA25',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#FFFFFF',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
              }
              onClick={handleEnergyButtonClick2}
            >
              <MDBIcon icon={energyButtonToggle2 ? 'plus' : 'check'} className="me-1" />
              Energy
            </Button>
          </Col>



          <Col xs={12} sm={6} md={4}>
            <Button
              className="mt-3 btn-sm"
              style={
                energyButtonToggle3
                  ? {
                      background: '#FEF4D3',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#F8CA25',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
                  : {
                      background: '#F8CA25',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#FFFFFF',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
              }
              onClick={handleEnergyButtonClick3}
            >
              <MDBIcon icon={energyButtonToggle3 ? 'plus' : 'check'} className="me-1" />
              Energy
            </Button>
          </Col>



          </Row>

          <Row className="mt-2 my-2">
          <Col xs={12} sm={6} md={4}>
            <Button
              className="mt-3 btn-sm"
              style={
                energyButtonToggle4
                  ? {
                      background: '#FEF4D3',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#F8CA25',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
                  : {
                      background: '#F8CA25',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#FFFFFF',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
              }
              onClick={handleEnergyButtonClick4}
            >
              <MDBIcon icon={energyButtonToggle4 ? 'plus' : 'check'} className="me-1" />
              Energy
            </Button>
          </Col>



          <Col xs={12} sm={6} md={4}>
            <Button
              className="mt-3 btn-sm"
              style={
                energyButtonToggle5
                  ? {
                      background: '#FEF4D3',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#F8CA25',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
                  : {
                      background: '#F8CA25',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#FFFFFF',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
              }
              onClick={handleEnergyButtonClick5}
            >
              <MDBIcon icon={energyButtonToggle5 ? 'plus' : 'check'} className="me-1" />
              Energy
            </Button>
          </Col>


          <Col xs={12} sm={6} md={4}>
            <Button
              className="mt-3 btn-sm"
              style={
                energyButtonToggle6
                  ? {
                      background: '#FEF4D3',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#F8CA25',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
                  : {
                      background: '#F8CA25',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#FFFFFF',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
              }
              onClick={handleEnergyButtonClick6}
            >
              <MDBIcon icon={energyButtonToggle6 ? 'plus' : 'check'} className="me-1" />
              Energy
            </Button>
          </Col>




          </Row>

          <Row className="mt-2 btn-sm">
          <Col xs={12} sm={6} md={4}>
            <Button
              className="mt-3 btn-sm"
              style={
                energyButtonToggle7
                  ? {
                      background: '#FEF4D3',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#F8CA25',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
                  : {
                      background: '#F8CA25',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#FFFFFF',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
              }
              onClick={handleEnergyButtonClick7}
            >
              <MDBIcon icon={energyButtonToggle7 ? 'plus' : 'check'} className="me-1" />
              Energy
            </Button>
          </Col>



          <Col xs={12} sm={6} md={4}>
            <Button
              className="mt-3 btn-sm"
              style={
                energyButtonToggle8
                  ? {
                      background: '#FEF4D3',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#F8CA25',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
                  : {
                      background: '#F8CA25',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#FFFFFF',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
              }
              onClick={handleEnergyButtonClick8}
            >
              <MDBIcon icon={energyButtonToggle8 ? 'plus' : 'check'} className="me-1" />
              Energy
            </Button>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Button
              className="mt-3 btn-sm"
              style={
                energyButtonToggle9
                  ? {
                      background: '#FEF4D3',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#F8CA25',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
                  : {
                      background: '#F8CA25',
                      border: 'none',
                      transition: 'background 0.3s',
                      textTransform: 'none',
                      boxShadow: 'none',
                      fontSize: '17px',
                      color: '#FFFFFF',
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                    }
              }
              onClick={handleEnergyButtonClick9}
            >
              <MDBIcon icon={energyButtonToggle9 ? 'plus' : 'check'} className="me-1" />
              Energy
            </Button>
          </Col>

        
          </Row>


        </MDBCol>

        <MDBCol xs={12} md={6}>
          <div className="mb-5">
            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
              <Form.Label className=" text-black fw-bold">
              What will you spend the money on? What milestones will it help you achieve, 
              and how long will it take you to achieve them?
              </Form.Label>
              <Form.Control className='p-3' as="textarea" rows={4} placeholder="Type Something" />
            </Form.Group>
          </div>
        </MDBCol>
      </MDBRow>

      
      <MDBRow>


      <MDBCol xs={12} md={6}>
          <div className="mb-5">
            <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
              <Form.Label className=" text-black fw-bold">
              Why do you think Ventures Platform is a good fit for your startup?
               How, exactly, can we help you grow your business?
              </Form.Label>
              <Form.Control className='p-3' as="textarea" rows={4} placeholder="Type Something" />
            </Form.Group>
          </div>  

          <h6 className='fw-bold'>What industry vertical does your startup operate in?</h6>
          <Row className="mt-2 my-2">
            <Col xs={12} sm={6} md={4}>
            <Button
        className="mt-3 btn-sm"
        style={{
          background: "#F8CA25",
          border: "none",
          transition: 'background 0.3s',
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '17px',
          color: '#FFFFFF',
          borderRadius: '20px', // Adjust the value to control the level of rounding
          display: 'flex',
          alignItems: 'center', // To align the icon and text vertically
        }}>

        <MDBIcon icon="check" className="me-2" /> {/* Add the MDBIcon component */}
        Energy
      </Button>
            </Col>


            <Col xs={12} sm={6} md={4}>
            <Button
        className="mt-3 btn-sm"
        style={{
          background: "#F8CA25",
          border: "none",
          transition: 'background 0.3s',
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '17px',
          color: '#FFFFFF',
          borderRadius: '20px', // Adjust the value to control the level of rounding
          display: 'flex',
          alignItems: 'center', // To align the icon and text vertically
        }}>

        <MDBIcon icon="check" className="me-2" /> {/* Add the MDBIcon component */}
        Energy
      </Button>
            </Col>


            <Col xs={12} sm={6} md={4}>
            <Button
        className="mt-3 btn-sm"
        style={{
          background: "#F8CA25",
          border: "none",
          transition: 'background 0.3s',
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '17px',
          color: '#FFFFFF',
          borderRadius: '20px', // Adjust the value to control the level of rounding
          display: 'flex',
          alignItems: 'center', // To align the icon and text vertically
        }}>

        <MDBIcon icon="check"  className="me-2" /> {/* Add the MDBIcon component */}
        Energy
      </Button>
            </Col>



          
           
          </Row>

       
       
          <Row className="mt-2 my-2">
            <Col xs={12} sm={6} md={4}>
            <Button
        className="mt-3 btn-sm"
        style={{
          background: "#F8CA25",
          border: "none",
          transition: 'background 0.3s',
          textTransform: 'none',
          boxShadow: 'none',
          fontSize: '17px',
          color: '#FFFFFF',
          borderRadius: '20px', // Adjust the value to control the level of rounding
          display: 'flex',
          alignItems: 'center', // To align the icon and text vertically
        }}>
       
        <MDBIcon icon="check" className="me-2" /> {/* Add the MDBIcon component */}
        Energy
      </Button>
            </Col>


            <Col xs={12} sm={6} md={4}>
            <Button
            className="mt-3 btn-sm"
            style={{
                background: "#FEF4D3",
              border: "none",
              transition: 'background 0.3s',
              textTransform: 'none',
              boxShadow: 'none',
              fontSize: '17px',
              color: '#F8CA25', 
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
            }}>
         
            <MDBIcon icon="plus" className="me-2" />
           Consumer
          </Button>
            </Col>

            <Col xs={12} sm={6} md={4}>
            <Button
            className="mt-3 btn-sm"
            style={{
                background: "#FEF4D3",
              border: "none",
              transition: 'background 0.3s',
              textTransform: 'none',
              boxShadow: 'none',
              fontSize: '17px',
              color: '#F8CA25', 
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
            }}>

            <MDBIcon icon="plus" className="me-2" />
           Consumer
          </Button>
            </Col>


          </Row>
       
       
       
        </MDBCol>
        




        <MDBCol xs={12} md={6} >
        <div className="mb-4">
      <label className="text-black fw-bold">If you have prepared a pitch deck, please upload it</label>

      <div
        style={{
          border: '2px dashed #ccc',
          padding: '1rem',
          borderRadius: '10px',
          height: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden', // To ensure the content does not exceed the container boundaries
        }}
        className="mt-4"
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
      >
        {selectedFile ? (
          <div style={{ maxWidth: '100%', maxHeight: '100%', position: 'relative' }}>
            {selectedFile.type.startsWith('image/') ? (
              <img
                src={URL.createObjectURL(selectedFile)} // Use URL.createObjectURL() to create a temporary URL
                alt="Selected File Preview"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
            ) : (
              <div>
                <p>Selected File: {selectedFile.name}</p>
                <a href={URL.createObjectURL(selectedFile)} download>
                  Download Document
                </a>
              </div>
            )}
            <button
              className="btn btn-danger"
              onClick={handleRemoveFile}
              style={{
                position: 'absolute',
                top: '100px',
                left: '70%',
                transform: 'translateX(-50%)',
              }}
            >
              Remove
            </button>
          </div>
        ) : (
          <div
            className="text-center"
            onClick={() => fileInputRef.current.click()}
            onDrop={handleFileDrop}
            onDragOver={handleDragOver}
          >
            <img src={draganddrop} alt="" />
            <p>
              Select a file or drag and drop here
              <br />
              <span style={{ fontSize: '11px', color: '#C7C9D9' }}>
                JPG, PNG or PDF, file size no more than 10MB
              </span>
            </p>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
              accept=".jpg, .jpeg, .png, .pdf"
            />
            <label
              className="btn btn-primary mt-3"
              htmlFor="fileInput"
              style={{
                background: 'none',
                border: '2px solid #F8CA25',
                transition: 'background 0.3s',
                textTransform: 'none',
                boxShadow: 'none',
                fontSize: '17px',
                color: '#F8CA25',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.target.style.background = 'black')}
              onMouseLeave={(e) => (e.target.style.background = 'none')}
            >
              Select File
            </label>
          </div>
        )}
      </div>
    </div>
  
          <h5 className='fw-bold mt-1 p-2' style={{ fontSize:"17px" }}>Thank you for filling the funding application form.
           We will get back to you soon.</h5>
  
        </MDBCol>

      </MDBRow>

      <div className="d-flex justify-content-end mt-5">
      <Button
  className="mt-3 btn-lg p-2 me-3"
  style={{
    background: "#F2F2F5",
    border: "none",
    transition: 'background 0.3s',
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: '17px',
    color: '#6B7588',
    width: "16%",
    fontWeight: 'bold'
 
  }}
  onMouseEnter={(e) => e.target.style.background = '#000'}
  onMouseLeave={(e) => e.target.style.background = '#F2F2F5'}
>
  Previous
</Button>

<Button
  className="mt-3 p-3 me-4"
  style={{
    background: "none",
    border: "2px solid #F8CA25",
    transition: 'background 0.3s',
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: '17px',
    color: '#F8CA25',
    fontWeight: 'bold'
    
  }}
  onMouseEnter={(e) => e.target.style.background = 'black'}
  onMouseLeave={(e) => e.target.style.background = 'none'}
>
  Save as Draft
</Button>

<Button
  className="mt-3 btn-lg p-2"
  style={{
    background: "#F8CA25",
    border: "none",
    transition: 'background 0.3s',
    textTransform: 'none',
    boxShadow: 'none',
    fontSize: '17px',
    color: '#FFFFFF',
    width: "16%",
    fontWeight: 'bold'
   
  }}
  onMouseEnter={(e) => e.target.style.background = '#000'}
  onMouseLeave={(e) => e.target.style.background = '#F8CA25'}
>
  Submit
</Button>

{/* For mobile, apply different styles using media query */}
<style jsx>{`
  @media (max-width: 768px) {
    .btn-lg {
     
    }
  }
`}</style>
      </div>
      {/* Two buttons */}


      {/* Two buttons */}
    
    </Container>

{/* 
    <div className="mt-5" style={{ backgroundColor: 'rgba(254, 244, 211, 0.7)', padding: '9px', width: '100%'}}>
<Container>
<img src={catalystlogo} alt="" />
</Container>

</div> */}
      </div>
    );
  };
  export default Fourth;