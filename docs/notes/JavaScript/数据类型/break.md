## break
### 不加标签
```js {3}
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if(j == 1) break;
    /* 只break当前最里面的for循环 */
    console.log(`${i}, ${j}`);
  }
}
console.log('Done!');
/* 
  输出：
    0，0
    1，0
    2，0
    Done!
*/
```
### 加标签
`break <labelName>` 语句跳出循环至标签处
```js ${4,6}
/* 
  break outer 向上寻找名为 outer 的标签并跳出当前循环。
*/
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if(j == 1) break outer;
    /* break 全部for循环 */
    console.log(`${i}, ${j}`);
  }
}
console.log('Done!');
/* 
  输出：
    0，0
    Done!
*/
```
**标签还可以单独写一行**
```js
outer:
for (let i = 0; i < 3; i++) { ... }
```
**标签并不允许跳到所有位置**
```js
break label;  // 跳转至下面的 label 处（无效）

label: for (...)
```
`break` 指令必须在代码块内，任何被标记的代码块都有效
```js
label: {
  // ...
  break label; // 有效
  // ...
}
```
### 输出素数
```js
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // 对每个自然数 i

  for (let j = 2; j < i; j++) { // 寻找一个除数
    if (i % j == 0) continue nextPrime; 
    // 如果存在整除数，则不是素数，继续检查下一个
  }

  console.log( i ); // 输出素数
}
```
函数分离模式：
```js
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // 一个素数
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
```