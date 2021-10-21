---
sidebar: auto
---
# Node基础知识
## 前言
**1、为什么JavaScript可以在浏览器中被执行？**  

> 待执行的JS代码在浏览器中被JavaScript解析引擎解析，不同的浏览器使用不同的解析引擎。Chrome浏览器的JS引擎是V8  
  
**2、为什么JavaScript可以操作DOM 和BOM？**  
  
> 待执行的JS代码调用Web API，然后被JavaScript解析引擎所解析，每个浏览器都内置了DOM、BOM 这样的API函数，因此，浏览器中的JavaScript才可以调用  
  
**JavaScript 的运行环境是基于V8 和DOM、BOM 等API接口组合的环境**  

## Node.js
Node.js是一个基于Chrome V8 引擎的**JavaScript的后端运行环境**
  
**运行环境**：
- 前端：浏览器
- 后端：Node.js

> Node.js中无法调用DOM、BOM 等浏览器API

## fs模块
`fs 模块`是 Node.js 官方提供的、用来操作文件的模块。  
- `fs.readFile()`方法，用来**读取**指定文件中的内容
- `fs.writeFile()`方法，用来向指定的文件中**写入**内容

```js
const fs = require('fs');
```
### fs.readFile()
```js
fs.readFile(path[, options], callback);
```
- 参数1：**必选**，字符串，表示文件的路径
- 参数2：可选，表示以什么编码格式来读取文件
- 参数3：**必选**，文件读取完成后，通过回调函数拿到读取的结果

@[code](./fs模块/test1.js)
### fs.writeFile()
```js
fs.writeFile(file, data[, options], callback)
```
- 参数1：**必选**，需要指定一个**文件路径的字符串**，表示文件的存放路径
- 参数2：**必选**，表示要写入的内容
- 参数3：可选，表示以什么格式写入文件内容，默认值是utf8
- 参数4：**必选**，文件写入完成后的回调函数

@[code](./fs模块/test2.js)

> `__dirname`：表示当前文件所在的目录

## path路径模块
**path**模块是Node.js 官方提供的、用来**处理路径**的模块。  
- `path.join()`，用来**将多个路径片段拼接成一个完整的路径字符串**
- `path.basename()`，用来从路径字符串中，将文件名解析出来

```js
const path = require('path')
```
### path.join()
@[code](./path模块/join.js)
### path.basename()
获取路径中的文件名
```js
path.basename(path[, ext])
```
- path：**必选**，表示一个路径的字符串
- ext：可选，表示文件拓展名
- 返回一个string表示路径中的最后一部分

@[code](./path模块/basename.js)
### path.extname()
获取路径中的文件拓展名
```js
path.extname(path)
```
返回拓展名字符串
@[code](./path模块/extname.js)
## http模块
创建Web 服务器的模块
- `http.createServer()`：把一台普通的电脑，变成一个Web 服务器，对外提供Web 服务

```js
const http = require('http');
```
### 创建web 服务器
- 1、导入http 模块
- 2、创建web 服务器实例
- 3、为服务器实例绑定request 事件，**监听客户端的请求**
- 4、启动服务器

@[code](./http模块/创建web服务器.js)
