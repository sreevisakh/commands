import React, { Component, PropTypes } from 'react';
import { searchCommand } from '../actions';
import {connect} from 'react-redux';
/**
 * SearchBar
 */
@connect((store)=>{
  return {
    searchQuery : store.searchQuery
  }
}, (dispatch)=>{
  return {
    onSubmit: (e)=>{
      dispatch(searchCommand(e.target.querySelector('input').value));
    }
  }
})
export class SearchBar extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="input-group m-3">
      <form onSubmit= {e => {
            e.preventDefault();
            this.props.onSubmit(e);
          }}>
        <input type="text" className="form-control pull-left"
          style={{"width":"22vw", "float":"left"}}
          placeholder="Search"
          aria-describedby="basic-addon2"/>
        <button type="submit" className="btn btn-primary pull-right" >Go</button>
      </form>
</div>
    );
  }
}

export default SearchBar;
