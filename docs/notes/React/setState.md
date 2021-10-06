---
sidebar: auto
---
# setState
**setState** 是一个**同步的方法**，但是setState 引起 react后序更新的动作是**异步的**  
具体原因可见 [✈️](https://mp.weixin.qq.com/s/TBOCqykUJDwogtgskmaGtg)
## 1、`setState(stateChange, [callback])`
是一个对象式的 `setState`
- 1、`stateChange` 为状态改变对象(该对象可以体现出状态的更改)
- 2、`callback` 是可选的回调函数, 它在状态更新完毕、界面也更新后 (`render` 调用后)才被调用
					
## 2、`setState(updater, [callback])` 
是一个函数式的 `setState`
- 1、`updater` 是返回`stateChange` 对象的函数。
- 2、`updater` 可以接收到`state` 和`props`。
- 3、`callback` 是可选的回调函数, 它在状态更新、界面也更新后 (`render` 调用后)才被调用。

```js
/* 
  setState可接受两个参数：
  states是当前组件的state，props是父组件传递的对象 
*/
this.setState((state, props) => {
  return {xxx: state.xxx + 1}
})
```
## 总结:
- 1、对象式的`setState` 是函数式的`setState` 的简写方式(语法糖)
- 2、使用原则：
  - 1、如果新状态不依赖于原状态 ===> 使用对象方式
  - 2、如果新状态依赖于原状态 ===> 使用函数方式
  - 3、如果需要在`setState()` 执行后获取最新的状态数据, 要在第二个callback函数中读取
