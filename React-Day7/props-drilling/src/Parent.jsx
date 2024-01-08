import React from 'react'

function Parent(props) {
  
  return (
    <div>
     <button onClick={props.message}>Click here</button>
    </div>
  )
}

export default Parent