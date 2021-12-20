---
sidebar: auto
---
## Object.keys
对于普通对象，可以使用如下方法
1. `Object.keys(obj)`
2. `Object.values(obj)`
3. `Object.entries(obj)`

`Object` 与`Map` 的区别：
|          | Map          | Object                                 |
| -------- | ------------ | -------------------------------------- |
| 调用语法 | `map.keys()` | `Object.keys(obj)`，而不是`obj.keys()` |
| 返回值   | 可迭代项     | 数组                                   |

> `Object.*` 方法返回的是**真正的数组对象**，而不是可迭代项。
  
就像`for...in` 循环一样，这些方法会忽略使用`Symbol(...)` 作为键的属性。  
  
`Object.getOwnPropertySymbols` ，会返回一个只包含`Symbol` 类型的键的数组。另外，`Reflect.ownKeys(obj)`，会返回**所有键**。  
## 转换对象
对象缺少数组的许多方法，例如：`map` 和`filter` 等。  
  
如果我们想使用他，可以使用`Object.entries`，然后使用`Object.fromEntries`。  
```js
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  // 转换为数组，之后使用 map 方法，然后通过 fromEntries 再转回到对象
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

alert(doublePrices.meat); // 8
```