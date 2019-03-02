import { Drizzle } from 'drizzle'

import ApplicaboardContract from './artifacts/Applicaboard.json'
import MigrationsContract   from './artifacts/Migrations.json'

const options = {
  contracts: [
    ApplicaboardContract,
    MigrationsContract,
  ],
  events: {
    Applicaboard: [
      'NewApplication',
      'NewResponse',
    ],
  },
}

export default store => new Drizzle(options, store)
