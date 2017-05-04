import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Layout from './Layout';
import store from '../store'
/**
 * App
 */
export class App extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Provider store={store}>
        <Layout/>
      </Provider>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('app'));

export default App;
