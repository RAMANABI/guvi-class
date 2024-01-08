import React, { useRef, useState } from 'react'


function Timer() {

    const [seconds, setSeconds] = useState(0);

    const timer = useRef();

    const start = () =>{
        timer.current = setInterval (() => {
            setSeconds(cs => cs + 1);
        },1000);
    };

    const stop =() =>{
        clearInterval(timer.current);
    }

  return (
    <div>
        <button onClick={start}>START</button>
        <button onClick={stop}>STOP</button>
        <p>Seconds: {seconds}</p>
    </div>
  )
}

export default Timer