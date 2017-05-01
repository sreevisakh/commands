import axios from 'axios';

export function searchCommand(query) {
  return (dispatch) => {
    dispatch({type: "SEARCH_COMMAND_START", payload: query});
    dispatch({type:"SEARCH_COMMAND", payload: axios("http://localhost:8081/search/?q="+query)})
}}
export function showAddForm() {
  return (dispatch) => {
    dispatch({type: "SHOW_ADD_FORM"});
}}
export function hideAddForm() {
  return (dispatch) => {
    dispatch({type: "HIDE_ADD_FORM"});
}}
