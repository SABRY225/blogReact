import React from 'react'
import { useState } from "react";
import { FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Contact() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert(`username : ${inputs.username}   ,   Problem : ${inputs.Problem}`)
  }
  return (
    <div className='Form_Style'>
    <Form onSubmit={handleSubmit} className='m-5 '>
      <Form.Group className="m-5" controlId="formBasicEmail">
        <Form.Label>username</Form.Label>
        <Form.Control type="txt" name="username"  value={inputs.username || ""}  onChange={handleChange} placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="m-5" controlId="exampleForm.ControlTextarea1">
        <Form.Label>What is Problem ?</Form.Label>
        <Form.Control as="textarea" rows={3} name="Problem" value={inputs.Problem || ""} onChange={handleChange} />
      </Form.Group>
      <FormGroup className='text-center'>
            <Button variant="primary"  type="submit">
        Submit
      </Button>
      </FormGroup>
  
    </Form>
    </div>

  )
}

export default Contact
