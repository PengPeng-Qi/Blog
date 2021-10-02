/* 解决方案一 */
/* src/components/xxx.jsx */
componentDidMount(){
  /* 检测redux 中状态的改变，只要改变，就调用render */
  store.subscribe(() => {
    this.setState({})
  })
}

/* 解决方案二 */
/* 在index.js 增加以下代码 */
import store from './redux/store.js'

store.subscribe(() => {
  ReactDOM.render(<App /> , document.getElementById('root'))
})