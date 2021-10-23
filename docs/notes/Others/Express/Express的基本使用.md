---
sidebar: auto
---
# Express的基本使用
Express 的作用和Node.js 内置的http 模块类似，是专门用来创建Web 服务器的。  
  
Express的本质是npm 上的第三方包，提供了快速创建Web 服务器的便捷方法。  
## 创建基本的web 服务器
@[code](./创建基本的web服务器.js)

## 托管静态资源
`express.static()`，可以创建一个静态资源服务器。

```js
/* 将public目录下的图片、CSS文件、JS对外开放访问 */
app.use(express.static('public'))

/* 访问：http://localhost:3000/images/bg.jpg */
```
> 如果要托管多个静态资源目录，可以多次调用`express.static()` ，访问静态资源文件时，会根据目录的添加顺序查找所需的文件。

### 挂载静态资源
如果希望在托管的**静态资源访问路径**之前，**挂载路径前缀**，则可以使用如下的方式：
```js
app.use('/public', express.static('public'))

/* 访问：http://localhost:3000/public/images/kitten.jpg */
```
## Express 路由
路由指的是**客户端的请求**与**服务器处理函数**之间的**映射关系**  
  
```js
/* 路由分为三部分：请求的类型、请求的URL地址、处理函数 */
app.method(path, handler)
```
### 模块化路由
- 1、创建路由模块对应的 `.js` 文件
- 2、调用 `express.Router()` 函数创建路由对象
- 3、向路由对象上挂载具体的路由
- 4、使用 `module.exports` 向外共享路由对象 
- 5、使用 `app.use()` 函数注册路由模块

:::details 创建路由
@[code](./创建路由模块.js)
:::
:::details 注册路由
@[code](./注册路由.js)
:::
## Express 中间件
中间件(Middleware)，特指业务流程的**中间处理环节**。  
  
Express 的中间件，**本质是一个function 处理函数**，中间件函数的形参列表中，必须包含`next 参数`，而路由处理函数中只有`req, res`  
  
`next 函数`是实现**多个中间件连续调用**的关键，它表示把流转关系转交给下一个中间件或路由。  
:::details 中间件函数
@[code](./定义中间件函数.js)
:::