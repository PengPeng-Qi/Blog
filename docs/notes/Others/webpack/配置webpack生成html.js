/* webpack.config.js  */
const {resolve} = require('path');

/* 引入html-webpack-plugin，用于加工生成html文件 */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js', 
  output: { 
    /* 
      js文件的出口及名称/build/js/app.js
      同时也是项目的出口，html为/build/index.html 
    */
    path: resolve(__dirname, 'build'), 
    filename: 'js/app.js'
  },
  plugins:[
    /* 实例化HtmlWebpackPlugin */
    new HtmlWebpackPlugin({
      /* 
        模板的位置，也就是程序员👨🏻‍💻 编写代码的index.html的位置
        注意，里面不需要引入js，使用template的目的是为了给html文件增加自己写的结构
        否则是一个只有骨架的html文件 
      */
      template: './src/index.html'
    })
  ]
}