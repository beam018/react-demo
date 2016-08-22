import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import store from './store'

import Layout from './components/Layout'

export default (
  <Provider store={store}>
    <Layout />
  </Provider>
)
