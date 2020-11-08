import { combineReducers } from 'redux';
import { contactReducer } from '../reducers/contactReducer';

export default combineReducers({
  cReducer: contactReducer,  
})
