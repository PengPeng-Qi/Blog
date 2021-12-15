---
sidebar: auto
---
# symbol
> 保证属性名字独一无二、从根本上防止属性名冲突

对象的属性名有两种类型：1、字符串 2、`symbol` 类型
## 生成symbol
```js
let s = Symbol();

typeof s; // 'symbol'
```
> 注意📢：`Symbol` 函数前不能使用`new` 命令，否则会报错，这是因为生成的`Symbol` 是一个原始类型的值，不是对象

`symbol` 函数可以**接受一个字符串作为参数**，表示对Symbol 实例的描述
```js
let s1 = Symbol('foo');
let s2 = Symbol('bar');

s1 // Symbol(foo)
s2 // Symbol(bar)

s1.toString() // "Symbol(foo)"
s2.toString() // "Symbol(bar)"
```
如果`symbol` 的参数是一个对象，则会调用该对象的`toString` 方法，将其转为字符串，然后才生成一个Symbol 的值  
  
`Symbol` 函数的参数只是表示**对当前 Symbol 值的描述**，因此相同参数的`Symbol` 函数的返回值是不相等的。  
```js
// 没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 // false

// 有参数的情况
let s1 = Symbol('foo');
let s2 = Symbol('foo');

s1 === s2 // false
```
**Symbol 值也不能与其他类型的值进行计算**
```js
let sym = Symbol('My symbol');

"your symbol is " + sym  // TypeError: can't convert symbol to string

`your symbol is ${sym}`  // TypeError: can't convert symbol to string
```
**Symbol 可以显式的转换为字符串**
```js
let sym = Symbol('My symbol');

String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'
```
另外、**Symbol 值也可以转换为布尔值、但是不能转换为数值**
```js
let sym = Symbol();
Boolean(sym) // true
!sym  // false

if (sym) {
  // ...
}

Number(sym) // TypeError
sym + 2 // TypeError
```
## Symbol.prototype.description
创建Symbol 的时候，可以添加一个描述
```js
const sym = Symbol('foo');
```
上面代码中，`sym` 的描述就是字符串`foo`  
  
ES2019 提供了实例属性`description` ，直接返回Symbol 的描述
```js
const sym = Symbol('foo');

sym.description;  // 'foo'
```
## 作为属性名的Symbol
```js
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法，需要使用方括号把它括起来，因为我们需要mySymbol作为键，而不是字符串'mySymbol'
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```
**注意📢**：Symbol 值作为对象属性名时，不能用点运算符
```js
const mySymbol = Symbol();
const a = {};

a.mySymbol = 'Hello!';
a[mySymbol] // undefined
a['mySymbol'] // "Hello!"
```
因为点运算符后面总是字符串，所以不会读取`mySymbol` 作为标识名，导致`a` 的属性名实际上是一个字符串，而不是一个Symbol 值  
  
同理，在对象内部，使用Symbol 值定义属性时，Symbol 值必须放在方括号之中
```js
let s = Symbol();

let obj = {
  [s]: function (arg) { ... }
};

/* 增强写法 */
// let obj = {
//   [s](arg) { ... }
// };

obj[s](123);
```
## Symbol在for...in中会被跳过
`Symbol` 属性不参与`for...in` 循环  
```js
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// 使用 Symbol 任务直接访问
alert( "Direct: " + user[id] );
```
> `Object.keys()` 也会忽略他们，这是一般**隐藏符号属性**原则的一部分  
  
相反：`Object.assign()` 会同时复制字符串和`symbol` 属性：
```js
let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123
```
## 全局Symbol
**全局Symbol注册表**，我们可以在其中创建`Symbol` 并在稍后访问他们，可以确保每次访问相同名字的`Symbol`时，返回的都是相同的。  
  
想从注册表中获取`Symbol`， 请使用`Symbol.for(key)`，如果有一个描述为`key` 的`Symbol`，否则将创建一个新的`Symbol`，并通过给定的`key` 将其存储在注册表中。
```js
// 从全局注册表中读取
let id = Symbol.for("id"); // 如果该 Symbol 不存在，则创建它

// 再次读取（可能是在代码中的另一个位置）
let idAgain = Symbol.for("id");

// 相同的 Symbol
alert( id === idAgain ); // true
```
注册表中的`Symbol` 被称为**全局`Symbol`**
### Symbol.keyFor
对于全局`Symbol`，不仅有`Symbol.for(key)` 按名字返回一个`Symbol`，还有一个反向调用：`Symbol.keyFor(sym)`，它的作用完全反过来：通过全局`Symbol` 返回一个名字。  
  
```js
// 通过 name 获取 Symbol
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// 通过 Symbol 获取 name
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
```
`Symbol.keyFor` 内部使用全局`Symbol` 注册表来查找`Symbol` 的键。所以它不适用于非全局`Symbol`。如果`Symbol` 不是全局的，它将无法找到它并返回 `undefined`。  
```js
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log( Symbol.keyFor(globalSymbol) ); // name，全局 Symbol
console.log( Symbol.keyFor(localSymbol) ); // undefined，非全局

console.log( localSymbol.description ); // name
```
## 注意点
**`Symbol` 不会被自动转换为字符串**  
  
js中大多数值都支持字符串的隐式转换，例如：我们可以`alert` 任何值，都可以生效。`Symbol` 比较特殊，他不会自动转换。
```js
let id = Symbol("id");
alert(id); // 类型错误：无法将 Symbol 值转换为字符串。
```
如果真的想显示一个`Symbol` ，我们需要在它上面调用`.toString()`，如下：
```js
let id = Symbol("id");
console.log(id.toString()); // Symbol(id)，现在它有效了
```
或者获取`symbol.description` 属性，只显示描述
```js
let id = Symbol("id");
alert(id.description); // id
```
> 更多请参阅[Symbol](https://tc39.es/ecma262/#sec-well-known-symbols)