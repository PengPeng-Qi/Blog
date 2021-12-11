## script
如果在引用`script` 标签内部，再写入js代码，则会无视掉`script` 标签内部代码
```html
<script src="./file.js">
  console.log(2);
</script>
```
```js
/* file.js */

console.log(1);
```
最后在控制台只会输出`1`