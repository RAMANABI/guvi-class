import * as React from 'react'
import './App.css'

const list = [
  {
    title: 'React',
    url: 'https://react.dev/',
    points: 4,
    ObjID: 0, 

  },
  {
    title: 'Guvi',
    url: 'https://guvi.com/',
    points: 2,
    ObjID: 0, 

  },
  {
    title: 'Zen',
    url: 'https://www.zenclass.in/',
    points: 5,
    ObjID: 0, 

  }
];


function App(){

  return (
<div>
  <h1>React-working with lists</h1>
  <ul>
    {list.map((item) => {
      return <li key={item.ObjID}>
        <span>
        <a href={item.url} target='_blank'>{item.title}</a>
        </span>
        <span></span>
        <span>{item.points}</span>
        </li>
    })}
  </ul>
</div>
  )
}

export default App
