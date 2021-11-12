---
sidebar: auto
---
# 对象
## 继承
@[code](./继承.js)
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
`for/in` 循环可以在循环体中遍历对象中所有可枚举的属性（包括自有属性和继承的属性）  
  
对象继承的内置方法不可枚举的，在代码中给对象添加的属性都是可枚举的。  
  
`Object.keys()` 返回对象的所有可枚举的自有属性的名称组成的数组。  
```js
let obj = {a: 1, b: 2};

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