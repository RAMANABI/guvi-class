import React from 'react'

function Comment(props) {
  return (
    <div>
        <button>{props.commentname}</button>
        <button>{props.commentname2}</button>
    </div>
     
  );
}

export default Comment