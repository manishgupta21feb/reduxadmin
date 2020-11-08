import { 
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT
 } from '../constants/types';

//Create contact
export const createContact = (data) => {
  return {
    type: CREATE_CONTACT,
    payload: data
  }
}

//get a contact
export const getContact = (id) => {
  return {
    type: GET_CONTACT,
    payload: id
  }
}

//Update contact
export const updateContact = (data) => {
  return {
    type: UPDATE_CONTACT,
    payload: data
  }
}

//Delect contact
export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id
  }
}
