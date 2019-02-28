import React from 'react'
import { Switch, Route } from 'react-router'

import AppContainer from './containers/App'

export default () => (
  <Switch>
    <Route exact path='/' component={AppContainer}/>
  </Switch>
)
