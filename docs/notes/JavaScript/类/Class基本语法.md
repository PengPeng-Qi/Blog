---
sidebar: auto
---
# 类
> 类的方法之间没有逗号

## 什么是class？
**类是一种函数**
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
console.log(Object.getOwnPropertyNames(User.prototype)); // ['constructor', 'sayHi']
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
## 类表达式
```js
let User = class {
  syaHi(){
    console.log('Hello');
  }
}
```
类似于**命名函数表达式**。  
  
如果类表达式有名字，那么该名字仅在类内部可见：
```js {1,7,9}
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
```js {3,7,11}
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
使用中括号`[...]` 的计算方法
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
```js {3}
/* 在 class User 中添加一个 name 属性 */
class User {
  name = 'John';

  sayHi(){
    console.log(`Hi, ${this.name}!`);
  }
}

new User().sayHi();
```
**类字段**重要的不同之处在于，它们会在每个独立对象中被设好，而**不是设在 `User.prototype`**:
```js
class User {
  name = "John";
}

let user = new User();
alert(user.name); // John
alert(User.prototype.name); // undefined
```
可以在赋值时使用更复杂的表达式和函数调用：
```js {2}
class User {
  name = prompt("Name, please?", "John");
}

let user = new User();
alert(user.name); // John
```
## 使用类字段制作绑定方法
```js {13}
class Button {
  constructor(value) {
    this.value = value;
  }

  click() {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined
```
改变`this`指向：
```js {6,10}
class Button {
  constructor(value) {
    this.value = value;
  }

  // click 不在 prototype 上
  click = () => {
    /* 
      button、因为click是基于每一个对象创建的，所以指向该对象
      将button.click 传递到任何地方，this的值都是正确的
    */
    console.log(this);  
    alert(this.value);
  } 
}

let button = new Button("hello");

setTimeout(button.click, 1000); // hello
```
## 总结
```js
class MyClass {
  prop = value; // 属性、不在Prototype 上

  constructor(...) { // 构造器、new 会调用
    // ...
  }

  method(...) {} // method、存在Prototype 上

  get something(...) {} // getter 方法、存在Prototype上
  set something(...) {} // setter 方法、存在Prototype上

  [Symbol.iterator]() {} // 有计算名称（computed name）的方法（此处为 symbol）
  // ...
}
```
> `MyClass` 是一个函数