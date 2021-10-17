---
sidebar: auto
---
# 组件优化
**`Component` 的两个问题**：
- 1、只要执行`setState()`，即使不改变状态数据，组件也会重新`render()`   
- 2、只当前组件重新`render()`，就会自动重新render子组件，纵使子组件没有用到父组件的任何数据

> 原因：`Component` 中的钩子`shouldComponentUpdate()` 总是返回`true`

## 解决方式
### 方法一
重写`shouldComponentUpdate()` 方法，比较新旧`state` 或`props` 数据，只有发生变化的时候才调用`render()`  
  
@[code](./解决方式一.js)
### 方法二
使用`PureComponent`，他帮助我们写了对比逻辑
@[code js{3}](./解决方式二.js)