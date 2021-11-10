---
sidebar: auto
---
# Web Storage
`Storage` 类型只能存储字符串，**非字符串数据在存储之前会自动转换为字符串**，注意📢：这种转换不能在获取数据时撤销。
## localStorage
`localStorage` 存储的数据是永久性的，除非Web应用可以删除存储的数据，或者用户通过设置浏览器配置来删除，否则数据将一直保存的用户的电脑上，永不过期。  
  
**同源的文档间共享同样的`localStorage` 数据**，非同源的文档间互相都不能读取或者覆盖对方的数据。  
  
> `localStorage`的作用域也受到了浏览器的限制，如果最初使用Chrome浏览器打开，后来使用Firefox 访问，那么也是无法访问到上次存储的数据

## sessionStorage
`sessionStorage` 的有效期和存储数据的脚本所在的**最顶层的窗口或者是浏览器标签页**是一样的，一旦窗口或者标签页被永久关闭了，那么所有通过`sessionStorage` 存储的数据也都被删除了。(不受页面刷新影响)  
    
`sessionStorage` 的作用域也是限定在文档源中，**非同源的文档间都是无法共享`sessionStorage` 的**，不仅如此，**`sessionStorage` 的作用域还被限定在窗口中**。  
  
如果同源的文档渲染在不同的浏览器标签页中，那么他们互相之间拥有的是各自的`sessionStorage` 数据，无法共享。
  
> 现代浏览器现在已经具备了打开最近关闭的标签页功能，随后会恢复上一次浏览的会话功能，因此，这些标签页以及与之相关的`sessionStorage` 的有效期可能会更加长一些。 
  
>  `localStorage` 和`sessionStorage` 两者的区别在于存储的有效期和作用域的不同：**数据可以存储的时间以及谁拥有对数据的访问权**

## 存储API
`localStroage` 和`sessionStorage` 提供了一些可以存储数据的API：
- `setItem(name, value)`: 存储数据
- `getItem(name)`: 获取数据、一个参数
- `removeItem(name)`: 删除数据、一个参数
- `clear()`: 清空数据、不需要参数
- `key(index)`: 取得给定数值位置的名称

## 存储事件
一旦数据发生改变，浏览器会在其他对该数据可见的窗口对象上触发存储事件（在对数据进行改变的窗口对象上不会触发）。  
  
- `domain`: 存储变化对应的域
- `key`: 被设置或删除的键
- `newValue`: 键被设置的新值，若键被删除则为null
- `oldValue`: 键变化之前的值

```js
window.addEventListener('storage', (event) => {
  alert(`Storage changed for ${event.domain}`);
})
```
