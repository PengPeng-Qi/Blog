import react from 'react'
import ReactDOM from 'react-dom'

export default function App() {
  const [number, setnumber] = react.useState(0)

  /* 
    相当于componentDidMount + componentDidUpdate
      有两个参数，不指定第二个参数的时候两个钩子🪝都会发生 
      如果第二个参数为[]，则表示不监测任何值，表示只在相componentDidMount发生改变
      如果第二个参数为[number]，则表示监测number，只在初次挂载时和number改变时调用
    第一个参数返回的函数相当于componentWillUnmount
  */
  react.useEffect(() => {
    let timer = setInterval(() => {
      setnumber((number) => {
        return number + 1
      })
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  function add() {
    setnumber((number) => { return number + 1 })
  }
  function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  return (
    <div>
      <h2>当前数字为：{number}</h2>
      <button onClick={add}>点我加1</button>
      <button onClick={unmount}>卸载组件</button>
    </div>
  )
}
