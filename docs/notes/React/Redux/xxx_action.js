/* src/redux/xxx_action.js */
/* 
  该文件专门为xxx组件创建一个action对象
  action对象分为两种:
    action对象 同步action
    action函数 异步action，想要对状态进行操作，具体的数据靠异步任务返回
*/
/* ------------ 同步action ------------ */
export const createXxxAction = data => ({type: 'xxx', data})

export function createXxxxAction(data) {
  return {type: 'xxxx', data}
}

/* ------------ 异步action ------------ */
/* 
  store只认识对象，如果传递了一个函数，需要一个中间件redux-thunk，执行传递的函数 
  异步action中一般都会调用同步action
*/
export const createFnAction = (data, time) => {
  /* redux-thunk帮我们传递了dispatch */
  return (dispatch) => {
    setTimeout(() => {
      // store.dispatch({type:'xxx', data})
      // dispatch({type:'xxx', data})
      dispatch(createXxxAction(data))
    }, time)
  }
}