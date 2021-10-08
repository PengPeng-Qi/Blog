/* webpack.config.js  */
const {resolve} = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js', 
  output: { 
    path: resolve(__dirname, 'build/js'), 
    filename: 'app.js'
  },
  /* module.rules中配置一个一个的loader */
  module: {
    rules: [
      /* 配置解析css */
      {
        /* 该loader要处理的文件 */
        test: /\.css$/i, 
        /* 后指定的loader先执行 */
        use: [
          /* 创建style标签 🏷，将样式资源插入，添加到header中生效 */
          "style-loader", 
          /* 将css文件变成CJS模块加载js中，里面内容是样式字符串 */
          "css-loader"
        ],
      }
    ]
  }
}