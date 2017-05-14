let initialState = {
  show: false,
  data: null
}

export default function form(state = initialState, { type, payload }) {
  switch (type) {
    case 'SHOW_ADD_FORM':
      return {
        ...state,
        show: true
      }
    case 'HIDE_ADD_FORM':
    case 'SELECT_COMMAND':
    case 'UPDATE_COMMAND_FULFILLED':
    case 'HIDE_EDIT_FORM':
      return {
        ...state,
        show: false
      }
    case 'SHOW_EDIT_FORM':
      return {
        ...state,
        data: payload,
        show: true
      }

  }
  return state;
}
