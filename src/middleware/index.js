import { applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

export const saga = createSagaMiddleware()

export default applyMiddleware(
  thunk,
  logger,
  saga,
)
