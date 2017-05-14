import React, { Component, PropTypes } from 'react';
import { searchCommand } from '../../actions';
import { connect } from 'react-redux';
import cn from 'classnames';
import s from './SearchBar.scss'

/**
 * SearchBar
 */
@connect((store) => {
  return {
    searchQuery: store.command.query
  }
}, (dispatch) => {
  return {
    onSubmit: (e) => {
      dispatch(searchCommand(e.target.querySelector('input')
        .value));
    }
  }
})
export class SearchBar extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <form className="form-inline my-2 my-lg-0"  onSubmit= {e => {
        e.preventDefault();
        this.props.onSubmit(e);
      }}>
        <input className="form-control mr-sm-2" type="text" placeholder="Search" autoFocus/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
