/* src/redux/store.js */
import { createStore, applyMiddleware,combineReducers } from 'redux'

import Xxxx_reducer from './Xxxx_reducer'
import Xxx_reducer from './Xxx_reducer'

import thunk from 'redux-thunk'

const allReducers = combineReducers({
  Xxxx: Xxxx_reducer,
  Xxx: Xxx_reducer
})

export default createStore(allReducers, applyMiddleware(thunk))