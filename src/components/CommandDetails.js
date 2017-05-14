import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { editCommand, deleteCommand } from '../actions';
/**
 * CommnadDetails
 */
@connect((store) => {
  return { selectedCommand: store.command.selectedCommand }
}, (dispatch) => {
  return {
    edit: (command) => dispatch(editCommand(command)),
    deleteCommand: (id) => dispatch(deleteCommand(id))
  }
})
export class CommandDetails extends Component { // eslint-disable-line react/prefer-stateless-function
  select(e) {
    e.target.select();
  }
  edit(command) {
    this.props.edit(command)
  }
  deleteCommand(id) {
    this.props.deleteCommand(id)
  }
  render() {
    if (!this.props.show) {
      return null;
    } else if (!this.props.selectedCommand) {
      return (
        <div className="card m-3">
          <div className="card-block">
            Select a command from left to see details
          </div>
        </div>
      )
    }
    let { title, edit, deleteCommand, command, date, id } = this.props.selectedCommand;
    return (
      <div className="card m-3">
        <div className="card-block">
          <h4 className="card-title mb-3">{title}
          </h4>

          <textarea readOnly="true" onClick={this.select.bind(this)} className="form-control" value={command}></textarea>
          <p className="card-text"><small className="text-muted">Last updated at {date}</small></p>
            <p><a href="#" className="" onClick={()=>this.edit(this.props.selectedCommand)}>Edit</a>
            <a href="#" className="ml-2" onClick={()=> this.deleteCommand(id)}>Delete</a></p>
        </div>
      </div>
    );
  }
}

export default CommandDetails;
