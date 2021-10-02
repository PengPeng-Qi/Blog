/* src/redux/xxx_reducer.js */
/* 
  1、该文件是创建一个为xxx组件服务的reducer, reducer文件本质是一个函数
  2、会接受两个参数，分别为之前的状态 和action 对象
*/

/* 设置初始化的值 */
const initState = 0
export default function xxxReducer(preState = initState, action) {
  const {type, data} = action

  switch (type) {
    /* 举例1 */
    /* 注意type的值是个字符串 */
    case 'xxx':
      return preState + data;
  
    /* 初始化状态 */
    default:
      return preState
  }
}