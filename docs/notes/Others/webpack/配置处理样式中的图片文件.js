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
          // loader: 'file-loader',
          loader: 'url-loader',
          options:{
            /* 配置图片加工后存放的位置：build/imgs/... */
            outputPath:'/imgs',
            /* 配置图片加载引入时的前缀路径 */
            publicPath:'/build/imgs',
            /* 配置生成图片的名字+后缀，hash:5 表示只取hash值得前五位，ext表示后缀 */
            name: '[hash:5].[ext]',
            /* 图片大小小于8kb时，将图片转为base64编码 */
            limit: 8 * 1024
          }
        }]
      }
    ]
  }
}