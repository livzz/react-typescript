import { combineReducers } from 'redux'
import lootReducer from './loot/reducer'
import bitCoinReducer from './bitcoin/reducers'

const rootReducer = combineReducers({
  loot: lootReducer,
  bitcoin: bitCoinReducer
})

export default rootReducer