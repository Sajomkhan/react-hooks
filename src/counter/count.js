import React, { useState } from 'react'

const Count = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
        <h1>Count : {count}</h1>
        <button 
            onClick={() => setCount((count) => count + 1)}
            >Increment</button>
        <button 
            onClick={() => setCount((count) => count - 1)}
            >Decrement</button>
    </div>
  )
}

export default Count