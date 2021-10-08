import react from 'react'

export default function App() {
  const [number, setnumber] = react.useState(0)

  function add(){
    /* 第一种写法 */
    // setnumber(number+1)

    /* 第二种写法 */
    setnumber((number) => {return number+1})
  }
  
  return (
    <div>
      <h2>当前数字为：{number}</h2>
      <button onClick={add}>点我加1</button>
    </div>
  )
}
