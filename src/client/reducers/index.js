import _ from 'lodash';

const initialState = {
  searchQuery : '',
  searching: false,
  searched: false,
  adding:false,
  added:false,
  commands: [],
  showAddForm: false,
  selectedCommand: null,
  message :{
    text:'',
    type:''
  }
}

export default function reducer(state = initialState, {type, payload}) {
  switch(type){
    case 'SHOW_ADD_FORM':
      return {...state, showAddForm: true}
    case 'HIDE_ADD_FORM':
      return {...state, showAddForm: false}
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
        showAddForm: false,
        message : { text: 'Command Added Successfully', type:'success'}}
    case 'ADD_COMMAND_REJECTED':
      return {...state,
        adding:false,
        error: payload,
        message : { text: 'Failed to add Command', type:'error'}}
    case 'SELECT_COMMAND':
      return {
          ...state,
          selectedCommand: _.find(state.commands, {_id : payload})
        };
    }
  return state;
}
