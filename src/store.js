import { createStore } from 'redux'

import middleware, { saga } from './middleware'
import rootReducer from './reducers'
import rootSaga from './sagas'

export default (history, initialState = {}) => {
  const result = createStore(
    rootReducer(history),
    initialState,
    middleware,
  )

  saga.run(rootSaga)

  return result
}
