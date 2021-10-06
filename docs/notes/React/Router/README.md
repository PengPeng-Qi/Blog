---
sidebar: auto
---
# 路由
**路由就是一组映射关系，key是路径，值是`function` 或`component`**
  
1、`function` 是后端路由，用来处理用户提交的请求  
```js
app.get('/xxx', (req, res) => {
  ...
})
```
> 根据请求的路径匹配路由，调用路由中的函数来返回数据

2、`component` 是前端路由，用来展示页面内容  
```jsx
<Route path="/test" component={Test}>
```
> 当前端路径变成`/test`，当前路由组件就会变成`Test` 组件

## 安装
react-router-dom 是一个插件库
```shell
yarn add react-router-dom
# or
npm i react-router-dom
```
## 路由的基本使用
- 1、引入
```js
import {Link, BrowserRouter, Route} from 'react-router-dom'
// or
/* import {Link, HashRouter, Route} from 'react-router-dom' */
```
> 点击锚点，会产生历史记录，但是不会引起页面刷新
- 2、编写路由链接(导航栏)
```jsx
/* 注意📢 to后面的路径避免大写且不带点./ */
<BrowserRouter>
  <Link to="/about">About</Link>
</BrowserRouter>
```
> `<Link>` 最终被转化为了`<a>` 标签, `to` 最终被转换为了`href`
- 3、注册路由(展示区)
```jsx
<BrowserRouter>
  <Route path="/about" component={About}/>
  <Route path="/home" component={Home}/>
</BrowserRouter>
```
> 注意📢：整个应用只能被一个`<BrowserRouter>` 包裹，故放在入口文件最佳
:::details 入口文件
```jsx
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root')
)
```
:::
## 路由组件和一般组件
:::details 路由组件和一般组件
@[code](./路由组件和一般组件.html)
:::
## NavLink
给导航栏增加点击样式
```jsx
import {NavLink} from 'react-router-dom'

/* 如果点击了导航栏，则给导航栏追加加样式名为xxx样式，默认值是active */
<NavLink activeClassName="xxx">XXX</NavLink>
```
### 封装NavLink
:::details 封装NavLink
@[code](./封装MyNavLink.js)
:::
使用`MyNavLink`
```jsx
/* 方式一：以下两种写法是一样的 */
<MyNavLink to='/about' title="about">about</MyNavLink>
<MyNavLink to='/about' title="about" />

/* 方式二 ...接受所有传递的props*/
<MyNavLink to='/home' title="home" a="1" b="2">home</MyNavLink>
<MyNavLink to='/home' title="home" a="1" b="2"></MyNavLink>

/* 方式三:标签体内容home是一个特殊的标签属性，可以通过this.props.children 获得, */
<MyNavLink to='/home' a="1" b="2">home</MyNavLink>
```
## Switch
若一个路径对应多个组件，则路径匹配的同时，组件都会展示出来，因为当路径匹配上了之后，react会继续往下面开始匹配，**如果想实现匹配上一个路径就不继续向下执行，可使用`Switch`**
```jsx
import {Switch, Route} from 'react-router-dom'

<Switch>
  <Route path='/about' component={About} />
  <Route path='/home' component={Home} />
  <Route path='/home' component={Test} />
</Switch>
```
## 解决样式丢失
如果使用多层路径，则样式(bootstrap)会丢失，是因为在react中，**如果请求的文件不存在，则会返回public文件夹下的index.html**  
  
解决方式为：
- 1、`public/index.html` 中 引入样式时不写 ./ 写 / （常用）
- 2、`public/index.html` 中 引入样式时不写 ./ 写 `%PUBLIC_URL%` （常用）
- 3、使用`HashRouter`

> 想更详细了解可查看视频 [✈️](https://www.bilibili.com/video/BV1wy4y1D7JT?p=82&spm_id_from=pageDriver) 解决方式从19min开始

## 路由的严格匹配与模糊匹配
- 1、默认使用的是模糊匹配（**输入的路径** 必须包含要 **匹配的路径**，且顺序要一致）
```jsx
/* 导航栏 */
<MyNavLink to="/home/a/b" >Home</MyNavLink>
/* 不能匹配，因为顺序不一致 */
// <MyNavLink to="/a/home/b" >Home</MyNavLink>

/* 展示区：注册路由组件 */
<Route path="/home" component={Home} />
```
- 2、开启严格匹配：
```jsx
<Route exact={true} path="/about" component={About}/>
```
- 3、严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
## Redirect的使用	
- 1、一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
- 2、具体编码：
```jsx
import {Redirect} from 'react-router-dom'

<Switch>
  <Route path="/about" component={About}/>
  <Route path="/home" component={Home}/>
  <Redirect to="/about"/>
</Switch>
```
## 嵌套路由
- 1、注册子路由时要写上父路由的path值
```jsx
<MyNavLink to="/home/message" >Message</MyNavLink>
```
- 2、路由的匹配是按照注册路由的顺序进行的

## 向路由组件传递参数
### params参数(常用)
接收参数：`this.props.match.params`，是一个对象，里面有传递的参数属性，例如age、name属性
:::details params参数
```jsx
/* 路由链接(携带参数) */
<Link to={'/demo/test/tom/18'}>详情</Link>

/* 注册路由(声明接收) */
<Route path="/demo/test/:name/:age" component={Test}/>

/* 接收参数，在Test组件中 */
const {name, age} = this.props.match.params
```
:::
### search参数
接收参数：`this.props.location.search`，类似于ajax的query参数
:::details search参数
```jsx
/* 路由链接(携带参数) */
<Link to={'/demo/test?name=tom&age=18'}>详情</Link>

/* 注册路由(无需声明，正常注册即可) */
<Route path="/demo/test" component={Test}/>

/* 接收参数，在Test组件中 */
console.log(this.props.location.search) // ?name=tom&age=18
```
> 获取到的search是urlencoded编码字符串，需要借助querystring解析
```js
/* ?name=tom&age=18 可使用react自带的querystring解析 */
import qs from 'querystring'

let obj = {name: "tom", age: 18};
console.log(qs.stringify(obj)) // name=tom&age=18

let carObj = "name=奔驰&price=100000"
console.log(qs.parse(carObj)) // {name: '奔驰', price: 100000}
```
:::
### state参数
特点：传递的参数在地址栏是隐藏的，接收参数：`this.props.location.state`
:::details state参数
```jsx
/* 路由链接(携带参数)，参数是一个对象 */
<Link to={{{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>

/* 注册路由(无需声明，正常注册即可) */
<Route path="/demo/test" component={Test}/>

/* 接收state参数 */
console.log(this.props.location.state) // 是一个对象{name:'tom',age:18}
```
>  刷新也可以保留住参数，是因为react在操作history对象，如果清除了浏览器缓存则没有了，所以最好如下优化一下
```js
/* 接收state参数 */
const { id, title } = this.props.location.state || {} 
/* 防止没有state为undefined的时候出bug */
```
:::
## push和replace模式
路由链接默认开启push模式，可通过以下方式开启replace模式
```jsx
<MyNavLink replace to="/home/message" >Message</MyNavLink>
```
## 编程式路由导航
借助`this.prosp.history` 对象上的API对操作路由跳转、前进、后退
- `this.prosp.history.push()`
- `this.prosp.history.replace()`
- `this.prosp.history.goBack()`
- `this.prosp.history.goForward()`
- `this.prosp.history.go()`

:::details
@[code](./编程式路由导航.js)
:::
:::details 页面加载两秒之后自动跳转
```js
/* News组件一但挂载，两秒后立即切换到home/messages组件 */
componentDidMount(){
  setTimeout(() => {
    this.props.history.push('/home/messages')
  }, 2000)
}
```
:::
## withRouter
加工一般组件，让一般组件具有路由组件所有的Api
```js
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Xxxx组件 extends Component{
  ...
}

export default withRouter(Xxxx组件)
/* withRouter的返回值是一个新组件 */
```
## BrowserRouter与HashRouter的区别
- 1、底层原理不一样：
  - `BrowserRouter`使用的是H5的`history API`，不兼容IE9及以下版本。
  - `HashRouter`使用的是URL的哈希值。
- 2、`path` 表现形式不一样
  - `BrowserRouter` 的路径中没有`#`, 例如：`localhost:3000/demo/test`
  - `HashRouter的` 路径包含`#`, 例如：`localhost:3000/#/demo/test`
- 3、刷新后对路由`state` 参数的影响
  - `BrowserRouter` 没有任何影响，因为`state` 保存在`history` 对象中。
  - `HashRouter` 刷新后会导致路由`state` 参数的丢失！！！
- 4、备注：`HashRouter` 可以用于解决一些路径错误相关的问题。(例如：样式丢失)
> 详细课件视频[✈️](https://www.bilibili.com/video/BV1wy4y1D7JT?p=93&spm_id_from=pageDriver)