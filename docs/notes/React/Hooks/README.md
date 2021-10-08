---
sidebar: auto
---
# Hooks
`Hook` 是`React 16.8.0` 版本增加的新特性，可以在函数组件中使用`state` 以及其他的`React` 特性。
## State Hook
`State Hook`让函数组件也可以有`state` 状态, 并进行状态数据的读写操作  
  
语法: `const [xxx, setXxx] = React.useState(initValue)`  
  
`useState()` 说明:
- 1、参数: 第一次初始化指定的值在内部作缓存
- 2、返回值: 包含2个元素的数组, 第1个为内部当前状态值, 第2个为更新状态值的函数  

`setXxx()` 2种写法:  
- `setXxx(newValue)`: 参数为非函数值, 直接指定新的状态值, 内部用其覆盖原来的状态值
- `setXxx(value => newValue)`: 参数为函数, 接收原本的状态值, 返回新的状态值, 内部用其覆盖原来的状态值

:::details 点击查看<code>useState</code> 的详细使用案例
@[code jsx{4,11}](./useState的基本使用.jsx)
:::
## Effect Hook
`Effect Hook` 可以在函数组件中执行副作用操作(用于**模拟类组件中的生命周期钩子**)
:::details 点击查看<code>useEffect</code>的详细使用
@[code jsx{14-23}](./useEffect的基本使用.jsx)
:::
## Ref Hook
`Ref Hook` 可以在函数组件中存储/查找组件内的标签或任意其它数据，功能与`React.createRef()` 一样
:::details 点击查看<code>useRef</code>的详细使用
@[code jsx{5,13}](./useRef的基本使用.jsx)
:::