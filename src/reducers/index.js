import find from 'lodash.find';
import _ from 'lodash';

const initialState = {
  searchQuery : '',
  searching: false,
  searched: false,
  adding:false,
  added:false,
  commands: [],
  showForm: false,
  editCommand: null,
  selectedCommand: null,
  message :{
    text:'',
    type:''
  },
  progress: false
}

export default function reducer(state = initialState, {type, payload}) {
  switch(type){
  case 'SHOW_ADD_FORM':
    return {...state, showForm: true}
  case 'HIDE_ADD_FORM':
    return {...state, showForm: false}
  case 'SEARCH_COMMAND_START':
    return {...state, searchQuery:payload, searching:true, searched:false}
  case 'SEARCH_COMMAND_FULFILLED':
  case 'GET_COMMAND_FULFILLED':
    return {...state, commands:payload.data, searching:false, searched: true}
  case 'SEARCH_COMMAND_REJECTED':
  case 'GET_COMMAND_REJECTED':
    return {...state, searching:false, searched: false, error: payload}
  case 'ADD_COMMAND_START':
    return {...state, adding:true}
  case 'ADD_COMMAND_FULFILLED':
    return {...state,
      adding:false,
      commands: [payload.data, ...state.commands],
      showForm: false,
      message : { text: 'Command Added Successfully', type:'success'}}
  case 'ADD_COMMAND_REJECTED':
    return {...state,
      adding:false,
      error: payload,
      message : { text: 'Failed to add Command', type:'error'}}
  case 'SELECT_COMMAND':
    return {
      ...state,
      showForm: false,
      selectedCommand: find(state.commands, {_id : payload})
    };
  case 'EDIT_COMMAND_START':
    return {
      ...state,
      showForm: true,
      editCommand: _.first(state.commands.filter((command) => command._id == payload))
    };
  case 'UPDATE_COMMAND_FULFILLED':
    let commandIndex = _.findIndex(state.commands, {_id : payload.data._id})
    return {
      ...state,
      showForm:false,
      editForm:null,
      commands: state.commands.map((command)=>{
        if(command._id === payload.data._id){
          return payload.data;
        }
        else{
          return command;
        }
      })
    };
  case 'DELETE_COMMAND_FULFILLED':
    return {
      ...state,
      selectedCommand:null,
      message: { text: 'Command Deleted Successfully', type:'success'},
      commands: _.compact(state.commands.map((command)=> {
        if(command._id !== payload.data._id){
          return command
        }
      }))
    }
  case 'SHOW_MESSAGE':
    return {
      ...state,
      message: payload
    }
  }
  return state;
}
