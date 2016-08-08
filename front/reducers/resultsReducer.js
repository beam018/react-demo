const results = (state={docs: [], count: 0}, action) => {
  switch (action.type) {
    case 'RESULTS_FULFILLED':
      const { docs, count } = action.payload.data

      return { ...state, docs, count }

    case 'RESULTS_REJECTED':
      // TODO: make pretty error noifications
      console.log('error in results fetching')

      return state

    default:
      return state
  }
}

export default results
