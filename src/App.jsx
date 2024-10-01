import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <div className='button'>
          <button onClick={getData}>Press for a random card</button>
        </div>
    </div>
  )
}

export default App
