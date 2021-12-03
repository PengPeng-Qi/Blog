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
我们重复定义了多次函数`reverse`，前几次都是函数定义，最后一次是函数实现。

> 注意📢：T**S会优先从最前面的函数定义开始匹配**，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。