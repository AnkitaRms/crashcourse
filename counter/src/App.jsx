import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>Counter App Demo</h1>
      </div>
      <div className="card">
        <h3>Count : {count}</h3>
        <button onClick={() => setCount((count) => count + 1)}>
         Increment Counter
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
         Decrement Counter
        </button>
      </div>
    </>
  )
}

export default App
