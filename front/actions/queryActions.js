export const QUERY_CHANGE = 'QUERY_CHANGE'
export const QUERY_SUBMIT = 'QUERY_SUBMIT'

export function queryChange(text='') {
  return {
    type: QUERY_CHANGE,
    payload: {
      text,
      submited: false
    }
  }
}

export function querySubmit() {
  return {
    type: QUERY_SUBMIT,
    payload: {
      submited: true
    }
  }
}
