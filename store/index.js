import { createStore, combineReducers } from 'redux'
import Button from './reducers/Button'

const RootReducer = combineReducers({
  Button,
  // another reducer
})
const store = createStore(RootReducer)

export default store
