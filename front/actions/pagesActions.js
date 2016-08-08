import axios from 'axios'

export function getContent(page) {
  return {
    type: 'PAGE',
    payload: axios.get('/' + page, {
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    })
  }
}
