import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
/**
 * CommnadDetails
 */
@connect((store)=>{
  if(store.selectedCommand){
    return {
      title: store.selectedCommand.title,
      command: store.selectedCommand.command,
      date: store.selectedCommand.date,
      tags: store.selectedCommand.tags
    }
  }
  return {}
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
    return (
      <div className="card m-3">
        <div className="card-block">
          <h4 className="card-title mb-3">{this.props.title}</h4>
          <p className="card-text"><pre>{this.props.command}</pre></p>
          <p className="card-text"><small className="text-muted">Last updated at {this.props.date}</small></p>
        </div>
      </div>
    );
  }
}

export default CommandDetails;
