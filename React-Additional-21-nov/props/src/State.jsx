import React from 'react'

function State() {
    const [count, setCount]= useState(0);
    console.log(`Rendering ${count} time.`);
  return (
    <div>
        <button onClick={() => {
          setCount(count+1);
          console.log("count result:", count);
        }}>INCREMENT</button>
        <p>count: {count}</p>
    </div>
  )
}

export default State