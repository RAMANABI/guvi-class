import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    const [childData, setChildData] = useState('');
    const receiveData = (data) => {
        setChildData(data);
    }
  return (
    <div>
        <h1>Data from Child Component: {childData}</h1>
        <ChildComponent sendData={receiveData}></ChildComponent>
    </div>
  )
}

export default ParentComponent