import { Drizzle, generateStore } from 'drizzle'

import ApplicaboardContract from './contracts/Applicaboard.json'
import MigrationsContract   from './contracts/Migrations.json'

const options = {
  contracts: [
    ApplicaboardContract,
    MigrationsContract,
  ],
}

export default () => {
  const store = generateStore(options)
  return new Drizzle(options, store)
}
