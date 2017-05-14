import { combineReducers } from 'redux';
import command from './command';
import form from './form';
import message from './message';

export default combineReducers({
  form,
  command,
  message
})
