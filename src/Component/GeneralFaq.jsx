import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from "./AccordionItem";

import { FaSearch } from 'react-icons/fa';

const GeneralFAQ = () => {
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


      <div className="container mt-5 ">

      <div className=' border-0 accordion-no-shadow'>
  <AccordionItem 
    title={<span className="fw-bolder">What services does Catalyst Offer?</span>}
    content={<div className="fw-bolder" style={{color:'#8F90A6'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididu tlabore sit amet, consectetur adipiscing elit, seddo eiusmodincididunt ut labore  </div>}
  />
</div>

<div className='mt-3'>
  <AccordionItem className=''
   title={<span className="fw-bolder">Why should i choose a Design studio like Catalyst over full-service agency?</span>}
   content={<div className="fw-bolder" style={{color:'#8F90A6'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu tlabore sit amet, consectetur adipiscing elit, 
   seddo eiusmodincididunt ut labore  r, consectetur adipiscing elit, sed do eiusmod tempor incididu tlabore sit</div>}
  />
</div>

<div className=' mt-3'>
  <AccordionItem
 title={<span className="fw-bolder">How does Catalyst create website content without knowing our Business plan?</span>}
 content={<div className="fw-bolder" style={{color:'#8F90A6'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu tlabore sit amet, consectetur adipiscing elit,
  seddo eiusmodincididunt ut labore  r, consectetur adipiscing elit, sed do eiusmod tempor incididu tlabore sit</div>}
  />
</div>

<div className=' mt-3'>
  <AccordionItem
 title={<span className="fw-bolder">What often will results be reported?</span>}
 content={<div className="fw-bolder" style={{color:'#8F90A6'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu tlabore sit amet, consectetur adipiscing elit,
  seddo eiusmodincididunt ut labore  r, consectetur adipiscing elit, sed do eiusmod tempor incididu tlabore sit</div>}
  />
</div>

<div className=' mt-3'>
  <AccordionItem
 title={<span className="fw-bolder">What will be delivered? And When?</span>}
 content={<div className="fw-bolder" style={{color:'#8F90A6'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu tlabore sit amet, consectetur adipiscing elit,
  seddo eiusmodincididunt ut labore  r, consectetur adipiscing elit, sed do eiusmod tempor incididu tlabore sit</div>}
  />
</div>

<div className=' mt-3'>
  <AccordionItem
 title={<span className="fw-bolder">How Quickly will i start seeing result after working with Catalyst?</span>}
 content={<div className="fw-bolder" style={{color:'#8F90A6'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu tlabore sit amet, consectetur adipiscing elit,
  seddo eiusmodincididunt ut labore  r, consectetur adipiscing elit, sed do eiusmod tempor incididu tlabore sit</div>}
  />
</div>
    </div>
{/* <div className='mt-4'>
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
</div> */}
    </div>
  );
};

export default GeneralFAQ;
