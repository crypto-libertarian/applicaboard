import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import configureStore from './store'
import AppContainer from './containers/App'

const history = createBrowserHistory()

const store = configureStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path='/' component={AppContainer}/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
