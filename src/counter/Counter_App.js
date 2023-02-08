import React, { useState } from 'react'
import Message from './Message';

const Counter_App = () => {

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
        <Message numberOfMassage={0}/>
    </div>
)}
export default Counter_App