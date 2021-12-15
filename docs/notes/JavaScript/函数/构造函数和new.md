---
sidebar: auto
---
# 构造器
## 构造函数
**`new` 操作符执行时，按照以下步骤：**  
  
1. 一个空对象被创建分配给`this`
2. 函数体执行，并修改this，为对象添加新属性
3. 返回this的值

```js
function User(name) {
  // this = {};（隐式创建）

  // 添加属性到 this
  this.name = name;
  this.isAdmin = false;

  // return this;（隐式返回）
}
```
## 构造器模式测试: new.target
在一个函数内，可以使用`new.target` 属性来检查他是否被使用`new` 来进行调用了，对于常规调用，他为`undefined`，对于使用`new` 调用，则等于该函数。
```js
function User() {
  console.log(new.target);
}

User(); // undefined

new User(); // function User { ... }

User(); // undefined
```
> 被用在函数内部，来判断该函数是被通过`new` 调用的**构造器模式**，还是没被通过`new` 调用的**常规模式**。
  
让`new` 调用和**常规调用**做相同的工作:  
```js
function User(name) {
  if (!new.target) { // 如果你没有通过 new 运行我
    return new User(name); // ……我会给你添加 new
  }
  this.name = name;
}

let john = User("John"); // 将调用重定向到新用户
console.log(john.name); // John
```
## 构造器的 return
构造器没有`return` 语句，如果有一个`return` 语句，则规则如下：
- 如果`return` 返回的是一个对象，则返回这个对象，而不是`this`。
- 如果`return` 返回的是一个原始类型，则忽略，返回`this`。

## 省略写法
如果没有参数，可以省略`new` 后的括号
```js
let user = new User; // <-- 没有参数
// 等同于
let user = new User();
```

