import { createReducer } from 'reduxsauce'
import { Types } from './actions'

const INITIAL_STATE = { balance: 0 }

const credit = (state = INITIAL_STATE, action) => {
  return { ...state, balance: state.balance - action.amount }
}

const debit = (state = INITIAL_STATE, action) => {
  return { ...state, balance: state.balance + action.amount }
}

const set = (state = INITIAL_STATE, action) => {
  return { ...state, balance: action.amount }
}

const defaultHandler = (state = INITIAL_STATE) => {
  return state
}

const HANDLERS = {
  [Types.CREDIT]: credit,
  [Types.DEBIT]: debit,
  [Types.SET]: set,
  [Types.DEFAULT]: defaultHandler
}

export default createReducer(INITIAL_STATE, HANDLERS)