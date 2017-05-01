import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { hideAddForm, addCommand } from '../actions';
import _ from 'lodash';
/**
 * AddForm
 */
 @connect(null,(dispatch)=>{
   return {
     hideForm: ()=> dispatch(hideAddForm()),
     addCommand: (command)=>dispatch(addCommand(command))
   }
 })
export class AddForm extends Component { // eslint-disable-line react/prefer-stateless-function
  submit(){
    this.props.addCommand({
      title: this.title.value, command: this.command.value, tags: _.uniq(_.compact(this.tags.value.split(',')))
    })
  }
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
        <form onSubmit={this.submit.bind(this)} >
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control"  placeholder="Enter Command title" ref={(input) => this.title = input}/>
          </div>
          <div className="form-group">
            <label>Command</label>
            <textarea className="form-control" id="exampleTextarea" rows="3" ref={(input) => this.command = input}></textarea>
          </div>
          <div className="form-group">
            <label>Tags</label>
            <input type="text" className="form-control" placeholder="Enter tags" ref={(input) => this.tags = input}/>
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
