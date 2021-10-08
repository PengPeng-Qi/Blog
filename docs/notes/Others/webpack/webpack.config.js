/*
  webpack.config.js
	1.该文件是webpack的配置文件，所有webpack的任务、用到的loader、plugins都要配置在这里
	2.该文件要符合CJS模块化规范
*/

/* 引入Node中一个内置的path模块，专门用于解决路径问题 */
const {resolve} = require('path');

module.exports = {
  /* 工作模式 */
  mode: 'development', 

  /* 入口文件 */
  entry: './src/js/app.js', 
  /* 入口文件的第二种写法 */
  // entry: {main: './src/js/app.js'}, 

  /* 出口文件 */
  output: { 
    /* 输出路径 */
    path: resolve(__dirname, 'build'), 
    /* 输出名字，输出文件为/build/app.js */
    filename: 'app.js'
  }
}