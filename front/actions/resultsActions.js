export function resultsUpdate() {
  return {
    type: 'RESULTS',
    payload: Promise.resolve({ docs: [], count: 10 })
  }
}
