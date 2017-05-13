import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { hideAddForm, addCommand, updateCommand, showMessage } from '../actions';
import uniq from 'lodash.uniq';
import compact from 'lodash.compact';
/**
 * AddForm
 */
@connect((store)=>{
  return {
    show: store.showForm,
    editFormData: store.editCommand
  }
},(dispatch)=>{
  return {
    hideForm: ()=> dispatch(hideAddForm()),
    addCommand: (command)=>dispatch(addCommand(command)),
    updateCommand: (command) => dispatch(updateCommand(command)),
    showMessage: (obj) => dispatch(showMessage(obj))
  }
})
export class AddForm extends Component { // eslint-disable-line react/prefer-stateless-function
  validate({title,command,tags}){
    try {
      if(!title.trim()){
        return null
      }
      if(!command.trim()){
        return null;
      }
      tags = _.uniq(tags.split(',').map(tag => tag.trim()));
      if(!tags.length){
        return null
      }
      return {title, command,tags}
    }
    catch(e){
      return null
    }
  }
  submit(e){
    e.preventDefault();
    let data = this.validate({
      title: this.title.value, command: this.command.value, tags: this.tags.value
    })
    if(this.props.editFormData && data){
      this.props.updateCommand({
        _id : this.props.editFormData._id,
        ...data
      })
    }
    else if(!this.props.editFormData && data){
      this.props.addCommand(validate())
    }
    else{
      this.props.showMessage({text: 'Invalid input', type:'error'})
    }
  }
  render() {
    if(!this.props.show){
      return null
    }
    let formData = this.props.editFormData || {}

    return (
      <div className="card m-3">
        <div className="card-header">
          Add Command
        </div>
        <div className="card-block">
        <form onSubmit={this.submit.bind(this)} >
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" defaultValue={formData.title}  placeholder="Enter Command title" ref={(input) => this.title = input} required/>
          </div>
          <div className="form-group">
            <label>Command</label>
            <textarea className="form-control" id="exampleTextarea" defaultValue={formData.command} rows="3" ref={(input) => this.command = input} required></textarea>
          </div>
          <div className="form-group">
            <label>Tags</label>
            <input type="text" className="form-control" placeholder="Enter tags" defaultValue={formData.tags && formData.tags.join(',')} ref={(input) => this.tags = input} required/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-default ml-3" onClick={this.props.hideForm.bind(this)}>Close</button>
        </form>
        </div>
      </div>
    );
  }
}

export default AddForm;
