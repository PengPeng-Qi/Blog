---
sidebar: auto
---
# 类检查
`instanceof` 操作符用于检查一个对象是否属于某个特定的`class`
```js
class Rabbit {}
let rabbit = new Rabbit();

console.log( rabbit instanceof Rabbit ); // true
```
还可以与构造函数一起使用：
```js
function Rabbit() {};

console.log(new Rabbit() instanceof Rabbit );  // true
```
与内建`class` 一起使用：
```js
let arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true
```
`instanceof` 在检查中会将原型链考虑在内。  
  
`obj instanceof Class` 算法的执行过程如下：
1. 如果有静态方法`Symbol.hasInstance`，那么直接调用这个方法:
```js
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };

alert(obj instanceof Animal); // true：Animal[Symbol.hasInstance](obj) 被调用
```
2. 大多数class没有`Symbol.hasInstance`。在这种情况下，标准的逻辑是：使用`obj instanceOf Class` 检查`Class.prototype` 是否等于`obj` 的原型链中的原型之一。  换句话说，一个接一个的比较：
```js
obj.__proto__ === Class.prototype?
obj.__proto__.__proto__ === Class.prototype?
obj.__proto__.__proto__.__proto__ === Class.prototype?

// ...
// 如果任意一个的答案为 true，则返回 true
// 否则，如果我们已经检查到了原型链的尾端，则返回 false
```
```js {5,8}
class Animal {}
class Rabbit extends Animal {}

let rabbit = new Rabbit();
alert(rabbit instanceof Animal); // true

// rabbit.__proto__ === Rabbit.prototype
// rabbit.__proto__.__proto__ === Animal.prototype（匹配！）
```
## objA.isPrototypeOf(objB)
如果`objA` 处在`objB` 的原型链中，则返回`true`，所以，可以将`obj instanceof Class` 修改为`Class.prototype.isPrototype(obj)`。  
  
创建对象后，如果修改`prototype` 属性，可能会出现的错误：
```js {8}
function Rabbit() {}
let rabbit = new Rabbit();

// 修改了 prototype
Rabbit.prototype = {};

// ...再也不是 rabbit 了！
alert( rabbit instanceof Rabbit ); // false
```
## Object.prototype.toString
在内部，`toString` 的算法会检查`this`， 并返回相应的结果
```js
let s = Object.prototype.toString;

alert( s.call(123) ); // [object Number]
alert( s.call(null) ); // [object Null]
alert( s.call(alert) ); // [object Function]
```
## Symbol.toStringTag
可以使用`Symbol.toStringTag` 自定义对象的`toString` 方法的行为
```js
let user = {
  [Symbol.toStringTag]: "User"
};

alert( {}.toString.call(user) ); // [object User]
```
对于大多数特定于环境的对象，都有一个这样的属性，下面是一些实例：
```js
// 特定于环境的对象和类的 toStringTag：
alert( window[Symbol.toStringTag]); // Window
alert( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest

alert( {}.toString.call(window) ); // [object Window]
alert( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]
```
正如我们所看到的，输出结果恰好是`Symbol.toStringTag` 只不过被包裹进了`[object ...]` 里