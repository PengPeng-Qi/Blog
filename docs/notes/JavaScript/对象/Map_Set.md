---
sidebar: auto
---
# Map and Set
键控集：`Map Set WeakMap WeakSet`  
## Map
### Map 的链式调用
每一次`map.set` 调用都会返回`map` 本身，所以我们可以进行**链式调用:**  
```js
map.set('1', 'str1')
   .set(1, 'num1')
   .set(true, 'bool1')
```
### Map 迭代
如果要在`map` 里使用循环，可以使用以下三个方法：
- `map.keys()` - 遍历并返回所有的键
- `map.values()` - 遍历并返回所有的值
- `map.entries()` - 遍历并返回所有的实体
  
```js
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);

// 遍历所有的键（vegetables）
for (let vegetable of recipeMap.keys()) {
  alert(vegetable); // cucumber, tomatoes, onion
}

// 遍历所有的值（amounts）
for (let amount of recipeMap.values()) {
  alert(amount); // 500, 350, 50
}

// 遍历所有的实体 [key, value]
for (let entry of recipeMap) { // 与 recipeMap.entries() 相同
  alert(entry); // cucumber,500 (and so on)
}
```
> `Map` 有内建的`forEach` 方法，与`Array` 类似

### Object.entries
当创建`Map` 时，我们可以传入一个带有键值对的数组来进行初始化，如下：
```js
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

alert( map.get('1') ); // str1
```
如果我们想**从一个已有的普通对象来创建一个`Map`**，那么可以使用`Object.entries(obj)`，该方法**返回对象的键/值对数组**。  
  
从一个对象中创建`Map` 如下：
```js
let obj = {
  name: 'John',
  age: 30
};

let map = new Map(Object.entries(obj));

alert( map.get('name') );  // John
```
这里，`Object.entries` 返回键/值对数组：`[ ["name","John"], ["age", 30] ]`
### Object.fromEntries
`Object.fromEntries` 方法的作用与`Object.entries(obj)` 相反：给定一个具有`[key, value]` 键值对的数组，它会根据给定数组**创建一个对象**：
```js
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// 现在 prices = { banana: 1, orange: 2, meat: 4 }
alert(prices.orange); // 2
```
从`Map` 中得到一个普通对象
```js
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // 创建一个普通对象（plain object）(*)

// obj = { banana: 1, orange: 2, meat: 4 }
alert(obj.orange); // 2
```
调用`map.entries()` 将**返回一个可迭代的键/值对**，这刚好是`Object.fromEntries` 所需要的格式。  
  
`Object.fromEntries` 期望得到一个**可迭代对象作为参数**，而不一定是数组，并且`map` 的标准迭代会返回跟`map.entries()` 一样的键/值对。  
## Set
可以使用`for...of` 或`forEach` 来遍历`Set`:
```js
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

set.forEach((value, valueAgain, set) => {
  alert(value);
});
```
`forEach` 的回调函数有三个参数：一个`value`，然后是同一个值`valueAgain`，**最后是目标对象。**  
  
`forEach` 的回调函数有三个参数，是为了与`Map` 兼容。在特定情况下轻松地用`Set` 代替`Map` 很有帮助。  