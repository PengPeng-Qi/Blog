/* 创建Context对象 */
const MyContext = React.createContext()

/* 祖组件 */
export default class A extends Component{
  state = {value: 1}

  render() {
   <>
    {/* B组件以及B组件的所有子组件都能接收到value值了，且键名必须叫value，但是需要在孙组件中声明接收 */}
    <MyContext.Provider value={this.state.value}>
      <B></B>
    </MyContext.Provider>
   </>
  }
}

/* 孙组件 */
export default class C extends Component{
  /* 声明接受传递的值 */
  static contextType = MyContext
  render() {
    console.log(this.context);
    return (
      <>
        ...
      </>
    )
  }
}
