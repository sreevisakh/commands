import React, { Component, PropTypes } from 'react';
import Command from './Command';
import { connect } from 'react-redux';
import { getCommands, selectCommand } from '../actions';
/**
 * CommandList
 */
@connect((store) => {
  return {
    commands: store.command.commands,
    selectedCommand: store.command.selectedCommand
  }
}, (dispatch) => {
  return {
    getCommands: () => dispatch(getCommands()),
    select: (e) => {
      let id = e.target.getAttribute('data-id');
      dispatch(selectCommand(id))
    }
  }
})
export class CommandList extends Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.getCommands()
  }

  render() {
    let li = this.props.commands.map((command) => <Command key={command._id}
      command={command}
      active={(command === this.props.selectedCommand)}
      />)

    return (
      <ul className="list-group mb-3" onClick={this.props.select}>
        {li}
      </ul>
    );
  }
}

export default CommandList;
