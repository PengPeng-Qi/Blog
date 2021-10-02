/* src/components/xxx.jsx */
/* 引入store */
import store from './store'

/* 得到状态，读取的是reducer 中返回的值 */
store.getState()

/* 若无action.js 则创建一个action对象 给store发送action 对象 */
store.dispatch({type: 'xxx', data: xxxx})

/* 若有action.js 则使用这种方式 */
store.dispatch(createXxxAction(value))
