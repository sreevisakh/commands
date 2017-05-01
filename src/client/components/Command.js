import React, { Component} from 'react';

/**
 * Command
 */
export class Command extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <li className="list-group-item" data-id={this.props.command._id}>{this.props.command.title}</li>
    );
  }
}

export default Command;
