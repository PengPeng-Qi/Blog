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

