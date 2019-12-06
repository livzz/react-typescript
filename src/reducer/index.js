import { combineReducers } from 'redux'
import lootReducer from './loot/reducer'

const rootReducer = combineReducers({
  loot: lootReducer
})

export default rootReducer