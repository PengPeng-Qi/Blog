 /* webpack.config.js  */
const {resolve} = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js', 
  output: { 
    path: resolve(__dirname, 'build'), 
    filename: 'js/app.js'
  },
  module: {
    rules: [
      /* 配置解析样式中的图片 */
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            outputPath: '/imgs',
            publicPath: '/build/imgs',
            name: '[hash:5].[ext]',
            limit: 8 * 1024
          }
        }]
      },
      /* 配置解析html中的图片，加上上一个loader，可以使文件输出到/build/imgs/...下 */
      {
        test: /\.(html)$/,
        use: 'html-loader'
      }
    ]
  }
}