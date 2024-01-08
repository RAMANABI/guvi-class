import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    const [bool, setBool] = useState(false);
  return (
    <div style={{padding: "10px", margin: "5px"}}>
       <button onClick={() => setBool(!bool)}>Re-render</button>
       <button onClick={() => setCoount(count + 1)}>Increment</button>
       <p>Count : {count}</p>
    </div>
  )
}

export default Counter