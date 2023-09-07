import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

import { FaSearch } from 'react-icons/fa';

const GeneralContent = () => {
  return (
    <div>
    <div className="d-flex">
      <InputGroup className="w-100">
        <FormControl
          type="search"
          placeholder="Write your question here..."
          aria-label="Search"
          style={{ backgroundColor: 'whiteSmoke', color: 'black', boxShadow:'none' }}
          className='p-4 bg-white border-0'
        />
        <InputGroup.Text className='p-4 bg-white border-0'>
          <FaSearch />
        </InputGroup.Text>
      </InputGroup>
      </div>

<div className='mt-4'>
<Accordion className='border-0 no-shadow' style={{boxShadow:'none'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header className='border-0' style={{boxShadow:'none'}}>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">

        <Accordion.Header className='mt-2'>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>



      
    </Accordion>
</div>
    </div>
  );
};

export default GeneralContent;
