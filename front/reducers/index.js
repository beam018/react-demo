import { combineReducers } from 'redux'

import results from './resultsReducer'
import query from './queryReducer'

export default combineReducers({
  results,
  query
})
