---
sidebar: auto
---
## new Function
`let func = new Function([arg1, agrg2, ...argN], functionBody);`
该函数通过使用参数`arg1...argN` 和给定的`functionBody` 创建的。  
```js
let sum = new Function('a', 'b', 'return a + b');

console.log( sum(1, 2) );  // 3
```
只有函数体的函数
```js
let sayHi = new Function('alert("Hello")');

sayHi(); // Hello
```
### 函数声明
```js
new Function('a', 'b', 'return a + b'); // 基础语法
new Function('a,b', 'return a + b'); // 逗号分隔
new Function('a , b', 'return a + b'); // 逗号和空格分隔
```
三种方式皆可。  
  
**`new Function` 允许我们将任意字符串变为函数。**例如，从服务器接受一个新的函数并执行它：
```js
let str = ... 动态地接收来自服务器的代码 ...

let func = new Function(str);
func();
```
## 闭包
闭包是一个特殊的属性`[[Enviroment]]` 来记录函数本身的创建时的环境的函数。具体指向了函数创建时的词法环境。  
  
**如果使用`new Function` 创建一个函数，那么该函数的`[[Enviroment]]` 并不指向当前的词法环境，而是指向全局环境。**  
  
因此，此类函数无法访问外部变量，只能访问全局变量。  
```js
function getFunc() {
  let value = "test";

  let func = new Function('alert(value)');

  return func;
}

getFunc()(); // error: value is not defined
```
与常规的相比较
```js
function getFunc() {
  let value = "test";

  let func = function() { alert(value); };

  return func;
}

getFunc()(); // "test"，从 getFunc 的词法环境中获取的
```
