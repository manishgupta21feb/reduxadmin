import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { 
  getContact,
  updateContact
} from '../actions/contactAction';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const EditContact = () => {

  //Get Id from URL
  let { id } = useParams();

  //For store data in store
  let dispatch = useDispatch();

  //Form States
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  //For get data through id from state
  let data = useSelector((state)=> state.cReducer.newContact);

  //Get data onLoad
  useEffect(()=> {
    if(data != null){
      setName(data.name)
      setPhone(data.phone)
      setEmail(data.email)
    }
    dispatch(getContact(id))
  }, [data]);

  //For redirection
  let history = useHistory();

  //Update form data
  const onSubmit = (e) => {
    e.preventDefault();
    const update_contact = Object.assign(data, {
      name: name,
      phone: phone,
      email: email
    });
    dispatch(updateContact(update_contact));
    history.push("/");
  }

  return (
    <>
      <div className="mid-box">
        <h1 className="heading">Edit Contact</h1>
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
          <Button type="submit" variant="primary" block>Update Contact</Button>{' '}
        </Form>
      </div>
    </>
  )
}

export default EditContact;
