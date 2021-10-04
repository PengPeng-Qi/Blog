## axios
- 封装 XmlHttpRequest 对象的ajax
- promise风格
- 可以用在浏览器端和node服务器端

## 安装
```shell
yarn add axios
# or
npm i axios
```
## 引入
```js
import axios from 'axios'
```
## 基本使用
@[code js{1}](./axios的基本使用.js)
## 跨域
**同源策略是因为ajax引擎产生的，通过转发给代理服务器，代理服务器没有ajax引擎，所以不存在跨域。**，在react中使用代理服务器解决跨域，有以下两种配置方式：
### 1、配置一个代理服务器：在`package.json` 中配置`proxy` 选项
@[code](./解决跨域方式一.json)
> "proxy": "代理服务器需要转发到的地址，不写路径，只写协议、域名、端口号"  

需要在axios**发送请求时修改端口号为代理服务器的端口号，代理服务器的端口号为默认react开启的端口号**
@[code js{1}](./解决跨域方式一.js)
> react帮我们开启的代理服务器的根路径是public 文件夹，如果public 文件夹下有被请求的文件，则代理服务器不需要再次转发给请求的服务器，如果代理服务器上没有请求的文件，则需要转发给请求的服务器
### 2、配置多个代理服务器
新建文件：`src/setupProxy.js`，里面需要采用CJS方式来配置
@[code](./setupProxy.js)
前端请求资源需要加前缀，做以下修改：
@[code js{1-2}](./解决跨域方式二.js)