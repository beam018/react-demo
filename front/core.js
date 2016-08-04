import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import Layout from './components/Layout'

export default (
  <Provider store={store}>
    <Layout />
  </Provider>
)
