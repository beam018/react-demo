import { createStore } from 'redux'

import reducer from './reducers'

// const preloadedState = window.__PRELOADED_STATE__

export default createStore(reducer)
