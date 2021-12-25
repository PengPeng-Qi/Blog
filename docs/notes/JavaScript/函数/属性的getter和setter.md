---
sidebar: auto
---
# Getter 和 setter
对象属性有两种类型：
1. 数据属性
2. **访问器属性: 用于获取和设置值的函数，但从外部代码来看就像常规属性**
  
访问器属性由`getter` 和`setter` 方法表示。在对象字面量中，他们用`get` 和`set` 表示：
```js
let obj = {
  get propName() {
    // 当获取 obj.propName 时，getter 起作用
  },

  set propName() {
    // 当执行 obj.propName = value 操作时，setter 起作用
  }
}
```
当要读取`obj.propName` 时，`getter` 起作用，当`obj.propName` 被赋值的时，`setter` 起作用。  
## 访问器
```js {5,11}
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

alert(user.fullName); // John Smith

user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper
```
访问器就是看起来像一个普通属性，这就是访问器属性的设计思想。  
## 访问器描述符
访问器属性描述符与数据属性的不同：对于访问器属性，没有`value`和 `writable`，但是有`get` 和`set` 函数。  
  
访问器描述符可能有：
1. `get` -- 一个没有参数的函数，在读取属性时工作
2. `set` -- 带有一个参数的函数，当属性被设置时调用
3. `enumerable` -- 与数据属性的相同
4. `configurabel` -- 与数据属性的相同

```js
let user = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

alert(user.fullName); // John Smith

for(let key in user) alert(key); // name, surname
```
> 一个属性要么是访问器(具有`get/set` 方法)，要么是数据属性(具有`value`)，但不能两者都是。

## 更聪明的getter/setter
`Getter/Setter` 可以用作真实属性值的包装器，以便对他们进行更多的控制。  
```js
let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
alert(user.name); // Pete

user.name = ""; // Name 太短了……
```