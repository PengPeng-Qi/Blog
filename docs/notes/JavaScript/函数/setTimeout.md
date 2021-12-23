---
sidebar: auto
---
## setTimeout
```js
let timerId = setTimeout(() => {console.log('Test')}, 1000);
console.log(timerId);  // 17

clearTimeout(timerId);
console.log(timerId);  // 17 还是这个标识，并没有因为调度被取消而变成null
```
在`Node.js` 中返回的是一个定时器对象，这个对象包含一系列方法。  
## setInterval
```js
// 每 2 秒重复一次
let timerId = setInterval(() => alert('tick'), 2000);

// 5 秒之后停止
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```
在显示`alert/confirm/prompt` 弹窗时，内部的定时器仍旧会继续执行。所以，在运行上面的代码时，如果在一段时间内没有关掉`alert` 弹窗，那么在关闭弹窗之后，下一个`alert` 会立即显示。两次的`alert` 之间的间隔会小于2秒。  
## 嵌套的setTimeout
如果`func` 的执行所花费的时间比我们预期的时间更长，则js引擎会等待`func` 执行完成，然后检查调用程序，如果时间到了，则立即 再次执行它。  
  
极端情况下，如果函数每次执行时间都超过`delay` 设置的时间，那么每次调用之间将完全没有停顿。  
  
嵌套的`setTimeout` 能确保延时的固定，这是因为下一次调用是在前一次调用完成时在调度的。  
> 具体可参见[嵌套setTimeout](https://zh.javascript.info/settimeout-setinterval)

垃圾回收和`setInterval/setTimeout` 回调：  
  
**当一个函数传入`setTimeout/setInterval` 时，将为其创建一个内部引用，并保存在调度程序中。**这样，即使这个函数没有其他引用，也能防止`垃圾回收器(GC)`将其回收。  
```js
// 在调度程序调用这个函数之前，这个函数将一直存在于内存中
setTimeout(function() {...}, 100);
```
传入的函数一直存在内存中，直到`clearTimeout` 被调用。  
  
如果这个函数引用了外部变量，那么只有这个函数还存在，那么外部变量也会随之存在，可能比函数本身占用更多的内存。因此，当我们不需要调度函数时，最好取消它，即使这是个很小的函数。  
  
**经过 5重嵌套定时器之后，时间间隔被强制设为至少4 毫秒**。  
```js
let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start); // 保存前一个调用的延时

  if (start + 100 < Date.now()) alert(times); // 100 毫秒之后，显示延时信息
  else setTimeout(run); // 否则重新调度
});

// 输出示例：
// 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100
```
`setInterval` 也如此。对于服务端JS，就没有这个限制，并且还有其他调度即时异步任务的方式。  
  
浏览器内的计时器可能会由许多原因而变慢：
1. CPU过载
2. 浏览器页签处于后台模式
3. 笔记本电脑💻 用的是电池供电
