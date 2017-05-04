import React, { Component, PropTypes } from 'react';

/**
 * Link
 */
export class Link extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <a className="nav-link" href="#" onClick={this.props.navigate.bind(this)}>{this.props.text}</a>
    );
  }
}

export default Link;
