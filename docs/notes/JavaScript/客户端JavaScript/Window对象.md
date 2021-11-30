---
sidebar: auto
---
# Window 对象
## 计时器
`setTimeout()` 和`setInterval()` 可以使用注册在指定的时候之后单次或重复调用的函数。都是客户端的JavaScript中重要的**全局函数**。  
  
`setTimeout()` 会返回一个值，这个值可以传递给`clearTimeout()` 用于取消这个函数的执行。  
  
可以传入额外的参数。在调用函数时把这些参数传递过去。

<hr />
更多阅读：

> [定时器机制](https://tsejx.github.io/javascript-guidebook/core-modules/executable-code-and-execution-contexts/concurrency-model/timers-mechanism/)

## 浏览器定位与导航
Window 对象的location 属性引用的是Location 对象，它**表示该窗口中当前显示的文档的URL**。  
  
Document 对象的location 属性也引用了Location 对象。  
  
```js
window.location === document.location  // 总是返回 true
```
> Document 对象也有一个URL属性，是文档首次载入后保存该文档的URL的静态字符串。如果定位到文档中的片段标识符（`#table-of-contents`），Location 对象会做相应的更新，而`document.URL` 属性却不会改变。

### 解析URL
Window 对象的location 属性引用的是Location 对象，它表示该窗口当前显示文档的URL。