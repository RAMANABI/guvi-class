import React, { useEffect, useState } from 'react'

function Counter (props) {

    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);

    useEffect(() => {
        console.log("Every Mount and Updates!!!");
    });

    useEffect(() => {
        console.log("Every Mount because it has eampty dependency array!!!");
    }, []);

    useEffect(() => {
        console.log("Every mount and bool dependency!!!");

        return () => console.log("Unmount!!!!!");
    }, [bool]);

  return (
    <div>
        <button onClick={() => setBool(!bool)}>Re-render</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Count: {count}</p>
    </div>

  )
}

export default Counter