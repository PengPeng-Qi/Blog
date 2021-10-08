---
sidebar: auto
---
# Webpack
是一种构建工具，将程序员写的源代码生成浏览器可以高效、稳定运行的兼容性较强的代码
> 1、webpack.config.js: 用于存储webpack配置信息  
> 2、本地安装webpack: `npm i webpack@4 webpack-cli@3 -D`  
## 五个基本概念
### 入口 Entry
指示webpack应该使用哪个模块，来作为构建其内部依赖图的开始
### 输出 Output
在哪里输出文件，以及如何命名这些文件
### Loader
处理非`JavaScript` 文件(webpack 自身只能解析`javaScript` 和`json` 文件)，**本质是一个函数，接收源文件作为参数**
### 插件 Plugins
执行范围更广的任务，从打包到优化都可以实现，完成loader不能完成的任务
### 模式 Model
有生产模式`production`、开发模式`development`
## 开始打包
```shell
# 开发模式
webpack ./src/js/app.js -o ./build/js/app.js --mode=development
# 程序员写的源码一般位于src文件夹 📂

# 生产模式
webpack ./src/js/app.js -o ./build/js/app.js --mode=production
```
> `app.js` 是webpack的入口文件，所有外部文件(css、json、js...)都需要在这里引入使用
### JS引入文件
#### JSON
在ES6模块化中，如果引入的是外部的JSON文件，则JSON文件默认暴露出来
```js
import data from './data.json'
```
#### CSS
```js
import './css/index.css'
```
## webpack配置文件
:::details 点击查看配置文件
@[code](./webpack.config.js)
:::
配置文件配置好后，可在终端输入`webpack`，即可执行。
> 配置文件需要放在根目录
## 配置webpack解析css为js
安装`loader`：
```shell
npm i css-loader -D
# and
npm i style-loader -D
```
> 1、`-dev` 和 `-D` 都表示开发依赖  
> 2、**开发依赖**：帮助程序员加工代码的库，都是开发依赖  
> 3、**生产依赖**：帮助程序员实现功能效果的库，都是生产依赖

:::details 点击查看将css转为js的配置文件
@[code js{11-27}](./配置css解析为js.js)
:::
参考自[css-loader](https://webpack.docschina.org/loaders/css-loader/)
## 配置webpack解析less为js
安装`loader`：
```shell
npm i less-loader less -D
```
:::details 点击查看将less转为js的配置文件
@[code js{14,15,19,20}](./配置less解析为js.js)
:::
参考自[less-loader](https://webpack.docschina.org/loaders/less-loader/)
### 合并less、css配置
:::details 点击查看将less与js合并的配置文件
@[code js{3-4,11,15}](./配置less和css.js)
:::
## 配置webpack生成html
安装`plugin`：
```shell
npm i html-webpack-plugin -D
```
:::details 点击查看生成html的配置文件
@[code js{4-5,10-28}](./配置webpack生成html.js)
:::
参考自[HtmlWebpackPlugin](https://www.webpackjs.com/plugins/html-webpack-plugin/)
## 配置处理样式中的图片
安装`loader`：
```shell
npm i file-loader -D
# 如果需要优化图片大小，需要安装url-loader
# url-loader只比file-loader多了一个limit，可在下面点击查看
npm i url-loader -D
```
:::details 点击查看处理样式中的图片的配置文件
@[code js{15-29}](./配置处理样式中的图片文件.js)
:::
参考自[file-loader](https://www.webpackjs.com/loaders/file-loader/)
## 配置处理html中的图片
安装`loader`：
```shell
npm i html-loader -D
```
:::details 点击查看解析html中的图片的配置文件
@[code js{26-30}](./配置处理html中的图片.js)
:::
参考自[html-loader](https://www.webpackjs.com/loaders/html-loader/)
## 结论
- 1、`webpack` 能编译打包`js` 和`json` 文件
- 2、能将**es6的模块化语法转换成浏览器能识别的语法**
- 3、能压缩代码

## loader版本参考
> webpack配置各安装loader版本可参考
:::details loader版本参考
@[code](./配置.json)
:::