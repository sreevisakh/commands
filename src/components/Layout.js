import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchBar from './SearchBar/';
import CommandList from './CommandList';
import CommandDetails from './CommandDetails';
import NavBar from './NavBar';
import AddForm from './AddForm';
import Message from './Message'
/**
 * Layout
 */
 @connect((store) =>{
   return {
     showAddForm: store.showAddForm,
     message: store.message
   }
 })
export class Layout extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
        <Message text={this.props.message.text} type={this.props.message.type} />
        <div className="row">
          <div className="col-md-4">
            <SearchBar />
            <CommandList />
          </div>
          <div className="col-md-8">
            <AddForm show={this.props.showAddForm}/>
            <CommandDetails show={!this.props.showAddForm} />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Layout;
