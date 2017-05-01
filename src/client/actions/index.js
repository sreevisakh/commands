import axios from 'axios';

export function searchCommand(query) {
  return (dispatch) => {
    dispatch({type: "SEARCH_COMMAND_START", payload: query});
    dispatch({type:"SEARCH_COMMAND", payload: axios("http://localhost:8081/search/?q="+query)})
}}

export function getCommands() {
  return (dispatch) => {
    dispatch({type:"GET_COMMAND", payload: axios("http://localhost:8081/list")})
}}

export function selectCommand(id) {
  return (dispatch) => {
    dispatch({type:"SELECT_COMMAND", payload: id})
}}
export function showAddForm() {
  return (dispatch) => {
    dispatch({type: "SHOW_ADD_FORM"});
}}
export function hideAddForm() {
  return (dispatch) => {
    dispatch({type: "HIDE_ADD_FORM"});
}}


export function addCommand(command){
  return (dispatch)=>{
    dispatch({ type: 'ADD_COMMAND_START' })
    dispatch({ type: 'ADD_COMMAND', payload: axios.post("http://localhost:8081/add", command) })
  }
}
