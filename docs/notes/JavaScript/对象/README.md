---
sidebar: auto
---
# 对象
对象是一组属性的集合。  
## 创建对象
```js
let user = new Object(); // 构造函数的语法
let user = {};           // 字面量的语法
```
通常，我们用花括号，这种方式就叫做**字面量**，用字面量创建时，会自动初始化一组属性，这个对象就有了基本的属性和方法。  
  
对象有两种属性：**数据属性和访问器属性**。  
  
**数据属性**是键值对，并且每个数据属性拥有下列特性：
- `Value`
- `Writable`
- `Enumerable`
- `Configurable`
  
**访问器属性**有一个或两个访问器属性来存取数值：
- `Get`
- `Set`
- `Enumerable`
- `Configurable`
  
也可以使用多字词语作为属性名，但必须为他们加上引号：
```js {3}
let user = {
  name: "John",
  "likes birds": true,  // 多词属性名必须加引号
};

// 读取
user['likes birds'];
```
> 列表中最后一个属性应以逗号结尾，这叫做尾随或悬挂逗号

```js {8}
let user = {
  name: 'kok',
  age: 20,
}
let key = 'age';

// 访问变量，不能使用点号
console.log(user[key]);
```
**属性名没有限制，属性名可以是任何字符串或者`Symbol`、其他类型会被自动转换为字符串**
```js
let obj = {
  0: "test"        // 等同于 "0": "test"
};

// 都会输出相同的属性（数字 0 被转为字符串 "0"）
alert( obj["0"] ); // test
alert( obj[0] );   // test (相同的属性)
```
**特殊：名为`__proto__` 的属性，不能将它设置为非对象的值**
## 继承
@[code](./继承.js)
## 计算属性
当创建一个对象时，我们在对象字面量中使用方括号。这叫做**计算属性**
```js
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // 属性名是从 fruit 变量中得到的
};

alert( bag.apple ); // 5 如果 fruit="apple"
```
计算属性的含义很简单：`[fruit]` 含义是属性名应该从`fruit` 变量中获取。  
  
也可以使用更加复杂的表达式：
```js
let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
```
**方括号比点符号更强大。它允许任何属性名和变量，但写起来也更加麻烦。**
## 属性值简写
如果用已存在的变量当做属性名，课使用**属性值缩写**
```js {3,4}
function makeUser(name, age) {
  return {
    name, // 与 name: name 相同
    age,  // 与 age: age 相同
  };
}
```
## 删除属性
`delete` 属性只能删除自有属性，不能删除继承属性

> 如果delete 表达式删除成功或没有任何副作用（比如删除不存在的属性），他返回true

`delete` 不能删除可配置性为false 的属性，比如**通过变量声明和函数声明创建的全局对象的属性**。在严格模式下，删除不可配置属性会报一个类型错误，非严格模式下，在这些情况下的delete 操作会返回false。  
  
```js
delete Object.prototype  // 不能删除，属性是不可配置的

var x = 1;
delete this.x;           // 不能删除全局变量

function f(){};
delete this.f;           // 不能删除全局函数
```
## 检测属性
- 1、`in` 左侧是属性名（字符串），右侧是对象，继承属性和自有属性都为true
- 2、`hasOwnProperty()` 检测给定对象是否是对象的自有属性
- 3、`propertyIsEnumerable()` 检测属性是自有属性且这个属性是可枚举的

## 枚举属性
`for/in` 循环可以在循环体中**遍历对象中所有可枚举的属性（包括自有属性和继承的属性）**  
  
**对象继承的内置方法不可枚举的，在代码中给对象添加的属性都是可枚举的**。  
```js
let obj = {
  a: 1,
  b: 2,
}
obj.__proto__.c = 3;

for(let key in obj){
  console.log(key);
}
/* 
  a b c
*/
```
`Object.keys()` 返回对象的**所有可枚举的自有属性的名称组成的数组**。  
```js
let obj = {
  a: 1,
  b: 2,
}
obj.__proto__.c = 3;

Object.keys(obj); // ['a', 'b']
```
  
`Object.getOwnPropertyNames()` 返回对象的所有自有属性的名称，而不仅仅是可枚举的属性。  
## 原型属性
将对象作为参数传入`Object.getPrototypeOf()` 可以查询他的原型

## 原型对象
### isPrototypeOf
检测一个对象是否是另一个对象的原型（或处于原型链中）
```js
var p = {x: 1};
var o = Object.create(p);

p.isPrototypeOf(o)  // p 是否是 o 的原型 => true 
Object.prototype.isPrototypeOf(p) // => true p 继承自Object.prototype
Object.prototype.isPrototypeOf(Object); // => true
```
## 对象的排序
**整数属性**指的是一个可以在不做任何更改的情况下与一个整数进行相互交换的字符串。
```js
// Math.trunc 是内建的去除小数部分的方法。
alert( String(Math.trunc(Number("49"))) ); // "49"，相同，整数属性
alert( String(Math.trunc(Number("+49"))) ); // "49"，不同于 "+49" => 不是整数属性
alert( String(Math.trunc(Number("1.2"))) ); // "1"，不同于 "1.2" => 不是整数属性
```
  
**整数属性**会被进行排序，其他属性则按照创建的顺序显示  
```js
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for(let code in codes) {
  alert(code); // 1, 41, 44, 49
}
```
```js
let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // 增加一个

// 非整数属性是按照创建的顺序来排列的
for (let prop in user) {
  console.log( prop ); // name, surname, age
}
```
## 对象的克隆
### 浅拷贝
```js {9-11}
let user = {
  name: "John",
  age: 30
};

let clone = {}; // 新的空对象

// 将 user 中所有的属性拷贝到其中
for (let key in user) {
  clone[key] = user[key];
}

clone.name = "Pete";      // 改变了其中的数据

console.log( user.name ); // John
```
也可以使用[`Object.assign`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) 代替`for...in` 循环来进行简单克隆
```js
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);
```
## 对象方法
存储在对象属性值的函数被称为**方法**
### 方法简写
在对象字面量中，有一种更短方法的语法：
```js {2,8}
user = {
  sayHi: function() {
    alert("Hello");
  }
};

let user = {
  sayHi() { // 与 "sayHi: function(){...}" 一样
    alert("Hello");
  }
};
```
## 对象中的this
`this` 只有在函数被调用时才会有值，所以`this` 的规则不考虑对象定义，只有调用的那一刻才重要
```js
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log('1', this );
}

user.f = sayHi;
admin.f = sayHi;

user.f();  // user
admin.f(); // admin

let fn = user.f;
fn();     // window
```
> 上例`fn`，`this` 在非严格模式下指向window、严格模式下指向`undefined`

### 箭头函数没有自己的this
箭头函数有些特别，没有自己的`this`，取决于外部**正常的**函数
```js
let user = {
  firstName: "Ilya",
  sayHi() {
    // 这里的this 来自于外部的 user.sayHi() 方法
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // Ilya
```
### 测试题
```js
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log( user.ref.name ); // 结果是什么？
```
答案：错误❌  
  
**解析：**`this` 的规则不考虑对象定义、只有调用那一刻才重要。  
  
这里`makrUser()` 中的`this` 的值在严格模式下是`undefined`，因为他是被作为函数调用的，而不是通过点符号作为方法调用的。  
```js
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();

console.log( user.ref().name ); // John
```
> 这里的`this` 指向`user`，因为`this` 是被`user.ref()` 调用的，所以`this` 指向`user`
  
关于对象的转换可参考[对象-原始值转换](https://zh.javascript.info/object-toprimitive)  