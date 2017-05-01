import React, { Component, PropTypes } from 'react';
import Command from './Command';
import {connect} from 'react-redux';
/**
 * CommandList
 */
 @connect((store)=>{
   return {
     commands: store.commands
   }
 })
export class CommandList extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let li = this.props.commands.map((command) => <Command key={command._id} command={command} />)

    return (
      <ul className="list-group m-3">
        {li}
      </ul>
    );
  }
}

export default CommandList;
