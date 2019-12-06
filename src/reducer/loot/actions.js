import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  debit: ['amount'],
  credit: ['amount'],
  set: ['amount'],
  default: null
}, {}) // options - the 2nd parameter is optional