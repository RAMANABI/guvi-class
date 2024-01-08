import React from 'react'
import { useRef } from 'react';

function AutoFocusInput() {
    const inputRef = useRef(null);
    const focusInput = () => {
       inputRef.current.focus();
    }
  return (
    <div>
        <input ref={inputRef} typ="text"/>
        <button onClick={focusInput}>Focus</button>
    </div>
  )
}

export default AutoFocusInput