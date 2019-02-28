import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { DrizzleContext } from 'drizzle-react'

import configureStore from './store'
import configureDrizzle from './drizzle'
import Routes from './routes'

const history = createBrowserHistory()
const store = configureStore(history)
const drizzle = configureDrizzle(store)

ReactDOM.render(
  <Provider store={store}>
    <DrizzleContext.Provider drizzle={drizzle}>
      <ConnectedRouter history={history}>
        <Routes/>
      </ConnectedRouter>
    </DrizzleContext.Provider>
  </Provider>,
  document.getElementById('root'),
)
