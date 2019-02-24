import { Drizzle, generateStore } from 'drizzle'

const options = {
  contracts: [],
}

export default () => {
  const store = generateStore(options)
  return new Drizzle(options, store)
}
