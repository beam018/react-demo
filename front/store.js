import { createStore, applyMiddleware } from 'redux'

import createLogger from 'redux-logger'
import multiMiddleware from 'redux-multi'
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers'

let preloadedState

if (typeof window !== 'undefined') {
  preloadedState = window.__PRELOADED_STATE__
}

const loggerMiddleware = createLogger()

export default createStore(reducer, preloadedState, applyMiddleware(
  multiMiddleware,
  thunkMiddleware,
  promiseMiddleware(),
  loggerMiddleware
))
