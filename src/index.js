import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { DrizzleContext } from 'drizzle-react'

import configureStore from './store'
import configureDrizzle from './drizzle'

import AppContainer from './containers/App'

const history = createBrowserHistory()

const store = configureStore(history)
const drizzle = configureDrizzle()

ReactDOM.render(
  <Provider store={store}>
    <DrizzleContext.Provider drizzle={drizzle}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={AppContainer}/>
        </Switch>
      </ConnectedRouter>
    </DrizzleContext.Provider>
  </Provider>,
  document.getElementById('root'),
)
