 /* webpack.config.js  */
const {resolve} = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js', 
  output: { 
    path: resolve(__dirname, 'build/js'), 
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        /* 该loader要处理的文件 */
        test: /\.less$/i, 
        use: [
          "style-loader", 
          "css-loader",
          /* 将less文件解析为css文件 */ 
          "less-loader"
        ],
      }
    ]
  }
}