import { createStore } from 'redux'

import rootReducer from './reducers'
import middleware from './middleware'

export default (history, initialState = {}) => createStore(
  rootReducer(history),
  initialState,
  middleware,
)
