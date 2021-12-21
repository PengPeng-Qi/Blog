---
sidebar: auto
---
# Rest参数与Spread语法
## Rest参数...
`Rest`参数会收集剩余的所有参数，所以必须放在参数列表的末尾。  
```js
function f(arg1, ...rest, arg2) { // arg2 在 ...rest 后面？！
  // error
}
```
## arguments 变量
`arguments` 是可遍历的类数组对象。  
  
**箭头函数没有`arguments`**，如果我们在箭头函数中访问`arguments`，访问到的`arguments` 并不属于箭头函数，而是属于箭头函数外部的普通函数。  
```js
function f() {
  let showArg = () => alert(arguments[0]);
  showArg();
}

f(1); // 1
```
## Spread 语法
`Spread` 语法和`rest` 参数很像，但是二者完全相反，当在函数中使用`...arr` 时，他会把可迭代对象`arr` 展开到参数列表中。  
```js
let arr = [3, 5, 1];

alert( Math.max(...arr) ); // 5（spread 语法把数组转换为参数列表）
```
我们还可以将`spread` 语法与常规值结合使用：
```js
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25
```
任何可迭代对象都可以使用`spread` 语法.  
```js
let str = "Hello";

alert( [...str] ); // H,e,l,l,o
```
`Array.from(atr)` 将一个可迭代对象转换为数组，运行结果与`[...str]` 相同。  
```js
let str = "Hello";

// Array.from 将可迭代对象转换为数组
alert( Array.from(str) ); // H,e,l,l,o
```
不过`Array.from(obj)` 和`[...obj]` 存在一个细微的差别：
- `Array.from` 适用于类数组对象也适用于可迭代对象
- Spread语法只适用于可迭代对象

## 总结
- 若`...` 出现函数参数列表的最后，那么他就是`rest` 参数。
- 若`...` 出现在函数调用或类似的表达式中，那它就是Spread 语法。会把一个数组展开为列表。