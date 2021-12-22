---
sidebar: auto
---
# Var
## 注意点
```js
function sayHi() {
  console.log(phrase); // undefined
  phrase = "Hello"; // (*)

  if (false) {
    var phrase;
  }

  alert(phrase);  // Hello
}
sayHi();
console.log(phrase);  // error
```
**`if` 分支永远都不会执行，但是没关系，它里面的`Var` 函数刚开始时就被处理了，所以在执行`*` 代码时，变量是存在的。**
```js
console.log(phrase);  // Hello
function sayHi() {
  phrase = "Hello"; // (*)

  alert(phrase);  // Hello
}
sayHi();
console.log(phrase);  // Hello
```
在函数内不用`var` 声明，则为全局变量  
  
且函数变量提升，所以第一行输出`Hello`
## IIFE
JS在只有`var` 的时候，且这种声明无块级作用域，程序员就发明了一种模仿块级作用域的方法。  
  
```js
(function() {

  var message = "Hello";

  alert(message); // Hello

})();

console.log(message);  // error
```
创建一个函数并立即调用，代码立即执行拥有了自己的私有变量。  
  
为什么需要加`()`，两个原因如下：
1. JS 遇到`function`， 会把它当做一个函数声明的开始，但函数声明必须有一个函数名。  
```js
// 尝试声明并立即调用一个函数
function() { // <-- Error: Function statements require a function name

  var message = "Hello";

  alert(message); // Hello

}();
```
2. 不允许立即调用函数声明
```js
// 下面的括号会导致语法错误
function go() {

}(); // <-- 不能立即调用函数声明
```
所以需要括号括起来，表面这个函数是在另一个表达式的上下文创建的，因此它是一个函数表达式：不需要函数名，可以立即调用。
```js
(function() {
  alert("Parentheses around the function");
})();

(function() {
  alert("Parentheses around the whole thing");
}());

!function() {
  alert("Bitwise NOT operator starts the expression");
}();

+function() {
  alert("Unary plus starts the expression");
}();
```