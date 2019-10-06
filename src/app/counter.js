import React, { useState } from 'react'

const counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Hello kilin</h1>
      <h2>you clicked {count} times!!!</h2>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
export default counter
