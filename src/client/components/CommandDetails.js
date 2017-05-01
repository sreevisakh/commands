import React, { Component, PropTypes } from 'react';

/**
 * CommnadDetails
 */
export class CommandDetails extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if(!this.props.show){
      return null;
    }
    return (
      <div className="card m-3">
        <div className="card-block">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    );
  }
}

export default CommandDetails;
