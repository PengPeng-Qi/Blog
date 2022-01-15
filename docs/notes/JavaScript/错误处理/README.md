---
sidebar: auto
---
# 错误处理
## try...catch
1、**`try...[catch...]` 仅对运行时的`error` 有效。**  
  
要使的`try...catch` 能工作，代码必须是可执行的。如果包含语法错误，那么`try...catch` 将无法正常工作。
```js
try {
  {{{{{{{{{{{{
} catch(e) {
  alert("The engine can't understand this code, it's invalid");
}
```
JS引擎首先会读取代码，然后运行它。在读取阶段发生的错误被称为**解析时间**错误，并且无法恢复，因为引擎无法理解该代码。  
  
2、**`try...catch` 同步工作**  
  
如果在`setTimeout` 类似的`计划的` 代码中发送异常，`try.catch` 不会捕获到异常：
```js
try {
  setTimeout(function() {
    noSuchVariable; // 脚本将在这里停止运行
  }, 1000);
} catch (e) {
  alert( "won't work" );
}
```
因为`try...catch` 包裹了计划要执行的函数，该函数本身稍后执行，这时引擎已经离开了`try.catch` 结构。  
  
为了捕获到`计划` 的异常，那么`try...catch`必须在这个函数内：
```js
setTimeout(function() {
  try {
    noSuchVariable; // try..catch 处理 error 了！
  } catch {
    alert( "error is caught here!" );
  }
}, 1000);
```
## Error 对象
发生错误时，JS**生成一个包含有关详细信息的对象**，然后将该对象作为参数传递给`catch`:
```js
try {
  // ...
} catch(err) { // <-- “error 对象”，也可以用其他参数名代替 err
  // ...
}
```
对于所有内建的`error` 都具有两个主要属性：  
  
1. `name`: Error名称，对于未定义的变量，名称是`ReferenceError`
2. `message`: 关于error的详细文字描述
  
还有一个非标准属性，但是在大多数环境中可用：
- `stack`: 当前的调用栈：用于调试目的的一个字符串，其中包含相关导致error 的嵌套调用序列的信息。

```js
try {
  lalala; // error, variable is not defined!
} catch(err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // lalala is not defined
  console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)

  // 也可以将一个 error 作为整体显示出来as a whole
  // Error 信息被转换为像 "name: message" 这样的字符串
  console.log(err); // ReferenceError: lalala is not defined
}
```
## Throw 操作符
`Throw` 操作符会生成一个`error` 对象
```js
throw <error object>
```
可以任何东西作为error对象，甚至可以是一个原始类型数据，例如数字，字符串，但最好使用对象，最好具有`name`、`message` 属性的对象。  
  
JS有很多内建的标准的error 的构造器：`Error`、`SyntaxError`、`ReferenceError`、`TypeError` 等。我们也可以使用他们来创建error对象。  
  
```js
let error = new Error(message);

let error = new SyntaxError(message);
let error = new ReferenceError(message);

// ...
```
对于内建的error，`name` 属性刚好是构造器的名字，`message` 来自于参数`argument`
```js
let error = new Error("Things happen o_O");

alert(error.name); // Error
alert(error.message); // Things happen o_O
```
## 再次抛出
`catch` 应该只处理他知道的error，并抛出所有其他error。  
  
再次抛出可以理解为：
1. Catch 捕获所有的error
2. 在`catch(err) {...}` 块中，我们对error对象err 进行分析
3. 如果我们不知道如何处理，就`throw err`

我们可以使用`instanceof` 操作符判断错误类型：
```js
try {
  user = { /*...*/ };
} catch(err) {
  if (err instanceof ReferenceError) {
    alert('ReferenceError'); // 访问一个未定义（undefined）的变量产生了 "ReferenceError"
  }
}
```
我们使用**再次抛出**，以达到在`catch` 中只处理`SyntaxError` 的目的：
```js {10,16-20}
let json = '{ "age": 30 }'; // 不完整的数据
try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // 预料之外的 error

  alert( user.name );

} catch(e) {

  if (e instanceof SyntaxError) {
    alert( "JSON Error: " + e.message );
  } else {
    throw e; // 再次抛出 (*)
  }

}
```
如果`(*)` 再次抛出错误，外界就会捕获到，所以需要处理：
```js {6,10,18}
function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // error!
  } catch (e) {
    // ...
    if (!(e instanceof SyntaxError)) {
      throw e; // 再次抛出（不知道如何处理它）
    }
  }
}

try {
  readData();
} catch (e) {
  alert( "External catch got: " + e ); // 捕获了它！
}
```
## try...catch...finally
`finally` 子句（clause）通常用在：当我们开始做某事的时候，**希望无论出现什么情况都要完成完成某个任务**。  
  
如果存在`finally`，在所有情况下都被会执行：
- `try` 之后，如果没有 error
- `catch` 之后，如果没有 error

```js
try {
  // ... 尝试执行的代码 ...
} catch(e) {
  // ... 处理 error ...
} finally {
  // ... 总是会执行的代码 ...
}
```
例如：
```js
try {
  alert( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}
```
这段代码有两种执行方式：  
  
1. 如果你对于 “Make an error?” 的回答是 “Yes”，那么执行 `try -> catch -> finally`。
2. 如果你的回答是 “No”，那么执行 `try -> finally`。
  
**`finally` 和`return` **：  
  
在`try` 中有一个`return` 。在这种情况下，`finally` 会在**控制转向外部代码前被执行**。  
```js {4,9}
function func() {

  try {
    return 1;

  } catch (e) {
    /* ... */
  } finally {
    alert( 'finally' );
  }
}

alert( func() ); // 先执行 finally 中的 alert，然后执行这个 alert
```
## 全局catch
将一个函数赋值给 `window.onerror` 属性，该函数将在**发生未捕获的error 时执行**。  
  
```js
window.onerror = function(message, url, line, col, error) {
  // ...
};
```
```js
window.onerror = function(message, url, line, col, error) {
  alert(`${message}\n At ${line}:${col} of ${url}`);
};

function readData() {
  badFunc(); // 啊，出问题了！
}

readData();
```
