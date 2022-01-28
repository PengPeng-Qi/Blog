---
sidebar: auto
---
# TypeScript 基础篇
## 任意值
### 任意值的属性和方法
在任意值上访问任意属性都是被允许的
```ts
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
```
也可以调用任何方法
```ts
let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
```
> 声明一个变量为任意值之后，对它的任何操作，返回的内容都是任意值。

### 未声明类型的变量
**变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型**
```ts
let something;
something = 'seven';
something = 7;

something.setName('Tom');
```
## 类型推论
如果没有明确的指定类型，那么TS会根据**类型推论**的规则推断出一个类型。  
```ts
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```
```ts
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```
**如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成`any` 类型而完全不被类型检查**
```ts
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```
## 联合类型
联合类型的变量在赋值的时候，会根据类型推论的规则推断出一个类型。
```ts
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7;
console.log(myFavoriteNumber.length); // 编译时报错

// Property 'length' does not exist on type 'number'.
```
## 接口
接口需要由类去实现。
### 任意属性
使用`[propName: string]` 定义了任意属性取`string` 类型的值。  
  
```ts
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    gender: 'male'
};
```
**一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集**
```ts
interface Person {
    name: string;
    age?: number;
    // [propName: string]: string;
    /* 修改方法 */
    [propName: string]: string | number;
}

let tom: Person = {
    name: 'Tom',
    age: 25, // 报错，修改后便可以赋值为number
    gender: 'male'
};
```
### 只读属性
用`readonly` 定义只读属性:
```ts
interface Person{
  readonly id: number;
}
```
## 数组的类型
### 用接口表示数组
```ts
interface NumberArray {
  [index: number]: number;
}
let num: NumberArray = [1, 2, 3, 4]
```
`NumberArray` 表示： 只要索引的类型是数字时，那么值的类型必须是数字。
### 类数组
类数组不是数组类型，比如`arguments`: 
```ts
function sum() {
    let args: number[] = arguments; // error
}
```
`arguments` 实际上是一个类数组，不能用普通的方式来描述，而应该用接口：
```ts
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
```
常用的类数组都有自己的接口定义，如`IArguments, NodeList, HTMLCollection` 等：
```ts
function sum() {
    let args: IArguments = arguments;
}
```
## 函数的类型
### 函数表达式
```ts
let mySum = function (x: number, y: number): number {
    return x + y;
};
```
这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义。完整版：
```ts
/* 
    => 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
 */
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
```
### 用接口定义函数的形状
```ts
interface SearchFunc{
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}
```
### 可选参数
**可选参数必须放在必须参数后面**
### 参数默认值
Ts会将添加了默认值的参数识别为可选参数。  
  
但是，此时不受**可选参数必须接在必需参数后面**的限制了。
### 函数重载
重载允许一个函数接受不同数量或类型的参数时，作不同的处理。
  
比如，我们需要实现一个函数`reverse`，输入数字`123` 的时候，输出反转的数字`321`，输入字符串`'hello'` 的时候，输出反转的字符串`'olleh'`。
```ts
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```
**然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。**
  
这时，我们可以使用重载定义多个`reverse` 的函数类型：
```ts
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
```
我们**重复定义了多次函数`reverse`，前几次都是函数定义，最后一次是函数实现**。

> 注意📢：**TS会优先从最前面的函数定义开始匹配**，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。

## 类型断言
手动指定一个值的类型
### 语法
```ts
值 as 类型  // 推荐使用
```
或
```ts
<类型>值
```
在`JSX`中必须使用前者，即`值 as 类型`
### 类型断言的用途
#### 将一个联合类型断言为其中一个类型
**当TS不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性和方法。**
```ts
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function getName(animal: Cat | Fish) {
    return animal.name;
}
```
而有时候，我们确实需要在不确定的类型的时候访问其中一个类型特有的属性或方法
```ts{11}
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}

// Property 'swim' does not exist on type 'Cat | Fish'.
```
此时可以使用类型断言，将`animal` 断言成 `Fish`：
```ts{11}
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}
```
> 类型断言只能欺骗TS 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时的错误 ❌

#### 将一个父类断言为更加具体的子类
待记录📝...
## 声明文件
当使用第三方库时，我们需要引用它的声明文件，才能获取对应的代码补全、接口提示等功能。  

- `declare var` 声明全局变量
- `declare function` 声明全局方法
- `declare class` 声明全局类
- `declare enum` 声明全局枚举类型
- `declare namespace` 声明（含有子属性的）全局对象
- `interface` 和`type` 声明全局类型
- `export` 导出变量
- `export namespace` 导出（含有子属性）的对象
- `export default` ES6默认导出
- `export =` commonjs 导出模块
- `export as namespace` UMD库声明全局变量
- `declare global` 拓展全局变量
- `declare module` 拓展模块
- `///<reference> /` 三斜线指令

### 声明语句
假设我们使用三方库jQuery的时候，我们这样获取一个`id` 是`foo` 的元素
```js
$('#foo');
// or
jQuery('#foo');
```
但是在ts中，编译器并不知道`$` 或`jQuery` 是什么东西，这时，我们需要使用`declare var` 来定义它的类型：
```ts
declare var jQuery: (selector: string) => any;

jQuery('#foo');
```
上例中，`declare var` 并没有真的定义一个变量，只是定义了全局变量`jQuery` 的类型，仅仅会用于编译时的检查，在编译结果中会被删除，编译的结果为：
```ts
jQuery('#foo');
```
### 声明文件
通常，我们会把声明语句放在一个单独的声明文件(`jQuery.d.ts`)中:
```ts
// src/jQuery.d.ts

declare var jQuery: (selector: string) => any;
```
声明文件必须以`.d.ts` 为后缀。
  
一般来说，ts会解析项目中所有的`*.ts` 文件，当然也可以包含以`.d.ts` 结尾的文件。所以当我们将`jQuery.s.ts` 放在项目中，其他所有的`*.ts` 文件都可以获得`jQuery` 的类型定义。
```
/path/to/project
├── src
|  ├── index.ts
|  └── jQuery.d.ts
└── tsconfig.json
```
#### 第三方声明文件
更推荐直接下载使用，推荐`@types` 统一管理第三方库的声明文件。
```shell
npm install @types/jquery --save-dev
```
### 书写声明文件
当一个第三方库没有提供声明文件时，我们就需要自己书写声明文件了。库的使用场景主要有以下几种：
  
- 全局变量：通过`<script>` 标签引入第三方库，注入全局变量
- npm包：通过`import foo from 'foo'` 导入，符合ES6模块规范
- UMD库：既可以通过`<script>` 标签引入，又可以通过`import` 导入
- 直接拓展全局变量：通过`<script>` 标签引入后，改变一个全局变量的结构
- 在npm包或UMD库中拓展全局变量：引入npm包或UMD库后，改变一个全局变量的结构
- 模块插件：通过`<script>` 或`import` 导入后，改变另一个模块的结构

#### 全局变量
- `declare var` 声明全局变量
- `declare function` 声明全局方法
- `declare class` 声明全局类
- `declare enum` 声明全局枚举类型
- `declare namespace` 声明（含有子属性的）全局对象
- `interface` 和`type` 声明全局类型

**`declare const`**  
  
使用`const` 定义时，表示此时的全局变量是一个常量，不允许修改他的值：
```ts
// src/jQuery.d.ts
declare const jQuery: (selector: string) => any;

jQuery('#foo');
// 使用 declare const 定义的 jQuery 类型，禁止修改这个全局变量
jQuery = function(selector) {
    return document.querySelector(selector);
};
// ERROR: Cannot assign to 'jQuery' because it is a constant or a read-only property.
```
需要注意的是，声明语句中只能定义类型，切勿在声明语句中定义具体的实现：
```ts
declare const jQuery = function(selector) {
    return document.querySelector(selector);
};
// ERROR: An implementation cannot be declared in ambient contexts.
```
**`declare function`**  
  
定义全局函数
```ts
// src/jQuery.d.ts

declare function jQuery(selector: string): any;
```
同样支持函数重载：
```ts
// src/jQuery.d.ts

declare function jQuery(selector: string): any;
declare function jQuery(domReadyCallback: () => any): any;
```
```ts
// src/index.ts

jQuery('#foo');
jQuery(function() {
    alert('Dom Ready!');
});
```
**`declare class`**  
  
当全局变量是一个类的时候，我们用`declare class` 来定义它的类型
```ts
// src/Animal.d.ts

declare class Animal {
    name: string;
    constructor(name: string);
    sayHi(): string;
}
```
```ts
// src/index.ts

let cat = new Animal('Tom');
```
同样的，`declare class` 语句也只能用来定义类型，不能用来定义具体的实现，比如定义`sayHi` 方法的具体实现则会报错：
```ts
// src/Animal.d.ts

declare class Animal {
    name: string;
    constructor(name: string);
    sayHi() {
        return `My name is ${this.name}`;
    };
    // ERROR: An implementation cannot be declared in ambient contexts.
}
```
**`declare namespace`**  
  
在声明文件中，`declare namespace` 比较常见，用来表示全局变量是一个对象，包含很多子属性。  
  
`declare namespace jQuery` 来声明这个拥有多个子属性的全局变量。
```ts
// src/jQuery.d.ts

declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}
```
```ts
// src/index.ts

jQuery.ajax('/api/get_something');
```









## 内置对象
### ECMAScript的内置对象
`Boolean`、`Error`、`Date`、`RegExp` 等。
```ts
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
```
### DOM 和BOM 的内置对象
`Document`、`HTMLElement`、`Event`、`NodeList`等
```ts
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});
```
### 用TypeScript写Node.js
`Node.js` 不是内置对象的一部分，如果想用TypeScript 写Node.js，则需要引入第三方声明文件：
```shell
npm install @types/node --save-dev
```