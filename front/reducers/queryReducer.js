import * as queryActions from '../actions/queryActions'

const query = (state={ text: '', submited: false }, action) => {
  switch (action.type) {
    case queryActions.QUERY_CHANGE:
      const { text, submited } = action.payload

      return { ...state, text, submited }

    case queryActions.QUERY_UPDATE:
      // TODO: show suggest on this event
      return { ...state, submited: action.payload.submited }

    default:
      return state
  }
}

export default query
