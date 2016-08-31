const results = (state={docs: [], amount: 0}, action) => {
  switch (action.type) {
    case 'RESULTS_FULFILLED':
      const { docs, amount } = action.payload.data

      return { ...state, docs, amount }

    case 'RESULTS_REJECTED':
      // TODO: make pretty error noifications
      console.error('Error in results fetching')

      return state

    default:
      return state
  }
}

export default results
