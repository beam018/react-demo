const query = (state='' , action) => {
  switch (action.type) {
    case 'PAGE_FULFILLED':
      return action.payload.data

    case 'PAGE_REJECTED':
      // TODO
      return state

    default:
      return state
  }
}

export default query
