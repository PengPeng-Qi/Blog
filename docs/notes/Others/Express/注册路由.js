/* 1、导入路由模块 */
const userRouter = require('./创建路由模块.js')

/* 2、使用app.use() 注册路由模块 */
app.use(userRouter)

// 注册并添加统一访问前缀 /api
// app.use('/api', userRouter)