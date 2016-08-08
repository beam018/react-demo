import { createStore, applyMiddleware } from 'redux'

import createLogger from 'redux-logger'

import reducer from './reducers'

let preloadedState

if (typeof window !== 'undefined') {
  preloadedState = window.__PRELOADED_STATE__
}

const logger = createLogger()
const middlewares = applyMiddleware(logger)

const store = createStore(reducer, preloadedState, middlewares)

export default store
