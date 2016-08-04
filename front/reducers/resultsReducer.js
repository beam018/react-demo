const initialState = {
  "link": "#",
  "user": {
    "name": "Lars Lundberg",
    "avatar": "http://placehold.it/17x17",
    "profileLink": "#"
  },
  "preview": "http://placehold.it/206x152",
  "views": 0,
  "comments": 0,
  "likes": 0
}

const doc = (state=initialState, action) => {
  return state;
}

const results = (state={docs: [], count: 0}, action) => {
  return {
    ...state,
    count: state.docs.length
  }
}

export default results
