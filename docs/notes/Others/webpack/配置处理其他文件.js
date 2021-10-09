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
      {
        /* 处理fonts等 */
        exclude: /\.(html|less|css|js|json|bmp|gif|jpg|png)$/,
        use: [{
          loader: 'file-loader',
          options:{
            outputPath:'media',
            name: '[hash:5].[ext]'
          }
        }]
      }
    ]
  }
}