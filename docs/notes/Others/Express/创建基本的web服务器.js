/* 1、导入 express */
const express = require('express')

/* 2、创建web 服务器 */
const app = express()

/* 3、调用app.listen(端口号，启动成功后的回调函数)，启动服务器 */
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1');
})

/* 挂载路由: */
/* 4、监听Get 请求 */
app.get('/user', (req, res) => {
  /* 向客户端发送 JSON 对象 */
  res.send({name: 'PengPengQ', age: 22, gender: '男'})
})

/* 5、监听Post 请求 */
app.post('请求的Url', (req, res) => {
  /* 向客户端发送文本内容 */
  res.send('请求成功')
})

/* 6、创建URL 中携带的查询参数 */
app.get('/', (req, res) => {
  /* 
    req.query 默认是一个空对象
    客户端可以使用 ?name=zs&age=22 这种查询字符串形式，发送到服务器的参数
    可以通过req.query 对象访问
  */
  console.log('querry', req.query);
})

/* 7、获取URL 中的动态参数 */
app.get('/user:id', (req, res) => {
  /* 
    req.params 默认是一个空对象 
    里面存放着通过 : 动态匹配到的参数值
  */
  console.log('params', req.params);
})