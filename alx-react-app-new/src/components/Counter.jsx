import React from 'react'
import {useState} from 'react'

function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Increament</button>
        <button onClick={() => setCount(count - 1)} >Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>      
    </div>
  )
}

export default Counter;
