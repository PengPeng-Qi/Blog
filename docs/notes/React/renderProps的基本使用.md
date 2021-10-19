---
sidebar: auto
---
# 组件内部传递参数
Vue中:  
- 使用`slot`技术, 也就是通过组件标签体传入结构  `<A><B/></A>`

React中:
- 使用`children props`: 通过组件标签体传入结构  
- 使用`render props`: 通过组件标签属性传入结构,而且可以携带数据，一般用`render`函数属性  

### children props
```js
<A>
  <B>xxxx</B>
</A>
{this.props.children}
```
> **问题**: 如果B组件需要A组件内的数据的话就取不到

### render props
```js
<A render={
  (data) => <C data={data}></C>
}>
</A>
/* 在A组件放C，且需要传递值，A在其他组件里面 */
```
A组件: `{this.props.render(内部state数据)}`  
  
C组件: 读取A组件传入的数据显示 `{this.props.data}` 