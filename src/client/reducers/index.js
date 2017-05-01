
const initialState = {
  searchQuery : '',
  searching: false,
  searched: false,
  commands: [],
  showAddForm: false
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
      return {...state, commands:payload.data, searching:false, searched: true}
    case 'SEARCH_COMMAND_REJECTED':
      return {...state, searching:false, searched: false, error: payload}
  }
  return state;
}
