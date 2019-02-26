import { Drizzle } from 'drizzle'

import ApplicaboardContract from './contracts/Applicaboard.json'
import MigrationsContract   from './contracts/Migrations.json'

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
