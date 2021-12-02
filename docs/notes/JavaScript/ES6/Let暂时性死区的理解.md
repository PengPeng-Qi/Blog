# Let
## 暂时性死区
声明代码之前的区域都属于**暂时性死区**。暂时性死区不能读或写。
```js
a++;  // 报错

let a; 
```

## 注意
可以在一个拥有块级作用域变量被声明前获取它。只不过不能在变量声明前去调用那个函数。
```js
function foo(){
  // okay to capture 'a'
  return a;
}


// 不能在'a' 被声明前调用foo
// 运行时报错
// foo();

let a = 1;

foo(); // 可以调用
```

## 补充
这里补充几个关于声明的知识点：  
  
**知识点一**：
```js
var x;
var x; // 正常

var y;
let y; // 报错

let z;
let z; // 报错

let m;
var m; // 报错
```
  
**知识点二**：
```js
/* 
  catch 也拥有同样的作用域规则
*/

try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}

// Error: 'e' doesn't exist here
console.log(e);
```