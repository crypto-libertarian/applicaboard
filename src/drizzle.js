import { Drizzle, generateStore } from 'drizzle'

import ApplicaboardContract from './contracts/Applicaboard.json'

const options = {
  contracts: [ApplicaboardContract],
}

export default () => {
  const store = generateStore(options)
  return new Drizzle(options, store)
}
