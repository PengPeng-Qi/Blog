---
sidebar: auto
---
# Hooks
`Hook` 是`React 16.8.0` 版本增加的新特性，**可以在函数组件中使用`state` 以及其他的`React` 特性**。

> 只能在**函数最外层**调用 Hook。**不要在循环、条件判断或者子函数中调用**，如果我们想要有条件的执行一个`effect`，我们可以将判断放在`Hook` 内部。  
> 只能在**React 的函数组件**中调用 Hook。
  
只能在函数最外层执行原因：**如果将某个Hook放在条件判断中，当不使用时，后续Hook会被提前执行，导致Bug的产生。**  
## 优点
为了解决编写组件时遇到的各种看起来不相关的问题：
1. clase组件复用麻烦(高阶组件、`render props`)、自定义`hook`可解决
2. 复杂组件难以理解(各种不想管的代码均放在声明周期中)、`useEffect` 可解决
3. class组件的this难以理解

## State Hook
`State Hook`让函数组件也可以有`state` 状态, 并进行状态数据的读写操作。每个组件的`state` 都是独立的。Hook是一个复用状态逻辑的方式，不复用`state`本身。  
  
`Hook` 的每次调用都有一个完全独立的`state`，可以在**单个组件中多次调用同一个自定义`Hook`**。  
  
语法: `const [xxx, setXxx] = React.useState(initValue)`  

一般来说，在函数退出后变量就会**消失**，而`state` 中的变量会被 React 保留。  
  
`useState()` 说明:
- 1、参数: 第一次初始化指定的值在内部作缓存
- 2、返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数  

`setXxx()` 2种写法:  
- `setXxx(newValue)`: 参数为非函数值, 直接指定新的状态值, 内部用其**覆盖原来的状态值**
- `setXxx(value => newValue)`: 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其**覆盖原来的状态值**

:::details 点击查看<code>useState</code> 的详细使用案例
@[code jsx{4,11}](./useState的基本使用.jsx)
:::
> `setXxx`: 值是替换，不是合并

## Effect Hook
`Effect Hook` 可以在函数组件中执行副作用操作(用于**模拟类组件中的生命周期钩子**)  
  
数据获取、设置订阅以及手动更高React 组件中的DOM 都属于副作用。  
  
在React 组件中有两种常见的副作用操作：**需要清除的和不需要清除的**。  
  
无需清除的`effect`：发送网络请求、手动变更DOM、记录日志...  
  
需要清除的`effect`: 订阅外部数据源，清除工作非常重要，可以防止内存泄漏。  
  
可以在组件中多次使用`useEffect` 实现**关注点分离**(相关逻辑分离):  
  
把组件内相关的副作用组织在一起，而不要把它们拆分到不同的生命周期函数里。  
:::details 点击查看<code>useEffect</code>的详细使用
@[code jsx{14-23}](./useEffect的基本使用.jsx)
:::
> 大多数情况下，`effect` 不会同步的执行、可使用代替的`[useLayoutEffect Hook](https://zh-hans.reactjs.org/docs/hooks-reference.html#uselayouteffect)`  
  
如果想执行**只运行一次的effect(仅在组件挂载和卸载时执行)，可以传递一个空数组作为第二个参数**。  
## Ref Hook
`Ref Hook` 可以在函数组件中存储/查找组件内的标签或任意其它数据，功能与`React.createRef()` 一样
:::details 点击查看<code>useRef</code>的详细使用
@[code jsx{5,13}](./useRef的基本使用.jsx)
:::
## Context Hook
`Context Hook` 接收一个`context` 对象（`React.createContext` 的返回值）并返回该`context` 的当前值。  
  
当前的`context` 值由上层组件中距离当前组件最近的`<MyContext.Provider>` 的`value prop` 决定。  
:::details 点击查看<code>useContext</code>的详细使用
@[code jsx{3-4,6-10,18-20}](./useContext的基本使用.jsx)
:::