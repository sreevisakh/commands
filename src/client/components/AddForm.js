import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { hideAddForm } from '../actions';
/**
 * AddForm
 */
 @connect(null,(dispatch)=>{
   return {
     hideForm: ()=> dispatch(hideAddForm())
   }
 })
export class AddForm extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if(!this.props.show){
      return null
    }
    return (
      <div className="card m-3">
        <div className="card-header">
          Add Command
        </div>
        <div className="card-block">
        <form>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control"  placeholder="Enter Command title"/>
          </div>
          <div className="form-group">
            <label>Command</label>
            <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label>Tags</label>
            <input type="text" className="form-control" placeholder="Enter tags"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="clear" className="btn btn-default ml-3" onClick={this.props.hideForm.bind(this)}>Close</button>
        </form>
        </div>
      </div>
    );
  }
}

export default AddForm;
