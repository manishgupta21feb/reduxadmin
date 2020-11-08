import { 
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT
} from '../constants/types';

const initialState = {
  contacts : [
    {
      "id": 1,
      "name": "Manish gupta",
      "phone": "8578489658",
      "email": "manish.gupta@kiwitech.com",
    },
    {
      "id": 2,
      "name": "Ankit Gupta",
      "phone": "4523621578",
      "email": "ankit@gmail.com",
    },
    {
      "id": 3,
      "name": "Dhruv Arora",
      "phone": "7896325698",
      "email": "dhruv@gmail.com",
    },
    {
      "id": 4,
      "name": "Vaibhav Aggarwal",
      "phone": "1532698748",
      "email": "vaibhav@gmail.com",
    },
    {
      "id": 5,
      "name": "Rohit Rawat",
      "phone": "5556987458",
      "email": "rohit@gmail.com",
    }
  ],
  newContact: null,
}

export const contactReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_CONTACT: 
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    case GET_CONTACT:
      let arr = state.contacts.filter((contacts)=> contacts.id == action.payload);
      for(let val of arr) {
        arr = val;
      }
      return {
        ...state,
        newContact: arr
      }
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contacts)=> 
          contacts.id === action.payload.id ? action.payload : contacts)
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contacts) => contacts.id != action.payload)
      }
    default: 
      return state
  }
}
