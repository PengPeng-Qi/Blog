# Redux开发中工具的基本使用
## 安装
```shell
yarn add redux-devtools-extension
# or
npm i redux-devtools-extension
```
## 引入并使用
```js
/* src/redux/store.js */
import { composeWithDevTools } from 'redux-devtools-extension'

/* 如果不需要异步action */
/* export default createStore(allReducer, composeWithDevTools()) */

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
```