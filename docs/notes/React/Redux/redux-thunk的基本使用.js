/* src/redux/store.js */
/* 引入 applyMiddleware */
import { createStore, applyMiddleware } from 'redux'

/* 引入为组件服务的reducer */
import xxx_reducer from './xxx_reducer'

// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'

export default createStore(xxx_reducer, applyMiddleware(thunk))