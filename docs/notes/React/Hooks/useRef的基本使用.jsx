import react from 'react'

export default function App() {

  const myRef = react.useRef()

  function show() {
    alert(myRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={show}>点我提示数据</button>
    </div>
  )
}
