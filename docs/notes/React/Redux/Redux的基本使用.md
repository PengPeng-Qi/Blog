# Redux
Redux的使用场景：
- 1、某个组件的状态需要让其他组件随时拿到
- 2、一个组件需要改变另一个组件的状态

## Redux的原理
![Redux的原理图](./redux原理图.png)
## 使用Redux
- 1、安装Redux
```shell
yarn add redux
# or
npm install redux
```
- 2、新建文件夹 `src/redux`
- 3、在`redux` 文件夹📂 下新建`xxx_action` 文件 `xxx_action.js` 
:::details
@[code](./xxx_action.js)
:::
> 这一步可以省略，通过在组件中给<code>store</code> 创建并发送<code>action</code> 对象, 关于<code>redux-thunk</code> 的基本使用可见 [✈️](./Redux的基本使用.html#redux-thunk-的基本使用)
- 4、在`redux` 文件夹📂 下新建`store` 文件 `store.js` 
:::details 点击查看<code>sotre.js</code> 的详细信息
@[code](./store.js)
:::
- 5、在`redux` 文件夹📂 下新建`reducer` 文件`xxx_reducer.js`
:::details 点击查看<code>xxx_reducer.js</code> 的详细信息
@[code js{7-9,20}](./xxx_reducer.js)
:::
- 6、在组件中引入<code>store.js</code>
:::details 点击展开
@[code](./组件使用store.js)
:::
- 7、**存在问题**：组件状态发生改变，但是页面不会重新更新，需要再次调用 `render()`
:::details 点击查看解决方案
@[code](./修改状态后页面不更新解决方案.js)
:::
- 8、可以增加一个常量文件<code>constant.js</code>
:::details 点击查看<code>constant.js</code> 的详细信息
@[code](./constant.js)
:::
## <code>redux-thunk</code> 的基本使用
- 1、安装  
```shell
npm install redux-thunk
# or
yarn add redux-thunk
```
- 2、在<code>store.js</code> 中引入<code>redux-thunk</code>
```js
@[code](./redux-thunk的基本使用.js)
```