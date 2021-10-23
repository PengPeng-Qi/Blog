const mw = function(req, res, next){
  console.log('这是一个最简单的中间件函数');
  /* 
    在当前中间件的业务处理完毕后，必须调用next() 函数
    表示把流转关系转交给下一个中间件或路由
  */
  next();
}