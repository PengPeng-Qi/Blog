---
sidebar: auto
---
# 类
> 类的方法之间没有逗号

## 什么是class？
类是一种函数
```js
class User {
  constructor(name){
    this.name = name;
  }
  sayHi(){
    alert(this.name)
  }
}

console.log(typeof User);  // function
```
`class User{...}` 构造实际上做了如下的事：
- 1、创建一个名为`User` 的函数，该函数成为类声明的结果。该函数的代码来自于`constructor` 方法  
- 2、存储类中的方法在`User.prototype` 中，例如： `User.prototype` 中的`sayHi` 。

> 当new User 对象被创建后，当我们调用其方法时，它会**从原型中获取对应的方法**

```js
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// class 是一个函数
alert(typeof User); // function

// ...或者，更确切地说，是 constructor 方法
alert(User === User.prototype.constructor); // true

// 方法在 User.prototype 中，例如：
alert(User.prototype.sayHi); // alert(this.name);

// 在原型中实际上有两个方法
alert(Object.getOwnPropertyNames(User.prototype)); // ['constructor', 'sayHi']
```
## 实现一个类
```js
// 用纯函数重写 class User

// 1. 创建构造器函数
function User(name) {
  this.name = name;
}
// 函数的原型（prototype）默认具有 "constructor" 属性，
// 所以，我们不需要创建它

// 2. 将方法添加到原型
User.prototype.sayHi = function() {
  alert(this.name);
};

// 用法：
let user = new User("John");
user.sayHi();
```
这个定义的结果与使用类得到的结果基本相同。不过这之前存在重大差异，详情可见[🔗](https://zh.javascript.info/class#bu-jin-jin-shi-yu-fa-tang)

> 类总是使用`use strict`

## 类表达式
```js
let User = class {
  syaHi(){
    console.log('Hello');
  }
}
```
类似于命名函数表达式。  
  
如果类表达式有名字，那么该名字仅在类内部可见：
```js
let User = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass 这个名字仅在类内部可见
  }
};

new User().sayHi(); // 正常运行，显示 MyClass 中定义的内容

alert(MyClass); // error，MyClass 在外部不可见
```
动态的**按需创建类**：
```js
function makeClass(phrase) {
  // 声明一个类并返回它
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

// 创建一个新的类
let User = makeClass("Hello");

new User().sayHi(); // Hello
```
## Getters/setters
就像对象字面量，类可能包括`getters/setters`，计算属性（computed properties）等。
```js
class User {

  constructor(name) {
    // 调用 setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

}

let user = new User("John");
alert(user.name); // John

user = new User(""); // Name is too short.
```
## 计算属性名称
```js
class User {
  ['say' + 'Hi'](){
    console.log('Hello!')
  }
}

new User().sayHi();
```
## Class 字段
**类字段**是一种允许添加任何属性的语法。  
```js
/* 在 class User 中添加一个 name 属性 */
class User {
  name = 'John';

  sayHIi(){
    console.log(`Hi, ${this.name}!`);
  }
}

new User().sayHi();
```
类字段重要的不同之处在于，它们会在每个独立对象中被设好，而不是设在 `User.prototype`:
```js
class User {
  name = "John";
}

let user = new User();
alert(user.name); // John
alert(User.prototype.name); // undefined
```
可以在赋值时使用更复杂的表达式和函数调用：
```js
class User {
  name = prompt("Name, please?", "John");
}

let user = new User();
alert(user.name); // John
```
## 总结
```js
class MyClass {
  prop = value; // 属性

  constructor(...) { // 构造器
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter 方法
  set something(...) {} // setter 方法

  [Symbol.iterator]() {} // 有计算名称（computed name）的方法（此处为 symbol）
  // ...
}
```