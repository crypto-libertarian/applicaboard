import { all, fork } from 'redux-saga/effects'

import { drizzleSagas } from 'drizzle'

export default function*() {
  yield all(
    drizzleSagas.map(saga => fork(saga)),
  )
}
