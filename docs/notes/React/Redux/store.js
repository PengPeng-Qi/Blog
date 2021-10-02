/* src/redux/store.js */
/* 
  该文件用于暴露一个store 对象，整个应用只有一个store 对象
*/
/* 引入createStore 创建store对象 */
import { createStore } from 'redux'

/* 引入为组件服务的reducer */
import xxx_reducer from './xxx_reducer'

export default createStore(xxx_reducer)