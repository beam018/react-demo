import axios from 'axios'

export function resultsUpdate(query) {
  return {
    type: 'RESULTS',
    payload: axios.get('/', {
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      params: { query }
    })
  }
}
