/* webpack.config.js */
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

new OptimizeCssAssetsPlugin({
  cssProcessorPluginOptions: {
    preset: ['default', { discardComments: { removeAll: true } }], // 移出所有注释
  },
})
