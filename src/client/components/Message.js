import React, { Component, PropTypes } from 'react';

/**
 * Message
 */
export class Message extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if(!this.props.text){
      return null;
    }
    return (
      <div className={`mt-3 alert alert-${this.props.type}`} role="alert">
        {this.props.text}
      </div>

    );
  }
}

export default Message;
