import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createContact } from '../actions/contactAction';
import { useHistory } from 'react-router-dom';

const AddContact = () => {

  //For Redirect
  let history = useHistory();

  //Create State from form
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  //For Store data in store
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const new_contacts = {
      name: name,
      phone: phone,
      email: email
    }
    dispatch(createContact(new_contacts));
    history.push("/");
  }

  return (
    <>
      <div className="mid-box">
        <h1 className="heading">Add Contact</h1>
        <Form onSubmit={(e)=> onSubmit(e)}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text"
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control 
              type="text"
              value={phone}
              onChange={(e)=> setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="primary" block>Add Contact</Button>{' '}
        </Form>
      </div>
    </>
  )
}

export default AddContact;
