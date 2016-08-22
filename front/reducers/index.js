import { combineReducers } from 'redux'

import results from './resultsReducer'
import query from './queryReducer'
import page from './pageReducer'

export default combineReducers({
  results,
  query,
  page,
})
