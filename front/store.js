import { createStore, applyMiddleware } from 'redux'

import createLogger from 'redux-logger'
import multiMiddleware from 'redux-multi'
import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'

const loggerMiddleware = createLogger()

export function getStore(state=(typeof window !== 'undefined' && window.__PRELOADED_STATE__)) {
  return createStore(reducer, state, applyMiddleware(
    multiMiddleware,
    thunkMiddleware,
    promiseMiddleware(),
    loggerMiddleware
  ))
}
