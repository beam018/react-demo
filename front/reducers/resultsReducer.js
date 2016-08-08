const results = (state={docs: [], count: 0}, action) => {
  switch (action.type) {
    case 'RESULTS_FULFILLED':
      const { docs, count } = action.payload

      return { ...state, docs, count }

    default:
      return state
  }
}

export default results
