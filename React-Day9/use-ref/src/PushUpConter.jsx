import React, { useRef } from 'react'
import { useState } from 'react'

function PushUpConter() {
    const pushUpCount = useRef(0);
    const [displayCount, setDisplayCount] = useState(0);

    const pushUp =() => {
      pushUpCount.current += 1;
 }

   const showPushUp = () => {
    setDisplayCount(pushUpCount.current);
   }
  return (
    <div>
       
        <button onClick={pushUp}>PushUp</button>
        <button onClick={showPushUp}>How many pushups?</button>
        <p>I have taken {displayCount} pushup(s)</p>
      
    </div>
  )
}


export default PushUpConter