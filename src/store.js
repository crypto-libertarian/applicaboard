import { createStore } from 'redux'

import rootReducer from './reducers'
import middleware from './middleware'

export default (initialState = {}) => createStore(
  rootReducer,
  initialState,
  middleware,
)
