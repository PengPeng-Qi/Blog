module: {
  rules: [{
    // 对js进行语法检查
    test: /\.js$/,
    exclude: /node_modules/, // 排除这个文件
    // 优先执行
    enforce: 'pre', //优先执行  只要webpack启动时  尽可能先执行  可不写
    loader: 'eslint-loader',
    options: {
      fix: true //若有问题自动修复，重要！！！！
    }
  }]
}