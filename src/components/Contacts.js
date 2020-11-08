import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../actions/contactAction';

const Contacts = () => {

  const dispatch = useDispatch();

  //To Get data from store
  const contacts = useSelector((state) => state.cReducer.contacts);

  const deleteData = (id) => {
    dispatch(deleteContact(id))  
  }

  return (
    <div>
      <Table shadow className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map((item, i)=> 
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>
                {/* Template Literals */}
                <Link to={`/contacts/edit/${item.id}`} className="action-btn">Edit</Link>
                <span className="action-btn" onClick={(e)=> deleteData(item.id)}>Delete</span>
              </td>
            </tr> 
            )
          } 
        </tbody>  
      </Table>
    </div>
  )
}

export default Contacts;
