import React, { Component, PropTypes } from 'react';
import Link from './Link'
import { connect } from 'react-redux';
import {showAddForm} from '../actions';
import SearchBar from './SearchBar/'
/**
 * NavBar
 */
 @connect(null, (dispatch)=>{
   return {
     navigate: function() {
       dispatch(showAddForm())
     }
   }
 })
export class NavBar extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <nav className="navbar navbar-toggleable-sm navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button"
          data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Navbar</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <Link navigate={this.props.navigate.bind(this)} text="Add" />
            </li>
            <li className="nav-item">
            </li>
          </ul>
          <SearchBar />
        </div>
      </nav>
    );
  }
}

export default NavBar;
