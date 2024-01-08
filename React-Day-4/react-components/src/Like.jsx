import React from 'react'

function Like(props) {
  return (
    <div>
        <button>{props.likeName}</button>
        <button>{props.likeName2}</button>
    </div>
  )
}

export default Like