import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
var thunk = require('redux-thunk')
  .default
import promise from 'redux-promise-middleware'
import { searchCommand } from './actions';
import reducer from './reducers'

const logger = createLogger({
  collapsed: true
});

let store = createStore(reducer, applyMiddleware(thunk, logger, promise()))

export default store;
