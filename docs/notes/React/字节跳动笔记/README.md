---
sidebar: auto
---
# React
`component = (props) => element`  
  
`React` 组件必须**像纯函数**一样运行！  
## 纯函数
1. 对于相同的入参，返回同样的结果  
2. 无副作用(对传入参数做修改、访问外部、全局变量、调用网络请求等)  

有副作用的例子🌰：
```js {2} 
function withdraw(account, amount) {
  account.total -= amount;
}
```
> 函数组件 == 无状态组件 && 类组件 !== 有状态组件

## setState
```js
// Wrong
this.state.comment = 'Hello';

// Correct
this.setState({comment: 'Hello'});
```
```js
// wrong
this.setState({
  counter: this.state.counter + this.props.increment
});

// Correct
this.setState((state. props) => {
  counter: state.counter + props.increment
})
```
**`Props`: 父组件传递给子组件的属性，在子组件内部只读**  
**`State`: 组件内部自己维护的状态，可以被修改**  
> 类组件更新时合并，函数式组件更新是替换

## 受控组件
**表单数据由React组件来管理**、可变状态保存在`state` 属性中，只能通过使用`setState()` 来进行更新  
  
React的`state` 成为唯一数据源，渲染表单的React 组件还控制着用户输入过程中表单发生的操作。被React 以这种方式控制取值的表单的输入元素就叫做**受控组件**
```js {4,10-12,21,24}
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```
由于在表单元素上设置了`value` 属性，因此显示的值将始终为`this.state.value`，这使得React 的`state` 成为唯一数据源。由于`handlechange` 在每次按键时都会执行并更新 React 的`state`，因此显示的值将随着用户输入而更新。  
## 非受控组件
表单数据由DOM节点来处理，非受控组件将真实数据存储在DOM节点中。  
  
可以使用`ref` 来从DOM节点中获取表单数据。  
```js {5,9,18}
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
## Hook
Hook与context搭配可做轻量化的全局状态管理

函数式组件使用更多
### 自定义Hooks
以`use` 作为函数名开头，封装通用逻辑的函数
```js
import { useEffect } from 'react';

const useMounted = (fn: () => void) => {
  useEffect(() => {
    fn();
  }, []);
};
```
规则：
- 只能在**函数式组件中调用Hook**
- 只能在**自定义Hook中调用Hook**
- 只能在**函数的最顶层控制流中调用Hook**