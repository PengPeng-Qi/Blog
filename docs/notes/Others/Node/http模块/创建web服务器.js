const http = require('http')

/* 创建web 服务器实例 */
const server = http.createServer()

/* 
  使用 .on() 为服务器绑定request 事件
  只要服务器接受到了客户端的请求，就会调用通过 server.on()为服务器绑定的request 事件处理函数
    req 是请求对象，包含与客户端相关的数据与属性
    req.url 是客户端的请求的URL 地址
    req.method 是客户端的method 请求类型

    res 是响应对象，包含了与服务器相关的数据和属性
    res.end() 的作用：向客户端发送指定的内容，并结束这次请求的处理过程
 */
server.on('request', (req, res) => {
  console.log('someone visit our web server');

  const str = `Your request(请求) url is ${req.url}, and request method is ${req.method}`
  console.log(str);

  /* 为了防止中文显示乱码。课设置响应头：Content-Type: text/html; charset=utf-8 */
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  res.end(str);
})

/* 调用 .listen(端口号, callback)方法， 启动web服务器 */
server.listen(80, () => {
  console.log('http server running at http://127.0.0.1');
})