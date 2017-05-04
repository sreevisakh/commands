import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {editCommand, deleteCommand} from '../actions';
/**
 * CommnadDetails
 */
@connect((store)=>{
  if(store.selectedCommand){
    return {
      id: store.selectedCommand._id,
      title: store.selectedCommand.title,
      command: store.selectedCommand.command,
      date: store.selectedCommand.date,
      tags: store.selectedCommand.tags,
    }
  }
  return {};
},(dispatch) => {
  return {
    edit: (id)=>{
      dispatch(editCommand(id))
    },
    deleteCommand: (id)=>{
      dispatch(deleteCommand(id))
    }
  }
})
export class CommandDetails extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if(!this.props.show){
      return null;
    }
    else if(!this.props.title){
      return (
        <div className="card m-3">
          <div className="card-block">
            Select a command from left to see details
          </div>
        </div>
      )
    }
    let {title, edit, deleteCommand, command, date, id} = this.props;
    return (
      <div className="card m-3">
        <div className="card-block">
          <h4 className="card-title mb-3">{title}
          </h4>

          <pre className="card-text">{command}</pre>
          <p className="card-text"><small className="text-muted">Last updated at {date}</small></p>
            <p><a href="#" className="" onClick={()=>edit(id)}>Edit</a>
            <a href="#" className="ml-2" onClick={()=> deleteCommand(id)}>Delete</a></p>
        </div>
      </div>
    );
  }
}

export default CommandDetails;
