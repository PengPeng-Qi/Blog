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