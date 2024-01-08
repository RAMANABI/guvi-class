import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
   <div>
    <div className='container'>
     <div className='card-hader'>
      <h2>Raman Bakery</h2>
      <h4>ooty speical varkey available here</h4>
      </div>
     
      <div className='card-body'>
        <table>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          <td>Egg pups</td>
          <td>1</td>
          <td>20</td>
        </table>
      </div>
    </div>
   </div>
  )
}

export default App
