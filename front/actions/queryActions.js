export const QUERY_CHANGE = 'QUERY_CHANGE'

export function updateQuery(text) {
  return {
    type: QUERY_CHANGE,
    payload: text
  }
}
