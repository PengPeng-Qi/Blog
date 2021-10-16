/* 创建Context对象 */
const MyContext = React.createContext()

/* 祖组件 */
export default class A extends Component{
  state = {value: 1}

  render() {
   <>
    <MyContext.Provider value={this.state.value}>
      <B></B>
    </MyContext.Provider>
   </>
  }
}

/* 孙组件 */
function C(){
  return (
    <>
      ...
      <MyContext.Consumer>
        {
          /* value是A组件传递的值 */
          value => {
            return `${value}`
          }
        }
      </MyContext.Consumer>
    </>
  )
}
