import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponents from './Mycomponents'

function App() {
 
  return (
    <div>
    <MyButton onMouseOut={() => {console.log("Mouseout event!!!")}} onClick={handleClick}>Click Me</MyButton>
    <MyButton onClick={handleClick}>Save Me</MyButton>
    </div>
 
  )
}
 function handleClick () {
  console.log("clicked!!");
 }
 //custom components
 function MyButton(props) {
  console.log("spread Operator:", {...props});
  return(
    <button {...props} style={{color: 'blue', backgroundColor: 'white'}}>

    </button>
  )
 }
export default App
