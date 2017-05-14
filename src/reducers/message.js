let initialState = {
  text: '',
  type: null,
  show: false
}

export default function message(state = initialState, { type, payload }) {
  switch (type) {
    case 'SHOW_MESSAGE':
      return {
        ...state,
        message: payload
      }
    case 'ADD_COMMAND_FULFILLED':
    case 'UPDATE_COMMAND_FULFILLED':
    case 'DELETE_COMMAND_FULFILLED':
      return {
        ...state,
        message: {
          text: 'Operation Successfull',
          type: 'success'
        }
      }
    case 'GET_COMMAND_REJECTED':
    case 'SEARCH_COMMAND_REJECTED':
    case 'ADD_COMMAND_REJECTED':
      return {
        ...state,
        message: {
          text: `Operation Failed ${JSON.stringify(payload.error)}`,
          type: 'error'
        }
      }
  }
  return state;
}
