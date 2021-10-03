# React-Redux
## React-Redux 原理图
![react-redux模型图](./react-redux模型图.png)
## 基本使用
- 安装<code>react-redux</code>
```shell
npm install react-redux
# or
yarn add react-redux
```
- 容器组件一般放在 `containers` 文件夹下
:::details 一般写法
@[code js{9-10}](./容器组件.js)
:::
:::details 优化版本一：简化容器组件
@[code](./容器组件优化版.js)
:::
> 使用<code>react-redux</code> 当初修改状态不刷新的问题就不存在了，可以不用再添加以下代码，传递store也不需要再使用`<Xxx store={store} />` 来传递了
:::details 优化版本二：简化<code>store</code> 传递问题以及刷新
@[code](./优化二：Provider的使用.js)
:::
:::details 优化版本三：整合UI组件和容器组件
@[code](./整合容器组件和UI组件.js)
:::
- UI组件一般放在 `components` 文件夹下，不做任何redux 的操作，接受方法以及状态通过<code>this.props.xxx</code> 接收
---
## 多个`react-redux`管理的组件
目录结构：
```
├─ src
|  |- containers 
|  |- redux 
|  │  |- actions
|  │  │  |─ Xxx.js
|  |  |  └─ Xxxx.js
|  |  |
|  │  |- reducers
|  │  |  |─ Xxx.js
|  |  |  └─ Xxxx.js
|  |  |- constant.js
|  |  └─ store.js
```
合并多个reducer，`store.js`文件需要做一些修改：
:::details
@[code](./合并多个reducer的store.js)
:::
> 1、可以将所有的reducer 汇总到一个文件下：`reducers/index.js`  
> 2、修改了reducers，在容器组件`mapStateToProps` 读取的时候也需要读取到 `state.key`
```js
const mapStateToProps = function (state) { 
  // return { number: state.Xxxx }
  // or
  return { number: state.Xxx }
}
```
## React思想中的纯函数
纯函数：
- 相同的输入会有相同的输出
- 不修改原数据
  
React会对数组做浅比较，如果数组使用`push、unshift...` 改变了元数组页面不会刷新，如果使用`[...state, data]` 重新编写新数组，则会对页面进行重新渲染

> redux 和 reducer 必须是纯函数