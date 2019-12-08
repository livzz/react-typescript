import { createActions } from 'reduxsauce'

export const { Creators, Types } = createActions({
  set: ['rate'],
  fetch: null,
  default: null
})