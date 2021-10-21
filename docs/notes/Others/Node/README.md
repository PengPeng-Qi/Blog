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
