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

// 第二种写法
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