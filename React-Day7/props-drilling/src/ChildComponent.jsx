import React from 'react'

function ChildComponent({sendData}) {
   const sendDataToParent = () => {
    sendData("Hello from Chid Component")
   }
  return (
    <div>
        <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  )
}

export default ChildComponent