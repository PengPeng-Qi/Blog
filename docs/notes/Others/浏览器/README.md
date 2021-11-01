---
sidebar: auto
---
# 浏览器
## 浏览器内核
最初内核的概念包括渲染引擎与JS引擎，目前习惯直接称渲染引擎为内核，JS引擎独立。  
  
| 浏览器  | 内核           |
| ------- | -------------- |
| Chrome  | Webkit -> Bink |
| Opera   | Bink           |
| Safari  | Webkit         |
| Firefox | Gecko          |
| IE      | Trident        |
| Edge    | EdgeHTML       |

## JS引擎
| 浏览器     | JS引擎                                                                          |
| ---------- | ------------------------------------------------------------------------------- |
| Chrome     | V8                                                                              |
| Firefox    | SpiderMonkey（1.0-3.0）/ TraceMonkey（3.5-3.6）/ JaegerMonkey（4.0-）           |
| Safari     | Nitro（4-）                                                                     |
| Opera      | Linear A（4.0-6.1）/ Linear B（7.0-9.2）/ Futhark（9.5-10.2）/ Carakan（10.5-） |
| IE -> Edge | JScript（IE3.0-IE8.0 / Chakra（IE9+之后）                                       |

## 浏览器存储方式
**描述cookie， sessionStorage和localStorage的区别？**  
  
1、`cookie`数据始终在同源的http请求中携带（即使不需要），即`cookie` 在浏览器和服务器间来回传递。  
  
而`sessionStorage` 和`localStorage` 不会自动把数据发给服务器，仅在本地保存。`cookie` 数据还有路径（path）的概念，可以限制cookie只属于某个路径下。  
  
2、存储大小限制也不同，`cookie` 数据不能超过4k，同时因为每次http请求都会携带`cookie`，所以`cookie` 只适合保存很小的数据，如会话标识。  
  
`sessionStorage` 和`localStorage` 虽然也有存储大小的限制，但比`cookie` 大得多，可以达到5M或更大。  
   
3、数据有效期不同：
- `sessionStorage`：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；
- `localStorage`：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；
- `cookie`：只在设置的`cookie` 过期时间之前一直有效，即使窗口或浏览器关闭。
  
4、作用域不同：
- `sessionStorage`：不在不同的浏览器窗口中共享，即使是同一个页面；
- `localStorage`： 在所有同源窗口中都是共享的；
- `cookie`：也是在所有同源窗口中都是共享的。