/* src/containers/Xxx/index.jsx */
/* 
  负责与UI组件以及redux通信
*/
/* 引入Xxx组件的UI组件  */
import XxxUI from '../../components/Xxx/index.jsx'

/* 引入store */
// import store from '../../redux/store.js'  // 不能这样引入store
// 需要在app组件通过 <Xxx store={store} /> 的方式传递

/* 引入connect用于连接UI组件与redux */
import { connent } from 'react-redux'

/* 
  mapStateToProp函数返回的对象中的key就作为传递给XxxUI组y件props的key
  value就作为传递给UI组件props的value -- 状态
*/
const mapStateToProps = function (state) { 
  return { number: state }
}

/* 
  mapDispatchToProps函数返回的对象中的key就作为传递给XxxUI组件props的key
  value就作为传递给UI组件props的value -- 操作状态的方法
*/
const mapDispatchToProps = function (dispatch) { 
  return { jia: (value) => {
    /* 通知redux执行加法 */
    return dispatch({type: 'increment', value})
  }}
}

/* 创建并暴露一个Xxx的容器组件 */
export default connent(mapStateToProps, mapDispatchToProps)(XxxUI)