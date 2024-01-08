import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Counter';


function App() {
  const [IsShown, setisShown] = useState(true);

  return (
   <div>
      <button onClick={() => {
        setisShown(!IsShown);
      }}>
        {IsShown ? 'Hide Counter':'Show Counter'}
      </button>
      {IsShown ? <Counter /> : null}
   </div>
  )
}

export default App
