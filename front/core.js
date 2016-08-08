import React from 'react'
import { Provider } from 'react-redux'
// TODO: browserHistory after rendering content pages on server
import { Router, Route, hashHistory } from 'react-router'

import store from './store'

import Search from './pages/Search'
import Page from './pages/Page'

export default (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/about' component={Page}></Route>
      <Route path='/contacts' component={Page}></Route>
      <Route path='/terms' component={Page}></Route>
      <Route path='/privacy' component={Page}></Route>
      <Route path='/blog' component={Page}></Route>
      <Route path='/' component={Search}></Route>
    </Router>
  </Provider>
)
