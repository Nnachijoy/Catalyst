import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const QuestionContent = () => {
  return (
    <div>
<p style={{fontSize:'18px'}}>Didn’t see the questions you are looking for? Ask us 
  that questions and you will get your answer via your email box.</p>
<Form className='mt-5'>
      <Form.Group className="" controlId="formBasicEmail">
        <Form.Label className='text-black fw-bold'>Subject</Form.Label>
        <Form.Control className='p-3' type="subject" placeholder="Enter a subject line" />
      </Form.Group>


      <Form.Group className="mt-5" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='text-black fw-bolder'>Message</Form.Label>
        <Form.Control as="textarea" rows={6}  placeholder="Type something"/>
      </Form.Group>



      <Button variant="primary" type="submit" className='mt-4 w-100 p-3 border border none shadow-0'
      style={{backgroundColor:'#F8CA25'}}>
        Send
      </Button>
    </Form>
    </div>
  )
}

export default QuestionContent