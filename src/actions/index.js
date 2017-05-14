import axios from 'axios';
import Config from 'Config';

export function searchCommand(query) {
  return (dispatch) => {
    dispatch({ type: "SEARCH_COMMAND_START", payload: query });
    dispatch({ type: "SEARCH_COMMAND", payload: axios(`${Config.apiUrl}search/?q=${query}`) })
  }
}

export function getCommands() {
  return (dispatch) => {
    dispatch({ type: "GET_COMMAND", payload: axios(`${Config.apiUrl}list`) })
  }
}

export function selectCommand(id) {
  return (dispatch) => {
    dispatch({ type: "SELECT_COMMAND", payload: id })
  }
}
export function showAddForm() {
  return (dispatch) => {
    dispatch({ type: "SHOW_ADD_FORM" });
  }
}
export function hideAddForm() {
  return (dispatch) => {
    dispatch({ type: "HIDE_ADD_FORM" });
  }
}

export function addCommand(command) {
  return (dispatch) => {
    dispatch({ type: 'ADD_COMMAND', payload: axios.post(`${Config.apiUrl}add`, command) })
  }
}

export function editCommand(command) {
  return (dispatch) => {
    dispatch({ type: 'SHOW_EDIT_FORM', payload: command })
  }
}
export function updateCommand(command) {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_COMMAND', payload: axios.post(`${Config.apiUrl}update`, command) })
  }
}

export function deleteCommand(id) {
  return (dispatch) => {
    dispatch({ type: 'DELETE_COMMAND', payload: axios.post(`${Config.apiUrl}delete`, { _id: id }) })
  }
}

export function showMessage(obj) {
  return (dispatch) => {
    dispatch({ type: 'SHOW_MESSAGE', payload: obj })
  }
}
