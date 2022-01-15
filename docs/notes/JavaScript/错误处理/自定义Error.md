---
sidebar: auto
---
# 自定义Error
自定义一个检查用户`name` 和`age` 属性的错误的方法。
```js
class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error"; // (不同的内建 error 类有不同的名字)
    this.stack = <call stack>; // 非标准的，但大多数环境都支持它
  }
}
```
```js {28}
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// 用法
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("No field: age");
  }
  if (!user.name) {
    throw new ValidationError("No field: name");
  }

  return user;
}

// try..catch 的工作示例

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message); // Invalid data: No field: name
  } else if (err instanceof SyntaxError) { // (*)
    alert("JSON Syntax Error: " + err.message);
  } else {
    throw err; // 未知的 error，再次抛出 (**)
  }
}
```
## 深入继承
`ValidationError` 类式非常通用的。很多东西都可能出错。针对缺少属性的错误来制作一个更加具体的`PropertyRequireError` 类。
```js {8-15,37-39}
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.name = this.constructor.name;
    // 等同于 this.name = "PropertyRequiredError";
    this.property = property;
  }
}

// 用法
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }

  return user;
}

// try..catch 的工作示例

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message); // Invalid data: No property: name
    alert(err.name); // PropertyRequiredError
    alert(err.property); // name
  } else if (err instanceof SyntaxError) {
    alert("JSON Syntax Error: " + err.message);
  } else {
    throw err; // 为止 error，将其再次抛出
  }
}
```
## 包装异常
在上面代码中的函数`readUser` 的目的就是**读取用户数据**。在这个过程中可能会出现不同类型的`error`。目前我们有了`SyntaxError` 和 `ValidationError`，但是将来，函数`readUser` 可能会不断壮大，并可能会产生其他类型的 error。
```js
try {
  // ...
  readUser()  // 潜在的 error 源
  // ...
} catch (err) {
  if (err instanceof ValidationError) {
    // 处理 validation error
  } else if (err instanceof SyntaxError) {
    // 处理 syntax error
  } else {
    throw err; // 未知 error，再次抛出它
  }
}
```
在上面的代码中，我们可以看到两种类型的error，但是可以有更多。  
  
如果`readUser` 函数会产生各种error，那么我们需要一个**`包装异常`**:  
1. 创建一个新的类`ReadError` 表示一般的**数据读取**error
2. 函数`readUser` 将捕获内部发生的数据读取error，例如`ValidationError`、`SyntaxError`，并生成一个`ReadError` 来进行替代
3. 对象`ReadError` 会把原始error 的引用保存在其`cause` 属性中

之后，调用`readUser` 只需要检查`ReadError`，而不必检查每种数据读取error。并且，如果需要更多error细节，那么可以检查`readUser` 的`cause` 属性
```js {28-32,38-42,51-53}
class ReadError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = 'ReadError';
  }
}

class ValidationError extends Error { /*...*/ }
class PropertyRequiredError extends ValidationError { /* ... */ }

function validateUser(user) {
  if (!user.age) {
    throw new PropertyRequiredError("age");
  }

  if (!user.name) {
    throw new PropertyRequiredError("name");
  }
}

function readUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (err) {
    if (err instanceof SyntaxError) {
      throw new ReadError("Syntax Error", err);
    } else {
      throw err;
    }
  }

  try {
    validateUser(user);
  } catch (err) {
    if (err instanceof ValidationError) {
      throw new ReadError("Validation Error", err);
    } else {
      throw err;
    }
  }

}

try {
  readUser('{bad json}');
} catch (e) {
  if (e instanceof ReadError) {
    alert(e);
    // Original error: SyntaxError: Unexpected token b in JSON at position 1
    alert("Original error: " + e.cause);
  } else {
    throw e;
  }
}
```