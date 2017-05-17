import axios from 'axios';
import Config from 'Config';

require('whatwg-fetch');

export function searchCommand(query) {
  return (dispatch) => {
    dispatch({ type: 'SEARCH_COMMAND_START' });
    return fetch(`${Config.apiUrl}search?q=${query}`)
    .then(response => response.json())
    .then(response => dispatch({
      type: 'SEARCH_COMMAND_FULFILLED',
      payload: response,
    }), error => dispatch({ type: 'SEARCH_COMMAND_REJECTED', payload: error }));
  };
}

export function getCommands() {
  return (dispatch) => {
    dispatch({ type: 'GET_COMMAND_START' });
    return fetch(`${Config.apiUrl}list`)
    .then(response => response.json())
    .then(response => dispatch({
      type: 'GET_COMMAND_FULFILLED',
      payload: response,
    }), error => dispatch({ type: 'GET_COMMAND_REJECTED', payload: error }));
  };
}
export function addCommand(command) {
  return (dispatch) => {
    dispatch({ type: 'ADD_COMMAND_START' });
    return fetch(`${Config.apiUrl}add`, command)
    .then(response => response.json())
    .then(response => dispatch({
      type: 'ADD_COMMAND_FULFILLED',
      payload: response,
    }), error => dispatch({ type: 'ADD_COMMAND_REJECTED', payload: error }));
  };
}

export function updateCommand(command) {
  return (dispatch) => {
    dispatch({ type: 'UPDATE_COMMAND_START' });
    return fetch(`${Config.apiUrl}update`, command)
    .then(response => response.json())
    .then(response => dispatch({
      type: 'UPDATE_COMMAND_FULFILLED',
      payload: response,
    }), error => dispatch({ type: 'UPDATE_COMMAND_REJECTED', payload: error }));
  };
}


export function deleteCommand(id) {
  return (dispatch) => {
    dispatch({ type: 'DELETE_COMMAND_START' });
    return fetch(`${Config.apiUrl}delete`, { _id: id })
    .then(response => response.json())
    .then(response => dispatch({
      type: 'DELETE_COMMAND_FULFILLED',
      payload: response,
    }), error => dispatch({ type: 'DELETE_COMMAND_REJECTED', payload: error }));
  };
}

export function selectCommand(id) {
  return (dispatch) => {
    dispatch({ type: 'SELECT_COMMAND', payload: id });
  };
}
export function showAddForm() {
  return (dispatch) => {
    dispatch({ type: 'SHOW_ADD_FORM' });
  };
}
export function hideAddForm() {
  return (dispatch) => {
    dispatch({ type: 'HIDE_ADD_FORM' });
  };
}


export function editCommand(command) {
  return (dispatch) => {
    dispatch({ type: 'SHOW_EDIT_FORM', payload: command });
  };
}


export function showMessage(obj) {
  return (dispatch) => {
    dispatch({ type: 'SHOW_MESSAGE', payload: obj });
  };
}
