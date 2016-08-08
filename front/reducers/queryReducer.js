import * as queryActions from '../actions/queryActions'

const query = (state='', action) => {
  switch (action.type) {
    case queryActions.QUERY_CHANGE:
      return action.payload
    default:
      return state
  }
}

export default query
