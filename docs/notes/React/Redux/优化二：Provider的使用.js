/* index.js */
/* 可以在index.js除去掉 */
store.subscribe(() => {
  ReactDOM.render(<App /> , document.getElementById('root'))
}) 

/* 增加以下代码用于给容器组件传递store */
import store from './redux/store.js'
/* Provide用于分析容器组件，然后将store传递给容器组件 */
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)