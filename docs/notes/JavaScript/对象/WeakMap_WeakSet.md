---
sidebar: auto
---
# WeakMap and WeakSet
键控集：`Map Set WeakMap WeakSet`  
## WeakMap
`WeakMap` **不会阻止垃圾回收机制对作为键的对象的回收**。  
  
`WeakMap` 和`Map` 的第一个不同点就是，`WeakMap` 的键必须是对象，不能是原始值：
```js {7,8}
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // 正常工作（以对象作为键）

// 不能使用字符串作为键
weakMap.set("test", "Whoops"); // Error，因为 "test" 不是一个对象
```
垃圾回收机制一些问题：
```js
let john = { name: "John" };
let array = [ john ];
john = null; // 覆盖引用

// 前面由 john 所引用的那个对象被存储在了 array 中
// 所以它不会被垃圾回收机制回收
```
如果我们在`WeakMap` 中使用一个对象作为键，并且没有其他对这个对象的引用，该对象将会被从内存中自动清除
```js
/* ------ 华丽的分隔线 ------- */
let john = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null; // 覆盖引用
// john 被从内存中删除了！
```
`WeakMap` 不支持迭代以及`keys()`，`values()` 和`entries()` 方法。所以没有办法获取`WeakMap` 的所有键或值。  
  
`WeakMap` 只有以下的方法：  
  
- `weakMap.get(key)`
- `weakMap.set(key, value)`
- `weakMap.delete(key)`
- `weakMap.has(key)`
  
如果一个对象丢失了其它所有引用（就像上面示例中的 john），那么它就会被垃圾回收机制自动回收。但是在从技术的角度并不能准确知道何时会被回收。  
  
这些都是由`JavaScript` 引擎决定的。`JavaScript` 引擎可能会选择立即执行内存清理，如果现在正在发生很多删除操作，那么`JavaScript` 引擎可能就会选择等一等，稍后再进行内存清理。因此，从技术上讲，`WeakMap` 的当前元素的数量是未知的。`JavaScript` 引擎可能清理了其中的垃圾，可能没清理，也可能清理了一部分。因此，暂不支持访问`WeakMap` 的所有键/值的方法。  
## WeakSet
与`Set` 类似，但是我们只能向`WeakSet` 添加对象，而不是原始值。  
  
对象只有在其他某个地方被访问，才能留在`set` 中。  
  
跟`Set` 一样，`WeakSet` 支持`add`，`has` 和`delete` 方法，但不支持`size` 和`keys()`，并且不可迭代。  
```js
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John 访问了我们
visitedSet.add(pete); // 然后是 Pete
visitedSet.add(john); // John 再次访问

// visitedSet 现在有两个用户了

// 检查 John 是否来访过？
alert(visitedSet.has(john)); // true

// 检查 Mary 是否来访过？
alert(visitedSet.has(mary)); // false

john = null;
// visitedSet 将被自动清理(即自动清除其中已失效的值 john)
```
`WeakMap` 和`WeakSet` 最明显的局限性就是不能迭代，并且无法获取所有当前内容。  
