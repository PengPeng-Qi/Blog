---
sidebar: auto
---
# 原型
**重要结论**：
- 每个**对象**都有 `__proto__` 属性，但只有**函数对象**才有 `prototype` 属性
- 原型对象（`Person.prototype`）是 构造函数（Person）的一个实例。

```js
function Person() {}
var person1 = new Person();

person1.constructor == Person           // true
Person.prototype.constructor == Person  // true
```
## 结论一
**person1 为什么有 `constructor` 属性？**  
> 那是因为 person1 是 Person 的实例。

## 结论二
**`Person.prototype` 为什么有 `constructor` 属性？**  
> `Person.prototype` 也是Person 的实例。也就是在 Person 创建的时候，创建了一个它的**实例对象**并赋值给它的 `prototype`
  
## 结论三
通过 `new Function()` 产生的对象都是**函数对象**。因为 A 是函数对象，所以`Function.prototype` 是函数对象。
```js
var A = new Function ();
Function.prototype = A;
```
## 结论四
**特殊**：`Function.prototype` 没有 `constructor` 属性，因为它是**函数对象**，但是他很特殊，没有`prototype` 属性
```js
console.log(typeof Function.prototype) // Function，这个特殊
console.log(typeof Object.prototype) // Object
console.log(typeof Function.prototype.prototype) //undefined
```
## 结论五
```js
Person.__proto__ === Function.prototype          // true
Person.prototype.__proto__ === Object.prototype  // true
```
## 结论六
所有函数对象的 `proto` 都指向`Function.prototype` , 它是一个空函数（Empty function）
```js
Number.__proto__ === Function.prototype          // true
Number.prototype.__proto__ === Object.prototype  // true
Number.constructor == Function                   // true
Number.constructor == Number                     // false
Number.prototype.constructor == Number           // true
```
## 结论七
`Function.prototype` 也是唯一一个`typeof XXX.prototype`为 `function`的`prototype`
```js
console.log(typeof Function.prototype) // function
console.log(typeof Object.prototype)   // object
console.log(typeof Number.prototype)   // object
console.log(typeof Boolean.prototype)  // object
console.log(typeof String.prototype)   // object
console.log(typeof Array.prototype)    // object
console.log(typeof RegExp.prototype)   // object
console.log(typeof Error.prototype)    // object
console.log(typeof Date.prototype)     // object
console.log(typeof Object.prototype)   // object

Function.prototype.__proto__ === Object.prototype  // true
```
## 结论八
```js
function Person(name) {
    this.name = name
}
// 重写原型
Person.prototype = {
    getName: function() {}
}
var p = new Person('jack')
console.log(p.__proto__ === Person.prototype)          // true
console.log(p.__proto__ === p.constructor.prototype)   // false
console.log(Person.prototype.constructor === Object)   // true
/* 
  给Person.prototype赋值的是一个对象直接量{getName: function(){}}，
  使用对象直接量方式定义的对象其构造器（constructor）指向的是根构造器Object
 */
```
## 结论九
`Function.__proto__ === Function.prototype // true`  
  
Function 也是对象函数，也是通过`new Function()`创建，所以`Function.__proto__` 指向`Function.prototype`。  
## 结论十
原型链的形成是真正是靠`__proto__` 而非`prototype`
```js
var animal = function(){};
var dog = function(){};

animal.price = 2000;
dog.prototype = animal;
var tidy = new dog();
console.log(dog.price) //undefined
console.log(tidy.price) // 2000
```