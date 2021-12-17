---
sidebar: auto
---
# JS数组
## 创建数组
### 数组直接量
1、数组直接量中的值不一定是常量，也可以是表达式：
```js
let base = 10;
let arr = [base, base + 1, base + 2];

console.log(arr); // [10, 11, 12]
```
2、如果省略数组直接量中的某个值，省略的元素将被赋值为`undefined`
```js
let count = [1, ,3] // count.length = 3， 第二个元素赋值为undefined

let undefs = [,,]   // undefs.length = 2 数组有两个元素，都是undefined
```
> 数组直接量的语法允许有可选的结尾的逗号，故`[,,]` 只有两个元素，而非三个

### 构造函数
1、调用时没有参数
```js
let arr = new Array();
```
> 返回一个没有任何元素的空数组，等同于数组直接量`[]`

2、调用时有一个数值参数
```js
let arr = new Array(5);
```
> **只有一个参数，相当于指定数组长度`arr.length = 5`**

3、显示指定两个或多个数组元素
```js
let arr = new Array(1, 2, 3, 'hello', 'world!');
// [1, 2, 3, 'hello', 'world!']
```
## 数组的读与写
📢：可以使用负数或非整数来索引数组。在这种情况下，数组转换为字符串，字符串作为属性名来使用。  
  
会被作为常规的对象属性，而非数组的索引。  
  
如果使用了非负整数的字符串，会被当做数组的索引，而非对象的属性。

> 使用一个浮点数和一个整个相等时情况是一样的

```js
a[-1.23] = true; // 创建一个名为”-1.23“ 的属性
a["1000"] = 0;   // 数组的第1001各元素
a[1.000]         // 和a[1] 相等

let arr = [1, 2, 3];
arr[-1] = -1;
console.log(arr.length) // 3
console.log(arr);       // [1, 2, 3, -1: -1]

arr['3'] = 4;
console.log(arr);       // [1, 2, 3, 4, -1: -1]
```
使用`alert 来显示整个数组
```js
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits ); // Apple,Orange,Plum
```
## 数组长度
```js
a = [1, 2, 3, 4, 5];
a.length = 3;           // a: [1, 2, 3]
```
> 可使用`arr.length = 0` 来清空数组。
  
可以使用`Object.definexProperty()` 让数组的`length` 属性变为只读的
```js
a = [1, 2, 3];
Object.defineProperty(a, "length", {
  writable : false;
})

a.length = 0;          // 无效
```
## 数组方法
### toString
返回以逗号隔开的元素列表
```js
let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

// [] 变成了一个空字符串
// [1] 变成了'1'
```
**数组`[]` 和原始类型进行比较的时候，数组会被转换为原始对象进行比较**，被转换为空字符串`''`，接下来比较的就是原始类型之间的比较。  
  
```js
alert( 0 == [] );  // [] => '' true 

alert('0' == [] ); // [] => '' false
```
### 遍历数组
`for..in...` 循环能够枚举继承的属性名，不推荐，`for...of...`效率更高
### 翻转数组
`reverse()` 可以翻转数组的顺序，且会改变原数组
```js
let a = [1, 2, 3];

let b = a.reverse();

console.log(a);   // [3, 2, 1]
console.log(b);   // [3, 2, 1]
```
### 排序数组
会改变原数组
```js
let arr = [5, 7, 8, 1, 3];

arr.sort();
console.log(arr);  // [1, 3, 5, 7, 8]
```
### 合并数组
@[code](./concat的基本使用.js)
  
> `concat` 不会递归扁平化、也不会修改调用的数组
  
```js
/**
 * 他只复制数组中的元素，其他对象，即使他们看起来像数组一样，但仍然会被作为一个整体添加
 */
let arr = [1, 2, 3];

let arrayLike = {
  0: 'something',
  length: 1
};

console.log( arr.concat(arrayLike) );  // [1, 2, 3, {...}]]
```
如果类似数组的对象具有`Symbol.isConcatSpreadable` 属性，则他就会被`concat` 当做一个数组处理
```js
let arr = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arr.concat(arrayLike) ); // [1, 2, 'something', 'else']
```
### splice
`splice` 如果省略第二个参数。从起始点开始到数组结尾的所有元素都将被删除，`splice()` 会返回一个有删除元素组成的数组
```js
let a = [1, 2, 3, 4, 5, 6];
a.splice(4)  //  返回[5, 6], a 是[1, 2, 3, 4]
```
允许负向索引
```js
let arr = [1, 2, 5];

// 从索引 -1（尾端前一位）
// 删除 0 个元素，
// 然后插入 3 和 4
arr.splice(-1, 0, 3, 4);

alert( arr ); // 1,2,3,4,5
```
## ES5
### forEach
无法在所有元素都传递给调用的函数之前终止遍历。如果要提前终止，必须把`forEach()` 方法放在一个`try` 块中，并能抛出一个异常。
## 数组类型
### Array.isArray()
```js
Array.isArray([]);  // true
Array.isArray({});  // fasle
```
### instanceof
`instanceof` 只能实现一些简单的情形：
```js
[] instanceof Array;   // true

({}) instanceof Array; // false

let a = 'hello';
a instanceof String;   // false

let b = new String('hello');
b instanceof String;   // true
```
> `instanceof` 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型；

### instanceof vs Array.isArray()
```js
let a = [];
a.__proto__ = null;

a instanceof Array; // false
Array.isArray(a);   // true  
```
## 类数组对象
拥有一个数值length属性和对应非负整数属性的对象看作一个**类数组对象**：
- 1、`Arguments`  
- 2、一些DOM方法，例如：`document.getElementsByTagName()` 返回类数组对象  

类数组对象没有继承自`Array.prototype` ，所以不能在他们上面直接使用调用数组方法，可间接使用`Function.call` 方法调用
```js
let a = {"0": "a", "1": "b", "2": "c", length: 3};  // 类数组对象

Array.prototype.join.call(a, '+')  // => "a+b+c"
Array.prototype.slice.call(a, 0)   // => ["a", "b", "c"]
Array.prototype.map.call(a, (item) => {
  return item.toUpperCase()
})                                 // => ["A", "B", "C"]
```
> 类数组对象不属于数组

## 作为数组的字符串
```js
let a = 'hello';

a[0]        // => ”h"
a.charAt(0) // => "h"
```
字符串类似于数组，通用的数组方法可以应用到字符串上。
```js
let a = 'hello';  

Array.prototype.join.call(a, '+')  // => "h+e+l+l+o"
Array.prototype.slice.call(a, 0)   // => ["h", "e", "l", "l", "o"]
Array.prototype.map.call(a, (item) => {
  return item.toUpperCase()
})                                 // => ['H', 'E', 'L', 'L', 'O']
```
> 会修改数组的方法在字符串上是无效的，因为字符串是不可变值，故是只读的，且出错无提示