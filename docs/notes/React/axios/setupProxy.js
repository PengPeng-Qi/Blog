const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api1', { // 遇见/api1前缀的请求，就会触发该代理配置
      target: 'http://localhost:5000', // 请求转发给谁
      changeOrigin: true, 
      /* 
        控制服务器收到的请求头中Host的值,标志着从哪里发出，
        若为ture，则服务器接收到的请求来自于http://localhost:5000，
        若为false，则服务器接收到的请求来自于3000端口 
      */
      pathRewrite: {
        '^/api1': ''
      } // 重写请求路径(必须)
    }),
    proxy('/api2', { 
      target: 'http://localhost:5001', 
      changeOrigin: true, 
      pathRewrite: {
        '^/api2': ''
      } 
    })
  )
}