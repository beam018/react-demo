const results = (state='index', action) => {
  switch (action.type) {
    case 'RESULTS_FULFILLED':
      return action.payload.data.page

    default:
      return state
  }
}

export default results
