const {resolve} = require('path');

/* css相关loader的配置 */
const baseCssLoader = ["style-loader","css-loader"]
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [...baseCssLoader]
      },
      {
        test: /\.less$/i, 
        use: [...baseCssLoader, "less-loader"]
      }
    ]
  }
}