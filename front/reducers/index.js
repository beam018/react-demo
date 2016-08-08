import { combineReducers } from 'redux'

import results from './resultsReducer'
import query from './queryReducer'
import page from './pagesReducer'

export default combineReducers({
  results,
  query,
  page,
})
