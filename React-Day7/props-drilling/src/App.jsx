import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ParentComponent from './ParentComponent'
import Parent from './Parent'


function App() {
   const message= "Pratice Makes Perfect";
  return (
    <div>
      <h2>Welcome to React!!!</h2>
      <Parent/>
    </div>
  )
}

export default App
