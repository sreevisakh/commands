import _ from 'lodash';

let initialState = {
  commands: [],
  query: '',
}

export default function command(state = initialState, { type, payload }) {
  switch (type) {
  case 'SEARCH_COMMAND_FULFILLED':
  case 'GET_COMMAND_FULFILLED':
    return {...state, commands: payload }
  case 'SEARCH_COMMAND_REJECTED':
  case 'GET_COMMAND_REJECTED':
    return {...state, error: payload }
  case 'ADD_COMMAND_FULFILLED':
    return {...state,
      commands: [payload.data, ...state.commands]
    }
  case 'ADD_COMMAND_REJECTED':
    return {...state,
      error: payload
    }
  case 'SELECT_COMMAND':
    return {
      ...state,
      selectedCommand: _.find(state.commands, { _id: payload })
    }
  case 'UPDATE_COMMAND_FULFILLED':
    let commandIndex = _.findIndex(state.commands, { _id: payload.data._id })
    return {
      ...state,
      commands: state.commands.map((command) => {
        if (command._id === payload.data._id) {
          return payload.data;
        } else {
          return command;
        }
      }),
      selectedCommand: payload.data
    };

  case 'DELETE_COMMAND_FULFILLED':
    return {
      ...state,
      selectedCommand: null,
      message: { text: 'Command Deleted Successfully', type: 'success' },
      commands: _.compact(state.commands.map((command) => {
        if (command._id !== payload.data._id) {
          return command
        }
      }))
    }
  }
  return state;
}
