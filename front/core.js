import React from 'react'
import { Provider } from 'react-redux'
import { browserHistory, Router, RouterContext } from 'react-router'

import { getStore } from './store'
import routes from './routes'

export function getClient(){
  return (
    <Provider store={getStore()}>
      <Router routes={routes} history={browserHistory} />
    </Provider>
  )
}

export function getServer(renderProps, state) {
  return (
    <Provider store={getStore(state)}>
      <RouterContext {...renderProps} />
    </Provider>
  )
}
