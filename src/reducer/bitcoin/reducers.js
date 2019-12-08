import { createReducer } from 'reduxsauce'
import { Types, Creators } from './actions'

const INITIAL_STATE = { rate: 0 }

const set = (state = INITIAL_STATE, action) => {
  return { ...state, rate: action.rate }
}

export const getRate = () => {
  return dispatch => {
    return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(json => dispatch(Creators.set(json)))
  }
}

const defaultHandler = (state = INITIAL_STATE) => {
  return { state }
}

const HANDLERS = {
  [Types.SET]: set,
  [Types.FETCH]: getRate,
  [Types.DEFAULT]: defaultHandler
}

export default createReducer(INITIAL_STATE, HANDLERS)