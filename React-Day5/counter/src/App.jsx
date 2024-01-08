import { useState }from 'react'
import Counter from './Counter'

function App() {
  const [isShown,setisShown] = useState(true);

  return (
    <div>
    <button onClick={() => {
        setisShown(!isShown)
    }}>
     {isShown ? 'Show Counter': 'Hide Counter'}
      </button>
     <p>{isShown ? <Counter/> : null}</p>
    </div>
  )
  }

export default App
