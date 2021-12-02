import React, { useState, useContext, createContext } from "react";

/* 创建content环境 */
const countContext = createContext();

function Counter() {
  /* 使用hook 接收 */
  let count = useContext(countContext);
  return <p>{count + 1}</p>;
}

function App() {
  const [count] = useState(0);

  return (
    <div>
      {/* 包裹📦需要被传递的组件 */}
      <countContext.Provider value={count}>
        <Counter />
      </countContext.Provider>
    </div>
  );
}

export default App;