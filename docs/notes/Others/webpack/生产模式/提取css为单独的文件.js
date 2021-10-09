/* 引入MiniCssExtractPlugin，用于提取css为单独文件 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/* css相关loader的配置，输出css为单独的文件 */
const baseCssLoader = [MiniCssExtractPlugin.loader,'css-loader']

module.exports = {
  plugins: [
    /* 实例化MiniCssExtractPlugin */
    new MiniCssExtractPlugin({
      /* 输出路径 */
      filename: '/css/index.css'
    })
  ]
}