## return
注意：不要在`return `与返回值之间添加新行
```js
return
  (some + long + expression + or + whatever * f(a) + f(b))
```
js默认值会在return之后加上分号
```js
return;
  (some + long + expression + or + whatever * f(a) + f(b))
```
如果我们想要将返回的表达式写成跨行的形式，那么应该在`return `的同一行开始写词表达式
```js
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
```